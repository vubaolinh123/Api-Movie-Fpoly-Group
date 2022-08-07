import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const favoritelistSchema = new Schema({
    movieId: {
        type: String
    },
    tvId: {
        type: String
    },
    userId: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true });


const Users = mongoose.model('FavoriteList', favoritelistSchema);

export default Users;