import Vendor from "../Models/Vendor.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const vendorSignup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const VendorEmail = await Vendor.findOne({email})
        if(VendorEmail){
            return res.status(400).json({message: "Email already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newVendor = new Vendor({
            username,
            email,
            password: hashedPassword
        })
        await newVendor.save();
        res.status(200).json({message: "Vendor registered successfully",username:newVendor.username})
        
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export const vendorLogin = async (req, res) => {
    const { username, password } = req.body; 
    try {
        const vendor = await Vendor.findOne({ username }); 
        if (!vendor || !(await bcrypt.compare(password, vendor.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ vendorId: vendor._id }, process.env.jwt_secret, { expiresIn: "1d" });
        const vendorId = vendor._id;
        const vendorUsername = vendor.username;
        return res.status(200).json({ message: "Vendor logged in successfully", token,vendorId,vendorUsername });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getVendors = async(req,res) => {
    try {
        const vendors = await Vendor.find().populate("firm");
        res.json({vendors})
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export const getVendorById = async(req,res) => {
    const {id} = req.params;
    try {
        const vendorId = await Vendor.findById(id).populate("firm");
        if(!vendorId){
            return res.status(404).json({message: "Vendor not found"})
        }
        const vendorFirmId = vendorId.firm[0]._id;
        res.status(200).json({vendorId,vendorFirmId})
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}