<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="12" lg="8">
                <v-form ref="formNovelty" autocomplete="off" enctype="multipart/form-data">
                    <h3 class="color-blue-dark font-weight-bold mb-6">
                        Datos del titular 
                    </h3>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                v-model="nombre_titular"
                                :rules="nameRules"
                                color="teal darken-3"
                                label="Nombre del titular *"
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                v-model="ser_querido"
                                :rules="nameRules"
                                color="teal darken-3"
                                label="Nombre del ser querido *"
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-menu
                                ref="menu1"
                                v-model="menu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="auto"
                                >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="date"
                                    label="Date"
                                    hint="YYYY/DD/MM format"
                                    persistent-hint
                                    prepend-icon="mdi-calendar"
                                    v-bind="attrs"
                                    v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="date"
                                    no-title
                                    @input="menu = false"
                                ></v-date-picker>
                                </v-menu>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-file-input
                                v-model="file"
                                multiple
                                name="file"
                                type="file"
                                accept=".jpg, .png, .jpeg"
                                color="teal darken-3"
                                label="Adjuntar foto del ser querido)"
                                @change="onSelectedFiles(file)"
                            ></v-file-input>
                        </v-col> 
                    </v-row>
                    <!-- captcha -->
                    <v-row>
                        <v-col cols="1">
                            <v-checkbox
                                v-model="termsConditions"
                                color="#26A69A"
                                :rules="nameRules"
                                value=""
                                required
                                hide-details
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="11">
                            <div class="mt-5">
                                <Nuxt-link to="terminosycondiciones/privacidad-de-datos"> Acepto terminos y Condiciones </Nuxt-link>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <Gcaptcha @captcha="verifyCaptcha"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <v-btn
                                rounded
                                class="card-shadow"
                                dark
                                color="teal darken-3"
                                @click="sendInfoNovelty"
                            > Enviar información 
                            </v-btn>
                        </v-col>
                    </v-row> 
                 </v-form>
             </v-col>
           
         </v-row>
        <Message :snackbar="snackbar" :color-snackbar="colorSnackbar" :message="message"/> 
    </div>
</template>
<script>

import Gcaptcha from '../recaptcha.vue'

import Post from '../../post/post'
import Message from '../messages/message1.vue'

export default {
    components:{
        Gcaptcha, 
        Message,
    },
    data(){
        return{
            nombre_titular: '',
            ser_querido:'',
            date: '',
            menu:'',
            file: null,

            snackbar: false,
            message: '',
            colorSnackbar: '',

            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],

            termsConditions: false,
            resCaptcha: false,

            Url :'',
        }
    }, 
    methods:{
        
        async onSelectedFiles(file){  

            const formdata = new FormData();
            formdata.append("upload_preset", "fotoSantaMarta");
            formdata.append("file", file[0]);

            const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
            };
            await fetch("https://api.cloudinary.com/v1_1/dhl17zanz/auto/upload", requestOptions)
            .then(response => response.json())
            .then(data => {
               this.Url = data.url
                })

        },
        async sendInfoNovelty(){
          ;
            if(this.nombre_titular !== '' && this.date !== '' && this.Url !== '' && this.ser_querido !== '' && this.termsConditions && this.resCaptcha === true){                  
                const data = {
                    nombre_titular: this.nombre_titular,
                    ser_querido:this.ser_querido,
                    fecha: this.date,
                    foto: this.Url,
                }
                // console.log({data})
                // const response = 
                await Post.postFormMisa( data );
                // console.log(response.data.error);
                //  if(response.data.error === false){
                    this.snackbar = true
                    this.colorSnackbar = 'green accent-4'
                    this.message = 'Se envio tu solicitud'
                    setTimeout(()=>{ this.snackbar = false }, 3000)
                    this.$refs.formNovelty.reset()
                //  }else{
                    // this.snackbar = true
                    // this.colorSnackbar = 'red accent-3'
                    // this.message = 'no se envio tu solicitud'
                    // console.log(response.error)
                    // setTimeout(()=>{ this.snackbar = false }, 3000)
                    // this.$refs.formNovelty.reset()
                //  }                    
            // }else{
            //     this.snackbar = true
            //     this.colorSnackbar = 'red accent-3'
            //     this.message = 'Asegurate de diligenciar todos los campos incluyendo el captcha'
            //     setTimeout(()=>{ this.snackbar = false },3000)
            //     this.$refs.formNovelty.validate()
            }           
        },

        verifyCaptcha(response){
            if(response){
                this.resCaptcha = response
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.bg-list{
    background-color: #003b4c0f;
}
</style>