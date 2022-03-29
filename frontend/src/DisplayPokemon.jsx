import loading from './resources/loading.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './displayPokemon.css';

import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setPickedPokemon } from './infoPokemonSlice';

export const DisplayPokemon = (props) => {
    const pokemon = props.pokemon;
    const dispatch = useDispatch();
    
    //Event Handler
    const handlerSetPickedPokemon = () => {
        dispatch(setPickedPokemon(pokemon));
    }

    if(pokemon){
        return(
            <Row className="displayer" onClick = {handlerSetPickedPokemon}>
                <Col>
                <Row>
                    <figure>
                        <img className="spritesPokemon"
                            src={pokemon.sprites.front_default} 
                            alt={`Pokemon ${pokemon.name}`}
                        />
                        <figcaption>Id: #{pokemon.id}</figcaption>
                    </figure>
                </Row>
                <Row>
                    <p className="namePokemon"><strong>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</strong></p>
                </Row>
                <Row>    
                    {pokemon.types.map((typeId) =>{
                        const tamCol = pokemon.types.length === 2 ? 6:12
                        return( <Col key={`${pokemon.name}_type_${typeId.type.name}`} xs={tamCol}><p className={`type ${typeId.type.name}`}>{typeId.type.name[0].toUpperCase() + typeId.type.name.slice(1)}</p></Col>);
                    })}
                </Row>
                </Col>
            </Row>
        );
    }
    return(
        <div>
            <img src={loading} 
                alt="Loading pokemon" 
            />
        </div>
    );
}