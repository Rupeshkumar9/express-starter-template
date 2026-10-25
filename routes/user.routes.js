import express from "express"
import {app } from "../controller/user.controller.js"

const router = express.Router();

router.get("/", app)

export default router


