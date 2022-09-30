<template>

    <div>
        <v-carousel class="d-none d-lg-block d-xl-block pc" :cycle="true"  delimiter-icon="mdi-seed"  hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item
                v-for="({src},index) in sliderPc"
                :key="index"
                :src="src"
                cycle
            >
            </v-carousel-item>
        </v-carousel>
        <v-carousel class="d-none d-md-block d-lg-none laptop" :cycle="true"  delimiter-icon="mdi-seed"  hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item
                v-for="({src},index) in sliderLaptop"
                :key="index"
                :src="src"
                cycle
            >
            </v-carousel-item>
        </v-carousel>
        <v-carousel class="cel d-block d-sm-none"   :cycle="true"  delimiter-icon="mdi-seed"  hide-delimiter-background show-arrows-on-hovers>
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
                {titulo: "Servicio al cliente", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1651865438/obfisnoc8kjsare2yrkd.png"},
                {titulo: "La tranquilidad", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1651245266/BANNER_RED-03_k58mea.png"}
            ],
            sliderLaptop: [
                {titulo: "Servicio al cliente", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1653657525/lhku5zjz0zgjjrvuvobe.jpg"},
                {titulo: "La tranquilidad", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1653657551/vt9vlo6ewx20ndudseja.jpg"}
            ],
            sliderCel: [
                {titulo: "Servicio al cliente", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1653657006/u8jqxhambggxwvytyzmz.jpg"},
                {titulo: "La tranquilidad", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1653657768/sl9g1tcwwkrv3jwikbyd.jpg"}
            ]
        }
    },
})
</script>