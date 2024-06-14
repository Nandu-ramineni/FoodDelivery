import { useState } from 'react';
import { addYourFirm } from '../../Services/api';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import coffe from '../../../assets/coffe.png'
import image from '../../../assets/firm.png'
const AddFirm = () => {
    const [firmName, setFirmName] = useState("");
    const [area, setArea] = useState("");
    const [category, setCategory] = useState([]);
    const [region, setRegion] = useState([]);
    const [offer, setOffer] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleCategoryChange = (event) => {
        const value = event.target.value;
        setCategory((prevCategory) =>
            prevCategory.includes(value)
                ? prevCategory.filter((item) => item !== value)
                : [...prevCategory, value]
        );
    };
    const handleRegionChange = (event) => {
        const value = event.target.value;
        setRegion((prevRegion) =>
            prevRegion.includes(value)
                ? prevRegion.filter((item) => item !== value)
                : [...prevRegion, value]
        );
    };
    const handleImageUpload = (event) => {
        const selectedImage = event.target.files[0];
        setFile(selectedImage);
    };
    const handleFirmSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const loginToken = localStorage.getItem('token');
            if (!loginToken) {
                console.error("User not authenticated");
                setLoading(false);
                return;
            }
            const formData = new FormData();
            formData.append('firmName', firmName);
            formData.append('area', area);
            formData.append('offer', offer);
            formData.append('image', file);
            category.forEach((value) => {
                formData.append('category', value);
            });
            region.forEach((value) => {
                formData.append('region', value);
            });
            const data = await addYourFirm(formData);
            if (data) {
                console.log(data);
                setFirmName("");
                setArea("");
                setCategory([]);
                setRegion([]);
                setOffer("");
                setFile(null);
                alert("Firm added Successfully");
                const firmId = data.firm._id;
                const firmName = data.firm.firmName; 
                localStorage.setItem('firmId', firmId);
                localStorage.setItem('firmName', firmName);
                navigate('/welcome');
            } else {
                alert("Firm Exists 🥗. Only 1 firm can be added");
            } 
        } catch (error) {
            console.error("Failed to add Firm", error);
            alert("Failed to add Firm");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" flex justify-center items-center w-full">
            {loading && (
                <div className="loaderSection">
                    <ThreeCircles
                        visible={loading}
                        height={100}
                        width={100}
                        color="#4fa94d"
                        ariaLabel="three-circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            )}
            {!loading && (
                <div className="bg-white flex justify-center gap-12  p-8 rounded-lg shadow-md w-3/4 ">
                    <div className='w-1/2 flex justify-center items-center'>
                        <img src={coffe} alt="img" />
                    </div>
                    <div>
                    <h2 className="text-2xl font-semibold mb-4 text-center flex justify-center gap-4"><img src={image} alt="dp" className='h-8 w-8'/> Add Firm</h2>
                    <form onSubmit={handleFirmSubmit}>
                        <div className="mb-4">
                            <label htmlFor="firmName" className="block text-gray-700">Firm Name</label>
                            <input
                                type="text"
                                name="firmName"
                                value={firmName}
                                placeholder="Enter your Firm Name"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                onChange={(e) => setFirmName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="area" className="block text-gray-700">Area</label>
                            <input
                                type="text"
                                name="area"
                                value={area}
                                placeholder="Enter your area"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                onChange={(e) => setArea(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-gray-700">Category</label>
                            <div className="mt-1 flex items-center gap-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="category"
                                        value="veg"
                                        checked={category.includes('veg')}
                                        className="form-checkbox h-4 w-4 text-[#FF7D29]"
                                        onChange={handleCategoryChange}
                                    />
                                    <span className="ml-2 text-gray-700">Veg</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="category"
                                        value="non-veg"
                                        checked={category.includes('non-veg')}
                                        className="form-checkbox h-4 w-4 text-[#FF7D29]"
                                        onChange={handleCategoryChange}
                                    />
                                    <span className="ml-2 text-gray-700">Non-Veg</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="region" className="block text-gray-700">Region</label>
                            <div className="mt-1 flex items-center gap-4 flex-wrap">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="region"
                                        value="south-indian"
                                        checked={region.includes('south-indian')}
                                        className="form-checkbox h-4 w-4 text-[#FF7D29]"
                                        onChange={handleRegionChange}
                                    />
                                    <span className="ml-2 text-gray-700">South Indian</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="region"
                                        value="north-indian"
                                        checked={region.includes('north-indian')}
                                        className="form-checkbox h-4 w-4 text-[#FF7D29]"
                                        onChange={handleRegionChange}
                                    />
                                    <span className="ml-2 text-gray-700">North Indian</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="region"
                                        value="chinese"
                                        checked={region.includes('chinese')}
                                        className="form-checkbox h-4 w-4 text-[#FF7D29]"
                                        onChange={handleRegionChange}
                                    />
                                    <span className="ml-2 text-gray-700">Chinese</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="region"
                                        value="bakery"
                                        checked={region.includes('bakery')}
                                        className="form-checkbox h-4 w-4 text-[#FF7D29]"
                                        onChange={handleRegionChange}
                                    />
                                    <span className="ml-2 text-gray-700">Bakery</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="offer" className="block text-gray-700">Offer</label>
                            <input
                                type="text"
                                name="offer"
                                value={offer}
                                placeholder="Enter your offer"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                onChange={(e) => setOffer(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="file" className="block text-gray-700">Image</label>
                            <input
                                type="file"
                                name="file"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                onChange={handleImageUpload}
                            />
                        </div>
                        <div className="btnSubmit">
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                                Submit
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddFirm;
