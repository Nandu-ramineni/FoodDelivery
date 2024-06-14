import multer from "multer";
import Product from "../Models/Products.js";
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
const addProduct = async (req, res) => {
    try {
        const { productName, price, description, category } = req.body;
        const image = req.file ? req.file.filename : undefined;
        const firmId = req.params.firmId;
        const firm = await Firm.findById(firmId);
        if (!firm) {
            return res.status(404).json({ message: "Firm not found" });
        }
        const product = new Product({
            productName,
            price,
            description,
            category,
            image,
            firm: firm._id
        });
        const savedProduct = await product.save();
        firm.product.push(savedProduct._id);
        await firm.save();
        return res.status(200).json({ message: 'Product added successfully', product: savedProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getProductByFirm = async (req, res) => {
    try {
        const firmId = req.params.firmId;
        const firm = await Firm.findById(firmId);
        if(!firm){
            return res.status(404).json({ message: "Firm not found" });
        }
        const restaurantName = firm.firmName;
        const products = await Product.find({ firm: firm._id });
        return res.status(200).json({restaurantName, products });
    }catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const getProductById = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json(product);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


const deleteProductById = async (req, res) => {
    try {
        const productId = req.params.productId;
        const deleteProduct = await Product.findByIdAndDelete(productId);
        if (!deleteProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    } 
};
export { addProduct, upload,getProductByFirm,deleteProductById,getProductById };
