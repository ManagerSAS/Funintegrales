<template>
    <div class="mt-15 mb-15">
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="5" class="ml-15">
                <img :src="redolivos" height="550">
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" class="mr-15 text-comfortaa mt-15"  >
                <h2 style="font-size:40px; color: #E9532D; " class="mb-5">Red Olivos</h2>
                <p style="font-size:20px;">Los Olivos es la RED de Servicios Funerarios más
                importante de Colombia: Con la mayor cobertura
                geográfica nacional, más de 6 millones de personas
                protegidas, 16 sedes regionales, más de 283 salas
                de homenajes propias, 253 convenios, 13 hornos
                crematorios, 10 parques cementerios, 179 carrozas y
                más de 1.810 empleados directos. Garantizamos los
                espacios necesarios para que puedan brindar a sus
                seres queridos un digno homenaje a su legado de
                vida.</p>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    data() {
        return{
            redolivos:'https://res.cloudinary.com/dhl17zanz/image/upload/v1653691595/neiva/aei227lsaqwkxlmqmhu5.png'
        }        
    },
}
</script>