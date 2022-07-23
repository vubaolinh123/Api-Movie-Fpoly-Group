import User from '../models/user'
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