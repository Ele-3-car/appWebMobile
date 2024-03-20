import {Router} from "express";
import expressAsyncHandler from "express-async-handler";
import { review, reviewModel } from "../models/reviewsModel";
import { userModel, userSchema } from "../models/userModel";

const router = Router();

//api per ottenere tutte le recensioni
router.get("/", expressAsyncHandler(
    async(req,res)=>{
        const reviews = await reviewModel.find();
        res.send(reviews);
    }
))

router.post("/create", expressAsyncHandler(
    async(req,res)=>{
        const {name, review, stars} = req.body;
        const newReview: review = {
            id: '',
            name,
            review,
            stars,
        }
        const dbReview = await reviewModel.create(newReview);
        res.send(dbReview);
    }
))
export default router;
