import express from 'express';
import { verifyToken } from '../Middlewares/verifyToken.js';
import { createAddress } from '../Controllers/addressController.js';

const router = express.Router();

router.post('/add-address',verifyToken,createAddress)

export default router;