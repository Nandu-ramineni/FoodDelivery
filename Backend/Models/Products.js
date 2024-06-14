import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    price: {
        type:String,
        required: true
    },
    category:{
        type: [{type: String, enum: ['veg', 'non-veg']}],
        required: true
    },
    image: {
        type:String 
    },
    bestSeller:{
        type: Boolean,
    },
    description:{
        type: String,
        required: true
    },
    firm :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm'
    }]
});

const Product = mongoose.model('product',productSchema);
export default Product;
