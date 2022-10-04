import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import tweetsRouter from './router/tweets.js';

const PORT_NUMBER = 8080;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
})

app.use((req, res, next) => {
    console.error(error);
    res.sendStatus(500);
})

app.listen(PORT_NUMBER, () => console.log(`server is listening on ${PORT_NUMBER}`));