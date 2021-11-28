import express from 'express';
import morgan from 'morgan';
import errorHandler from 'errorhandler';
import { json } from 'body-parser';
import router from './webServer/routes/mongoRoutes';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

const uri = process.env.URI;

mongoose.connect(uri!).then(() => {console.log("Conectado")}).catch(() => {console.log("Errinho")});

app.set('port', process.env.PORT || 3000);
app.use(json());
app.use(cors({origin: '*'}));

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
    app.use(errorHandler());
} else {
    app.use(morgan('tiny'));
}
app.use('/', router); 

export default app;