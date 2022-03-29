import { createSlice } from "@reduxjs/toolkit";

//Actions and reducer
const authSlice = createSlice({
    name: "authJWT",
    initialState: null,
    reducers: {
      setTokenJWT: (state, action) => {
          return action.payload;
      }
    }
});

//Selector function to get from the store the term of search
export const selectTokenJWT = (state) => state.tokenJWT;

//Export possible actions
export const {setTokenJWT} = authSlice.actions;

//Export reducer
export default authSlice.reducer;