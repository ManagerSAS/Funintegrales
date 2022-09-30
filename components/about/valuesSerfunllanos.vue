<template>
    <div class="mt-15 mb-15">
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="6">
                <h2 class="display-1 olivos--text font-weight-bold">
                    Valores Emcoofun
                </h2>
            </v-col>
        </v-row>
        <v-row class="mt-15">
            <v-col 
                v-for="({icon, title, description}, index) in values"
                :key="index"
                cols="12" sm="12" md="12" lg="6">
                <div class="rounded-xl pa-3 ">
                    <v-row>
                        <v-col cols="2">
                            <div class="rounded-xl text-center pa-6 box-shadow-green" outlined color="teal darken-2" dark>
                                <v-icon>
                                    {{ icon }} mdi-24px
                                </v-icon>
                            </div>
                        </v-col>
                        <v-col cols="10" class="secondary--text">
                            <h3> {{ title }} </h3>
                            <span> {{ description }} </span>
                        </v-col>
                    </v-row>
                </div>
            </v-col>            
        </v-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            values:[
                {
                    icon: 'mdi-account',
                    title: 'SENTIDO HUMANO',
                    description: 'Comprendemos el duelo y lo atendemos integralmente.'
                },
                {
                    icon: 'mdi-account',
                    title: 'SOLIDARIDAD',
                    description: 'Somos gente que trabaja para la gente.'
                },
                {
                    icon: 'mdi-account',
                    title: 'RESPETO',
                    description: 'Reconocemos, valoramos y consideramos al otro en su condición de ser humano.'
                },
                {
                    icon: 'mdi-account',
                    title: 'EQUIDAD',
                    description: 'Actuamos en justicia y promovemos el juego limpio.'
                },
                {
                    icon: 'mdi-account',
                    title: 'LEALTAD',
                    description: 'Hacia la empresa de la cual hago parte.'
                },
                {
                    icon: 'mdi-account',
                    title: 'INTEGRIDAD',
                    description: 'Nuestro actuar es intachable.'
                },
                {
                    icon: 'mdi-account',
                    title: 'COHERENCIA',
                    description: 'Nuestro comportamiento corresponde con la filosofía y principios cooperativos.'
                },
                {
                    icon: 'mdi-account',
                    title: 'HONESTIDAD',
                    description: 'Procedemos con rectitud.'
                },
                {
                    icon: 'mdi-account',
                    title: 'COMPROMISO',
                    description: 'Desarrollamos nuestro trabajo acorde con el objeto social de EMCOOFUN.'
                },
                {
                    icon: 'mdi-account',
                    title: 'SENTIDO DE PERTENENCIA',
                    description: 'Porque amamos lo que hacemos.'
                },
            ]
        }
    }
}
</script>