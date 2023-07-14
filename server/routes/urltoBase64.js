import express from 'express';
import axios from 'axios';
import fs from 'fs';
const router = express.Router();


async function getImageBase64 (imageUrls){

    const base64Images = [];
        photos.forEach(async (photo) => {
            try {
                const response = await axios.get(imageUrl, {
                  responseType: 'arraybuffer',
                });
            
                const imageBuffer = Buffer.from(response.data, 'binary');
                const base64Image = imageBuffer.toString('base64');
                console.log('Base64 image created successfully');
                base64Images.push(base64Image);
               
                
              } catch (error) {
                console.error('Error getting image:', error);
              }
            
        });   


 
};


router.route('/').post(async (req, res) => {

    const {photos} = req.body;
  try {
    const base64Images = await Promise.all(
        photos.map(async (imageUrl) => {
        const response = await axios.get(imageUrl, {
          responseType: 'arraybuffer',
        });

        const imageBuffer = Buffer.from(response.data, 'binary');
        const base64Image = imageBuffer.toString('base64');
        return base64Image;
      })
    );

   

    res.status(200).json(base64Images);
  } catch (error) {
    res.status(500).json({ sucess: false, message: error });
  }


})

export default router;
