import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userSignup = async(req,res) => {
    const {userName,email,phoneNumber,password} = req.body;
    try {
        const userEmail = await User.findOne({email});
        if(userEmail){
            return res.status(400).json({message: "Email already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            email,
            phoneNumber,
            password: hashedPassword
        })
        await newUser.save();
        res.status(200).json({message: "User registered successfully",userName:newUser.userName})
    }catch(error){
        res.status(500).json({message: "Something went wrong",message:error.message})
    }
}

export const userLogin = async(req,res) => {
    const {userName,password} = req.body;
    try {
        const user = await User.findOne({userName});
        if(!user || !(await bcrypt.compare(password,user.password))){
            return res.status(400).json({message: "Invalid credentials"})
        }
        const token = jwt.sign({userId: user._id},process.env.jwt_secret,{expiresIn: "1d"});
        const userId = user._id;
        const username = user.userName;
        return res.status(200).json({message: "User logged in successfully",token,userId,userName});
    } catch (error) {
        return res.status(500).json({message: "Something went wrong"})
    }
}

export const getUserProfile = async(req,res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: "Something went wrong"})
    }
}

export const getUsers = async(req,res) => {
    try {
        const response = await User.find();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({message: "Something went wrong"})
    }
}

export const deleteUserById = async(req,res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findByIdAndDelete(userId);
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        return res.status(200).json({message: "User deleted successfully"})
    } catch (error) {
        return res.status(500).json({message: "Something went wrong"})
    }
}