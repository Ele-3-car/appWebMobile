import {Schema, model} from 'mongoose';


export interface user{
    id: string;
    email: string;
    password: string;
    name: string;
    description: string;
    interests: string;
    token: string;
    isAdmin: boolean;
}

export const userSchema = new Schema<user>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    interests: {type:String, required: true},
    email: {type: String, required: true, unique:true},
    token: {type: String, required:false},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: true},

},{
    
    timestamps: true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
});


export const userModel = model<user>('user', userSchema);