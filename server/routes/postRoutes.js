import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';
dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET

});

async function uploadPhotosToCloudinary(photos) {
    try {
      const uploadedPhotos = [];
  
      for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
  
        const result = await cloudinary.uploader.upload(photo);
        uploadedPhotos.push(result.url);
      }
  
      return uploadedPhotos;
    } catch (error) {
      console.error('Error uploading photos to Cloudinary:', error);
      throw error;
    }
  }
  

router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({ sucess: true, data: posts });
    } catch (error) {
        res.status(500).json({ sucess: false, message: error });
    }
})
router.route('/').post(async (req, res) => {

    try {
        const { name, prompt, photos } = req.body;
        const uploadedPhotoUrls = await uploadPhotosToCloudinary(photos);
        
        console.log(uploadedPhotoUrls);
        

        const newPost = await Post.create({
            name,
            prompt,
            photos: uploadedPhotoUrls
        });

        res.status(201).json({ sucess: true, data: newPost });
    } catch (error) {
        res.status(500).json({ sucess: false, message: error });
    }

})





export default router;