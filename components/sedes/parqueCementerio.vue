<template>
<v-container>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="6">
            <h2 class="color-blue-dark font-weight-bold">
                Parques Cementerios
            </h2>
        </v-col>
    </v-row>
    <v-row justify="center" align="center">
        <v-col 
            v-for="({nombre, src}, index) in parquesCementerios"
            :key="index"
            cols="12" sm="4" md="3" lg="3"        
        >
                <v-card class="rounded-xl card-shadow pa-5">
                    <v-card class="rounded-xl" elevation="8">
                        <v-img
                            :lazy-src="src"
                            :src="src"
                            height="350"
                            class="pa-2 "
                        ></v-img>
                    </v-card>
                    <v-card-title class="subtitle-1"> {{ nombre }} </v-card-title>
                </v-card>
            </v-col>           
    </v-row>
</v-container>
</template>
<script>
export default ({
    data() {
      return{
          parquesCementerios:[
                {nombre: 'Parque Cementerio', src:'https://res.cloudinary.com/dhl17zanz/image/upload/v1646257166/PANO_20220112_171351.vr_uuoaxo.jpg'},
                {nombre: 'Parque Cementerio', src:'https://res.cloudinary.com/dhl17zanz/image/upload/v1646257166/PANO_20220112_171552.vr_xiclrm.jpg'},
                {nombre: 'Parque Cementerio', src:'https://res.cloudinary.com/dhl17zanz/image/upload/v1646257165/WhatsApp_Image_2022-03-01_at_10.48.45_AM_mnijxq.jpg'},
                {nombre: 'Parque Cementerio', src:'https://res.cloudinary.com/dhl17zanz/image/upload/v1646257165/Parque_Cementerio2_o4clb0.jpg'},
                {nombre: 'Parque Cementerio', src:'https://res.cloudinary.com/dhl17zanz/image/upload/v1646257165/Parque_Cementerio2_o4clb0.jpg'},
                {nombre: 'Parque Cementerio', src:'https://res.cloudinary.com/dhl17zanz/image/upload/v1646257165/Parque_Cementerio5_ixxxmn.jpg'},
          ]
      }  
    },
})
</script>
