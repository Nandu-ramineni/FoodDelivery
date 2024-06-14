import express from 'express';
import { AuthenticateAdmin,  } from '../Controllers/adminController.js';

const router = express.Router();

router.post('/login',AuthenticateAdmin)

export default router;