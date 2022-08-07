import { Router } from "express";
import { addComment, deleteComment, editComment, getDetailComment, getListComment } from "../controllers/comment";

const router = Router()

router.get("/comments", getListComment )
router.get("/comments/:id", getDetailComment )
router.post("/comments", addComment )
router.put("/comments/:id", editComment )
router.delete("/comments/:id", deleteComment )

export default router
