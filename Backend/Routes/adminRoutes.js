import express from 'express';
import { AuthenticateAdmin, updatePassword,  } from '../Controllers/adminController.js';

const router = express.Router();

router.post('/login',AuthenticateAdmin)
router.post('/updatePassword',updatePassword)

export default router;