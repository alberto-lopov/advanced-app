import express from 'express';
import { pokemonRouter } from './routes/pokemons.js';

const app = express();
const port = 4001;

app.use('/pokemons', pokemonRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})