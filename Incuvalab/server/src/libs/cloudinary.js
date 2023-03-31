import {v2 as cloudinary} from 'cloudinary';
cloudinary.config({
    cloud_name:"dlannos0972",
    api_key: "691226718845354",
    api_secret: "q1_O8p0nQTgt_s4ttB-sFOdj594"
})

export const uploadImageCategory = async filePath =>{
    return await cloudinary.uploader.upload(filePath,{
        folder: "Incuvalab/category"
    })
}
export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
}

export const uploadImageQr = async filePath =>{
    return await cloudinary.uploader.upload(filePath,{
        folder: "Incuvalab/Qr"
    })
}

export const uploadDocumentDonation = async filePath =>{
    return await cloudinary.uploader.upload(filePath,{
        folder: "Incuvalab/DocumentDonation"
    })
}

export const uploadImageProyect = async filePath =>{
    return await cloudinary.uploader.upload(filePath,{
        folder: "Incuvalab/Proyect"
    })
}
