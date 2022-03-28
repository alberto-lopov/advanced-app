import express from "express";
import { PokemonService } from "../PokemonService.js";

export const pokemonRouter = express.Router();

pokemonRouter.get("/:id", (req, res) => {
    const launch = async () => {
        const foundPokemon = await PokemonService.getById(req.params.id);
        if(foundPokemon){
            res.send(foundPokemon);
        }
        else{
            res.status(404).send("Error 404: Pokemon requested was not found");
        }
    }

    launch();
});

pokemonRouter.get("/", (req, res) => {
    const launch = async () => {
        let name = "";
        if(req.query) name = req.query.name;
        const foundPokemon = await PokemonService.getByString(name);
        if(foundPokemon){
            res.send(foundPokemon);
        }
        else{
            res.status(404).send("Error 404: Not matches for that search term: " + name );
        }
    }

    launch();
});