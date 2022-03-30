import { useEffect, useState} from 'react';
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
import { selectTokenJWT } from './authSlice';


export const GridPokemon = () => {
    const tokenJTW = useSelector(selectTokenJWT);
    const pickedPokemon = useSelector(selectPickedPokemon);
    const listAllPokemon = useSelector(selectAllPokemons);
    const filteredPokemon = useSelector(selectFilteredPokemons);
    const pageIndex = useSelector(selectPageIndex);
    const dispatch = useDispatch();
    const [errorFetching, setErrorFetching] = useState(false);

    useEffect( () => {
        const fecthData = async () =>{
            try{
                const limit = pageIndex * pokemonPerPage;
                const offset = pageIndex > 1 ? (pageIndex-1)*pokemonPerPage : 0;
                const apiUrl = `${urlServer}/pokemons/?limit=${limit}&offset=${offset}`;
                const response = await fetch(apiUrl, objFecth(tokenJTW));
                const list = await response.json();
                console.log(list);
                dispatch(loadPokemons(list));
            }catch(err){
                console.log("Error en Fecth GridPokemon: " + err);
                setErrorFetching(true);
            }
        }   
    
        fecthData();
    }, [dispatch, tokenJTW, pageIndex]);

    if(listAllPokemon){
        return (
            <Container  className='gridPokemon'>
                {pickedPokemon && <InfoPokemon/>}
                <Row>
                {(filteredPokemon) ?
                    filteredPokemon.map((iPokemon) => { 
                        return <Col key={iPokemon.name} className='showPokemon' xs={6} md={3} xl={2}><DisplayPokemon pokemon={iPokemon}/></Col>
                    })
                    :
                    listAllPokemon.map((iPokemon) => { 
                        return <Col key={iPokemon.name} className='showPokemon' xs={6} md={3} xl={2}><DisplayPokemon pokemon={iPokemon}/></Col>
                    })
                }
                </Row>
            </Container>
        );
    }
    
    return (
        <Container>
        {errorFetching ?
        <Row><p id="errMsgGrid">No info to display fetch error. It is posible that 
        you don't have the priveleges too see the info. Try login as another user with priveleges</p></Row> 
        : 
        <Row><img src={loading} alt="Loading list pokemon" /></Row>
        }
        </Container>
    );
}