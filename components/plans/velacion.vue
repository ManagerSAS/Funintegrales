<template>
    <div >
        <v-row id="empresariales"  justify="center" align="center" >
			<v-col cols="12" sm="12" md="12" lg="10" xl="9" class="mt-5 mb-5">
                <v-row >
                    <v-col sm="12" md="5" lg="6" xl="5"  justify="center" align="center">
                        <img src="../../static/velacion.png" height="400">
                    </v-col>
                    <v-col sm="12" md="6" lg="6" xl="6">
                        <div class="mt-lg-12 pt-lg-9 ml-5 mr-5">
                            <p class="texto" style="color: #ED6D81" > Durante la Velacion:</p><br>
                            <p class="font"><span style="color: #ED6D81">1.</span> Salas de velación hasta por 24 horas en la Red Nacional LOS OLIVOS, excepto en el Departamento de Antioquia, donde el servicio de velación es hasta por 12 horas y en donde la Red Nacional tenga convenio vigente de acuerdo al caso. </p>
                            <p class="font"><span style="color: #ED6D81">2.</span> Una ofrenda Floral.</p>
                            <div v-if="mostrar" >
                                <p class="font"><span style="color: #ED6D81">3.</span> Conjunto recordatorio (denario, libro de oraciones, registro de asistencia). </p>
                                <p class="font"><span style="color: #ED6D81">4.</span> Servicio de Cafetería (tinto, aromática y agua). </p>
                                <p class="font"><span style="color: #ED6D81">5.</span> Servicio de teléfono y fax (en donde exista este servicio).</p>
                                <p class="font"><span style="color: #ED6D81">6.</span> Una serie de hasta seis (6) Carteles.</p>
                                <p class="font"><span style="color: #ED6D81">7.</span> Velación domiciliaria (incluye préstamo de implementos para la velación y un kit de cafetería). Se realiza de acuerdo a la normatividad vigente.</p>
                            </div>
                            <div align="center" justify="center">
                                <v-btn  style="background-color: #ED6D81; color: white" elevation="2" class="mt-2" v-if="mostrar === false" @click="mostrar = !mostrar">Ver más</v-btn>
                                <v-btn  style="background-color: #ED6D81; color: white" elevation="2" class="mt-2" v-if="mostrar === true" @click="mostrar = !mostrar">Ver menos</v-btn>
                                <v-btn  style="background-color: #ED6D81; color: white" elevation="2" class="mt-2">Afiliarme</v-btn>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<script>

export default {
    data(){
        return{
           mostrar: false
        }
    },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
    .font{
        font-family: 'Comfortaa', cursive;
        font-size: 20px;

    }
    .texto{
        font-family: 'Comfortaa', cursive;
        font-weight: bold;
        font-size: 30px;
        color: #003B4C;
    }
</style>