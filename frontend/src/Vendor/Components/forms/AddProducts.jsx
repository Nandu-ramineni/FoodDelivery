import { useState } from 'react';
import sideimage from '../../../assets/product.png'
import { ThreeCircles } from 'react-loader-spinner';
import { addFirmProduct } from '../../Services/api';

const AddProducts = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState([]);
    const [bestSeller, setBestSeller] = useState(false);
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCategoryChange = (event) => {
        const value = event.target.value;
        if (category.includes(value)) {
            setCategory(category.filter((item) => item !== value));
        } else {
            setCategory([...category, value]);
        }
    };

    const handleBestSeller = (event) => {
        const value = event.target.value === 'true';
        setBestSeller(value);
    };

    const handleImageUpload = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };
    const handleAddProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const loginToken = localStorage.getItem('token');
            const firmId = localStorage.getItem('vendorFirmId');
            if (!loginToken || !firmId) {
                console.error("User not authenticated");
                return;
            }
            const formData = new FormData();
            formData.append('productName', productName);
            formData.append('price', price);
            formData.append('description', description);
            formData.append('bestSeller', bestSeller);
            formData.append('image', image);
            category.forEach((value) => {
                formData.append('category', value);
            });

            const data = await addFirmProduct(formData);

            if (data) {
                alert('Product added successfully');
                setProductName("");
                setPrice("");
                setCategory([]);
                setBestSeller(false);
                setImage(null);
                setDescription("");
            }

        } catch (error) {
            alert('Failed to add product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center w-full">
            <div className="bg-white flex justify-center gap-12  p-8 rounded-lg shadow-md w-3/4 ">
                {loading && (
                    <div className="loaderSection">
                        <ThreeCircles
                            visible={loading}
                            height={100}
                            width={100}
                            color="#4fa94d"
                            ariaLabel="three-circles-loading"
                        />
                        <p>Please wait, your product is being added...</p>
                    </div>
                )}
                {!loading && (
                    <>
                        <div className='w-1/2 flex justify-center items-center'>
                            <img src={sideimage} alt="" className='drop-shadow-md'/>
                        </div>
                        <div>
                        <h2 className="text-2xl font-semibold mb-4 text-center">Add Product</h2>
                        <form onSubmit={handleAddProduct}>
                            <div className="mb-4">
                                <label htmlFor="productName" className="block text-gray-700">Product Name</label>
                                <input
                                    type="text"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="price" className="block text-gray-700">Price</label>
                                <input
                                    type="text"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Category</label>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="veg"
                                        checked={category.includes('veg')}
                                        onChange={handleCategoryChange}
                                        className="mr-2"
                                    />
                                    <label className="mr-4">Veg</label>
                                    <input
                                        type="checkbox"
                                        value="non-veg"
                                        checked={category.includes('non-veg')}
                                        onChange={handleCategoryChange}
                                        className="mr-2"
                                    />
                                    <label>Non-Veg</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="bestSeller" className="block text-gray-700">Best Seller</label>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        value="true"
                                        checked={bestSeller === true}
                                        onChange={handleBestSeller}
                                        className="mr-2"
                                    />
                                    <label className="mr-4">Yes</label>
                                    <input
                                        type="radio"
                                        value="false"
                                        checked={bestSeller === false}
                                        onChange={handleBestSeller}
                                        className="mr-2"
                                    />
                                    <label>No</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700">Description</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="image" className="block text-gray-700">Image</label>
                                <input
                                    type="file"
                                    onChange={handleImageUpload}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                />
                            </div>
                            <div className='flex justify-center mx-auto'>
                            <button type="submit" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
                            </div>
                        </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AddProducts;