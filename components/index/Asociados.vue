<template>
<v-row justify="center" align="center" class="mt-5 ml-5 mr-5 " >
    <v-col  cols="12" sm="12" md="12" lg="12" xl="11">
        <v-row align="center" justify="center" class="mt-5 mb-5"> 
            <v-col cols="12" sm="12" md="6" lg="11" >

                <p class="mb-5 text-raleway font-weight-bold"  style="color:#003B4C; font-size: 40px;"   justify="center" align="center"> Nuestros Asociados</p>

                <VueSlickCarousel v-bind="settings" >
                    <div v-for="({text,src}, index) in articlesAdd2" 
                        :key="index" 
                        width="100px">
                        <div>
                          <p>{{text}}</p>
                          <img  :src="src"><br>
                        </div>
                    </div>
                 </VueSlickCarousel>
            </v-col>
        </v-row>
    </v-col>
</v-row>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
     components: { VueSlickCarousel },
  data() {
    return{
        articlesAdd2: [
                { text: 'Credifuturo', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401745/neiva/iconosemcoofun/dighqvtq6za5dwp0tryd.png' },
                { text: 'Cootrans Laboyana',        src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401745/neiva/iconosemcoofun/vfpfkdcad7xfevkkhzxn.png' },
                { text: 'Utrahuilca',       src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401745/neiva/iconosemcoofun/kcuyxmlyfsshywdmey8q.png' },
                { text: 'Fonedh',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401745/neiva/iconosemcoofun/al8ks4k7drcwb6439ptd.png' },
                { text: 'Coocentral',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/deempcpeto9u7otucp6q.png' },
                { text: 'EMCO Salud',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/err3ecl9j5jgt0syaju4.png' },
                { text: 'Sede Garzón',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/bzduqb52yi8hvafofhir.png' },      
                { text: 'Sede Garzón',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/kpgeepujkgvcvfek0zlb.png' },      
                { text: 'Sede Garzón',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/z6kejjhib7mdp8vpylcg.png' },
                { text: 'Sede Garzón',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/gn2o12in27dvfbqgovjn.png' },      
                { text: 'Sede Garzón',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/mqnkkrwgcl0dkyxh2d8d.png' },      
             ],
        settings:{
          "arrows": false,
          "infinite": true,
          "focusOnSelect": true,
          "slidesToShow": 4,
          "slidesToScroll": 1,
          "autoplay": true,
          "speed": 2000,
          "autoplaySpeed": 10,
          "cssEase": "linear",
          "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
        }
    }
  }
}
</script>
<style lang="scss" scoped>
  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  

</style>