import { Router } from "express";
import { changpassword, detailUser, editUser, listUser, signin, signinwithnextauth, signup, updateUser } from "../controllers/auth";


const router = Router()

router.post("/auth/signin", signin)
router.post("/auth/signup", signup)
router.post("/auth/signinwithnextauth", signinwithnextauth)
router.post("/auth/changepass", changpassword)
router.post("/auth/changeprofile", updateUser)

//----------------AUTH---------------------

router.get("/users", listUser )
router.get("/users/:id", detailUser )
router.put("/users/:id", editUser )

export default router
