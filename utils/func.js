import argon2 from "argon2";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const hashPassword = async (password) => {
    const hashedPassword = argon2.hash(password);
    return await hashedPassword;
};

export const verifyPassword = async (hashedPassword, password) => {
    const isVerifyPassword = argon2.verify(hashedPassword, password);
    return await isVerifyPassword;
};

export const generateToken = async ({UserName}) => {
    return jwt.sign({UserName}, process.env.JWT_token, {expiresIn: "1d"});
}
