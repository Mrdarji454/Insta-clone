import express from "express";
import { getLoginPage } from "../controller/controller.js";
import { renderProfilePage, getRegisterPage, OncompleteRegister } from "../controller/controller.js";

const router = express.Router();

router.get("/", getLoginPage);
router.post("/login", renderProfilePage);
router.get("/signUp", getRegisterPage);
router.post("/register", OncompleteRegister);

export default router;