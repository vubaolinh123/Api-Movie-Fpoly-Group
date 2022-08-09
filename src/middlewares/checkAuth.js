import expressjwt from "express-jwt";
import User from "../models/user";

export const requireSignin = expressjwt({
  algorithms: ["HS256"],
  secret: "abc",
  requestProperty: "auth",
});

export const isAuth = async (req, res, next) => {
  try {
    const { _id } = req.auth;
    const user = await User.findOne({ _id }).exec();
    if (!user) {
      res.status(401).json({
        message: "Bạn chưa đăng nhập.",
      });
      return;
    }

    req.profile = user;
    next();
  } catch (error) {
    res.status(401).json({
      status: false,
      message: error,
    });
  }
};

export const isAdmin = async (req, res, next) => {
  const role = req.profile.role;

  if (role !== 1) {
    res.status(401).json({
      message: "Bạn không có quyền truy cập.",
    });

    return;
  }

  next();
};
