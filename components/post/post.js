import olivosApi from '../api/olivosApi'

const forms = '/api/v1/forms'

export default {
    
    async postFormNoveltys( data ){
        // olivosApi.post( forms + '/novedades-empresariales', data)
        //     .then( response => response.json())
            const response = await olivosApi.post( forms + '/novedades-empresariales', data)
            console.log(response)
        return response
    },
    postFormAuxilios( data ){
        olivosApi.post( forms + '/auxilios-funerarios', data)
            .then( response => response.json() )
    }, 
    async postFormHomenajes( data ){
        const response = await olivosApi.post( forms + '/homenajes', data)
        return response
    },
    postFormContac( data ){
            console.log(data)
        // const response = await olivosApi.post( forms + '/homenajes', data)
        // return response
    },
    async getObituarios( obituariosCity ){
        const raw = {ciudad: obituariosCity};
        const response = await olivosApi.post( forms + '/obituarios', raw)
        return response.data
    },
}