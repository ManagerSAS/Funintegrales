<template>
	<v-container fluid>
		<v-row justify="center" align="center" class="mt-md-15 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
		        <v-row>
					<v-col cols="12" sm="12" md="12" lg="7">
						<h1 class="color-blue-dark display-1 font-weight-bold">
							Solicitud de aportes
						</h1>
						<!-- <p class="secondary--text">
							Revise y prepare la documentación que necesite, según su solicitud. Toda la documentación deberá subirse en un único archivo .pdf de máximo 22MB,
                            que deberá adjuntar al momento de diligenciar el siguiente formulario.
						</p> -->
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

import Formulario from '../components/forms/auxilios/auxiliosenlinea.vue';

export default {
    components:{
        Formulario
    }
}
</script>