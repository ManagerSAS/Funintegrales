<template>
   <div>
        <div
            class="white green--text accent-3 text-h3 text-comfortaa"
            align="center" justify="center"
        >
            Afiliacion
        </div>
        <v-divider></v-divider>
        <div class="white darken-2 text-center text-comfortaa">
            <v-list >
                <v-list-item-content align="center" justify="center">
                    <v-list-item>1.	Atención y consulta permanente</v-list-item>
                    <v-list-item>2.	Cubrimiento del servicio dentro del territorio nacional.</v-list-item> 
                </v-list-item-content>
            </v-list>
         <v-card-actions>
         <v-spacer></v-spacer>   
            <v-btn
                depressed
                color="success"
                @click="dialog2 = true"
            >
            Siguiente
            </v-btn>
         </v-card-actions>
        </div>
   </div> 
</template>
<script>
export default ({
    // props:{
    //     item: String
    // }
})
</script>
