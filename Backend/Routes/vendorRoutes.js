import express from 'express';
import { getVendorById, getVendors, vendorLogin, vendorSignup } from '../Controllers/vendorController.js';

const router = express.Router();
router.post('/signup',vendorSignup)
router.post('/login',vendorLogin)
router.get('/getVendors',getVendors)
router.get('/getVendorById/:id',getVendorById)
export default router;