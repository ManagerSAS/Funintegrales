<template>
    <div>
        <Welcome/>
        <Afiliacion />
        <Deceso style="background-color: rgb(227,235,235,0.5)" />
        <Velacion/>
        <Cortejo style="background-color: rgb(227,235,235,0.5)"/>
        <DestinoFinal/>
        <Preguntas style="background: linear-gradient(90deg, rgba(237,109,129,1) 0%, rgba(226,53,62,1) 100%)"/>
    </div>
</template>
<script>
import Welcome from '~/components/plans/Welcome.vue';
import Afiliacion from '~/components/plans/afiliacion.vue';
import Deceso from '~/components/plans/deceso.vue';
import Velacion from '~/components/plans/velacion.vue';
import Cortejo from '~/components/plans/cortejo.vue';
import DestinoFinal from '~/components/plans/destinoFinal.vue';
import Preguntas from '~/components/plans/preguntasFrecuentes.vue';



export default {
    components:{
        Welcome,
        Afiliacion,
        Deceso,
        Velacion,
        Cortejo,
        DestinoFinal,
        Preguntas
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