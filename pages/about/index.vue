<template>
    <div >
        <h1 justify="center" align="center"  class="mb-10 text-raleway font-weight-bold" style="color:#003B4C; font-size: 40px; ">
            Quiénes Somos
        </h1>
       <History style="background-color: rgb(227,235,235,0.2)"/>
        <v-row justify="center" align="center" class="mt-15 mb-5 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="10" xl="8">
                <Cards/>
            </v-col>
        </v-row>
        <Asociados style="background-color: rgb(227,235,235,0.2)"/>
        <v-row justify="center" align="center" class="mt-5">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Redolivos/>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Values/>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Principies/>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import History from '~/components/about/aboutDescription.vue';
import Cards from '~/components/about/cardsVisionMision.vue';
import Asociados from '~/components/index/Asociados.vue';
import Redolivos from '~/components/about/redOlivos.vue';
import Values from '~/components/about/valuesSerfunllanos.vue';
import Principies from '~/components/about/principiesSerfunllanos.vue';

export default {
    components:{
        History, Cards, Redolivos, Values, Principies,Asociados
    },
}
</script>
<style lang="scss">
.olivos--text{
    color: #234b50;
}
.bg-map{
    background-image: url('https://res.cloudinary.com/dbepipmro/image/upload/v1632170476/map_tpx0lm.jpg');
    background-size: 100%;
}
</style>