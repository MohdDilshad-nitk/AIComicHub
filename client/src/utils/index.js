import {surpriseMePrompts} from '../constants'
import FileSaver from 'file-saver';
import JSZip from 'jszip';
import fs from 'fs';
export const getRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt  = surpriseMePrompts[randomIndex];
    if(randomPrompt === prompt) getRandomPrompt(prompt)
    return randomPrompt;
}


export async function downloadImage(_id,photos) {


    try {
        const response = await fetch('http://localhost:8080/api/v1/urlTobase', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photos: photos,
          }),
        });
  
        if (response.ok) {
          const result = await response.json();
          const zip = new JSZip();
          result.forEach((photo,idx) => {
            zip.file(`Image-${idx}.png`,photo,{base64: true});
            });

             zip.generateAsync({type:"blob"}).then(function(content) {
                // see FileSaver.js
                FileSaver.saveAs(content, `download-${_id}.zip`);
            });
        

        }
      } catch (err) {
        alert(err);
      } 

    
  }