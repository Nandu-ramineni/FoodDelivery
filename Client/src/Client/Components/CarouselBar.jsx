import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVendors } from "../Redux/Actions/vendorActions";
import { URL } from "../Services/api";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const CarouselBar = () => {
    const dispatch = useDispatch();
    const vendorsData = useSelector((state) => state.getVendors);
    const { vendors, error } = vendorsData;

    useEffect(() => {
        dispatch(getVendors());
    }, [dispatch]);
    const [currentPage, setCurrentPage] = useState(1);
    const vendorsPerPage = 4;
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

    const indexOfLastVendor = currentPage * vendorsPerPage;
    const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
    const shuffledVendors = vendors && vendors.vendors ? shuffleArray(vendors.vendors) : [];
    const currentVendors = shuffledVendors.slice(indexOfFirstVendor, indexOfLastVendor);

    const paginate = (direction) => {
        setCurrentPage((prevPage) => prevPage + direction);
    };

    return (
        <div className="items container mx-auto mt-[-1rem]">
            {error && <p className="text-red-500">{error.message}</p>}
            <div className="flex justify-between items-center pb-4">
                <h2 className="text-xl font-bold">Top Trending Restaurants in Hyderabad</h2>
                <div className="flex gap-3">
                    <button
                        onClick={() => paginate(-1)}
                        disabled={currentPage === 1}
                        className='bg-[#DFDFE4] flex items-center py-2 px-2 rounded-3xl'
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        disabled={currentPage * vendorsPerPage >= shuffledVendors.length}
                        className='bg-[#DFDFE4] flex items-center py-2 px-2 rounded-3xl'
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            {vendors && vendors.vendors && vendors.vendors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentVendors.map((vendor) => (
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
                                            <p className="text-lg font-bold">{firm.offer}</p>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{firm.firmName}</h3>
                                    <p className="text-gray-700 mb-2 truncate">{firm.region.join(', ')}</p>
                                    <p className="text-gray-700 mb-2 truncate">{firm.area}</p>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">No Restaurants found.</p>
            )}
        </div>
    );
};

export default CarouselBar;
