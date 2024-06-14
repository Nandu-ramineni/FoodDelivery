import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

export const RazorpayInstance = async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });
        const options = {
            amount: req.body.amount * 100, 
            currency: 'INR',
            receipt: req.body.orderId,
            payment_capture: 1
        };
        const order = await razorpay.orders.create(options);
        if (!order) return res.status(500).send('Some error occurred');
        res.json(order);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export const RazorpayResponse = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
        const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
        hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const digest = hmac.digest('hex');
        if (digest !== razorpay_signature) {
            return res.status(403).json({
                status: 'failure',
                message: 'Transaction is not legit!'
            })
        }
        res.json({
            status: 'success',
            message: 'Transaction is valid',
            order_id: razorpay_order_id,
            payment_id: razorpay_payment_id
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};