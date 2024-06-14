import express from 'express';
import dotenv from 'dotenv';
import Connection from './Database/db.js';
import router from './Routes/vendorRoutes.js';
import firmRoutes from './Routes/firmRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import orderRoutes from './Routes/orderRoutes.js';
import adminRoutes from './Routes/adminRoutes.js';
import addressRoutes from './Routes/addressRoutes.js';
import paymentRoutes from './Routes/paymentRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/vendor',router)
app.use('/firm',firmRoutes)
app.use('/product',productRoutes)
app.use('/user',userRoutes)
app.use('/order',orderRoutes)
app.use('/address',addressRoutes)
app.use('/admin',adminRoutes)
app.use('/payments',paymentRoutes)
app.use('/uploads',express.static('uploads'));

const PORT = process.env.PORT || 7000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URI = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@YUmz.v8e12rf.mongodb.net/?retryWrites=true&w=majority&appName=Yumz`
Connection(URI);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});