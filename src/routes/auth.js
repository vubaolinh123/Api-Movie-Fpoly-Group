import { Router } from "express";
import { changpassword, detailUser, editUser, listUser, signin, signinwithnextauth, signup } from "../controllers/auth";


const router = Router()

router.post("/signin", signin)
router.post("/signup", signup)
router.post("/signinwithnextauth", signinwithnextauth)
router.post("/changepass", changpassword)

//----------------AUTH---------------------

router.get("/users", listUser )
router.get("/users/:id", detailUser )
router.put("/users/:id", editUser )

export default router