import User from '../models/user'
import FavoriteList from "../models/favoritemovie"
import jwt from "jsonwebtoken"

export const signin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if(!user) {
            return res.status(400).json({
                message: "Sai tên tài khoản hoặc mật khẩu"
            })
        }
        if (!user.authenticate(password)) {
            return res.status(400).json({
                message: "Sai tên tài khoản hoặc mật khẩu"
            })
        }
        
        const token = jwt.sign({_id: user._id},"123456",{expiresIn: '1h'})
        return res.json({
            token,
            user:{
                _id: user._id,
                email: user.email,
                name: user.name,
                birthday: user.birthday,
                age: user.age,
                role: user.role,
                status: user.status
            }
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Đăng ký thất bại" }
        )        
    }
}

export const signinwithnextauth = async (req, res) => {
    const {email, name, image} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if (user) {
            const token = jwt.sign({_id: user._id},"123456",{expiresIn: '1h'})
            return res.json({
                token,
                user:{
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    birthday: user.birthday,
                    age: user.age,
                    role: user.role,
                    status: user.status
                }
            })            
        } else {
            const newuser = await new User({email, name, image}).save();
            const token = jwt.sign({_id: newuser._id},"123456",{expiresIn: '1h'})
            return res.json({
                token,
                user:{
                    _id: newuser._id,
                    email: newuser.email,
                    name: newuser.name,
                    age: newuser.age,
                    role: newuser.role,
                    status: newuser.status
                }
                
            })
        }       
        
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Đăng ký thất bại" }
        )                
    }

}

export const signup = async (req, res) => {
    const {email, password, name, birthday, age, role, status} = req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if (existUser) {
            return res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        }
        const user = await new User({email, password, name, birthday, age, role, status}).save();
        return res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                birthday: user.birthday,
                age: user.age
            }
        })

    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Đăng ký thất bại" }
        )        
    }
}

export const changpassword = async (req, res) => {
    const {email, password, newpassword} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if (!user.authenticate(password)) {
            return res.status(400).json({
                message: "Mật khẩu không chính xác"
            })
        }
        const newUser = await User.findOneAndUpdate({email}, {password: user.encryptPassword(newpassword)}, {new: true})
        return res.json({
            user: newUser
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Đổi mật khẩu thất bại" }
        )                
    }
}

export const updateUser = async (req,res)=>{
    try {
        const user = await User.findOneAndUpdate({_id: req.body._id }, req.body ,{new:true}).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

//--------------------AUTH---------------------

export const listUser = async (req,res)=>{
    try {
        const user = await User.find().exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailUser = async (req,res)=>{
    try {
        const user = await User.findOne({_id: req.params.id }).exec()
       
        res.json(user)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const editUser = async (req,res)=>{
    try {
        const user = await User.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const getFavoriteList = async (req,res) => {    
    try {
        const user = await User.findOne({_id: req.body._id }).exec();
        const favoritelist = await FavoriteList.find({user}).select('-userId').exec();
        res.json({
            favoritelist
        })
    } catch (error) {
        console.log(error)
    }
}