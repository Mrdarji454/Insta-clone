import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/instauser");
        console.log("database connected")
    } catch (error) {
        console.log(error);
        console.log("connection with database is currept ");
        process.exit(1);
    }
}

export default connectDb;
