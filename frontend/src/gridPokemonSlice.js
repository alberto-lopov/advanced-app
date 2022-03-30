import {createSlice} from '@reduxjs/toolkit';

//Actions and reducer
const gridPokemonSlice = createSlice({
    name: "gridPokemon",
    initialState: null,
    reducers: {
        loadPokemons: (state, action) => {
            return action.payload;
        },
        clearPokemons: () => {
            return null;
        }
    }
});

//Selector All pokemons
export const selectAllPokemons = (state) => {
    return state.allPokemons;
}

//Export actions
export const {loadPokemons, clearPokemons} = gridPokemonSlice.actions;

//Export reducer
export default gridPokemonSlice.reducer;



