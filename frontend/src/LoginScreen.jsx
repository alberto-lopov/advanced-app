import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTokenJWT } from "./authSlice";
import { loginRequest, urlServer } from "./globalVar";
import { useForm } from 'react-hook-form';

import "./loginScreen.css"

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, formState: {errors, isSubmitting}, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const {usernameInput: username, passwordInput: pass} = data;

        try {
            //POST REQUEST of login
            console.log(loginRequest(username, pass));
            const response = await fetch(`${urlServer}/login/`, loginRequest(username, pass));
           
            //Error response
            if(response.status >= 400){
               throw new Error("Error fetching => "+await response.text());
            }
            //Sucessful response
            //Dispatch tokenJWT
            const token = await response.json();
            dispatch(setTokenJWT(token));
            
            //After succesfull login lets go to main view
            navigate("/");
        } catch (err) {
            alert(err);
       }
    }

    return(
    <div className="boxLogin">
        <form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
            <input className="textInput form-control" placeholder="Username" defaultValue="" autoComplete="off"
                {...register("usernameInput", {required: 'Username is required.'})}/>
            <p className="error-text">{errors.usernameInput?.message}</p>

            <input className="textInput form-control" type="password" placeholder="Password" defaultValue="" autoComplete="off"
                {...register("passwordInput", {required:'Password is required.'})}/>
            <p className="error-text">{errors.passwordInput?.message}</p>
            <button className="buttonInput btn btn-light" disabled={isSubmitting} type="submit">Log In</button>
        </form>
        <Link className="btn btn-info" to="/sign-up">Sign up</Link>
    </div>
  );
}