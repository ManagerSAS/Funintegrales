// import cloudinaryApi from "../api/cloudinaryApi"
// import { uploadWidget } from 'ngx-cloudinary-upload-widget'
const uploadImage =  ( file ) => {
    const api = "https://api.cloudinary.com/v1_1/olivos-villavicencio/image/upload";
    if( !file ) return
    
    try {
       console.log(file)
        const formdata = new FormData();
        formdata.append("upload_preset", "noveltys");
        formdata.append("file", file[0]);

        const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch(api, requestOptions)
        .then(response => response.json())
        .then(result => {return result.url})
        .catch(error => {return error});
   
    }
    catch (error) {
        // console.error('Error al cargar la imagen revisar logs')
        // console.log(error)
        return null
    }
}

export default uploadImage 
