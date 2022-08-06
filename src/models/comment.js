import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    movie_id: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    desc:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    }
}, { timestamps: true });


const Comment = mongoose.model('Comment', commentSchema);

export default Comment;