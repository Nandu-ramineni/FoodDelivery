import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVendors } from "../Redux/Actions/vendorActions"; 
import { URL } from "../Services/api";
import { CiLocationOn } from "react-icons/ci";
import { PiBowlFoodLight } from "react-icons/pi";
import { TbSquareDot } from "react-icons/tb";
import { Link } from "react-router-dom";

const FirmsCollections = ({ filteredVendors = [] }) => {
    const dispatch = useDispatch();
    const vendorsData = useSelector((state) => state.getVendors);
    const { vendors, error } = vendorsData;
    const [loading, setLoading] = useState(true); 
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("");

    useEffect(() => {
        dispatch(getVendors())
        .then(() => setLoading(false)) 
        .catch(() => setLoading(false)); 
    }, [dispatch]);

    const handleCategoryFilter = (category) => {
        setSelectedCategories((prevCategories) => {
            if (category === "all") {
                return [];
            }
            if (prevCategories.includes(category)) {
                return prevCategories.filter(cat => cat !== category);
            } else {
                return [...prevCategories, category];
            }
        });
    };

    const handleRegionFilter = (region) => {
        setSelectedRegion(region === selectedRegion ? "" : region);
    };

    const shuffleArray = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    const filteredVendorsList = (filteredVendors.length > 0 ? filteredVendors : (vendors?.vendors || [])).filter((vendor) =>
        vendor.firm.some(firm => 
            (selectedCategories.length === 0 || selectedCategories.some(category => firm.category.includes(category))) &&
            (selectedRegion ? firm.region.includes(selectedRegion) : true)
        )
    );

    const shuffledVendors = shuffleArray(filteredVendorsList);

    return (
        <div className="items container mx-auto mt-[-1rem]">
            {loading ? (
                <div className="text-center w-full">
                    <div className="loader"></div>
                    <p className="pt-4">Looking restaurants near by you...</p>
                </div>
            ) : (
                <>
                    {error && <p className="text-red-500">{error.message}</p>}
                    <div className="flex justify-between items-center pb-4">
                        <h2 className="text-xl font-bold">Restaurants with online Food Delivery in Hyderabad</h2>
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-4 py-4">
                            <button 
                                onClick={() => handleCategoryFilter("all")} 
                                className={`mr-2 px-4 py-2 rounded ${selectedCategories.length === 0 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
                            >
                                All
                            </button>
                            <button 
                                onClick={() => handleCategoryFilter("veg")} 
                                className={`mr-2 px-4 py-2 rounded ${selectedCategories.includes("veg") ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
                            >
                                Veg
                            </button>
                            <button 
                                onClick={() => handleCategoryFilter("non-veg")} 
                                className={`mr-2 px-4 py-2 rounded ${selectedCategories.includes("non-veg") ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
                            >
                                Non-Veg
                            </button>
                            <button 
                                onClick={() => handleRegionFilter("south-indian")} 
                                className={`mr-2 px-4 py-2 rounded ${selectedRegion === "south-indian" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
                            >
                                South Indian
                            </button>
                            <button 
                                onClick={() => handleRegionFilter("north-indian")} 
                                className={`mr-2 px-4 py-2 rounded ${selectedRegion === "north-indian" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
                            >
                                North Indian
                            </button>
                            <button 
                                onClick={() => handleRegionFilter("chinese")} 
                                className={`mr-2 px-4 py-2 rounded ${selectedRegion === "chinese" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
                            >
                                Chinese
                            </button>
                        </div>
                    </div>
                    {shuffledVendors && shuffledVendors.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                            {shuffledVendors.map((vendor) => (
                                <div key={vendor._id} className="p-4 bg-white rounded-lg shadow-lg cursor-pointer hover:scale-95 transition ease-in-out">
                                    {vendor.firm.map((firm) => (
                                        <Link to={`/product/${firm._id}?firmName=${firm.firmName}&firmImage=${firm.image}&firmArea=${firm.area}`} key={firm._id}>
                                            <div className="relative">
                                                <img
                                                    src={`${URL}/uploads/${firm.image}`}
                                                    alt={firm.firmName}
                                                    className="img w-full h-48 object-cover rounded-md mb-4"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-2 rounded-b-md">
                                                    <p className="text-md font-bold">{firm.offer}</p>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">{firm.firmName}</h3>
                                            <p className="text-gray-700 mb-2 truncate flex items-center gap-2"><TbSquareDot className="text-[#8EC44C]"/>{firm.category.join(', ')}</p>
                                            <p className="text-gray-700 mb-2 flex items-center gap-2"><PiBowlFoodLight className="text-[#8EC44C]" /><span className="truncate">{firm.region.join(', ')}</span></p>
                                            <p className="text-gray-700 mb-2 flex items-center gap-2"><CiLocationOn className="text-[#8EC44C]"/><span className="truncate">{firm.area}</span></p>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-600">No Restaurants found.</p>
                    )}
                </>
            )}
        </div>
    );
};

export default FirmsCollections;
