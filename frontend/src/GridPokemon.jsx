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
    //Selector and dispatch -> redux
    const tokenJTW = useSelector(selectTokenJWT);
    const pickedPokemon = useSelector(selectPickedPokemon);
    const listAllPokemon = useSelector(selectAllPokemons);
    const filteredPokemon = useSelector(selectFilteredPokemons);
    const pageIndex = useSelector(selectPageIndex);
    const dispatch = useDispatch();

    //States
    const [errorFetching, setErrorFetching] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect( () => {
        const fecthData = async () =>{
            try{
                const limit = pageIndex * pokemonPerPage;
                const offset = pageIndex > 1 ? (pageIndex-1)*pokemonPerPage : 0;
                const apiUrl = `${urlServer}/pokemons/?limit=${limit}&offset=${offset}`;
                const response = await fetch(apiUrl, objFecth(tokenJTW));
                if(response.status === 401){
                    setErrorFetching(true);
                    return setErrorMsg(await response.text());
                }
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

    //Loaded list of pokemons for this page
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
    
    //In case of error
    if(errorFetching)
        return(
        <Container>
            {setErrorMsg ?
            <Row><p id="errMsgGrid">You are not a registered user. {errorMsg}</p></Row> 
            : 
            <Row><p id="errMsgGrid">Error fetching. Request time out </p></Row>
            }
        </Container>

        );
    
    //In process of loading a pokemon
    return (
        <Container>
            <Row><img src={loading} alt="Loading list pokemon" /></Row>
        </Container>
    );
}