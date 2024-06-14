import express from 'express';
import { addProduct, deleteProductById, getProductByFirm, getProductById, upload } from '../Controllers/productController.js';


const router = express.Router();

router.post('/addProduct/:firmId',upload.single('image'),addProduct);
router.get('/:firmId/products',getProductByFirm)
router.get('/:productId',getProductById)
router.delete('/:productId',deleteProductById)
router.get('/uploads/:imageName',(req,res)=>{
    const imageName = req.params.imageName;
    res.headersSent('Content-Type','image/jpeg');
    res.sendFile(path.join(__dirname,'..','uploads',imageName));
})
export default router;