import { console } from "inspector";
import foodModel from "../models/foodmodel.js";
import fs from "fs"

//add food item 

const addFood=async (req,res)=>{

    let image_filename=`${req.file.filename}`;
    const food= new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {

         await food.save()
        
    } catch (error) {
        console.log(error)
        
    }

}
export {addFood}