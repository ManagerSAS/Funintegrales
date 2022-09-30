<template>
    <div class="mt-15 mb-15">
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="6">
                <h2 class="display-1 olivos--text font-weight-bold">
                    Principios emcoofun
                </h2>
            </v-col>
        </v-row>
        <v-row class="mt-15">
            <v-col 
                v-for="({ icon, title, description }, index) in principies"
                :key="index"
                cols="12" sm="12" md="12" lg="6"
            >
                <v-card class="rounded-xl pa-3 card-shadow-2">
                    <v-row align="center">
                        <v-col cols="2">
                            <v-card class="rounded-xl text-center pa-6 box-shadow-green" outlined color="teal darken-2" dark>
                                <v-icon>
                                    {{ icon }} 
                                </v-icon>
                            </v-card>
                        </v-col>
                        <v-col cols="10" class="secondary--text">
                            <h3> {{ title }} </h3>
                            <span> {{ description }} </span>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>        
    </div>
</template>
<script>
export default {
    data(){
        return{
            principies:[
                {
                    icon: 'mdi-account',
                    title: 'Trabajo en equipo',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui reprehenderit rem quas autem animi natus provident est numquam nisi, odio libero excepturi magnam perspiciatis error, soluta veniam voluptas, alias ea.',
                },
                {
                    icon: 'mdi-hand-heart',
                    title: 'Responsabilidad y Compromiso',
                    description: 'ALorem ipsum dolor, sit amet consectetur adipisicing elit. Qui reprehenderit rem quas autem animi natus provident est numquam nisi, odio libero excepturi magnam perspiciatis error, soluta veniam voluptas, alias ea.',
                },
                {
                    icon: 'mdi-flag',
                    title: 'Liderazgo',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui reprehenderit rem quas autem animi natus provident est numquam nisi, odio libero excepturi magnam perspiciatis error, soluta veniam voluptas, alias ea.',
                },
                {
                    icon: 'mdi-eye',
                    title: 'Transparencia',
                    description: 'TLorem ipsum dolor, sit amet consectetur adipisicing elit. Qui reprehenderit rem quas autem animi natus provident est numquam nisi, odio libero excepturi magnam perspiciatis error, soluta veniam voluptas, alias ea.',
                },
                {
                    icon: 'mdi-emoticon-happy',
                    title: 'Pasión por excelencia',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui reprehenderit rem quas autem animi natus provident est numquam nisi, odio libero excepturi magnam perspiciatis error, soluta veniam voluptas, alias ea.',
                },
            ]
        }
    }
}
</script>
