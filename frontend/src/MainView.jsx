import "./App.css";

import { GridPokemon } from './GridPokemon';
import { PageBar } from "./PageBar";
import { SearchBar } from "./SearchBar";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectTokenJWT } from "./authSlice";

export const MainView = () => {
    //If not logged redirect to login
    const jwtToken = useSelector(selectTokenJWT);
    if(!jwtToken){
        return <Navigate to="/login"/>;
    }

    return(
    <div className="App">
            <header className="App-header">
              <SearchBar />
              <PageBar />
            </header>
            <main className="App-main">
              <GridPokemon/>
            </main>
    </div>
    );
}