import mongoose from "mongoose";
import User from "../models/database.js";
import { hashPassword, verifyPassword, generateToken } from "../utils/func.js";

export const getLoginPage = async (req, res) => {
    res.render('login', { error: null });
};

export const renderProfilePage = async (req, res) => {
    // Debug full body and support common name formats: nested (`User[ID]`), flat (`ID`), lowercase, or bracket-keyed
    const { ID, password } = req.body;

    try {

        const UserData = await User.findOne({ user_name: ID });

        // ✅ use findOne (returns OBJECT, not array)
        if (!UserData) {
            // return res.send("user is not is not found");
            return res.render("login", { error: "⨂ Invalid Username , try again" });
        }

        // ✅ verify using argon2
        const isVerify = await verifyPassword(UserData.password, password);

        if (isVerify) {

            const token = generateToken({
                UserName: UserData.user_name,
            });

            res.cookie("acess_token", token);
            res.render("profilepage");

        } else {
            return res.render("login", { error: "⨂ Password is incorrect, Try again" });
        }

    } catch (error) {
        console.log(error);
        console.log("error at render Profilepage");
    }
};

export const getRegisterPage = async (req, res) => {
    try {
        res.render("register");
    } catch (error) {
        console.log(error);
    };

};

export const OncompleteRegister = async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(`user_name:${email}    password:${password}`);
        const finduser = await User.findOne({ "user_name": `${email}` });

        if (finduser) {
            res.send("user is already found");
        } else {
            const hashedPassword = await hashPassword(password);
            await User.insertOne({ "user_name": `${email}`, "password": `${hashedPassword}` });
            res.redirect("/");
        }
    } catch (error) {
        console.log(error)
    }

};