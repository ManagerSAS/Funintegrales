<template>
    <div>
         <v-carousel class="d-none d-lg-block d-xl-block pc" :cycle="true"  delimiter-icon="mdi-seed"  hide-delimiter-background :show-arrows="true" >
            <v-carousel-item
                v-for="({src},index) in sliderPc"
                :key="index"
                :src="src"
                cycle
            >
            </v-carousel-item>
        </v-carousel>
        <v-carousel class="d-none d-md-block d-lg-none laptop" cycle  delimiter-icon="mdi-seed"  hide-delimiter-background show-arrows  >
            <v-carousel-item
                v-for="({src},index) in sliderLaptop"
                :key="index"
                :src="src"
                cycle
            >
            </v-carousel-item>
        </v-carousel>
        <v-carousel class="cel d-block d-sm-none"   cycle  delimiter-icon="mdi-seed"  hide-delimiter-background show-arrows >
            <v-carousel-item
                v-for="({src},index) in sliderCel"
                :key="index"
                :src="src"
                cycle
            >
            </v-carousel-item>
        </v-carousel>
    </div>
</template>
<script>
export default ({
    data() {
        return{
            sliderPc: [
                {titulo: "Servicio al cliente", src:"https://res.cloudinary.com/olivos-villavicencio/image/upload/v1651004790/cg3ingbckdwijofafte4.jpg"},
                {titulo: "La tranquilidad", src:"https://res.cloudinary.com/olivos-villavicencio/image/upload/v1651004790/f3nggn4zbwrsh0u6bsim.jpg"}
            ],
            sliderLaptop: [
                {titulo: "Servicio al cliente", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1653657946/phe2ozmc4oxnhmv19m64.jpg"},
                {titulo: "La tranquilidad", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1653657970/fubdjyggapah7no5jyen.jpg"}
            ],
            sliderCel: [
                {titulo: "Servicio al cliente", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1653657913/awokrzt7k3qv0fqabazz.jpg"},
                {titulo: "La tranquilidad", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1653657007/inzy2j5jwpxivy1u5ldy.jpg"}
            ]
        }
    },
})
</script>
