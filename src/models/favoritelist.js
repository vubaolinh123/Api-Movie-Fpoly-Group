import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const favoritelistSchema = new Schema({
    movieId: {
        type: String,
        required: true,
    },
    user: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true });


const Users = mongoose.model('User', favoritelistSchema);

export default Users;