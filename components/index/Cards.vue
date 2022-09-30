<template>
<section justify="center" align="center" class="ml-10">
    <!-- <v-container cols="12" sm="12" md="12" lg="12" xl="12"  > -->
        <v-row justify="center" align="center" class="mt-5 mb-4">

            <v-col  cols="12" sm="12" md="4" lg="4" >
                <div style="width: 80%">
                    <div  class="mb-6  ">                                
                        <h1 justify="center" align="center"> 
                            <img src="../../static/iconos/pagosLinea.png" alt="" height="60">
                        </h1>
                        <h1 class="text-raleway font-weight-black" style="color: #003B4C">PAGOS EN LÍNEA</h1>
                    </div>
                    <div class="color-blue-dark">
                        Aquí podrás realizar el pago de tu plan de previsión exequial o cualquier otro tipo de pago a través de PSE tarjetas de crédito u otros medios de pago
                    </div>
                    <div><br>
                        <v-btn
                           style="background: linear-gradient(to right, #A7CB68, #5AB780)"
                            class="shadow-principal btn-hover"
                            dark
                            rounded-xl
                            to="pay"
                        >
                            Pagos
                        </v-btn>
                    </div>
                </div>
            </v-col>

            <v-col cols="12" sm="12" md="4" lg="4" >
                <div style="width: 80%">
                    <div justify="center" align="center" class="mb-6">                                
                        <h1 justify="center" align="center"> 
                          <img src="../../static/iconos/registroObituario.png" alt="" height="60">
                        </h1>
                        <h1 class="text-raleway font-weight-black" style="color: #003B4C">REGISTRO DE DEFUNCION</h1>
                    </div>

                    <div class="color-blue-dark">
                        Haz clic aquí. Encontrarás el registro de defunción de tu ser querido, digitando solo el numero de cedula del ser querido
                    </div>
                    <div><br>
                        <v-btn 
                            style="background: linear-gradient(to right, #80C49D, #2EAE9B)"
                            class="shadow-principal btn-hover"
                            dark
                            rounded-xl
                            to="registration"
                        >
                            Ver registros
                        </v-btn>
                    </div>
                </div>            
            </v-col>

            <v-col cols="12" sm="12" md="4" lg="4">
                <div style="width: 80%">
                    <div justify="center" align="center" class="mb-6">                                
                        <h1 justify="center" align="center"> 
                            <img src="../../static/iconos/obituarios.png" alt="" height="60">
                        </h1>
                    <h1 class="text-raleway font-weight-black" style="color: #003B4C">OBITUARIOS</h1>
                    </div>

                    <div class="color-blue-dark">
                        Servicios funerarios que se encuentran disponibles en velación en nuestras diferentes sedes, sede principal Neiva, Sede Pitalito, Sede Florencia, Sede Garzón
                    </div>
                    <div><br>
                        <v-btn
                            style="background: linear-gradient(to right, #EC6480, #E83E58)" 
                            class="shadow-principal btn-hover"
                            dark
                            rounded-xl
                            to="/obituarios"
                        >
                            Ver obituarios
                        </v-btn>
                    </div>
                </div>            
            </v-col>

        </v-row>
    <!-- </v-container> -->
</section>
</template>
