import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage, selectPageIndex, setPage } from "./pageBarSlice";
import { range } from "lodash";

import { nPokemonToFecth, pokemonPerPage} from "./globalVar";
import "./pageBar.css"
import { clearSearchText } from "./searchBarSlice";
import { clearPokemons } from "./gridPokemonSlice";

const lastIndex = Math.ceil(nPokemonToFecth/pokemonPerPage);
const firstIndex = 1;

export const PageBar = () => {
    const dispatch = useDispatch();
    const pageIndex = useSelector(selectPageIndex);

    const handlerNextPage = () => {
        dispatch(clearSearchText());
        
        if(pageIndex !== lastIndex){
            dispatch(clearPokemons());
            dispatch(nextPage());
        }
    };

    const handlerPreviousPage = () => {
        dispatch(clearSearchText());

        if(pageIndex !== firstIndex){
            dispatch(clearPokemons());
            dispatch(previousPage());
        }
    };

    const handlerSetPage = (event) => {
        dispatch(clearSearchText());
        
        let id = event.target.innerHTML;
        if(id === "First")
            id=firstIndex;
        else if(id === "Last")
            id=lastIndex;
        else
            id = parseInt(id, 10);
        
        if(id !== pageIndex){
            dispatch(clearPokemons());
            dispatch(setPage(id));
        }

    };

    const pagesInBar = 5;
    const sizeLast = (lastIndex%pagesInBar)+1;
    const numLiElement = (pageIndex > Math.floor(lastIndex/pagesInBar)*pagesInBar) ? range(1,sizeLast):range(1,pagesInBar+1);
    return(
        <ul className="pageBar">
            <li onClick={handlerSetPage}>First</li>
            <li onClick={handlerPreviousPage}>Prev</li>
            {numLiElement.map((nLi) =>{
                const addend = Math.floor((pageIndex-1)/(pagesInBar))*pagesInBar;
                return (<li key={`pageIcon${nLi+addend}`}onClick = {handlerSetPage}>{pageIndex === addend+nLi ? <b>{addend+nLi}</b>:addend+nLi}</li>);
                
            })}
            <li onClick={handlerNextPage}>Next</li>
            <li onClick={handlerSetPage}>Last</li>
        </ul>
    );
}
