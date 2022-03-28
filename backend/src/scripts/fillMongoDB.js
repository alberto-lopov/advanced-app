import mongoose from "mongoose";
import { Pokemon } from "../models/Pokemon.js";
import fetch from "node-fetch";
import lodash from "lodash";
const {range} = lodash;


import { urlDB } from "../globalVar.js";
const numberPokemonsToFecth = 493 //Pokedex until 4th Gen

//Execute program
run();

async function run(){
    await mongoose.connect(urlDB);

    //Run logic
    await storePokemonUntil(numberPokemonsToFecth)

    await mongoose.connection.close();
}

//FUNCTIONS

//Fecht data from all pokemons until specified id and store it in the database
async function storePokemonUntil(lastPokemon, firstPokemon = 1){
    if(await Pokemon.findOne({id: lastPokemon}).exec() !== null){
        return console.log("Database is already filled");
    }

    const pokemonsToGet = range(firstPokemon, lastPokemon+1);
    const pokeApi = "https://pokeapi.co/api/v2/";

    //We use a normal for, cause you can't use await inside array method forEach
    for(const pokemon of pokemonsToGet){
        const addressPokemon = pokeApi + "pokemon/" + pokemon;
        const addressEntry = pokeApi + "pokemon-species/" + pokemon;
        await createPokemon(addressPokemon, addressEntry);
        console.log(`Saved pokemon Nº: ${pokemon} to database`);
    }

}

//Create a new pokemon and store it in the Database
async function createPokemon(addressPokemon, addressEntry) {
    //Fecth data from api 
    const response = await fetch(addressPokemon);
    const fecthedPokemonData = await response.json();

    //Add pokedexEntry to main data
    const anotherResponse = await fetch(addressEntry);
    const fecthedEntry = await anotherResponse.json();
    fecthedPokemonData["pokedex-entry"] = fecthedEntry.flavor_text_entries[0].flavor_text;

    try{
        //Create the pokemon and save it in database
        const newPokemon = await Pokemon.create(fecthedPokemonData);
        //console.log(newPokemon); debug
    }catch(err){
        console.log(err.message);
    }
}