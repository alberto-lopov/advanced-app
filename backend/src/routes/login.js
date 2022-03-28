import express from "express";
import jwt from 'jsonwebtoken';

//DEBUG: console.log(process.env.ACCESS_TOKEN_SECRET)
export const loginRouter = express.Router();

loginRouter.get("/:username", (req, res) => {
    //Authentitcation not implemented

    const username = req.params.username;
    //Payload of JWT
    const user = {name: username};

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    //Return JWT token
    res.json({accessToken: accessToken}) 
});