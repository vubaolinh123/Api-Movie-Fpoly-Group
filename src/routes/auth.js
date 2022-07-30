import { Router } from "express";
import { changpassword, signin, signinwithnextauth, signup } from "../controllers/auth";

const router = Router()

router.post("/signin", signin)
router.post("/signup", signup)
router.post("/signinwithnextauth", signinwithnextauth)
router.post("/changepass", changpassword)

export default router