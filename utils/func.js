import argon2 from "argon2";

export const hashPassword = async (password) => {
    const hashedPassword = argon2.hash(password);
    return await hashedPassword;
};

export const verifyPassword = async (hashedPassword, password) => {
    const isVerifyPassword = argon2.verify(hashedPassword, password);
    return await isVerifyPassword;
}
