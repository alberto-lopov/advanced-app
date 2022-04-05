import sha256 from 'crypto-js/sha256';

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

export const loginRequest = (username, pass) => {
    //If we are using a secure connection (https) this is NOT necessary
    //In this case the password is gonna be hashed first in frontend, and then in the backend we will hashed again using a salt
    const hashedPass = sha256(pass).toString();

    const data = {
        username: username,
        password: hashedPass
    }

    return({
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}