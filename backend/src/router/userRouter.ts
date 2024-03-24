import {Router} from "express";
import { sample_users } from "../../data";
import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import { user, userModel } from "../models/userModel";
import { HTTP_BAD_REQUEST } from "../costants/httpStatus";
import bcrypt from 'bcryptjs'
const router = Router();
const crypto = require('crypto');

//injecto gli utenti di esempio
router.get("/seed", expressAsyncHandler(
    async (req, res) => {
        const usersCount = await userModel.countDocuments();
        if(usersCount >0){
            res.send("Seed is alredy done");
            return;
        }
        await userModel.create(sample_users);
        res.send("Seed is done");
    }
))

//api per ottenere tutti gli utenti
router.get("/", (req, res)=>{
    res.send(sample_users)
})


//api per il login
router.post("/login", expressAsyncHandler(
    //funzione asincrona che prende email e password dal body della richiesta
    async (req,res)=>{
        const {email, password} = req.body;
        const user = await userModel.findOne({email})
        //se l'utente esiste e la password è corretta
        if(user && (await bcrypt.compare(password,user.password))){
            //ritorno i dati dell'utente e il token
            res.send(generateTokenResponse(user))
        }else{
            res.status(400).send("username or password is not valid")
        }
    }
))

//api per la registrazione
router.post('/register',expressAsyncHandler(
    async(req, res) =>{
        //prendo i dati dal body
        const {name, email, password, description, interests} = req.body;
        //cerco se esiste un utente con la stessa email
        const user = await userModel.findOne({email});
        if(user){
            res.status(HTTP_BAD_REQUEST).send('utente già esistente');
            return;
        }
        //creo il mio valore casuale salt da associare alla password ahshata dell'utente
        const salt = await bcrypt.genSalt();
        //creo la password hashata
        const encryptedPassword = await bcrypt.hash(password, salt);
        //creo un nuovo utente
        const newUser: user ={
            id: '',
            description,
            interests,
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            isAdmin: false,
            token: ""
        }
        //inserisco il nuovo utente nel db
        const dbUser = await userModel.create(newUser);
        res.send(generateTokenResponse(dbUser))
    }
))

//funzione che genera il token
const generateTokenResponse = (user : any) =>{
    //creo il token con i dati dell'utente
    const secretKey = generateSecretKey();
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin    
    },secretKey,{
        expiresIn: "30d"
    })
    //aggiungo il token all'utente
    user.token = token;

    return user;
}

const generateSecretKey= () =>{
    return crypto.randomBytes(32).toString('hex')
}



export default router;
