import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected")
    } 
     catch {
        console.log("error occurred", error);
     }
}

export default connectDB;