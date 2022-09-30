<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="8">
                <h2 class="color-blue-dark font-weight-bold mb-6">
                   Cenizarios
                </h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col 
                v-for="({title, subtitle, img}, index) in cenizarios"
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
            cenizarios:[
                {
                    title: 'Cenizario sencillo',
                    subtitle: 'Neiva',
                    img:'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg'
                },
                {
                    title: 'Cenizario doble',
                    subtitle: 'Neiva',
                    img:'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg'
                },
                {
                    title: 'Cenizario octagonal',
                    subtitle: 'Neiva',
                    img:'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg'
                },
            ]
        }
    }
}
</script>