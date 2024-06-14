import Order from "../Models/Order.js";
import PDFDocument from 'pdfkit';

export const createOrder = async (req, res) => {
    try {
        const { firmId, items, totalAmount } = req.body;
        const userId = req.body.userId || req.userId;
        if (!userId) {
            throw new Error('User ID is required.');
        }
        const order = new Order({
            user: userId,
            firm: firmId,
            items,
            totalAmount
        });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create order', error: error.message });
    }
};



export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find(); 
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch order', error: error.message });
    }
}

export const getOrdersByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = (await Order.find({ user: userId }).populate('user', 'userName').populate('items.product', 'productName price').populate('firm', 'firmName'));
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
    }
};

export const getOrdersByFirm = async (req, res) => {
    try {
        const firmId = req.params.firmId;
        const orders = (await Order.find({ firm: firmId }).populate('user', 'userName').populate('items.product', 'productName price')); 
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
    }
};

export const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status, paymentId, paymentStatus } = req.body;
        const order = await Order.findByIdAndUpdate(orderId, 
            { 
                status, 
                paymentId, 
                paymentStatus 
            }, 
            { new: true });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        return res.status(500).json({ message: 'Failed to update order status', error: error.message });
    }
};



export const generateInvoice = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId)
            .populate('user')
            .populate('items.product')
            .populate('firm');
        if (!order) {
            return res.status(404).send('Order not found');
        }
        const doc = new PDFDocument({ margin: 50 });
        const drawPageBorder = () => {
            doc.rect(10, 10, doc.page.width - 20, doc.page.height - 20)
                .strokeColor('#000')
                .lineWidth(1)
                .stroke();
        };
        drawPageBorder();
        doc.fontSize(25).fillColor('#4A90E2').text(order.firm.name, { align: 'center' });
        doc.moveDown();
        doc.fontSize(20).fillColor('black').text('Thank you for your order!', { align: 'center' });
        doc.moveDown();
        doc.fontSize(14).text(`Biller: ${order.firm.firmName}`, { align: 'left' });
        doc.y += 15; 
        doc.fontSize(14).text(`Order ID: ${order._id}`);
        doc.y += 15; 
        doc.text(`Customer Name: ${order.user.userName}`);
        doc.y += 15; 
        doc.text(`Order Date: ${new Date(order.createdAt).toLocaleDateString()}`);
        doc.y += 15;
        doc.text(`Order Time: ${new Date(order.createdAt).toLocaleTimeString()}`);
        doc.y += 15; 
        doc.text(`Payment_Id: ${order.paymentId}`);
        doc.y += 15; 
        doc.text('Items:', { underline: true });
        doc.moveDown();
        const leftColumnX = 50;
        const centerColumnX = 30;
        const rightColumnX = 30;
        doc.fontSize(12)
            .text('Product Name', leftColumnX, doc.y, { continued: true, align: 'left' })
            .text('Quantity', centerColumnX, doc.y, { continued: true, align: 'center' })
            .text('Price', rightColumnX, doc.y, { continued: false, align: 'right' });
        doc.moveDown();
        doc.strokeColor('#000000').lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke();
        doc.moveDown(0.5);
        order.items.forEach(item => {
            const truncatedName = item.product.productName.length > 20 ? item.product.productName.substring(0, 17) + '...' : item.product.productName;
            doc.fontSize(12)
                .text(truncatedName, leftColumnX, doc.y, { continued: true, align: 'left' })
                .text(item.quantity.toString(), centerColumnX, doc.y, { continued: true, align: 'center' })
                .text(`Rs. ${item.product.price}`, rightColumnX, doc.y, { continued: false, align: 'right' });
            doc.moveDown();
        });
        doc.moveDown();
        doc.text(`Order Total: Rs. ${order.totalAmount}`);
        doc.moveDown();
        const offers = [
            "10% off on your next purchase!",
            "Free shipping on orders over Rs 500!",
            "Buy one, get one 50% off!",
            "20% off on all items!"
        ];
        const randomOffer = offers[Math.floor(Math.random() * offers.length)];
        doc.fontSize(14).fillColor('green').text(`Special Offer: ${randomOffer}`, { align: 'center' });
        doc.moveDown();
        doc.fontSize(14).fillColor('black').text('See you in Next Order!', { align: 'center' });
        const buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', async () => {
            const pdfData = Buffer.concat(buffers);
            order.invoice = {
                data: pdfData,
                contentType: 'application/pdf'
            };
            await order.save();
            res.status(200).send({ message: 'Invoice generated successfully' });
        });
        doc.end();
    } catch (error) {
        res.status(500).send('Error generating invoice');
    }
};

export const getInvoice = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        if (!order || !order.invoice) {
            return res.status(404).send('Invoice not found');
        }
        res.set('Content-Type', order.invoice.contentType);
        res.send(order.invoice.data);
    } catch (error) {
        res.status(500).send('Error fetching invoice');
    }
};

// export const deleteOrder = async (req, res) => {
//     try {
//         const { orderId } = req.params;
//         const order = await Order.findByIdAndDelete(orderId);
//         if (!order) {
//             return res.status(404).json({ message: 'Order not found' });
//         }
//         res.status(200).json({ message: 'Order deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to delete order', error: error.message });
//     }
// };

