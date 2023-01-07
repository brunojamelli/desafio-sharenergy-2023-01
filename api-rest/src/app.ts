import express from 'express'
require('express-async-errors');
import cors from 'cors';
import morgan from 'morgan';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);
app.use(errors());

// module.exports = app;
export { app }