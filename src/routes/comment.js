import { Router } from 'express'
import { create, getOne, list, remove, update } from '../controllers/comment';


const router = new Router()

router.post("/comment", create);
router.get("/comment", list);
router.get("/comment/:id", getOne);
router.delete("/comment/:id", remove);
router.put("/comment/:id", update);

export default router