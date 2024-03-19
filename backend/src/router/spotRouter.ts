import {Router} from "express";
import { sample_spots } from "../../data";
import expressAsyncHandler from "express-async-handler";
import { spot, spotModel } from "../models/spotModel";
import { userModel, user } from "../models/userModel";

const router = Router();
//injectare i dati di esempio
router.get("/seed", expressAsyncHandler(
    async (req, res) => {
        const spotCount = await spotModel.countDocuments();
        if(spotCount >0){
            res.send("Seed is alredy done");
            return;
        }
        await spotModel.create(sample_spots);
        res.send("Seed is done");
    }
))

//api per ottenere tutti gli spot
router.get("/",  expressAsyncHandler(
    async (req, res)=>{
        const spots = await spotModel.find();
        res.send(spots);
    }
))


//api per ottenere tutti gli spot di una città
router.get("/search/:searchTerm",  expressAsyncHandler(
    async(req,res)=>{
        //creo una regex per cercare la città
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        //cerco gli spot che contengono la città
        const spots = await spotModel.find({city: {$regex:searchRegex}})
        res.send(spots);
    }
))

//api per ottenere uno spot
router.get("/:spotId", expressAsyncHandler(
    async(req,res)=>{
        const spot = await spotModel.findById(req.params.spotId);
        res.send(spot);
    }
));

//api per creare uno spot
router.post('/create', expressAsyncHandler(
    async(req,res) =>{

        
        //prendo i dati dal body
        const {city, name, shortDescription,description,image,
        stars, visited, toEat, duration, favorite} = req.body;
        //creo un nuovo spot
        const  newSpot: spot = {
            id: '',
            city,
            name,
            description,
            latitude: 0,
            longitude: 0,
            shortDescription,
            image:"../src/../assets/images/"+image+".jpg",
            stars,
            visited,
            toEat,
            duration,
            favorite,
            ownerName: ''
        }
        //inserisco il nuovo spot nel db
        const dbSpot = await spotModel.create(newSpot);
        res.send(dbSpot);
    }
))





export default router;