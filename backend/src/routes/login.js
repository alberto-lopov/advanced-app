import express from "express";
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { LoginService } from "../servicesDB/LoginService.js";

//DEBUG: console.log(process.env.ACCESS_TOKEN_SECRET)
export const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
    const {username, password} = req.body

    //Hash passed password with name as salt
    const saltedPass = crypto.createHash("sha256").update(password+username).digest("hex");

    //If registered user
    (async () => {
        if(await LoginService.checkUser(username, saltedPass)){
            //Payload of JWT
            const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);
            //Return JWT token
            res.json({accessToken: accessToken});
        }
        else{
            res.status(401).send("Error 401: No user with that name or password");
        }
    })();
});

loginRouter.post("/new-user", (req, res) => {
    const {username, password} = req.body

    //Hash passed password with name as salt to store it
    const saltedPass = crypto.createHash("sha256").update(password+username).digest("hex");

    //If registered user
    (async () => {
        if(await LoginService.createUser(username, saltedPass)){
            //Payload of JWT
            const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);
            //Return JWT token of newly registered user
            res.json({accessToken: accessToken});
        }
        else{
            res.status(409).send("Error 409: There is an user already created with that name");
        }
    })();
});