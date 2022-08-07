import { Router } from "express";
import { changpassword, detailUser, editUser, getFavorite, listUser, signin, signinwithnextauth, signup, updateUser } from "../controllers/auth";


const router = Router()

router.post("/auth/signin", signin)
router.post("/auth/signup", signup)
router.post("/auth/signinwithnextauth", signinwithnextauth)
router.put("/auth/changepass", changpassword)
router.put("/auth/changeprofile", updateUser)

//----------------AUTH---------------------

router.get("/users", listUser )
router.get("/users/:id", detailUser )
router.put("/users/:id", editUser )
router.get("/users/favoritemovie/:id", getFavorite)

export default router
