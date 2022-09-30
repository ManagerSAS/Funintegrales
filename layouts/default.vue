<template>
  	<v-app>
		<v-toolbar
			      
			color="white"
			class="pl-md-16 pr-md-16"
			flat
			height="80"
		>        

        	<v-toolbar-title class="pt-3">
	            <a href = "https://www.losolivosneiva.com/"><img src="../static/nav/logo.webp" alt="" width="130px" ></a>
        	</v-toolbar-title>
        
        	<v-spacer></v-spacer>

			<NuxtLink 
				v-for="({ text, to }, index) in  btnsNav" 
				:key="index"
				:to="{ path: to }"
				class="s-acortag color-blue-dark d-none d-md-none d-lg-flex"    
			> {{ text }}
			</NuxtLink> 
			
			<v-app-bar-nav-icon class="d-block d-lg-none d-md-block d-sm-block"  @click="drawer = !drawer"></v-app-bar-nav-icon>
			
    	</v-toolbar>

		<v-navigation-drawer v-model="drawer"  app temporary> 
			<v-list density="compact">
				<v-list-subheader><a href = "https://www.losolivosneiva.com/"><img src="../static/nav/logo.webp" alt="" width="130px" ></a></v-list-subheader>
				<v-list-item
					v-for="({ text, to }, index) in  btnsNav" 
					:key="index"
					:to="{ path: to }"
					class="color-blue-dark "  
				>
					<v-list-item-title >{{text}}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

    	<v-main>	
        		<Nuxt />
    	</v-main>

		<v-footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);">	
	      		<Footer />
	    </v-footer>
  </v-app>
</template>

<script>

import Footer from '../components/Footer.vue'

export default {
	components:{
		Footer,
	},
  	data () {
	    return {
			rightDrawer: null,
			drawer: false,
			fixed: false,
			btnsNav:[
				{ text: 'Inicio', to: '/' },
				{ text: 'Quienes somos', to: 'about' },
				{ text: 'Planes exequiales', to: 'plans' },
				{ text: 'Homenajes', to: '/'  },
				{ text: 'Sedes',to: 'sedes' },
				{ text: 'Pagos' },
				{ text: 'Noticias' },
			]
    	}
	},

}
</script>

<style lang="scss" scoped>
.border-header{
    border-bottom: 1px solid #80808033 !important;
    background-color: rgba(255,255,255,var(0.5));
}
.s-acortag{
    padding: 15px 15px;
    margin-right: 1px;
    text-decoration: none;
	color: #003B4C;
}
.color-blue-dark{
	color: #003B4C;
}
.box-search{
    width: 250px;
}
.header-logo{
	position: relative;
	left: 12.5rem;
}

</style>

