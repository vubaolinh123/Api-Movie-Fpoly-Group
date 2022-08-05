import { Router } from "express";
import {add, remove} from '../controllers/favoritelist'
const route = Router()

route.post('/favoritelist', add)
route.delete('/favoritelist', remove)

export default route;