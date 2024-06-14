
import { IoBagOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const CustomButtons = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.getCart);
    const { cartItems } = cart;

    const handleCart = () => {
        navigate('/cart');
    };
    const handleUser = () => {
        navigate('/login');
    }
    return (
        <div className="flex justify-between items-center gap-6 text-2xl relative">
            <button onClick={handleCart} className="hover:text-[#8EC44C] transition ease-in relative">
                <IoBagOutline />
                {cartItems.length > 0 && (
                    <span className="absolute -top-2.5 -right-2 bg-[#8EC44C] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItems.length}
                    </span>
                )}
            </button>
            <button className="hover:text-[#8EC44C] transition ease-in" onClick={handleUser}>
                <FaRegCircleUser />
            </button>
        </div>
    );
};

export default CustomButtons;
