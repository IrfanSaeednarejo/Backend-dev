import mongoose from 'mongoose';

// Define the user schema
 const categorySchema = new mongoose.Schema({

         name:{
          type:String,
          required:true,
         },

 },{timestamps:true});



//Category will be saved as Categorys in the database
 export const Category = mongoose.model("Category",categorySchema)