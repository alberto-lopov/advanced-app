// File to define a class to connect and get data from the Database
import mongoose from "mongoose";
import { urlDB } from "./globalVar.js";
import { Pokemon } from "./models/Pokemon.js";

export class PokemonService {

    static async getById(idValue){
        const db = await mongoose.connect(urlDB);
        const foundPokemon = await Pokemon.findOne({id: idValue});
        db.disconnect();
    
        return foundPokemon;
    }

    static async getByString(name){
        const db = await mongoose.connect(urlDB);
        const foundsPokemon = await Pokemon.findByString(name);
        db.disconnect(); 

        return foundsPokemon;
    }

}