import { response } from "express";
import { User } from "../models/user.model.js";
import {bcrypt} from "bcrypt.js"
import { generateToken } from "../utils/generatetoken.js";

export const register  = async (req,res) => {
try {
    const {name ,email , password} = req.body;
    if(!name || !email || !password) {
        return response.status(404).json({
            success: false,
            message:"All field are required"
        });
    }
    const user = await User.findOne({email});
    if(user) {
        return res.status(400).json({
            success:false,
            message: "Email id already registered"
        })
    }
    const hashedpassword = await bcrypt.hash(password ,10);
    await User.create({
        name,
        email,
        password:hashedpassword
    });
    return res.status(201).json({
        success:true,
        message:"Account created successfully!!"
    })
} 
catch (error) {
        console.log(error);
    return res.status(500).json({
        success:false,
        message:"Failed to Registered!"
    })
}
}

export const login = async (res,req) => {

    try {
        const {email , password} = req.body;
        if(!email || !password) {
        return response.status(404).json({
            success: false,
            message:"All field are required"
        });
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({
            success:false,
            message:"Incorrect email or password"
        })
    }
    const isPasswordMatch = await bcrypt.compare(password , user.password);
    if(!isPasswordMatch){
         return res.status(400).json({
            success:false,
            message:"Incorrect email or password"
        })
    }
    generateToken(res,user, `Welcome back ${user.name}`);
 }   catch (error) {
        console.log(error);
        return res.status(500).json({
        success:false,
        message:"Failed to login!"
    })
    }

}