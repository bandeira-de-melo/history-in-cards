import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.js';
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandler)


app.listen("4000",()=> console.log("Server running"));