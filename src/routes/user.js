import { Router } from "express";
import { detailUser, editUser, listUser } from "../controllers/user";

const router = Router()

router.get("/users", listUser )
router.get("/users/:id", detailUser )
router.put("/users/:id", editUser )
router.put("/users", getFavoriteList )

export default router

