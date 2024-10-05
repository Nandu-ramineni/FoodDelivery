import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCart } from '../../Redux/Actions/cartActions';
import { URL, createOrder, initiatePayment, sendPaymentDetails, validatePayment } from '../../Services/api'; 
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.getCart);
    const { cartItems } = cart;
    const navigate = useNavigate();
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            dispatch({ type: 'GET_CART_SUCCESS', payload: JSON.parse(savedCartItems) });
        } else {
            dispatch({ type: 'GET_CART_SUCCESS', payload: [] }); 
        }
    }, [dispatch]);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
        localStorage.removeItem('cartItems');
    };

    const handleQuantityChange = (id, quantity) => {
        if (quantity < 1) return;
        dispatch(updateCart(id, quantity));
    };

    const handleApplyCoupon = () => {
        if (coupon === 'TRYNEW') {
            setDiscount(0.35);
        } else if (coupon === 'Welcome') {
            setDiscount(0.15);
        } else {
            setDiscount(0.01);
        }
    };

    const itemTotal = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
    const deliveryFee = cartItems.length > 0 ? 49 : 0;
    const platformFee = cartItems.length > 0 ? 19 : 0;
    const discountAmount = itemTotal * discount;
    const totalToPay = itemTotal + deliveryFee + platformFee - discountAmount;

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleProceedToPay = async () => {
        setLoading(true);
        const orderItems = cartItems.map(item => ({
            product: item._id,
            quantity: item.quantity,
            price: parseFloat(item.price) * item.quantity
        }));
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        if (cartItems.length === 0 || !cartItems[0].firm) {
            console.error('Cart is empty or firm information is missing');
            return;
        }
        const orderData = {
            userId,
            firmId: cartItems[0].firm,
            items: orderItems,
            totalAmount: totalToPay
        };
        console.log('Order Data:', orderData);  
        try {
            const orderResponse = await createOrder(orderData, token);
            console.log('Order created:', orderResponse);
            const paymentResponse = await initiatePayment(orderResponse._id, totalToPay );
            console.log('Payment initiated:', paymentResponse);
            const options = {
                key: 'rzp_test_kzINWtT3ElrntA', 
                amount: {totalToPay}, 
                currency: 'INR',
                name: 'Yumz',
                description: 'Test Transaction',
                order_id: paymentResponse.id,
                handler: async (response) => {
                    const paymentDetails = {
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature
                    };
                    try {
                        const validationResponse = await validatePayment(paymentDetails);
                        console.log('Payment validation response:', validationResponse);
                        if (validationResponse.status === 'success') {
                            await sendPaymentDetails(orderResponse._id, validationResponse.payment_id, validationResponse.status)
                            alert('Payment successful!');
                            navigate('/order-success');
                        } else {
                            alert('Payment validation failed.');
                        }
                    } catch (error) {
                        console.error('Error validating payment:', error);
                        alert('Payment validation failed.');
                    }
                },
                prefill: {
                    name: 'Customer Name',
                    email: 'customer@example.com',
                    contact: '9999999999'
                },
                theme: {
                    color: '#8EC44C'
                }
            };

            const rzp = new window.Razorpay(options);
        rzp.open();

        } catch (error) {
            console.error('Error creating order or initiating payment:', error);
            setLoading(false);
        }
    };

    return (
        <div className="items mx-auto">
            <h2 className='text-3xl font-bold text-center mb-6 pt-20'></h2>
            <div className='flex flex-col-reverse lg:flex-row justify-between gap-8'>
                <div className='w-full lg:w-1/2'>
                    <h3 className='text-xl font-semibold mb-4'>Delivery address</h3>
                    <div className='border border-gray-300 rounded-lg p-4 mb-6'>
                        <p className='text-gray-700'>Lingampalli Railway Station, Lingampalli, Hyderabad, 500019, Rail Vihar, Serilingampally, Hyderabad, Telangana 500133, India</p>
                        <p className='text-gray-500'>56 MINS</p>
                    </div>
                    <h3 className='text-xl font-semibold mb-4'>Choose payment method</h3>
                    <div className='border border-gray-300 rounded-lg p-4 mb-6'>
                        <button onClick={handleProceedToPay} className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg'>{loading ? <p>Loading</p>:"PROCEED TO PAY"}</button>
                    </div>
                </div>
                <div className='w-full lg:w-2/5'>
                    <div>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item._id} className='flex justify-between items-center border-b border-gray-300 py-4'>
                                    <div className='flex items-center'>
                                        <img src={`${URL}/uploads/${item.image}`} alt={item.productName} className='w-12 h-12 object-cover rounded-lg shadow-md' />
                                        <div className='ml-4'>
                                            <h3 className='lg:text-lg font-semibold md:text-md sm:truncate'>{item.productName}</h3>
                                            <p className='text-lg font-semibold text-gray-700'>₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                                            <div className='flex items-center'>
                                                <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)} disable={item.quantity === 0} className='bg-gray-300 text-md px-1 '>-</button>
                                                <p className='mx-4'>{item.quantity}</p>
                                                <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)} className='bg-gray-300 text-md px-1 '>+</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    <button onClick={() => handleRemoveFromCart(item._id)}>
                                        <TiDelete className='text-3xl text-red-500'/>
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className='text-gray-500 text-center'>Your cart is empty</p>
                        )}
                    </div>
                    {cartItems.length > 0 && (
                        <>
                            <div className='mt-8'>
                                <h3 className='text-md font-semibold mb-4'>Apply Coupon</h3>
                                <div className='flex items-center mb-6'>
                                    <input 
                                        type='text'
                                        value={coupon}
                                        onChange={(e) => setCoupon(e.target.value)}
                                        placeholder='Enter coupon code'
                                        className='flex-1 border border-gray-300 rounded-l-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-[#8EC44C] focus:border-transparent transition-colors duration-300 ease-in-out'
                                    />
                                    <button onClick={handleApplyCoupon} className='bg-[#8EC44C] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-r-lg'>APPLY</button>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <h3 className='text-xl font-semibold mb-4'>Bill Details</h3>
                                <div className='border border-gray-300 rounded-lg p-4'>
                                    <div className='flex justify-between'>
                                        <p className='text-gray-700'>Item Total</p>
                                        <p className='text-gray-700'>₹{itemTotal.toFixed(2)}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-gray-700'>Delivery Fee</p>
                                        <p className='text-gray-700'>₹{deliveryFee.toFixed(2)}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-gray-700'>Platform Fee</p>
                                        <p className='text-gray-700'>₹{platformFee.toFixed(2)}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-gray-700'>Discount</p>
                                        <p className='text-gray-700'>- ₹{discountAmount.toFixed(2)}</p>
                                    </div>
                                    <hr className='my-4' />
                                    <div className='flex justify-between font-semibold'>
                                        <p>TOTAL TO PAY</p>
                                        <p>₹{totalToPay.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
