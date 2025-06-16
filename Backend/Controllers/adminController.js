import bcrypt from "bcryptjs";
import Admin from "../Models/Admin.js";
import jwt from "jsonwebtoken";
export const AuthenticateAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        console.log(admin);
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        
        const token = jwt.sign({adminId: admin._id},process.env.jwt_secret,{expiresIn: "2d"});
        const adminId = admin._id;
        const userName = admin.username;
        return res.status(200).json({message: "admin logged in successfully",token,adminId,username});
    } catch (error) {
        console.error("Error authenticating admin:", error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}


export const updatePassword = async(req,res) => {
    const {username,password} = req.body;
    try {
        const pass = await Admin.findOne({username});
        if(!pass){
            return res.status(404).json({message: "Admin not found"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newPassword = await Admin.findOneAndUpdate({username},{password: hashedPassword},{new: true});
        res.status(200).json({message: "Password updated successfully", newPassword});
    } catch (error) {
        res.status(500).json({message: "Something went wrong",error: error.message});
    }
}


