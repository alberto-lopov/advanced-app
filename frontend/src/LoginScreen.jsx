import { useDispatch } from "react-redux";
import { setTokenJWT } from "./authSlice";
import { timeoutRequest, urlServer } from "./globalVar";

import "./loginScreen.css"

export const LoginScreen = () => {

    const dispatch = useDispatch();

    //Event handler
    const handlerLogIn = async () =>{
        const username = document.getElementById("username").value;
        if(username === "")
            return alert("Introduce un nombre de usuario");
        
        //Disable input elements meanwhile fetchin to API.
        document.getElementById("username").disabled = true;
        document.getElementById("loginButton").disabled = true;

        try {
            //Set controller to abort in given timeout
            const controller = new AbortController();
            const idAbort = setTimeout(() => controller.abort(), timeoutRequest);

            //GET to test it
            const response = await fetch(`${urlServer}/login/${username}`);
            //Clear abort
            clearTimeout(idAbort);
            //Dispatch tokenJWT
            const token = await response.json();
            dispatch(setTokenJWT(token));
        } catch (err) {
            alert(err.name === 'AbortError' ? 
            "Request to server passed set timeout 8 seconds without an answer"
            :
            err);

            //Disable input elements meanwhile fetchin to API.
            document.getElementById("username").disabled = false;
            document.getElementById("loginButton").disabled = false;
       }
        
    }

    return(
    <div className="boxLogin">
        <label className="labelInput" htmlFor="username"><b>Username:</b></label>
        <input className="usernameInput" type="text" id="username" name="username" placeholder="username" defaultValue=""/>
        <button className="buttonInput" id="loginButton" onClick={handlerLogIn}>Log In</button>
    </div>
  );
}