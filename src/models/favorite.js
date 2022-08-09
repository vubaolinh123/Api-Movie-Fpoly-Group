import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const favoriteSchema = new Schema({
    media_type: {
        type: Number // 0 - movie; 1 - tv show
    },
    mediaId: {
        type: String
    },
    userId: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true });


const Users = mongoose.model('FavoriteList', favoriteSchema);

export default Users;