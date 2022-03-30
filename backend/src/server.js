import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { pokemonRouter } from './routes/pokemons.js';
import { loginRouter } from './routes/login.js';

const app = express();
const port = 4001;

//So server can handle json in the body of request
app.use(express.json());
app.use(cors());
app.use('/pokemons', pokemonRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})