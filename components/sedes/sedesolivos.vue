<template>
<div>
    <v-container>
        <v-row>
            <v-col>
                <h2 class="color-blue-dark font-weight-bold">
                    Sedes EMCOOFUN
                </h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <!-- <v-sheet
                    class="mx-auto"
                    elevation="8"
                    max-width="100%"
                    max-height="100%"
                > -->
                    <v-slide-group
                        class="pa-4"
                        show-arrows
                    >
                    <v-slide-item
                        v-for="({nombre,src},n) in parquesCementerios"
                        :key="n"
                    >
                        <!-- <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                        > -->
                            <div class="rounded-xl card-shadow pa-5 ml-5 mt-5 mb-5">
                                <v-img
                                    :src="src"
                                    height="350"
                                    width="500"
                                    class="pa-2 "
                                ></v-img>
                                <div class="subtitle-1"> {{ nombre }} </div>
                            </div>
                        <!-- </v-row> -->
                    </v-slide-item>
                    </v-slide-group>
                <!-- </v-sheet> -->
            </v-col>
        </v-row>
    </v-container>
</div>
    <!-- 603 390 8252 -->
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
                {nombre: 'Parque Cementerio', src:'https://res.cloudinary.com/dhl17zanz/image/upload/v1646257165/Parque_Cementerio5_ixxxmn.jpg'},
          ]
      }  
    },
})
</script>
