<template>
<section justify="center" align="center">
    <v-container cols="12" sm="12" md="12" lg="12" xl="9"  height="100%">
        <v-row class="pa-md-0" justify="center" align="center">
            <v-col cols="12" sm="12" md="12" lg="8" justify="center" align="center">
                <h2 class="text-raleway font-weight-bold" style="color: #003B4C; font-size: 40px;"> Parques Cementerio </h2> <br>
                <p class="text-comfortaa"> Ofrecemos un lugar donde la belleza, paz y tranquilidad es el mejor homenaje a la memoria de nuestros seres queridos, con personal altamente calificado para ayudarle en los momentos más difíciles. </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" md="6" lg="6">
                <img :src="CementerioElParaiso" height="500" width="550">
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="6">
                <img :src="CementerioElJardin" height="500" width="550">
            </v-col>
        </v-row>
        <v-btn 
            style="background: linear-gradient(to right, #B9466A, #660F2E); color: white;"
            class="shadow-principal btn-hover text-comfortaa font-weight-black"
            rounded-xl
            dark
            large
            to="sedes"
        >
            Conoce nuestros parques Cementerios
        </v-btn>
    </v-container>
 </section>
</template>
<script>


export default {
  data() {
    return{
        CementerioElParaiso:'https://res.cloudinary.com/dhl17zanz/image/upload/v1653672121/neiva/i7ispm4tvyauvczhgglc.png',
        CementerioElJardin:'https://res.cloudinary.com/dhl17zanz/image/upload/v1653672121/neiva/i7ispm4tvyauvczhgglc.png',
    }
  }
}
</script>


<style lang="scss" scoped>
// .parqueCementerio{
//     background: url("https://res.cloudinary.com/dhl17zanz/image/upload/v1645896392/Parque_Cementerio5_vg80we.jpg") no-repeat fixed center / cover;
//     padding-bottom: 100px;
// }
// .parqueCementerio_content{
//     position: relative;
//     text-align: center;
//     padding: 0 65px;
// }
// .parqueCementerio_content .testi_icon{
//     width: 100%;
//     height: 100%;
//     text-align: center;
//     display: inline-block;
//     font-size: 64px;
//     line-height: .8;
//     color: #fff;
//     padding: 50px 0;
//     margin: 0 0 49px;
// }
// .parqueCementerio_content h2{
//     font-size: 50px;
//     line-height: 62px;
//     letter-spacing: 2px;
//     text-transform: uppercase;
//     color: #477a7b;
//     margin: 0 0 44px;
// }
</style>