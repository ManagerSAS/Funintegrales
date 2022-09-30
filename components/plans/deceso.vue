<template>
    <div>
        <v-row id="empresariales"  justify="center" align="center" >
			<v-col cols="12" sm="12" md="11" lg="10" xl="9" class="mt-5">
                <v-row >
                    <v-col sm="12" md="6" lg="6" xl="6">
                        <div class="mt-12 pt-9 ml-5 mr-5">
                            <p class="texto" style="color: #E9522C" > En el Deceso:</p><br>
                            <p class="font"><span style="color: #E9522C">1.</span> Atención y orientación todo el año las 24 horas del día a través del PBX 8715555 en Neiva (Huila), Teléfono 8332021 en Garzón, Teléfono 8361961 en Pitalito, Teléfono 4353314 en Florencia (Caquetá) o la línea gratuita 018000911134 a Nivel Nacional. </p>
                            <div v-if="mostrar" >
                                <p class="font"><span style="color: #E9522C">2.</span> Traslado inicial del cuerpo del fallecido desde el lugar de defunción hasta lugar de la funeraria de le Red Nacional LOS OLIVOS y traslado del cuerpo del afiliado fallecido al sitio de la velación en una distancia de hasta 80 km.. dentro del perímetro urbano don-de se encuentre la sede de LOS OLIVOS, por vía terrestre transitable para vehículos funerarios.</p>
                                <p class="font"><span style="color: #E9522C">3.</span> Traslado nacional del cuerpo del afiliado fallecido, por vía terrestre transitable para vehículos funerarios, limitado a un perímetro de hasta 300 km. o traslado nacional por vía aérea en vuelos comerciales equivalente a un trayecto a criterio de los Olivos.  </p>
                                <p class="font"><span style="color: #E9522C">4.</span> Pago de Impuestos de Inhumación, diligencias ante la Secretaría de Salud y registro notarial (el certificado médico de defunción lo deben aportar los familiares) así como los demás trámites que se requieran de acuerdo con la causa del fallecimiento y normatividad vigente.</p>
                                <p class="font"><span style="color: #E9522C">5.</span> Preservación del fallecido hasta por cuarenta y ocho (48) horas en los laboratorios de las funerarias adscritas a la Red Nacional LOS OLIVOS. </p>
                                <p class="font"><span style="color: #E9522C">6.</span> Suministro de cofre o ataúd en cualquiera de las referencias designadas los planes en el presente contrato o sus anexos.</p>
                            </div>
                            <div align="center" justify="center">
                                <v-btn  style="background-color: #E9522C; color: white" elevation="2" class="mt-2" v-if="mostrar === false" @click="mostrar = !mostrar">Ver más</v-btn>
                                <v-btn  style="background-color: #E9522C; color: white" elevation="2" class="mt-2" v-if="mostrar === true" @click="mostrar = !mostrar">Ver menos</v-btn>
                                <v-btn  style="background-color: #E9522C; color: white" elevation="2" class="mt-2">Afiliarme</v-btn>
                            </div>
                        </div>
                    </v-col>
                    <v-col sm="12" md="6" lg="6" xl="5" justify="center" align="center" >
                        <img src="../../static/deceso.png" height="400">
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