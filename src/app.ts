import express from 'express';
import morgan from 'morgan';
import errorHandler from 'errorhandler';
import { json } from 'body-parser';
import router from './webServer/routes/mongoRoutes';
import cors from 'cors';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(json());
app.use(cors({origin: `https://ws-airbnbclone-1226.herokuapp.com}`}));

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
    app.use(errorHandler());
} else {
    app.use(morgan('tiny'));
}
app.use(router); 


export default app;