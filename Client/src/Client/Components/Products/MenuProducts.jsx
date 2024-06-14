import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { getMenuProducts } from '../../Redux/Actions/MenuActions';
import { addToCart } from '../../Redux/Actions/cartActions';
import { URL } from '../../Services/api';
import { TbSquareChevronUp, TbSquareDot } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuProducts = () => {
    const { firmId } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const menuData = useSelector((state) => state.getMenu);
    const cartData = useSelector((state) => state.getCart);
    const { menu, error } = menuData;
    const [expandedDescriptions, setExpandedDescriptions] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [vegFilter, setVegFilter] = useState(false);
    const [nonVegFilter, setNonVegFilter] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    const firmName = searchParams.get('firmName');
    const firmImage = searchParams.get('firmImage');
    const firmArea = searchParams.get('firmArea');
    useEffect(() => {
        dispatch(getMenuProducts(firmId));
    }, [dispatch, firmId]);

    const toggleDescription = (productId) => {
        setExpandedDescriptions((prevState) => ({
            ...prevState,
            [productId]: !prevState[productId],
        }));
    };

    const handleVegFilter = () => {
        setVegFilter(!vegFilter);
        if (!vegFilter) {
            setNonVegFilter(false);
        }
    };

    const handleNonVegFilter = () => {
        setNonVegFilter(!nonVegFilter);
        if (!nonVegFilter) {
            setVegFilter(false);
        }
    };

    const filteredProducts = menu && menu.products 
        ? menu.products.filter(product => {
            const matchesSearch = product.productName.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesVeg = !vegFilter || (vegFilter && !product.category.includes('non-veg'));
            const matchesNonVeg = !nonVegFilter || (nonVegFilter && product.category.includes('non-veg'));
            return matchesSearch && matchesVeg && matchesNonVeg;
        })
        : [];

        const handleAddToCart = (product) => {
            console.log('Adding item to cart:', product);
            const restaurantId = firmId;
            if (cartData && cartData.currentRestaurant && cartData.currentRestaurant !== restaurantId) {
                toast.warning("Ahh!😔You have items in  cart from a another restaurant.");
                return;
            }
            dispatch(addToCart(product._id, 1, restaurantId));
            toast.success('Item added to cart!', {
                autoClose: 2000 
            });
        };
        
        

    return (
        <div className='items mx-auto'>
            {error && <p className='text-red-500'>{error.message}</p>}
            <ToastContainer />
            <div className='pt-20'>
                <div className='text-center mb-8'>
                    <div className="relative w-3/4 mx-auto h-56 shadow-md">
                        <img 
                            src={`${URL}/uploads/${firmImage}`} 
                            alt={firmName} 
                            className='w-full h-full object-cover mx-auto shadow-md rounded-md' 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className='text-3xl font-bold text-white'>{firmName}</h1>
                        </div>
                    </div>
                    <p className='text-gray-500 mt-4'>{firmArea}</p>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-center mb-4'>MENU</h2>
                    <div className='flex justify-center mb-4'>
                        <div className='relative w-3/4'>
                            <input 
                                type='text'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder='Search for dishes'
                                className='px-4 py-3 border border-gray-300 rounded-3xl w-full pl-10 bg-[#F0F0F5] focus:outline-none focus:ring-2 focus:ring-[#8EC44C] focus:border-transparent transition-colors duration-300 ease-in-out'
                            />
                            <AiOutlineSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        </div>
                    </div>
                    <div className='flex justify-start pb-4 gap-4 ml-4 border-b border-gray-200'>
                        <button 
                            className={`flex items-center gap-2 px-4 py-2 rounded-full border ${vegFilter ? 'border-[#8EC44C] bg-[#8EC44C] text-white' : 'border-gray-300 bg-white text-gray-600'}`}
                            onClick={handleVegFilter}
                        >
                            <TbSquareDot size={24} className={vegFilter ? 'text-white' : 'text-[#8EC44C]'} />
                            Veg
                        </button>
                        <button 
                            className={`flex items-center gap-2 px-4 py-2 rounded-full border ${nonVegFilter ? 'border-red-500 bg-red-500 text-white' : 'border-gray-300 bg-white text-gray-600'}`}
                            onClick={handleNonVegFilter}
                        >
                            <TbSquareChevronUp size={24} className={nonVegFilter ? 'text-white' : 'text-red-500'} />
                            Non-Veg
                        </button>
                    </div>
                </div>
                {filteredProducts && filteredProducts.length > 0 
                    ? filteredProducts.map((product) => (
                        <div key={product._id} className='flex justify-between items-center border-b border-gray-200 py-4'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    {product.category.includes('non-veg') 
                                        ? <TbSquareChevronUp className="text-red-500" size={24} />
                                        : <TbSquareDot className="text-[#8EC44C]" size={24} />
                                    }
                                </div>
                                <div className='ml-4 max-w-[13rem] md:max-w-md lg:max-w-lg'>
                                    <h3 className='text-lg font-semibold'>{product.productName}</h3>
                                    <p className='text-lg font-semibold '>₹{product.price}</p>
                                    <p
                                        className={`text-gray-500 ${expandedDescriptions[product._id] ? '' : 'truncate'}`}
                                        onClick={() => toggleDescription(product._id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center gap-2 items-center'>
                                <img src={`${URL}/uploads/${product.image}`} alt={product.productName} className='w-24 h-24 object-cover rounded-lg shadow-md' />
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className='px-4 py-1 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105'>
                                    Add
                                </button>
                            </div>
                        </div>
                    ))
                    : <p className='text-gray-500'>No products found</p>
                }
            </div>
        </div>
    );
};

export default MenuProducts;

