import { Schema, model } from "mongoose";
//definisco lo schema del modello con le relative proprietà
export interface spot{
    id: string;
    city: string;
    name: string;
    description: string;
    shortDescription: string;
    latitude: number;
    longitude: number;
    image: string;
    favorite : boolean;
    stars: number;
    visited : string[];
    toEat : string[];
    duration : number;
    ownerName: string;
}


export const spotSchema = new Schema<spot>(
    {
        name: {type: String, required: true},
        city: {type: String, required: true},
        description: {type: String, required: true},
        shortDescription: {type: String, required: true},
        favorite: {type: Boolean, default:false},
        stars: {type: Number, required: true},
        image: {type: String, required: true},
        visited: {type: [String], required: true},
        toEat: {type: [String], required: true},
        duration: {type: Number, required: true},
    },{
        //aggiungo i campi createdAt e updatedAt che servono per tenere traccia della data di creazione e modifica di uno spot
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
)

//creo il modello a partire dallo schema
export const spotModel = model<spot>('spot', spotSchema);