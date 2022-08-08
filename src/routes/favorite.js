import { Router } from "express";
import {addMedia, getFavoriteMovie, getFavoriteTv, removeMedia} from '../controllers/favorite'
const route = Router()

route.post('/favorite', addMedia)
route.get('/favorite/movie/:userId', getFavoriteMovie)
route.get('/favorite/tv/:userId', getFavoriteTv)
route.delete('/favorite/:id', removeMedia)

export default route;