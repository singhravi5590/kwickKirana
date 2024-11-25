import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv';
dotenv.config()

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.API_KEY,
    api_secret : process.env.API_SECRET,
})

async function uploadCloudinaryImage(image){
    const buffer = image?.buffer || Buffer.from(await image.arrayBuffer());

    const uploadImage = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({folder : "blinkit"}, (error, uploadResult)=> {
            return resolve(uploadResult);
        }).end(buffer)
    })

    return uploadImage;
}

export default uploadCloudinaryImage;