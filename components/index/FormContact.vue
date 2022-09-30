<template>
    <div >
        <v-row  align="center" justify="center" class="align-items-center p-green-light" >
            <v-col cols="12" md="12" lg="11" color="#26A69A" class="text-center text-md-center">
                <img src="../../static/iconos/contacto.png" alt="" height="120">
                <h2 class="mb-10 text-raleway font-weight-bold" style="color:#003B4C; font-size: 40px; ">CONTÁCTANOS</h2>
                <p class="text-comfortaa">Para nosotros, es agradable saber tu opinión. Creemos que el crecimiento de una empresa va ligado a su capacidad de escuchar y recibir con agrado lo que sus audiencias dicen de ella. Por eso, te invitamos a hacer parte del equipo que nos retroalimenta día a día con el fin de mejorar.</p>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="12" lg="11" class="pt-10">    
                <v-form ref="formContact" autocomplete="off">
                    <v-row>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="nombre"
                                :rules="nameRules"
                                label="Nombre Completo"
                                placeholder="Jose Alejandro"
                                color="#26A69A"
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="email"
                                label="Email"
                                :rules="emailRules"
                                placeholder="email@example.com"
                                color="#26A69A"
                                hide-details
                            ></v-text-field>
                        </v-col>
                         <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="telefono"
                                label="Telefono"
                                type="number"
                                placeholder="3142484466"
                                color="#26A69A"
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="telefono"
                                label="Telefono"
                                type="number"
                                placeholder="3142484466"
                                color="#26A69A"
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="documento"
                                label="Documento"
                                type="number"
                                placeholder="487975474547"
                                color="#26A69A"
                                hint="El numero de documento no debe contener puntos."
                                persistent-hint
                            ></v-text-field>
                        </v-col>
                         <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="ciudad"
                                label="Ciudad"
                                placeholder="ciudad residencia"
                                color="#26A69A"
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="asunto"
                                label="Asunto"
                                placeholder=""
                                color="#26A69A"
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="4" lg="8">
                            <v-textarea
                                v-model="mensaje"
                                label="Mensaje"
                                color="#26A69A"
                                rows="1"
                                hide-details
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row class="mt-5">
                        <v-row no-gutters align="center">
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
                    </v-row >
                        <v-col cols="12" sm="12" md="12" lg="12" class="mt-5" align="center" justify="center">
                            <v-btn
                                style="background-color: #F08D20"
                                class="shadow-principal btn-hover"
                                color="#26A69A"
                                rounded-xl
                                large
                                dark
                                @click="enviar"
                            > Enviar mensaje </v-btn>
                        </v-col>
                        <v-col>
                            <v-snackbar
                                class="pb-8"
                                :value="snackbar"
                                :timeout="timeout"
                                rounded="pill"
                                :color="colorSnackbar"
                            >
                            {{ text }}
                            </v-snackbar>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </div>       
</template>
<script>
import Post from '../post/post'
export default ({
    data() {
        return{
            nombre:'',
            documento:'',
            email:'',
            telefono:'',
            ciudad:'',
            asunto:'',
            mensaje:'',

            // snackbar
            snackbar: false,
            colorSnackbar: '',
            text: '',
            timeout: 2000,

            termsConditions: false,

            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],
            nameRules: [
                v => !!v || 'Campo requerido',
            ],
        }
    },
    methods:{
        async enviar(){
            if(this.nombre !== '' && this.documento !== '' && this.email !== '' && this.telefono !== ''&& this.ciudad !== '' && this.asunto !== '' && this.mensaje !== '' && this.termsConditions !== false ){
                this.snackbar = true
                this.colorSnackbar = 'success'
                this.text ='Formulario enviado correctamente'
                setTimeout(()=>{ this.snackbar = false }, 3000)
                const data = {
                    nombre :this.nombre ,
                    documento:this.documento,
                    email:this.email,
                    telefono:this.telefono,
                    ciudad:this.ciudad,
                    asunto:this.asunto,
                    mensaje:this.mensaje
                }
            await Post.postFormContac( data );
                this.$refs.formContact.reset()
            }else{
                this.snackbar = true
                setTimeout(()=>{ this.snackbar = false }, 3000)
                this.colorSnackbar = 'red'
                this.$refs.formContact.validate()
            }
        }
    }
})
</script>
