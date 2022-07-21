import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Users = mongoose.model('User', userSchema);


export default Users;