<template>
<div >
    <v-container fluid>
		<v-row justify="center" align="center" class="pt-12">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row align="center">
                    <v-col cols="12" sm="12" md="4">
                        <img src="https://res.cloudinary.com/dhl17zanz/image/upload/v1655825003/neiva/lmsxmw9kewyca6tawovb.webp" alt="" width="200" class="mb-6"><br>
                    </v-col>
                    <v-col cols="12" sm="12" md="8">
                        <span class="secondary--text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore consequatur quisquam quibusdam commodi aperiam architecto dignissimos ullam nisi animi, nemo repudiandae, quas est! Dolor distinctio incidunt rem accusantium impedit. </span>
                    </v-col>
                </v-row>
			</v-col>
		</v-row>
        <v-row justify="center" align="center" class="pt-5 pb-2">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row justify="center">
                    <v-col cols="12" sm="4" md="3" lg="3">
                        <p class="secondary--text mb-4">
                           <b> Dirección oficina principal: </b><br>Calle 16 No. 2-56
                        </p>
                        <p class="secondary--text mb-4">
                            <b> Línea trámites administrativos: </b><br> (608) 8715555
                        </p>
                        <p class="secondary--text mb-4">
                            <b> Línea atención al cliente: </b><br> 01 8000 xxx xxx PDX (608) 8715555
                        </p>
                        <p class="secondary--text mb-4">
                            <b> E-mail: </b><br> contactenosneiva@losolivos.co
                        </p>
                        <img src="https://res.cloudinary.com/dhl17zanz/image/upload/v1646421745/supersolidaria_vxyrt8.png" alt="" width="280">

                    </v-col>
                    <v-col cols="12" sm="4" md="3" lg="3">
                        <h3 class="secondary--text font-weight-bold mb-4">
                            Enlaces de intéres
                        </h3>
                        <div
                            v-for="({text, to}, index) in interesting"
                            :key="index"
                            class="pa-2"
                        >
                            <Nuxt-link class="link-interesting secondary--text" :to="to"> {{ text }} </Nuxt-link>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="4" md="3" lg="3">
                        <h3 class="secondary--text font-weight-bold mb-4">
                            Enlaces de funcionarios
                        </h3>
                        <div
                            v-for="({text, to}, index) in funcionary"
                            :key="index"
                            class="pa-2"
                        >
                            <Nuxt-link class="link-interesting secondary--text" :to="to"> {{ text }} </Nuxt-link>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="4" md="3" lg="3">
                        <h3 class="secondary--text font-weight-bold mb-4">
                            Siguenos
                        </h3>
                        <div
                            v-for="({text, to,icono}, index) in redSocial"
                            :key="index"
                            class="pa-2"
                        >
                            
                            <v-icon left>{{ icono }}</v-icon><a class="link-interesting secondary--text" target="_blank" :href="to"> {{ text }} </a>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row justify="center">
                    <v-col cols="12" sm="6" class="text-right">
                        <span> ©copyright | Todos los derechos reservados 2022 By: </span>
                        <a href="htpps://www.agenciamanager.com"> Agencia Manager</a>
                    </v-col>                    
                </v-row>
            </v-col>
        </v-row>
	</v-container>
</div>
</template>
<script>
export default {
    data(){
        return{
            interesting:[
                { text: 'Solicitudes en línea', to: '/solicitudes-en-linea' },               
                { text: 'Proteccion de datos', to: '/' },
                { text: 'Afiliaciones en linea', to: '/pay' },
                { text: 'Homenajes', to: '/homenajes' },
                { text: 'Sedes', to: '/sedes' },
                { text: 'Actualizacion RTE', to: '/' },
                { text: '¿Preguntas frecuentes?', to: '/' },

            ],
            funcionary:[
                { text: 'Normatividad Covid 19', to: '/' },
                { text: 'Afiliaciones', to: '/' },
                // { text: 'Intranet', to: '/' },
                // { text: 'ORFEO', to: '/' },
                { text: 'Los Olivos Obituarios', to: '/' },
            ],
            redSocial:[
                { text: '@LosOlivosEmcoofun', to: 'https://www.facebook.com/LosOlivosEmcoofun', icono:'mdi-facebook'},
                { text: '@losolivosemcoofun', to: 'https://www.instagram.com/losolivosemcoofun/', icono:'mdi-instagram' },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    ul{
        list-style: none;
    }
    .link-interesting{
        text-decoration: none;        
    }
</style>