<template>
    <div >
        <v-row id="empresariales"  justify="center" align="center" >
			<v-col cols="12" sm="12" md="12" lg="10" xl="9" class="mt-5">
                <v-row >
                    <v-col sm="12" md="6" lg="6" xl="5" justify="center" align="center" >
                        <img src="../../static/destinoFinal.png" height="400">
                    </v-col>
                    <v-col sm="12" md="6" lg="6" xl="6">
                        <div class="mt-lg-12 ml-5 mr-5 pt-lg-9 mb-5">
                            <p class="texto" style="color: #F59D20" > Destino Final: </p><br>
                            <p class="font">Las opciones para destino final son las que a continuación se enuncia, salvo que se pacte lo contrario, las cuales son excluyentes entre sí:  </p>
                            <div v-if="mostrar" >
                                <p class="font"><span style="color: #F59D20">-</span> Uso temporal de lote o bóveda para la inhumación </p>
                                <p class="font"><span style="color: #F59D20">-</span> CREMACION </p>
                                <p class="font"><span style="color: #F59D20">-</span> REPATRIACION DE CENIZAS </p>
                                <p class="font"><span style="color: #F59D20">-</span> Servicios Post-Exequiales </p>
                            </div>
                            <div align="center" justify="center">
                                <v-btn  style="background-color: #F59D20; color: white" elevation="2" class="mt-2" v-if="mostrar === false" @click="mostrar = !mostrar">Ver más</v-btn>
                                <v-btn  style="background-color: #F59D20; color: white" elevation="2" class="mt-2" v-if="mostrar === true" @click="mostrar = !mostrar">Ver menos</v-btn>
                                <v-btn  style="background-color: #F59D20; color: white" elevation="2" class="mt-2">Afiliarme</v-btn>
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