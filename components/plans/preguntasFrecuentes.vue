<template>
    <div >
       <v-row>
           <v-col>
                <p 
                    class="text-h3 texto mt-5 mb-lg-10 " 
                    justify="center" 
                    align="center"
                    style="font-family: 'Comfortaa', cursive; font-weight: bold; font-size: 25px; color: white;"
                > 
                    Preguntas Frecuentes
                </p>

                <v-row class="mb-5 mr-5">
                    <v-col sm="12" md="6" lg="6" xl="7" class="pl-5 ml-lg-10 mt-15">
                        <div class="mt-6">
                            <p style="font-family: 'Comfortaa', cursive; font-weight: bold; font-size: 21px; color: #DDE05D;">¿Lorem ipsum dolor sit amet consectetur adipisicing?</p>
                            <p style="font-family: 'Comfortaa', cursive; font-weight: bold; font-size: 18px; color: white;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus reiciendis voluptatem 
                                molestiae eveniet voluptatum facilis nostrum hic quo! Magni alias quod eos, aliquam placeat necessitatibus itaque accusantium blanditiis? Veniam!</p>
                        </div>
                        <div >
                            <v-divider style=" border-style:dashed" color="#DDE05D" width="80%"></v-divider>
                        </div>
                        <div class="mt-6">
                            <p style="font-family: 'Comfortaa', cursive; font-weight: bold; font-size: 21px; color: #DDE05D;">¿Lorem ipsum dolor sit amet consectetur adipisicing?</p>
                            <p style="font-family: 'Comfortaa', cursive; font-weight: bold; font-size: 18px; color: white;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus reiciendis voluptatem 
                                molestiae eveniet voluptatum facilis nostrum hic quo! Magni alias quod eos, aliquam placeat necessitatibus itaque accusantium blanditiis? Veniam!</p>
                        </div>
                        <div align="center" justify="center">
                            <v-btn  style="background-color: #DDE05D; color: white" elevation="2" class="mt-2">Ver más</v-btn>
                        </div>
                    </v-col>
                   <v-col sm="11" md="6" lg="6" xl="4" justify="center" align="center" class="mt-md-15 d-none d-md-block d-lg-block ">
                        <img src="../../static/preguntas.png"  height="500">
                    </v-col>
                    <v-col sm="11" md="6" lg="6" xl="4" justify="center" align="center" class="mt-md-15 d-block d-sm-block d-md-none">
                        <img src="../../static/preguntas.png"  height="400">
                    </v-col>
                </v-row>
           </v-col>
       </v-row>
    </div>
</template>
<style >
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
    .font{
        font-family: 'Comfortaa', cursive;
        font-size: 20px;

    }
    .texto{
        font-family: 'Comfortaa', cursive;
        font-weight: bold;
        font-size: 30px;
        color: #DDE05D;
    }
</style>