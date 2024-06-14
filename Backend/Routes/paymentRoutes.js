import express from 'express';
import { RazorpayInstance, RazorpayResponse } from '../Controllers/paymentController.js';

const router = express.Router();

router.post('/', RazorpayInstance);
router.post('/validate', RazorpayResponse);

export default router;