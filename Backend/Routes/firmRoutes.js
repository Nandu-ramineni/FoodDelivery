import express from 'express';
import { addFirm, deleteFirmById, upload } from '../Controllers/firmController.js';
import { verifyToken } from '../Middlewares/verifyToken.js';

const router= express.Router();

router.post('/addFirm',verifyToken,upload.single('image'),addFirm)
router.delete('/:firmId',deleteFirmById)
router.get('/uploads/:imageName',(req,res)=>{
    const imageName = req.params.imageName;
    res.headersSent('Content-Type','image/jpeg');
    res.sendFile(path.join(__dirname,'..','uploads',imageName));
})
export default router;