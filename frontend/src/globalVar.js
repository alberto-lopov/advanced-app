export const urlServer = "http://localhost:4001"
export const nPokemonToFecth = 493;
export const pokemonPerPage = 24;
export const timeoutRequest = 8000; //ms equals 8 in s

export const objFecth = ({accessToken}) =>{
    
    return({
        method: 'GET',
        headers: {
            'authorization': `Bearer ${accessToken}` 
        }
    });
}