import { Router } from "express";
import {addMovie, addTv, removeMovie, removeTv} from '../controllers/favorite'
const route = Router()

route.post('/favoritemovie', addMovie)
route.delete('/favoritemovie/:id', removeMovie)
route.post('/favoritetv', addTv)
route.delete('/favoritetv/:id', removeTv)

export default route;