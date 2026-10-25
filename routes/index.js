import express from "express"
import user from "./user.routes.js"

const router = express.Router()

router.use("/v1", user)

export default router


