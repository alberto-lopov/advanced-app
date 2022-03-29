import { useDispatch } from "react-redux";
import { setTokenJWT } from "./authSlice";
import { urlServer } from "./globalVar";

import "./loginScreen.css"

export const LoginScreen = () => {

    const dispatch = useDispatch();

    //Event handler
    const handlerLogIn = async () =>{
        const username = document.getElementById("username").value;
        document.getElementById("username").disabled = true;
        //GET to test it
       const response = await fetch(`${urlServer}/login/${username}`);
       const token = await response.json();

       dispatch(setTokenJWT(token));
        
        /* With POST
        const rawResponse = await fetch(urlServer, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({a: 1, b: 'Textual content'})
        });
        const content = await rawResponse.json();

        console.log(content);*/
    }

    return(
    <div className="boxLogin">
        <label className="labelInput" htmlFor="username"><b>Username:</b></label>
        <input className="usernameInput" type="text" id="username" name="username" placeholder="username" defaultValue=""/>
        <button className="buttonInput" onClick={handlerLogIn}>Log In</button>
    </div>
  );
}