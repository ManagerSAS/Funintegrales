<template>
    <ObituarioVillavo city="villavicencio"/>
</template>

<script>
import ObituarioVillavo from '~/components/Obituarios/obituarioSlider';
export default {

    mounted(){
        // console.log(this.city)
    },
    components:{
        ObituarioVillavo
    },
}
</script>