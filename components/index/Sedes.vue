<template>
    <section justify="center" align="center" >
        <v-container cols="12" sm="12" md="12" lg="12" xl="12"  height="100%" >
            <v-row class="pa-md-0 mt-5" justify="center" align="center" >
                <v-col cols="12" sm="12" md="12" lg="8" justify="center" align="center">
                    <h2 class="text-raleway font-weight-bold" style="color: #003B4C; font-size: 40px;"> Sedes Los  Olivos Emcoofun </h2> <br>
                    <p class="text-comfortaa secondary--text"> Los Olivos EMCOOFUN promueve la previsión, prestación de servicios exequiales y de destino final integrales de excelente calidad. Contribuyendo a la inclusión social de sus asociados, los empleados y la comunidad en general de los Departamentos de Sede principal Neiva, Sede Pitalito, Sede Florencia, Sede Garzón. </p>
                </v-col>
                    <v-slide-group 
                        class="pa-4"
                        active-class="success"
                        show-arrows
                        
                    >
                        <v-slide-item
                            v-for="({src, text, direccion}, index) in articlesAdd2" 
                            :key="index"
                        >
                    <div class="text-md-center mx-auto mb-8 mr-3 "
                        justify="center" align="center"
                    >
                            <v-img
                                class="img-principal mr-3 ml-3"   
                                :src="src"
                                height="200"
                                width="300"
                            ></v-img>
                            <v-btn justify="center" align="center"  style="background: linear-gradient(to right, #F59D20, #E9522C); color: white;" class="text-comfortaa font-weight-black" >{{ text }}</v-btn> <br>
                        <div class="text-raleway font-weight-black" > 
                            {{ direccion }} 
                        </div>
                    </div>    
                </v-slide-item>
            </v-slide-group>
    </v-row>
            <v-btn 
                style="background-color: #003B4C "
                class="shadow-principal btn-hover mb-10 text-comfortaa"
                rounded-xl
                dark
                large
                to="sedes"
            >
                Conoce nuestras sedes Emcoofun
            </v-btn>
        </v-container>
    </section>
</template>
<script>

export default {
  data() {
    return{
      articlesAdd2: [
                 { text: 'Sede principal Neiva', direccion:'Calle 16 No. 2-56', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653669081/neiva/sedes/thbcpgoawm8r9d6vrvoq.png' },
                 { text: 'Sede Pitalito', direccion:'Carrera 3 No. 5-19', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653669081/neiva/sedes/g5zyesbrip4jtyg3ovsf.png' },
                 { text: 'Sede Florencia', direccion:'Carrera 15 No. 15-34/36', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653669081/neiva/sedes/bo0lzaw2qmvd2io1tw2o.png' },
                 { text: 'Sede Garzón', direccion:'Calle 7 No. 12-00', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653669081/neiva/sedes/d34lou0fefdtmk9itx5j.png' },
             ],

    }
  }
}
</script>
