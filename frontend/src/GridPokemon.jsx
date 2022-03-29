import { useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { objFecth, pokemonPerPage, urlServer } from './globalVar';
import loading from './resources/loading.gif';
import './gridPokemon.css';
import { DisplayPokemon } from './DisplayPokemon';
import { InfoPokemon } from './InfoPokemon';

import { loadPokemons, selectAllPokemons} from './gridPokemonSlice';
import { selectPickedPokemon } from './infoPokemonSlice';
import { selectPageIndex } from './pageBarSlice';
import { selectFilteredPokemons } from './searchBarSlice';
import { nPokemonToFecth, offsetPokemon } from './globalVar';
import { selectTokenJWT } from './authSlice';


export const GridPokemon = () => {
    const tokenJTW = useSelector(selectTokenJWT);
    const pickedPokemon = useSelector(selectPickedPokemon);
    const listAllPokemon = useSelector(selectAllPokemons);
    const filteredPokemon = useSelector(selectFilteredPokemons);
    const pageIndex = useSelector(selectPageIndex);
    const dispatch = useDispatch();

    useEffect( () => {
        const fecthData = async () =>{
            try{    
                const apiUrl = `${urlServer}/pokemons`;
                const response = await fetch(apiUrl, objFecth(tokenJTW));
                const list = await response.json();
                console.log(list);
                dispatch(loadPokemons(list));
            }catch(err){
                console.log("Error en Fecth GridPokemon: " + err);
            }
        }   
    
        fecthData();
    }, [dispatch, tokenJTW]);

    if(listAllPokemon){
        const listToShow = listAllPokemon.slice((pokemonPerPage*(pageIndex-1)), (pokemonPerPage*(pageIndex-1))+pokemonPerPage)
        return (
            <Container  className='gridPokemon'>
                {pickedPokemon && <InfoPokemon/>}
                <Row>
                {(filteredPokemon) ?
                    filteredPokemon.map((iPokemon) => { 
                        return <Col key={iPokemon.name} className='showPokemon' xs={6} md={3} xl={2}><DisplayPokemon pokemon={iPokemon}/></Col>
                    })
                    :
                    listToShow.map((iPokemon) => { 
                        return <Col key={iPokemon.name} className='showPokemon' xs={6} md={3} xl={2}><DisplayPokemon pokemon={iPokemon}/></Col>
                    })
                }
                </Row>
            </Container>
        );
    }
    
    return (
        <Container>
            <Row><img src={loading} alt="Loading list pokemon" /></Row>
        </Container>
    );
}