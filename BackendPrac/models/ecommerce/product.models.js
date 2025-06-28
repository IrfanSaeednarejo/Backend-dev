import mongoose from 'mongoose';

// Define the user schema
 const productSchema = new mongoose.Schema({

        name:{
            type:String,
            required:true,
            },
        description:{
            type:String,
            required:true,
            },
            productImage:{
            type:String,    
            },
        price:{
            type:Number,
            default:0,
            },  
        stock:{
            type:Number,
            default:0,
            },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Category', // Reference to the Category model
            required:true
        },
        Owner:{
            type:mongoose.Schema.Types.ObjectId,    
            ref: 'User', // Reference to the User model
            required:true 
        },
        

 },{timestamps:true});



//Product will be saved as Products in the database
 export const Product = mongoose.model("Product",productSchema)