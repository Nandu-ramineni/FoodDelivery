import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-green-100">
            <div className="animation-container">
                <FaCheckCircle className="check-icon" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 mt-4">Order Placed Successfully!</h2>
            <p className="text-gray-700 mt-2">Thank you for your purchase. Your order is on its way!</p>
            <Link to='/profile/orders' className="text-gray-700 font-medium mt-4">View Orders</Link>
        </div>
    );
};

export default OrderSuccess;
