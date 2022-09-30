<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="6">
                <h2 class="color-blue-dark font-weight-bold">
                   Salas Vip
                </h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col 
                v-for="({title, subtitle, img}, index) in salas"
                :key="index"
                cols="12" sm="4" md="3" lg="3"        
            >
                <v-card class="rounded-xl card-shadow pa-5">
                    <v-card class="rounded-xl" elevation="8">
                        <v-img
                            :lazy-src="img"
                            :src="img"
                            height="350"
                            class="pa-2 "
                        ></v-img>
                    </v-card>
                    <v-card-title class="subtitle-1"> {{ title }} </v-card-title>
                    <v-card-subtitle> {{ subtitle }} </v-card-subtitle>
                </v-card>
            </v-col>            
        </v-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            model: null,
            salas:[
                {
                    title: 'Sala ',
                    subtitle: 'Neiva',
                    img:'https://res.cloudinary.com/dhl17zanz/image/upload/v1646318574/neiva/Sede_Neiva1_avqqka.jpg'
                },
                {
                    title: 'Sala ',
                    subtitle: 'Garzón',
                    img:'https://res.cloudinary.com/dhl17zanz/image/upload/v1646318768/neiva/Sede_Garz%C3%B3n2_qlvhv1.jpg'
                },
                {
                    title: 'Sala ',
                    subtitle: 'Folencia',
                    img:'https://res.cloudinary.com/dhl17zanz/image/upload/v1646318797/neiva/Sede_Florencia2_pscdih.jpg'
                },
                {
                    title: 'Sala ',
                    subtitle: 'Pitalito',
                    img:'https://res.cloudinary.com/dhl17zanz/image/upload/v1646318827/neiva/Sede_Pitalito2_n1xcnn.jpg'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.d-info-card{
    display: flex;
    align-items: end;
}
</style>