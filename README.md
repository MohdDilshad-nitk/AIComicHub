# AIComicHub

This web project is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and allows users to create and showcase comics generated from text prompts using the OpenAI API and Stable Diffusion API. The project consists of two pages: the showcase page and the create page.

## Showcase Page

The showcase page displays multiple carousels of comics posted by users on the website. The comics are fetched from MongoDB and displayed as images within the carousel. The last slide of the carousel contains information about the creator and the prompt used to make the comic. Users can also search for comics based on the prompt or author using the search field.

<img width="905" alt="Screenshot 2023-07-14 174812" src="https://github.com/MohdDilshad-nitk/AIComicHub/assets/97335106/e9da5803-5b7a-49e6-b871-7a60131b9838">



<img width="874" alt="Screenshot 2023-07-14 174856" src="https://github.com/MohdDilshad-nitk/AIComicHub/assets/97335106/c4f82277-261f-486b-9a61-86d133b3aa87">


<img width="895" alt="Screenshot 2023-07-14 174916" src="https://github.com/MohdDilshad-nitk/AIComicHub/assets/97335106/366c2ee2-8abe-4470-b163-c25b69fefbdd">

## Create Page

The create page provides a form for users to generate comics. It includes two text fields for entering the name and prompt of the comic. Upon clicking the "Generate" button, the prompt is sent to the Flask backend. The backend then sends the text to the OpenAI API, which converts it into a conversation. The conversation data is then sent to the Stable Diffusion API, which generates the comic images. The generated images are sent back to the frontend and displayed to the user. Users have the option to share the generated images with the community.

<img width="903" alt="Screenshot 2023-07-14 174940" src="https://github.com/MohdDilshad-nitk/AIComicHub/assets/97335106/ca50df74-c9d9-4256-899e-1c5c51da47e5">


<img width="882" alt="Screenshot 2023-07-14 175338" src="https://github.com/MohdDilshad-nitk/AIComicHub/assets/97335106/5444261d-7da0-410d-aec9-53fa834842b6">



## Image Upload and Storage

When users choose to share the generated images, they are sent to the Node.js backend. The backend uploads the images to Cloudinary, a cloud-based image management platform. The URLs of the uploaded images, along with the name and prompt of the comic, are stored in MongoDB.

## Downloading Comics

The showcase page's carousel includes a download button for each comic. When clicked, the images of the comic are sent to the Node.js backend. The backend converts the image URLs to base64 format and returns them to the frontend. The frontend uses the JSZip library to create a ZIP file containing the comic images in base64 format. The ZIP file is then saved to the user's local system using the FileSaver library.

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd AIComicHub`
3. Install dependencies for the backend: `cd server && npm install`
4. Install dependencies for the frontend: `cd client && npm install`
5. Install the dependencies for flask backend `cd comicify_server && pip install -r requirements.txt`
6. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following variables to the `.env` file:
     ```
     MONGO_URL=<your_mongodb_uri>
     CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
     CLOUDINARY_API_KEY=<your_cloudinary_api_key>
     CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
     ```
   - Replace `<your_mongodb_uri>` with the URI for your MongoDB database.
   - Replace `<your_cloudinary_cloud_name>`, `<your_cloudinary_api_key>`, and `<your_cloudinary_api_secret>` with your Cloudinary credentials.

   - Create a `.env` file in the comicify server 
   - Add the following variables to the `.env` file:
     ```
     OPEN_AI_API=<your_open_AI_key>
     STABLE_DIFFUSION_API=<your_stability_ai_api_key>

     ```
   - Replace `<your_open_AI_key>` with the open AI API key.
   - Replace `<your_stability_ai_api_key>` with your Stabiltiy AI API key.

8. Start the Flask backend : `python main.py` (in the `comicify sever` directory)
8. Start the backend server: `npm start` (in the `server` directory)
7. Start the frontend development server: `npm run dev` (in the `client` directory)

The project should now be running locally. Open your browser and access the application at `http://localhost:5173`.
