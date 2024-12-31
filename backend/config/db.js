import mongoose from "mongoose";

export const connectDB= async ()=>{
   await mongoose.connect("mongodb+srv://gattushiva:gattushiva@cluster0.fjsmupv.mongodb.net/FoodDel?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("DB connected"))
}