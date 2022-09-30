<template>
	<!-- <v-container fluid> -->
	<div>
		<Welcome/>
		<Cards />
		<Sedes style="background-color: rgb(227,235,235,0.5)"/>
		<parqueCementerio />
		<Asistence style="background-color: rgb(227,235,235,0.2)"/>
		<Asociados />	
		<Testimonios style="background-color: rgb(227,235,235,0.5)"/>
		<v-row justify="center" align="center" class="ml-5 mt-15  mr-5">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Formcontact/>
			</v-col>
		</v-row>
		<PlanEmpresarial style="background-color: rgb(227,235,235,0.5)"/>
		<!-- <v-row justify="center" align="center" class="mt-md-15 mb-md-15 pa-md-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">  -->
				<!--  -->
			<!--  -->
		<!-- <v-btn
      	class="mx-2"
     	dark
		fixed
		bottom
		right
	  	color= 	#3B9B35
		href="https://api.whatsapp.com/send?phone=+573115554404&amp;text=Hola! me pueden apoyar?"
    	target="_blank"
		>
		Afiliate ahora!
      <v-icon class="ml-2" dark>
        mdi-whatsapp
      </v-icon>
    </v-btn> -->
	</div>
	<!-- </v-container> -->
</template>

<script>

import Welcome from '~/components/index/Welcome.vue';
import Cards from '~/components/index/Cards.vue';
import Asistence from '~/components/index/Asistencias.vue';
import Sedes from '~/components/index/Sedes.vue';
import Asociados from '~/components/index/Asociados.vue';
import Formcontact from '~/components/index/FormContact.vue';
import Testimonios from '~/components/index/Testimonios.vue';
import parqueCementerio from '~/components/index/parquecementerio.vue'
import PlanEmpresarial from '~/components/index/PlanEmpresarial.vue';
export default {
	components:{
    Welcome,
    Cards,
    Sedes,
    Asociados,
    Formcontact,
    parqueCementerio,
    Asistence,
    Testimonios,
    PlanEmpresarial
}
}
</script>

<style lang="scss">

.color-blue-dark{
	color: #003B4C;
}
.btn-hover{
    transition: 250ms;
    &:hover{
        transform: scale(1.06);        
    }
}

.d-100{
    max-width: 100%;
}
.card-shadow{
	box-shadow: 1px 60px 55px -25px #00000018 !important;
}
.shadow-principal{
    box-shadow: 1px 2px 45px -8px rgba(0, 0, 0, 0.18) !important;
}
.card-shadow-2{
	box-shadow: 1px 35px 45px -25px rgba(0,0,0,0.09412) !important;
}


</style>
