import { Schema, model } from "mongoose";

export interface review{
    id: string;
    name: string;
    review: string;
    stars: number;
}

export const reviewSchema = new Schema<review>(
    {
        name: {type: String, required: true},
        review: {type: String, required: true},
        stars: {type: Number, required: true},
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
)

export const reviewModel = model<review>('review', reviewSchema);
