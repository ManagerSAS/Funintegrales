<template>
    <div>
        <v-row class="mt-15 mb-10">
            <v-col cols="12" sm="12" md="12" lg="12" class="text-center">
                <h2 class="color-blue-dark font-weight-bold mb-2">
                   Planes Vitalicios
                </h2>
                <p>
                    Es la mejor alternativa para adquirir una protección exequial de forma planeada y anticipada.
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" md="3" lg="3"
                v-for="({icon, color, clases, title, subtitle, list}, index) in plans"
                :key="index"
            >
                <v-card class="rounded-xl card-shadow-2"
                    height="890"
                    max-height="890"
                >
                    <div class="pl-3 pt-4 mb-2 d-flex justify-center">
                        <v-card
                            class="rounded-xl pa-5 text-center" 
                            :class="clases"
                            :color="color" 
                            dark
                        >
                            <v-icon>
                                {{ icon }}
                            </v-icon>
                        </v-card>
                    </div>
                    <v-card-title 
                        class="color-blue-dark justify-center mb-3"
                    >
                        {{ title }}
                    </v-card-title>
                    <v-btn
                        color="teal darken-3"
                        class="mb-3"
                        block
                        outlined
                    > Adquirir plan </v-btn>
                    <v-card-subtitle class="mb-3 pt-3 bg-color-description">
                        {{ subtitle }}
                    </v-card-subtitle>
                    <v-card-text>
                        <ul>
                            <li
                                v-for="(item, index) in list"
                                :key="index"
                            > {{ item }} </li>
                        </ul>
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
            plans:[
                {
                    icon:'mdi-human-male mdi-36px',
                    color: 'teal accent-3',
                    clases: 'box-shadow-teal',
                    title:'Plan 1',
                    subtitle: 'Esta opción es pensada para que las familias de escasos recursos puedan dar un homenaje al amor a su ser querido.',
                    list:[
                        'Traslado local del cuerpo.',
                        'Tramites y licencias.',
                        'Preparacion del cuerpo.',
                        'Cofre básico (Social).',
                        'Traslado del cuerpo a la sala.',
                        'Sala de Velación RESIDENCIA.',
                        'Carteles (Serie 6).',
                        'Servicio de cafeteria',
                        'Arreglo floral.',
                        'Cinta membretada.',
                        'Eucaristia o Acto religioso.',
                        'Traslado campo santo.',
                        'Bus para acompañantes.',
                        'Destino Final (inhumación o cremación).',
                        'Eucaristia mensual.',
                        'Eucaristia anual.',
                        'Encuentro de apoyo.',
                    ]
                },
                {
                    icon:'mdi-star-outline mdi-36px',
                    color: 'blue accent-3',
                    clases: 'box-shadow-blue',
                    title:'Plan 2',
                    subtitle: ' esta opción presenta cobertura completa en sedes de homenajes Los Olivos.',
                    list:[
                        'Traslado local del cuerpo.',
                        'Tramites y licencias.',
                        'Preparacion del cuerpo.',
                        'Traslado del cuerpo a la sala.',
                        'Cofre (plan)',
                        'Carteles (Serie 6).',
                        'Servicio de cafeteria',
                        'Arreglo floral.',
                        'Cinta membretada.',
                        'Eucaristia o Acto religioso.',
                        'Traslado campo santo.',
                        'Bus para acompañantes.',
                        'Destino Final (inhumación o cremación).',
                        'Conjunto recordatorio',
                        'Eucaristia mensual.',
                        'Eucaristia anual.',
                        'Encuentro de apoyo.',
                        'Salas de velación estandar',
                    ]
                },
                {
                    icon:'mdi-star mdi-36px',
                    color: 'orange accent-3',
                    clases: 'box-shadow-orange',
                    title:'Plan 3',
                    subtitle: 'Esta opción permite contar con un homenaje VIP para su ser querido en instalaciones de Los Olivos.',
                    list:[
                        'Traslado local del cuerpo.',
                        'Tramites y licencias.',
                        'Preparacion del cuerpo.',
                        'Cofre semilujo',
                        'Traslado del cuerpo a la sala.',
                        'Salas de velación Vip (Donde exista el servicio).',
                        'Carteles (Serie 6).',
                        'Servicio de cafeteria',
                        'Gastos de exhumación.',
                        'Arreglo floral.',
                        'Cinta membretada.',
                        'Eucaristia o Acto religioso.',
                        'Traslado campo santo.',
                        'Bus para acompañantes.',
                        'Destino Final (inhumación o cremación).',
                        'Eucaristia mensual.',
                        'Eucaristia anual.',
                        'Encuentro de apoyo.'
                    ]
                },
                {
                    icon:'mdi-heart mdi-36px',
                    color: 'pink accent-3',
                    clases: 'box-shadow-pink',
                    title:'Plan 3',
                    subtitle: 'Esta opción está habilitado solo para la ciudad de San Jose del Guaviare y permite contar con un homenaje que cubre hasta los gastos de exhumación, osario o cenizario a perpetuidad.',
                    list:[
                        'Traslado local del cuerpo.',
                        'Tramites y licencias.',
                        'Preparacion del cuerpo.',
                        'Cofre lujo.',
                        'Traslado del cuerpo a la sala.',
                        'Carteles (Serie 6).',
                        'Servicio de cafeteria',
                        'Gastos de exhumación.',
                        'Arreglo floral.',
                        'Cinta membretada.',
                        'Eucaristia o Acto religioso.',
                        'Traslado campo santo.',
                        'Bus para acompañantes.',
                        'Destino Final (inhumación o cremación).',
                        'Eucaristia mensual.',
                        'Eucaristia anual.',
                        'Encuentro de apoyo.',
                        'Salas de velación Vip (Donde exista el servicio).',
                        'Conjunto recordatorio',
                        'Osario o cenizario de perpetuidad.',
                    ]
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.bg-color-description{
    background-color: #003b4c12 !important;
}
.h-description{
    height: 200px;
}
</style>