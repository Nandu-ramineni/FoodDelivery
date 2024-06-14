import multer from "multer";
import Vendor from "../Models/Vendor.js";
import Firm from "../Models/Firm.js";
import path from 'path';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });

const addFirm = async (req, res) => {
    try {
        const { firmName, area, category, region, offer } = req.body;
        const image = req.file ? req.file.filename : undefined;
        const vendor = await Vendor.findById(req.vendorId);
        if (!vendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }
        if(vendor.firm.length > 0){
            return res.status(400).json({ message: "You can add only one firm" });
        }
        const firm = new Firm({
            firmName,
            area,
            category,
            region,
            offer,
            image,
            vendor: vendor._id
        });
        const savedFirm = await firm.save();
        vendor.firm.push(savedFirm._id);
        await vendor.save();
        
        return res.status(200).json({ message: 'Firm added successfully', firm: savedFirm });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const deleteFirmById = async(req,res) => {
    try {
        const firmId = req.params.firmId;
        const deleteFirm = await Firm.findByIdAndDelete(firmId);
        if(!deleteFirm){
            return res.status(404).json({ message: "Firm not found" });
        }
        return res.status(200).json({ message: "Firm deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}


export { addFirm, upload,deleteFirmById };
