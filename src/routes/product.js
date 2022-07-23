import { Router } from 'express';
import { create, list } from '../controllers/products';

const router = Router()

router.get("/products", list)
router.post("/products", create)


export default router;