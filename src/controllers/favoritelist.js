import FavoriteList from "../models/favoritelist"

export const add = async(req, res) => {
    try {
        const favoritelist = await new FavoriteList(req.body).save();
        res.json(favoritelist)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được phim"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const favoritelist = await FavoriteList.findOneAndDelete({_id: req.params.id});
        res.json(favoritelist)
    } catch (error) {
        res.status(400).json({
            error: "Xóa thất bại"
        })
    }
};