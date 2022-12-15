import { Router } from "express";
import { changpassword, detailUser, editUser, getFavoriteList, listUser, signin, signinwithnextauth, signup, updateUser } from "../controllers/auth";


const router = Router()

router.post("/signin", signin)
router.post("/signup", signup)
router.post("/signinwithnextauth", signinwithnextauth)
router.post("/changepass", changpassword)
router.post("/changeprofile", updateUser)

//----------------AUTH---------------------

router.get("/users", listUser )
router.get("/users/:id", detailUser )
router.put("/users/:id", editUser )
router.get("/users/favoritelist/:id", getFavoriteList )

export default router
