import mongoose, { Schema } from "mongoose";
import {v4 as uuidv4} from 'uuid';
import { createHmac } from 'crypto';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        uniqe: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20
    },
    birthday: {
        type: String,
    },
    age: {
        type: Number,
    },
    role: {
        type: Number,
        defaul: 1
    },
}, { timestamps: true });

userSchema.methods = {
    authenticate(password){
        console.log(2)
        return this.password === this.encryptPassword(password)
    },
    encryptPassword(password){
        if(!password) return
        try {
            console.log(1)
            return createHmac("Sha256", this.salt).update(password).digest("hex");
        } catch (error) {
            console.log(error)
        }
    },
}

userSchema.pre("save", function(next){
    this.salt = uuidv4()
    this.password = this.encryptPassword(this.password)
    next();
});


const Users = mongoose.model('User', userSchema);

export default Users;