import { Router } from "express";
import {add, remove} from '../controllers/favorite'
const route = Router()

route.post('/favorite', add)
route.delete('/favorite/:id', remove)

export default route;