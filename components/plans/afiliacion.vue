<template>
    <div >
        <p class="text-h3 texto mt-5 mb-5"  justify="center" align="center"> Benficios del plan exequial</p>
        <v-row justify="center" align="center">
            <v-col sm="12" md="5" lg="6" xl="5" justify="center" align="center" class="mr-5">
                <img justify="center" align="center" src="../../static/afilicacion.png" height="400">
            </v-col>
            <v-col sm="12" md="6" lg="6" xl="6">
                <div class="pr-5 pl-5 pb-5">
                    <p class="texto" style="color: #2EAE9B" > En la Afiliación:</p><br>
                    <p class="font"><span style="color: #2EAE9B">1.</span> Atención y consulta permanente. </p>
                    <p class="font"><span style="color: #2EAE9B">2.</span> Cubrimiento del servicio dentro del territorio nacional.</p>
                    <v-btn align="center" justify="center" style="background-color: #2EAE9B; color: white" elevation="2" class="mt-2">Afiliarme</v-btn>
                </div>
            </v-col>   
        </v-row>
    </div>
</template>
<script>

export default {
    data(){
        return{
           
        }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
    .font{
        font-family: 'Comfortaa',cursive;
        font-size: 20px;

    }
    .texto{
        font-family: 'Comfortaa',cursive;
        font-weight: bold;
        font-size: 30px;
        color: #003B4C;
    }
</style>