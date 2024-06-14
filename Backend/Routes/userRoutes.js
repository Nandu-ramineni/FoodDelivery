import express from 'express';
import { deleteUserById, getUserProfile, getUsers, userLogin, userSignup } from '../Controllers/userController.js';


const router = express.Router();
router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/users',getUsers)
router.get('/profile/:userId',getUserProfile);
router.delete('/delete/:userId',deleteUserById);
export default router;