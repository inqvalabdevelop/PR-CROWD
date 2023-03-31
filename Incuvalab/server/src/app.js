import express from "express";
import config from './config';
import fileUpload from 'express-fileupload';
import categoryRoute from './routes/categoryRoute';
import fundingRoute from './routes/fundingRoute';
import commentRoute from './routes/commentRoute';
import userRoute from './routes/userRoute';

const app = express();

//Setting
app.set('port', config.port);
//Middelwars
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './server/src/upload'
}));

app.use(express.urlencoded({ extended: false }));
app.use(categoryRoute);
app.use(fundingRoute);
app.use(userRoute);
app.use(commentRoute);

export default app;