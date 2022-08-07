import { Router } from "express";
import {addMedia, getFavorite, removeMedia} from '../controllers/favorite'
const route = Router()

route.post('/favorite', addMedia)
route.get('/favorite/:userId', getFavorite)
route.delete('/favorite/:id', removeMedia)

export default route;