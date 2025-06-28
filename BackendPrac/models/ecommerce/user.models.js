import mongoose from 'mongoose';

// Define the user schema
 const userSchema = new mongoose.Schema({

       username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
       },
       email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
       },
       password:{
        type:String,
        required:true
       },



 },{timestamps:true});



//User will be saved as Users in the database
 export const User= mongoose.model("User",userSchema)