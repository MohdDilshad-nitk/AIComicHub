import express from  'express';
import* as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import urlToBase from './routes/urltoBase64.js'
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);
app.use('/api/v1/urlTobase',urlToBase);

const port = 8080

app.get('/', (req, res) => res.send('Hello World!'));

const startServer = async () => {
    try{
        connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }catch(error){
        console.log(error);
    }
}


startServer();
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))