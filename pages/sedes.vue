<template>
    <div>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
            <v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Parquescementerio />
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                <Sedesolivos />
            </v-col>
        </v-row>
    </div>
</template>
<script>
import Parquescementerio from '~/components/sedes/parqueCementerio.vue'
import Sedesolivos from '~/components/sedes/sedesolivos.vue'
export default ({
    components:{
        Sedesolivos,
        Parquescementerio
    }
})
</script>
