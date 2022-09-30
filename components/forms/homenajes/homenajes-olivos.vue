<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="8">
            <v-form ref="formHomenajes" autocomplete="off">
                <div>
                    <h3 class="color-blue-dark font-weight-bold mb-3">
                        Datos del titular:
                    </h3>
                    <p class="secondary--text"> Por favor indique de manera completa los siguientes datos del titular.</p>
                </div>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="nameTitular"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Nombre titular"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="address"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Direccion"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="neighborhood"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Barrio"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="municipy"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Municipio"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mb-6">
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="cellphone"
                            type="number"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Telefono"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            color="teal darken-4"
                            label="Email"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <div>
                    <h3 class="color-blue-dark font-weight-bold mb-3">
                        Datos del homenaje:
                    </h3>
                    <p class="secondary--text"> Por favor indique de manera completa los siguientes datos de su ser querido.</p>
                </div>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="nameHomenaje"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Nombre completo"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="documento"
                            type="number"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="N° documento"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mb-6">
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-select
                            v-model="afiliaty"
                            :items="afiliatys"
                            :rules="nameRules"
                            color="teal darken-4"
                            item-color="teal darken-4"
                            label="Afiliado a olivos"
                            hide-details
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="lugarFallecimiento"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Lugar de fallecimiento"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <div>
                    <h3 class="color-blue-dark font-weight-bold mb-3">
                        Documentos:
                    </h3>                
                    <p class="secondary--text"> 
                        ¿Cuenta usted con el certificado de defunción y fotocopia de la cedula de su ser querido?
                        (Si la respuesta es negativa comuniquese con un asesor al (608)-xxxxx o a la linea gratuita 01 8000 xxx xxx extencion 01) 
                    </p>
                    <v-select
                        v-model="documents"
                        :items="documentos"
                        item-value="value"
                        item-text="text"
                        :rules="nameRules"
                        item-color="teal darken-4"
                        color="teal darken-4"
                        label="Documentos"
                        clearable
                    ></v-select>
                </div>
                <div>
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Exequias:
                    </h3>
                    <p class="secondary--text">
                        Las exequias son la ceremonia religiosa que vamos a realizar en nombre de su ser querido, respetando los 
                        diferentes credos, por favor indíquenos si las exequias serán, Catolicas, Cristiana, Islámica, budista, Otra ¿cuál? 
                    </p>
                    <v-select
                        v-model="exequias"
                        :items="religiones"
                        :rules="nameRules"
                        item-color="teal darken-4"
                        color="teal darken-4"
                        label="Ceremonia religiosa"
                        @change="selectedReligion"
                    ></v-select>
                    <div v-show="showOther">
                        <v-text-field
                            v-model="other"
                            color="teal darken-4"
                            label="¿Cuál?"
                        ></v-text-field>
                    </div>
                </div>             
                <div>
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Templo religioso:
                    </h3>
                    <p class="secondary--text">
                        Basandonos en su respuesta anterior escriba los lugares donde ustedes quisieran que sean las exequias de su ser querido y la hora: 
                        (Por favor escriba 2 opciones ya que a veces los templos religiosos no cuentan con disponibilidad del día o la hora) 
                    </p>
                    <v-text-field
                        v-model="church"
                        :rules="nameRules"
                        class="mb-2"
                        color="teal darken-4"
                        label="Iglesia"
                        hint="Ejemplo: Iglesia 1, Iglesia 2"
                    ></v-text-field>
                    <p class="secondary--text"> Fecha y hora sugerida para las exequias, máximo día siguiente al inicio de la velación (sujeta a disponibilidad)</p>
                    <v-text-field
                        v-model="hour"
                        :rules="nameRules"
                        type="text"
                        color="teal darken-4"
                        label="Fecha y hora"
                    ></v-text-field>
                </div>

                <div class="secondary--text mb-8">
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Decoración de sala:
                    </h3>
                    <p class="secondary--text"> 
                        En su plan usted puede elegir una de estas 3 opciones:
                    </p>
                    <ul class="secondary--text mb-3">
                        <li> Homenaje Fotográfico (Retablo grande que se colocará en la sala o se entregará en su domicilio en villavicencio). </li>
                        <li> Solo arreglo floral. </li>
                        <li> Arreglo floral con una foto pequeña. </li>
                    </ul>
                </div>

                <v-card class="rounded-xl mb-8">
                    <v-slide-group active-class="success" show-arrows>
                         <v-slide-item
                         v-for="({src}, index) in articlesAdd2" 
                                :key="index">
                                <v-card
                                    color="white"
                                    class="ma-2 rounded-xl"
                                    width="215"
                                >
                                <v-img
                                    class="rounded-xl img-principal"  height="250" 
                                    lazy-src="hhttps://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg"
                                    :src="src"
                                ></v-img>
                           </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-card>

                <div class="mb-3">
                    <v-select
                        v-model="homenaje"
                        :items="homenajes"
                        :rules="nameRules"
                        item-text="text"
                        item-value="value"
                        color="teal darken-4"
                        item-color="teal darken-4"
                        clearable
                        label="Respuesta"
                        @change="selectedRetablo"
                    ></v-select>                        
                    <!-- <p class="secondary--text"> 
                        Si decide entrega en casa <b>(SOLO RETABLO)</b>  por favor escriba la dirección y el número de teléfono de la persona responsable (esto no tiene costo adicional)    
                    </p>
                    <v-text-field
                        v-model="addressDelivery"
                        color="teal darken-4"
                        label="Direccion de entrega"
                        hint="Ejemplo: Carrera 14 e # 22 - 28"
                        
                    ></v-text-field> -->
                </div>
                <div class="mb-6">
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Destino final:
                    </h3>
                    <p class="secondary--text">
                        Es importante que conozca que si es muerte Violenta la cremación se permite únicamente si tiene orden de fiscalia.
                    </p>
                    <v-select
                        v-model="destinyFinal"
                        :items="destinoFinal"
                        :rules="nameRules"
                        item-color="teal darken-4"
                        color="teal darken-4"
                        label="Destino final"
                        hide-details
                    ></v-select>
                </div>

                <div class="mb-6">
                    <h3 class="color-blue-dark font-weight-bold mb-3">
                        Homenaje virtual:
                    </h3>
                    <p class="secondary--text">
                        En Los Olivos como parte de nuestros protocolos le entregaremos un vídeo de 30 segundos a su Whatsapp el cual podrá compartir con sus familiares y amigos, por ello requerimos que cuanto antes envíes una foto al número de celular entregado en homenajes.   
                    </p>
                </div>
                <div class="mb-6">
                    <p class="secondary--text">
                        Dedicale unas palabras de amor a tu ser querido  (ten en cuenta Legado o enseñanzas, Hoobies y aspectos destacados)  
                    </p>
                    <v-text-field
                        v-model="palabras"
                        :rules="nameRules"
                        color="teal darken-4"
                        label="Palabras"
                    ></v-text-field>
                </div>
                <div class="mb-6">
                    <p class="secondary--text">
                        Relaciones del ser querido en vida  
                    </p>
                    <v-text-field
                        v-model="kinship"
                        :rules="nameRules"
                        color="teal darken-4"
                        label="Relación"
                        hint="Ejemplo: Padre, hijo, hermano"
                    ></v-text-field>
                </div>
                <div class="secondary--text mb-8">
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Articulos complementarios: (valor adicional)
                    </h3>
                    <p class="mb-6"> 
                        Elige uno si deseas mas informacion asi podrás preguntarles a nuestros coordinadores en cualquier momento
                        <br> 
                    </p>
                    <v-row>
                        <v-slide-group active-class="success" show-arrows>
                            <v-slide-item
                                v-for="({src, text}, index) in articlesAdd" 
                                :key="index"
                            >
                                <v-card                                    
                                    color="white"
                                    class="ma-2 rounded-xl"
                                    width="150"                                    
                                >
                                    <v-img
                                        :src="src"
                                        height="250"
                                    ></v-img>

                                    <v-card-text>
                                        {{ text }}
                                    </v-card-text>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-row>
                </div>
                 <div class="secondary--text mb-8">
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Urnas de lujo (modelo de referencia): 
                    </h3>
                    <v-row>
                        <v-slide-group active-class="success" show-arrows>
                            <v-slide-item
                                v-for="({src, text}, index) in cenizariosAdd" 
                                :key="index"
                            >
                                <v-card                                    
                                    color="white"
                                    class="ma-5 rounded-xl"
                                    width="150"                                    
                                >
                                    <v-img
                                        :src="src"
                                        height="250"
                                    ></v-img>

                                    <v-card-text>
                                        {{ text }}
                                    </v-card-text>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-row>
                </div>
               
                <h3 class="color-blue-dark font-weight-bold mb-3" > Cenizarios:</h3>
                <v-card class="rounded-xl mb-8 ">
                    <v-card-text>
                        <v-row align="center">
                            <v-col cols="12" sm="8">
                                <h3 class="color-blue-dark font-weight-bold mb-3"> Cenizarios Av 40: </h3>
                                <p class="secondary--text">
                                    Contamos con un espacio humano, en el cual podrán permanecer las cenizas de su ser querido, si desea puede preguntarle a nuestro
                                    coordinador sobre este lugar que rinde el más grande homenaje al amor!    
                                </p>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-img
                                    class="rounded-xl"
                                    lazy-src="https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg"
                                    src="https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg"
                                   
                                ></v-img>
                            </v-col>                   
                        </v-row>
                    </v-card-text>
                </v-card>

                <v-card class="rounded-xl mb-8 ">
                    <v-card-text>
                        <v-row  align="center">
                            <v-col cols="12" sm="6">
                                <h3 class="color-blue-dark font-weight-bold mb-3"> Salas Vip: </h3>
                                <p class="secondary--text"> En el tercer piso encontrará salas más amplias para las exequias de su ser querido </p>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-img
                                    class="rounded-xl img-principal"
                                    lazy-src="https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg"
                                    src="https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg"
                                    height="180"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-img
                                    class="rounded-xl"
                                    lazy-src="https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg"
                                    src="https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg"
                                    height="180"
                                ></v-img>
                            </v-col>                       
                        </v-row>
                    </v-card-text>
                </v-card>
                 <div class="mb-6">
                    <h3 class="color-blue-dark font-weight-bold mb-3">
                        Prendas:
                    </h3>
                    <p class="secondary--text">
                        Deseamos rendir el más grande homenaje, por favor coordine con los demás familiares las prendas que desean colocarle a su ser querido, sugerimos la siguiente:    
                    </p>
                    <ul class="secondary--text mb-3">
                        <li>Hombre: Camisa y Camisilla de algodón, Pantalón, Correa, Chaqueta o Saco, y ropa interior.</li>
                        <li>Mujer: Blusa, Falda, Vestido, Ropa interior y Brasier (puedes traer el labial de su preferencia).</li>
                        <li>Si el fallecimiento es muerte violenta, recomendamos camisas mangas largas, blusas no escotadas y prendas oscuras para una adecuada presentación</li>
                        
                        
                    </ul>
                </div>
                <v-row no-gutters align="center">
                    <v-col cols="6">
                        <v-checkbox
                            v-model="terminos"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Acepto políticas de tratamiento de datos"
                        > </v-checkbox>
                    </v-col>
                    <v-col cols="6" class="text-right">
                        <Nuxt-link target="_blank" to="/terminosycondiciones/privacidad-de-datos"> Ver términos y Condiciones</Nuxt-link>
                    </v-col>
                </v-row>                                
                <!-- captcha -->
                <v-row>
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
                            @click="sendFormHomenajes"
                        > Enviar información </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
        <Message :snackbar="snackbar" :color-snackbar="colorSnack" :message="message"/>
    </v-row>
</template>
<script>

import Post from '../../post/post'
import Message from '../messages/message1.vue'
import Gcaptcha from '../recaptcha.vue'

export default {   
    components:{
        Gcaptcha, Message
    },
    data(){
        return{

            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],
            
            // Datos del titular
            nameTitular: '',
            address: '',
            neighborhood: '',
            municipy: '',
            cellphone: '',
            email: '',

            // datos del homenaje
            nameHomenaje: '',
            documento: '',
            afiliaty: '',
            afiliatys: [ 'Si', 'No'],
            lugarFallecimiento: '',

            // documentos
            documents: '',
            documentos: [ 'Si','No' ],
            
            // exequias
            exequias: '',
            religiones: ['Católico', 'Cristiano', 'Islámica', 'Budista', 'Otro'],
            showOther: false,
            other: '',
            
            // articulos
            articlesAdd: [
                { text: 'Homenaje fotográfico', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Baúl del duelo', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Arreglo floral', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Bono savime', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
            ],
            articlesAdd2: [
                { text: 'Homenaje fotográfico', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Areglo floral', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Arreglo floral más foto', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
            ],
            cenizariosAdd:[
                { text: 'Urnas', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Urnas', src:'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg'},
                { text: 'Urnas', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Urnas', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
            ],

            // templo religioso
            church: '',
            hour: '',
            homenaje: '',
            homenajes: [ 
                'Homenaje fotógrafico (Retablo de 58cm x 36cm)', 
                'Solo arreglo floral',
                'Arreglo floral y foto pequeña '
            ],
            addressDelivery: '',

            // destino final
            destinyFinal: '',
            destinoFinal:['Inhumación (sepultura)', 'Cremación'],

            // palabras de amor
            palabras: '',
            kinship :'',
            // cenizarios
            cenizarios: [ 'Cenizario Sencillo', 'Cenizario Doble','Cenizario Octagonal'],

            // terminos
            terminos: false,
            
            // captcha
            resCaptcha: false,

            // message send form
            snackbar: false,
            message: '',
            colorSnack: '',

            // isEditing
            isEditing: true

        }
    },
    methods:{
        async sendFormHomenajes(){

            if(this.nameTitular !== '' && this.address !== '' && this.neighborhood !== '' && this.municipy !== '' && this.cellphone !== '' && this.email !== '' &&
                this.nameHomenaje !== '' && this.documento !== '' && this.afiliaty !== '' && this.lugarFallecimiento !== '' && this.documents !== '' &&
                this.exequias !== '' && this.article !== '' && this.church !== '' && this.hour !== '' && this.homenaje !== '' && 
                this.destinyFinal !== '' && this.kinship !== '' && this.resCaptcha !== false){

                const datas = {
                    nombre_titular: this.nameTitular,
                    direccion: this.address,
                    barrio: this.neighborhood,
                    municipio: this.municipy,
                    telefono: this.cellphone,
                    email: this.email,
                    nombre_homenaje: this.nameHomenaje,
                    n_documento: this.documento,
                    afiliado: this.afiliaty,
                    lugar_fallecimiento: this.lugarFallecimiento,
                    documentos: this.documents,
                    exequias: this.exequias,
                    otro: this.other,
                    iglesia: this.church,
                    hora_exequias: this.hour,
                    retablo: this.homenaje,
                    palabras: this.palabras,
                    destino_final: this.destinyFinal,
                    parentescos: this.kinship,
                    fecha_registro: this.$moment().format('YYYY-MM-DD HH:mm:ss')
                }
                const { data } = await Post.postFormHomenajes( datas )
                    
                console.log(data);
                if(data.error === false){
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.message = 'Se envio tu solicitud de homenaje.'
                    setTimeout(()=>{ this.snackbar = false },3000)
                    this.$refs.formHomenajes.reset()
                    
                }else{
                    this.snackbar = true
                    this.colorSnack = 'red accent-3'
                    this.message = 'Se envio tu solicitud de homenaje.'
                    setTimeout(()=>{ this.snackbar = false },3000)
                    this.$refs.formHomenajes.reset()
                }

                
            }else{

                this.snackbar = true
                this.colorSnack = 'red accent-3'
                this.message = 'Asegurate de diligenciar todos los campos incluyendo el captcha'
                setTimeout(()=>{ this.snackbar = false },3000)

                this.$refs.formHomenajes.validate()
                setTimeout(()=>{ this.$refs.formHomenajes.resetValidation() }, 5000)
            }
        },

        selectedRetablo(param){
            if(param === '1'){
                this.isEditing = false
            }else{
                this.isEditing = true
            }
        },

        verifyCaptcha(response){
            if(response){
                this.resCaptcha = response
            }
        },

        selectedReligion(param){
            if(param === 'Otro'){
                this.showOther = true
            }else{
                this.showOther = false
                this.other = ''
            }
        },
    },

}
</script>

<style lang="scss" scoped>
// .img-principal{
    
// }
</style>