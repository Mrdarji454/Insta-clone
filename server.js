import express from "express";
import cookieParser from "cookie-parser";
import router from "./routes/router.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser());

connectDb();

app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
