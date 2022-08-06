import Comment from "../models/comment";



export const getListComment = async (req, res) => {
    try {
        const comment = await Comment.find().exec()
        res.json(comment)
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Không lấy được dữ liệu Bình Luận" }
        )
    }
}

export const getDetailComment = async (req, res) => {
    try {
        const comment = await Comment.findOne({_id: req.params.id }).exec()
        res.json(comment)
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Không lấy được dữ liệu Bình Luận" }
        )
    }
}

export const addComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body).save();
        res.json(comment)
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Không thêm được Bình Luận" }
        )
    }
}

export const editComment = async (req, res) => {
    try {
        const comment = await  Comment.findOneAndUpdate({_id: req.body._id}, req.body ,{new: true}).exec()
        res.json(comment)
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Không sửa được Bình Luận" }
        )
    }
}

export const deleteComment = async (req, res) => {
    try {
        const comment = await  Comment.findByIdAndRemove({_id: req.body._id}).exec()
        res.json(comment)
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Không xóa được Bình Luận" }
        )
    }
}
