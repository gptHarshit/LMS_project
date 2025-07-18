import express from "express";
import dotenv from "dotenv"; // 
import connectDB from "./database/db.js";

dotenv.config({});
connectDB();
console.log("PORT VALUE:", process.env.PORT); 

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Successfully listen at port : ${PORT}`)
})