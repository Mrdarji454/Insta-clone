import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user_name: {
        type: 'string',
        required: 'true',
    },
    password: {
        type: 'string',
        required: 'true'
    }
}, { timestamps: true }
);

const User = mongoose.model("User", userSchema, "UserData");

export default User;