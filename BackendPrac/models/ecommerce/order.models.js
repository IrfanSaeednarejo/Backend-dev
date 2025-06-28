import mongoose from 'mongoose';


const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
}); // Disable automatic _id generation for this subdocument
// Define the user schema
 const orderSchema = new mongoose.Schema({

        orderPrice:{
            type:Number,
            required:true
        },
       customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
        },
        orderItems:[orderItemSchema], // Array of order items
        amount:{
            type:Number,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        status:{
            type:String,
            default:"pending",
            enum:["pending","confirmed","shipped","delivered","cancelled"]
        }


 },{timestamps:true});



//Order will be saved as Orders in the database
 export const Order = mongoose.model("Order",orderSchema)