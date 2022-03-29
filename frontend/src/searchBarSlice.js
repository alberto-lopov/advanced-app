import { createSlice } from "@reduxjs/toolkit";

//Actions and reducer
const searchBarSlice = createSlice({
    name: "searchBar",
    initialState: null,
    reducers: {
      setFilteredPokemon: (state, action) => {
          return action.payload;
      },
      clearSearchText: () => {
          return null;
      }
    }
});

//Selector function to get from the store the term of search
export const selectFilteredPokemons = (state) => state.filteredPokemons;

//Export possible actions
export const {setFilteredPokemon, clearSearchText} = searchBarSlice.actions

//Export reducer
export default searchBarSlice.reducer