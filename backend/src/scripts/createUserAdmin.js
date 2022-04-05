import mongoose from "mongoose";
import crypto from "crypto";
import { User } from "../models/User.js";
import { urlDB } from "../globalVar.js";

//Password will be stored after two hashes. We will use the name of the user as salt in the second hash
const usernameAdmin = "alberto";
const passAdminUser = "albertoHola";
const hashedPass = crypto.createHash("sha256").update(passAdminUser).digest("hex");
const saltedPass = crypto.createHash("sha256").update(hashedPass+usernameAdmin).digest("hex");

//Execute program
run();

async function run(){
    const db = await mongoose.connect(urlDB);
    
    //If there is a admin user, don't create another
    if(await User.findOne({admin: true}).exec() !== null){
        console.log("Admin user is already created");
        return db.disconnect();
    }

    try{
        //Create the user and save it in database
        const adminUser = await User.create({
            username: usernameAdmin,
            password: saltedPass,
            admin: true
        });

        console.log(`Saved user admin: ${adminUser}`);
    }catch(err){
        console.log(err.message);
    }

    db.disconnect();
}