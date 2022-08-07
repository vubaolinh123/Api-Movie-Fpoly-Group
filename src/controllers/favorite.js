import Favorite from "../models/favorite"

export const addMovie = async(req, res) => {
    try {
        const favorite = await new Favorite(req.body).save();
        res.json(favorite)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được"
        })
    }
}
export const removeMovie = async (req, res) => {
    try {
        const favorite = await Favorite.findOneAndDelete({_id: req.params.id});
        res.json(favorite)
    } catch (error) {
        res.status(400).json({
            error: "Xóa thất bại"
        })
    }
};

export const addTv = async(req, res) => {
    try {
        const favorite = await new Favorite(req.body).save();
        res.json(favorite)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được"
        })
    }
}
export const removeTv = async (req, res) => {
    try {
        const favorite = await Favorite.findOneAndDelete({_id: req.params.id});
        res.json(favorite)
    } catch (error) {
        res.status(400).json({
            error: "Xóa thất bại"
        })
    }
};