import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
    try {
        // await mongoose.connect("mongodb://localhost:27017/instauser");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected")
    } catch (error) {
        console.log(error);
        console.log("connection with database is currept ");
        process.exit(1);
    }
};

export default connectDb;
