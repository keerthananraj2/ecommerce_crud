//MODELS CODE//


import mongoose from "mongoose";

const recipesSchema=new mongoose.Schema({
    dish_name:{
        type:String,
        required:true,
    },
    cuisine:{
        type:String,
        required:true,
    },
    ingredients:{
        type:String,
        required:true,
    },
    cooking_time:{
        type:Number,
        required:true,
    },
    serving_size:{
        type:Number,
        required:true,
    },
});

export default mongoose.model("recipes",recipesSchema);// default is used to export the moongoose for controller and other folders