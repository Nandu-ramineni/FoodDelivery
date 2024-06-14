import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../Redux/Actions/orderActions";
import { downloadInvoice } from "../../Services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { CgShoppingBag } from "react-icons/cg";
import { FiDownload } from "react-icons/fi";
import { SiStagetimer } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FcCancel } from "react-icons/fc";
const Orders = () => {
    const userId = localStorage.getItem('userId');
    const dispatch = useDispatch();
    const orderData = useSelector((state) => state.getOrders);
    
    const { orders, error } = orderData;

    useEffect(() => {
        dispatch(getOrders(userId));
    }, [dispatch, userId]);

    const handleDownloadInvoice = async (orderId) => {
        try {
            const response = await downloadInvoice(orderId);
            if (!response) {
                toast.warning("No Invoice Found!");
            }
        } catch (error) {
            console.log("Error while downloading invoice", error);
        }
    };

    return (
        <div className="w-full h-full p-4">
            <ToastContainer />
            {error && <h1 className="pt-2">{error}</h1>}
            <h1 className="pt-4 text-gray-700 font-semibold text-center text-xl flex  items-center gap-2">
                <CgShoppingBag /> Orders
            </h1>
            <div className="items h-[85vh] overflow-y-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {orders && orders.length > 0 ? (
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {orders.map(order => (
                            <div key={order._id} className="bg-white shadow-lg rounded-lg p-6 text-md">
                                <p className="text-gray-700 mb-2"><strong>Restaurant:</strong> {order.firm.firmName}</p>
                                <div className="flex items-center mb-2">
                                    <span className="text-gray-700 mr-2"><strong>Order Status:</strong></span>
                                    <div className={`flex items-center text-sm font-semibold ${order.status === 'Pending' ? 'text-[#F7CB73]' : order.status === 'Confirmed' ? 'text-yellow-500' :order.status === 'Cancelled' ? 'text-red-500': 'text-green-500'}`}>
                                        {order.status === 'Pending' && <SiStagetimer className="mr-1" />}
                                        {order.status === 'Confirmed' && <FontAwesomeIcon icon={faClock} className="mr-1" />}
                                        {order.status === 'Completed' && <FontAwesomeIcon icon={faCheck} className="mr-1" />}
                                        {order.status === 'Cancelled' && <FcCancel  />}
                                        <span>{order.status}</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-2"><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                                <p className="text-gray-700 mb-2"><strong>Order Time:</strong> {new Date(order.createdAt).toLocaleTimeString()}</p>
                                <div className="h-40 overflow-y-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                                    <p className="text-gray-700 mt-2"><strong>Items:</strong> {order.items.reduce((total, item) => total + item.quantity, 0)}</p>
                                    {order.items.map(item => (
                                        <div key={item._id} className="border-t border-gray-200 pt-2 ">
                                            <p className="text-gray-700 mb-1"><strong>Product Name:</strong> {item.product.productName}</p>
                                            <p className="text-gray-700 mb-1"><strong>Quantity:</strong> {item.quantity}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-2 border-t border-gray-200 pt-2">Payment Status: <strong className="text-green-500">{order.paymentStatus}</strong></p>
                                <p className="text-gray-700 mb-2 border-t border-gray-200 pt-2"><strong>Order Total:</strong> ₹{order.totalAmount}</p>
                                <button className="text-[#8EC44C] font-medium py-2 px-4 rounded flex items-center gap-2" onClick={() => handleDownloadInvoice(order._id)}>
                                    <FiDownload /> Invoice
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h2 className="text-xl font-semibold text-center text-gray-500">No Orders</h2>
                )}
            </div>
        </div>
    );
};

export default Orders;
