<template>
<div>
    <h2>OBITUARIOS SEDE {{city}}</h2>
    <!-- <v-btn
    @change="selectedCity"
    >
        buscar datos
    </v-btn> -->
    <div :class="display" >
        <v-carousel v-bind="settings" >
            <v-carousel-item v-for="({nombreCompleto}, index) in obituarios" :key="index">
                    {{nombreCompleto}}
            </v-carousel-item>
        </v-carousel>
    </div>
    </div>
</template>

 <script>

// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// // // optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import Post from '../post/post'

export default {
    props: ['city'], 
    components: { 
        // VueSlickCarousel,
         },
    data(){
        return{
            obituarios:[ ],
            settings:{
                "vertical": true,
                "arrows": false,
                "infinite": true,
                "focusOnSelect": true,
                "slidesToShow": 2,
                "slidesToScroll": 1,
                "autoplay": true,
                "speed": 2000,
                "autoplaySpeed": 10,
                "cssEase": "linear",
            },
            display: 'd-none'
        }
    },
    mounted(){
        this.selectedCity();
        // this.slider();
        

    },
    methods:{
        async selectedCity(){
            const response = await Post.getObituarios(this.city);  
            response.results.forEach((element) => {
                this.obituarios.push({
                    nombreCompleto: element.nombreCompleto,
                    // fecha_fallecimiento: element.fecha_fallecimiento,
                    // nombre_sala: element.nombre_sala,
                    // hora_exequias: element.hora_exequias,
                    // fecha_exequias: element.fecha_exequias,
                    // lugar_exequias: element.lugar_exequias,
                    // foto: 'https://res.cloudinary.com/olivos-villavicencio/image/upload/v1654633635/nslmesbhlemnvfyjcxsv.jpg',
                    // destino_final_cementerio: element.destino_final_cementerio,
                    // ciudad: this.city
                })
                // if(this.obituarios.length !== 0 ) {

                //     this.loadingProcess = false;
                
                // }else{
                //     this.loadingProcess = false;
                    
                // }
                
            }); 
            console.log(this.obituarios)
            this.display= 'd-flex'
        },
         
    },

}
</script>