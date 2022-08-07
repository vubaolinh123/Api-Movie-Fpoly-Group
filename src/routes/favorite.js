import { Router } from "express";
import {addMedia, getFavorite, getFavoriteByMediaType, removeMedia} from '../controllers/favorite'
const route = Router()

route.post('/favorite', addMedia)
route.get('/favorite/:userId', getFavorite)
route.get('/favorite/:userId/type', getFavoriteByMediaType)
route.delete('/favorite/:id', removeMedia)

export default route;