import express from "express";
import { getLoginPage } from "../controller/controller.js";
import { renderProfilePage } from "../controller/controller.js";

const router = express.Router();

router.get("/", getLoginPage);
router.post("/login", renderProfilePage)

export default router