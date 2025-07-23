import express from "express";
import dotenv from "dotenv"; // 
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import cors from "cors"
import userRoute from "./routes/user.route.js"
import courseRoute from "./routes/course.route.js"

dotenv.config({});
connectDB();
console.log("PORT VALUE:", process.env.PORT); 

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));

app.use("/api/v1/user" , userRoute);
app.use("/api/v1/course" , courseRoute);



app.listen(PORT, () => {
    console.log(`Server Successfully listen at port : ${PORT}`)
})