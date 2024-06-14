import jwt from "jsonwebtoken";
import Vendor from "../Models/Vendor.js";
import User from "../Models/User.js";

export const verifyToken = async(req, res, next) => {
    const token = req.headers.token;
    if(!token){
        return res.status(401).json({error: "Access Denied"});
    }
    try {
        const verified = jwt.verify(token, process.env.jwt_secret);
        const vendor = await Vendor.findById(verified.vendorId);
        if(!vendor){
            return res.status(402).json({error: "Access Denied"});
        }
        req.vendorId = vendor._id;
        next();
    } catch (error) {
        res.status(400).json({error: "Invalid Token"});
    }
}

export const verifyTokenUser = async (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ error: "Access Denied" });
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(verified.userId);
        if (!user) {
            return res.status(402).json({ error: "Access Denied" });
        }
        req.userId = user._id;
        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid Token" });
    }
};