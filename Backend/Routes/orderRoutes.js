import express from 'express';
// import { verifyTokenUser } from '../Middlewares/verifyToken.js';
import { createOrder, generateInvoice, getInvoice, getOrderById, getOrders, getOrdersByFirm,  getOrdersByUserId, updateOrderStatus } from '../Controllers/orderController.js';

const router = express.Router();
router.post('/create',createOrder);
router.get('/getOrders',getOrders)
router.get('/getOrderById/:id',getOrderById)
router.get('/getOrdersByUser/:userId',getOrdersByUserId);
router.get('/getOrdersByFirm/:firmId', getOrdersByFirm);
router.put('/updateStatus/:orderId',updateOrderStatus);
router.post('/:orderId/generate-invoice', generateInvoice);
router.get('/:orderId/invoice', getInvoice);
router.get('/invoices/:invoiceName', (req, res) => {
    const invoiceName = req.params.invoiceName;
    res.setHeader('Content-Type', 'application/pdf');
    res.sendFile(path.join(__dirname, '..', 'invoices', invoiceName));
})
export default router;