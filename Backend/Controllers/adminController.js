import bcrypt from "bcryptjs";
import Admin from "../Models/Admin.js";
import jwt from "jsonwebtoken";
export const AuthenticateAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({adminId: admin._id},process.env.jwt_secret,{expiresIn: "2d"});
        const adminId = admin._id;
        const userName = admin.username;
        return res.status(200).json({message: "admin logged in successfully",token,adminId,username});
    } catch (error) {
        console.error("Error authenticating admin:", error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}



