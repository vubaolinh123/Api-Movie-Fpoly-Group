import Favorite from "../models/favorite"

export const add = async(req, res) => {
    try {
        const favorite = await new Favorite(req.body).save();
        res.json(favorite)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const favorite = await Favorite.findOneAndDelete({_id: req.params.id});
        res.json(favorite)
    } catch (error) {
        res.status(400).json({
            error: "Xóa thất bại"
        })
    }
};