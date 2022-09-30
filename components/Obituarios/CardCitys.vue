<template >
    <v-container >    
		<v-row justify="center" align="center" class="mt-md-2 mb-md-15 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="12">
				<div>
                    <v-row class="text-center" justify="center">
                        <v-col  cols="12" sm="12" md="12" lg="6" class="text-center">
                             <img src="../../static/nav/iconLogin.png" style="width:15%">
                            <h1 class="secondary--text pt-3 mb-6 display-1 font-weight-bold">
                                Selecciona la ciudad
                            </h1>
                            <v-form autocomplete="off">
                                <v-select
                                    v-model="city"
                                    :items="citys"
                                    item-color="teal darken-4"
                                    color="teal darken-4"
                                    rounded
                                    filled
                                    label="Selecciona la ciudad para mostrar los obiturios"
                                    @change="selectCity()"
                                ></v-select>
                            </v-form>
                        </v-col>
                        <div>
                            
                        </div>
                    </v-row>                            
                </div>
			</v-col>
		</v-row>
    </v-container>
</template>
<script>

export default {
   
    data(){
        return{
            obituarios: [],
            list:'',
            city: '',
            citys:[
                'Villavicencio',
                'Acacias',
                'Granada', 
                'SanJose',
                'Yopal'
            ], 
        }
    },  
    methods:{
        selectCity(){
            this.$router.push({path: `obituariosCity/${this.city}`, params:{city: this.city}, props:true})
        }
    }
}
</script>