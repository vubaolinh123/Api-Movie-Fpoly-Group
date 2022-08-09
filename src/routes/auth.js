import { Router } from "express";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";
import { changpassword, detailUser, editUser, listUser, signin, signinwithnextauth, signup, updateUser } from "../controllers/auth";


const router = Router()

router.post("/auth/signin", signin)
router.post("/auth/signup", signup)
router.post("/auth/signinwithnextauth", signinwithnextauth)
router.put("/auth/changepass", requireSignin, isAuth, changpassword)
router.put("/auth/changeprofile", requireSignin, isAuth, updateUser)

//----------------AUTH---------------------

router.get("/users", requireSignin, isAuth, isAdmin, listUser )
router.get("/users/:id", requireSignin, isAuth, isAdmin, detailUser )
router.put("/users/:id", requireSignin, isAuth, isAdmin, editUser )

export default router
