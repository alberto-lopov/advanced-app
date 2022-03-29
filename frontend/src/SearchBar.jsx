import { useDispatch, useSelector } from "react-redux";
import { clearSearchText, setFilteredPokemon } from "./searchBarSlice";

import "./searchBar.css";
import lupa from "./resources/lupaSearchBar.png";
import { useState } from "react";
import { selectTokenJWT } from "./authSlice";
import { urlServer, objFecth } from "./globalVar";

export const SearchBar = () => {

    const tokenJTW = useSelector(selectTokenJWT);
    const dispatch = useDispatch();
    const [sentSearch, setSentSearch] = useState(false);

    //Event handler functions
    const handlersetFilteredPokemon = (event) => {
        const textValue = document.getElementById("searchNamePokemons").value.toLowerCase();
        if(textValue === ""){
            return alert("Please introduce some value before clicking GO!");
        }
        
        const fecthData = async () =>{
            try{    
                const apiUrl = `${urlServer}/pokemons/?name=${textValue}`;
                const response = await fetch(apiUrl, objFecth(tokenJTW));
                const list = await response.json();
                console.log(list);
                dispatch(setFilteredPokemon(list));
                setSentSearch(true);
            }catch(err){
                console.log("Error en Fecth SearchBar: " + err);
                setSentSearch(true);
            }
        }
    
        fecthData();
    }

    const handlerClearSearchText = () => {
        document.getElementById("searchNamePokemons").value = "";
        setSentSearch(false);
        dispatch(clearSearchText());
    }
    
    return (
        <div className = "searchBarContainer">
            <img className="imgSearchBar" 
                alt="Magnifying glass"
                src={lupa} />
            <input className="searchInput"
                id = "searchNamePokemons"
                type = "text"
                defaultValue = ""
                placeholder = "Search Pokemons" />
            {sentSearch ? 
            (
                <button className="crossClearInput"
                onClick = {handlerClearSearchText}
                type="button">
                    X
                </button>
            )
            :
            (
                <button className="crossClearInput"
                id="enterSearch"
                onClick = {handlersetFilteredPokemon}
                type="button">
                    GO
                </button>
            )}
        </div>
    );
}