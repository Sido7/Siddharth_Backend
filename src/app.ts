import express from 'express';
import { secretes } from './secretes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send(`Hello from App!!!!`);
});


export default app;
