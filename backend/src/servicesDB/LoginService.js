import mongoose from 'mongoose';
import { urlDB } from '../globalVar.js';
import {User} from '../models/User.js';

export class LoginService {

    static async getByName(name){
        const db = await mongoose.connect(urlDB);
        const foundUser = await User.findOne({username: name});
        db.disconnect();
    
        return foundUser;
    }

    static async checkUser(name, pass){
        let result = false;

        const db = await mongoose.connect(urlDB);
        const foundUser = await User.findOne({username: name});
        result = foundUser && foundUser.password === pass ? true:false; 
        
        db.disconnect();

        return result;
    }
    
    static async createUser(name, pass){
        const db = await mongoose.connect(urlDB);
    
        //If there is a user with that name, don't create another
        if(await User.findOne({username: name}) !== null){
            db.disconnect();
            return false;
        }

        try{
            //Create the user and save it in database
            const newUser = await User.create({
                username: name,
                password: pass,
                admin: false
            });

            console.log(`Saved user admin: ${newUser}`);

            db.disconnect();
            return true;
        }catch(err){
            console.log(err.message);

            db.disconnect();
            return false;
        }
    }
}