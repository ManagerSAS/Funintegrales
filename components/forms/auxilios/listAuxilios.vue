<template>
    <v-card class="rounded-xl v_card">
        <v-expansion-panels accordion flat>
            <v-expansion-panel
                v-for="({title, description, list, subtitle},i) in items"
                :key="i"
                active-class="teal lighten-5"
            >
                <v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <span v-html="description"></span>
                    <ul>
                        <li
                            v-for="item in list" :key="item.id"
                        >
                            {{ item }}
                        </li>
                    </ul>
                    <br>
                    <p v-html="subtitle"></p>
                    <ul v-if="i !== 4">
                        <li 
                            v-for="item in listTwo" :key="item.id"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
</template>
<script>
export default {
    data: () => {
        return{
            items:[
                {
                    title: 'Aporte funerario',
                    description: 'En caso de que el fallecimiento del afiliado principal o sus beneficiarios se produzca en un lugar donde Los Olivos no tenga sede propia o convenio adscrito a la Red Nacional Los Olivos, se reconocerá un aporte solidario <br><br> Los documentos para anexar a esta solicitud son los siguientes:',
                    list:[
                        'Carta donde expliquen las causas de no utilización del servicio',
                        'Fotocopia de cédula del afiliado',
                        'Fotocopia de cédula del fallecido',
                        'Certificación bancaria del afiliado',
                        'Registro Único Tributario RUT del afiliado',
                        'Registro civil de defunción',
                        'Factura original de gastos sufragados para la atención del homenaje.',
                    ],
                    subtitle:'Factura original de gastos sufragados para la atención del homenaje debidamente cancelada las cuales deben cumplir con las exigencias mínimas establecidas por la DIAN.<br><br> Para el efecto esto es, tal como lo establece el artículo 617 del Estatuto Tributario, lo siguiente:',
                },
                {
                    title: 'Aporte Osario o Cenizario',
                    description: 'En concordancia con lo dispuesto en las condiciones generales de los convenios empresariales establecidos y en los montos allí descritos. <br><br> Los documentos a anexar para esta solicitud son los siguientes:',
                    list:[
                        'Carta de solicitud',
                        'Fotocopia de cédula del afiliado',
                        'Fotocopia de cédula del fallecido',
                        'Prueba de parentesco',
                        'Certificación bancaria del afiliado',
                        'Registro Único Tributario RUT del afiliado',
                        'Registro civil de defunción',
                        'Factura original de la compra del Osario o Cenizario',
                    ],
                    subtitle:'Factura original de gastos sufragados para la atención del homenaje debidamente cancelada las cuales deben cumplir con las exigencias mínimas establecidas por la DIAN.<br><br> Para el efecto esto es, tal como lo establece el artículo 617 del Estatuto Tributario, lo siguiente:',
                },
                {
                    title: 'Aporte repatriación de cenizas',
                    description: 'Se reconocerá el valor del flete correspondiente a la repatriación de las cenizas.<br><br> Los documentos a anexar para esta solicitud son los siguientes:',
                    list:[
                        'Carta de solicitud',
                        'Fotocopia de cédula del afiliado',
                        'Fotocopia de cédula del fallecido',
                        'Prueba de parentesco',
                        'Certificación bancaria del afiliado',
                        'Registro Único Tributario RUT del afiliado',
                        'Registro civil de defunción',
                        'Factura original de gastos sufragados para la repatriación de Cenizas',
                    ],
                    subtitle:'Factura original de gastos sufragados para la atención del homenaje debidamente cancelada las cuales deben cumplir con las exigencias mínimas establecidas por la DIAN.<br><br> Para el efecto esto es, tal como lo establece el artículo 617 del Estatuto Tributario, lo siguiente:',
                },
                {
                    title: 'Aporte por fallecimiento en el exterior afiliado principal',
                    description: 'En caso de que el fallecimiento se produzca en un lugar fuera del territorio nacional, Serfunllanos no estará obligada a la prestación de los servicios a que este contrato se refiere consignados. En estos casos la Empresa reconocerá únicamente por el afiliado principal, en forma subsidiaria. <br><br> Los documentos a anexar para esta solicitud son los siguientes:',
                    list:[
                        'Carta de solicitud',
                        'Fotocopia de cédula del afiliado',
                        'Fotocopia de cédula del fallecido',
                        'Prueba de parentesco',
                        'Certificación bancaria del afiliado',
                        'Registro Único Tributario RUT del afiliado',
                        'Registro civil de defunción',
                        'Factura original de gastos sufragados para la atención del homenaje en el exterior',
                    ],
                    subtitle:'Factura original de gastos sufragados para la atención del homenaje debidamente cancelada las cuales deben cumplir con las exigencias mínimas establecidas por la DIAN.<br><br> Para el efecto esto es, tal como lo establece el artículo 617 del Estatuto Tributario, lo siguiente:',
                },
                {
                    title: 'Aporte por desaparición afiliado principal',
                    description: 'En caso de que sea declarada por las autoridades competentes la muerte por desaparición del afiliado principal, Serfunllanos, reconoce un aporte solidario. <br><br> Los documentos a anexar para esta solicitud son los siguientes:',
                    list:[
                        'Carta de solicitud',
                        'Fotocopia de cédula del afiliado',
                        'Fotocopia de cédula del fallecido',
                        'Prueba de parentesco',
                        'Certificación bancaria del afiliado',
                        'Registro Único Tributario RUT del afiliado',
                        'Documento donde se declare por las entidades competente la muerte por desaparición',
                    ],
                }            
            ],

            listTwo:[
                'Estar marcada como expresamente factura de venta',
                'Contener los apellidos y nombres o razón social del vendedor',
                'Apellidos y nombres o razón social del comprador de los bienes o servicios, junto con la discriminación del IVA pagado (modificado Ley 788 de 2002 articulo 64)',
                'Llevar un número que corresponda con la numeración consecutiva de la factura de venta',
                'Fecha de expedición',
                'Descripción especifica o genérica de los artículos vendidos o los servicios prestados',
                'Valor total de la venta',
                'El nombre o razón social o el NIT del impresor de la factura',
                'Indicar la calidad de retenedor del impuesto sobre las ventas',
            ]
        }
    }
}
</script>