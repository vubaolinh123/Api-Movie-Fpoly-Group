import { Router } from "express";
import {add, remove} from '../controllers/favoritemovie'
const route = Router()

route.post('/favoritemovie', add)
route.delete('/favoritemovie/:id', remove)

export default route;