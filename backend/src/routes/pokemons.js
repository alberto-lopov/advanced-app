import express from "express";
import { PokemonService } from "../PokemonService.js";
import { authToken } from "./middleware.js";
import { userAuthorized } from "../globalVar.js";

export const pokemonRouter = express.Router();

pokemonRouter.get("/:id", authToken, (req, res) => {
    const launch = async () => {
        const foundPokemon = await PokemonService.getById(req.params.id);
        if(foundPokemon){
            res.send(foundPokemon);
        }
        else{
            res.status(404).send("Error 404: Pokemon requested was not found");
        }
    }

    req.user.name === userAuthorized ? 
        launch()
        :
        res.status(401).send('Error 401: Unauthorized Access not user ' + userAuthorized);
});

pokemonRouter.get("/", authToken, (req, res) => {
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

    req.user.name === userAuthorized ? 
        launch()
        :
        res.status(401).send('Error 401: Unauthorized Access not user ' + userAuthorized);
});
