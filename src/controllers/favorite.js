import User from '../models/user'
import Favorite from "../models/favorite"

export const addMedia = async(req, res) => {
    try {
        const favorite = await new Favorite(req.body).save();
        res.json(favorite)
    } catch (error) {
        res.status(400).json({
            error: "Có lỗi xảy ra"
        })
    }
}
export const removeMedia = async (req, res) => {
    try {
        const favorite = await Favorite.findOneAndDelete({_id: req.params.id});
        res.json(favorite)
    } catch (error) {
        res.status(400).json({
            error: "Có lỗi xảy ra"
        })
    }
};
export const getFavorite = async (req,res) => {    
    try {
        const user = await User.findOne({_id: req.params.userId }).exec();
        const favoritelist = await Favorite.find({user}).select('-userId').exec();
        res.json(favoritelist)
    } catch (error) {
        console.log(error)
    }
}