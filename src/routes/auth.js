import { Router } from "express";
import { changpassword, signin, signup } from "../controllers/auth";

const router = Router()

router.post("/signin", signin)
router.post("/signup", signup)
router.post("/changepass", changpassword)

export default router