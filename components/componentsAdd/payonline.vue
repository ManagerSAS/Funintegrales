<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <h1 class="secondary--text pt-15 mb-6 display-1 font-weight-bold">
                    Pagos en linea
                </h1>
            </v-col>
        </v-row>
        <v-row class="mt-md-10">
            <v-col 
                v-for="({title, icon, description, link, btn}, index) in pays"
                :key="index"
                cols="12" sm="12" md="12" lg="4">
                <v-card class="rounded-xl card-shadow">
                    <v-card-title class="secondary--text text-h5 mb-6">
                        {{ title }}
                        <v-spacer></v-spacer>
                        <v-icon color="green accent-3">
                            {{ icon }}
                        </v-icon>
                    </v-card-title>

                    <v-card-text class="color-blue-dark mb-5">
                        {{ description }}
                    </v-card-text>
                    <v-card-text>
                        <a :href="link" target="_blank">
                            <v-btn 
                                class="green accent-3 shadow-principal btn-hover"
                                dark
                                rounded
                            >
                                {{ btn }}
                            </v-btn>
                        </a>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pays:[
                {
                    title: 'Tarjeta de credito',
                    icon: 'mdi-credit-card',
                    description: 'Realice el pago de su plan de previsión exequial, Homenaje al amor o cualquier otro tipo de pago',
                    // link:'https://sites.placetopay.com/losolivos_villavicencio',
                    btn: 'Pagos con tarjeta de credito'
                },
                {
                    title: 'PSE',
                    icon: 'mdi-credit-card-outline',
                    description: 'Realice el pago de su plan de previsión exequial, Homenaje al amor o cualquier otro tipo de pago por PSE',
                    // link:'https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=4319',
                    btn: 'Pagos PSE'
                }
            ]
        }
    }
}
</script>