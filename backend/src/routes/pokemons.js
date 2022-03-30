import express, { query } from "express";
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

//This route allows query usage, with parameters name, limit, offset
pokemonRouter.get("/", authToken, (req, res) => {
    const launch = async () => {
        const {name, limit, offset} = req.query;
        let foundPokemon = [];
        if(name){
            foundPokemon = await PokemonService.getByString(name);
        }
        else if(limit){
            foundPokemon = (offset ? await PokemonService.getDefault(limit,offset):await PokemonService.getDefault(limit));
        }
        else
            foundPokemon = await PokemonService.getByString(""); //Returns all pokemon in DB

        
        res.send(foundPokemon);
        
    }

    req.user.name === userAuthorized ? 
        launch()
        :
        res.status(401).send('Error 401: Unauthorized Access not user ' + userAuthorized);
});
