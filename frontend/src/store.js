import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./searchBarSlice";
import gridPokemonReducer from "./gridPokemonSlice";
import infoPokemonReducer from "./infoPokemonSlice";
import pageBarReducer from "./pageBarSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        tokenJWT: authReducer,
        pageBarIndex: pageBarReducer,
        pickedPokemon: infoPokemonReducer,
        filteredPokemons: searchBarReducer,
        allPokemons: gridPokemonReducer
    },
    //This allows to disable middleware used to check for errors.
    //This middleware won't be in the final build
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
});

export default store;