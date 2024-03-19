import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from "cors";
import spotRouter from "./router/spotRouter";
import userRouter from './router/userRouter';
import reviewsRouter from './router/reviewsRouter';
import { dbConnect } from './configs/databaseConfig';
import path from 'path';
dbConnect();
const app = express();
//serve per leggere i dati in formato json
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));


const port = 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
app.use('/images', express.static(path.join('images')));
//Per usare le rotte definite in spotRouter
app.use("/api/spots", spotRouter)
//Per usare le rotte definite in userRouter 
app.use("/api/users", userRouter)
//Per usare le rotte definite in reviewRouter
app.use("/api/reviews", reviewsRouter);