<template>
	<v-container fluid>
		<v-row justify="center" align="center" class="mt-md-15 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
		        <v-row justify="center" align="center">
					<v-col cols="12" sm="12" md="12" lg="8">
						<h1 class="color-blue-dark display-1 font-weight-bold mb-6">
							Misa de las madres:
						</h1>
						<p class="secondary--text">
							Estimado cliente por este medio podrá inscribir todas las novedades que requiera, cualquier inquietud por favor comunicarse al área de cartera teléfonos 6653986 - 6653987
						</p>
					</v-col>
				</v-row>
			</v-col>
        </v-row>
		<v-row justify="center" align="center" class="mb-15 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Formulario/>
			</v-col>
		</v-row>
    </v-container>
</template>
<script>

import Formulario from '../components/forms/MisaMes/Retablos.vue';

export default {
    components:{
        Formulario
    }
}
</script>