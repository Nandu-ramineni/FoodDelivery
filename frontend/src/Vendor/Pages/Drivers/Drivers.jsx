import { useState } from 'react';
import { FaStar, FaUserCheck } from 'react-icons/fa';

const Drivers = () => {
    const driversList = [
        {
            id: 1,
            name: "Ravi Kumar",
            image: "https://marketplace.canva.com/EAFqhoRVTgA/1/0/1600w/canva-grey-and-blue-cute-cartoon-anime-manga-illustrated-boy-profile-photo-avatar-u9aFvuQMzUk.jpg",
            phone: "+91 9876543210",
            minDeliveryTime: "20 mins",
            rating: 4.8,
        },
        {
            id: 2,
            name: "Sita ",
            image: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
            phone: "+91 9123456789",
            minDeliveryTime: "25 mins",
            rating: 4.6,
        },
        {
            id: 3,
            name: "Ajay Varma",
            image: "https://img.freepik.com/premium-photo/male-female-profile-avatar-user-avatars-gender-icons_1020867-75342.jpg",
            phone: "+91 9988776655",
            minDeliveryTime: "15 mins",
            rating: 4.9,
        },
        {
            id: 4,
            name: "Lakshmi Nair",
            image: "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png",
            phone: "+91 9112233445",
            minDeliveryTime: "30 mins",
            rating: 4.7,
        },
        {
            id: 5,
            name: "Venkat Rao",
            image: "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
            phone: "+91 9098765432",
            minDeliveryTime: "22 mins",
            rating: 4.5,
        },
    ];
    const [drivers] = useState(driversList);
    const [assignedDriver, setAssignedDriver] = useState(null);
    const handleAssignDriver = (driver) => {
        setAssignedDriver(driver);
    };
    return (
        <div className="w-full pt-6 h-[89vh] overflow-y-scroll px-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <h2 className="text-2xl font-bold mb-4">Available Drivers</h2>
            
            {assignedDriver && (
                <div className="my-8 p-4 bg-blue-100 rounded-md">
                    <h3 className="text-xl font-semibold mb-2">Assigned Driver</h3>
                    <div className="flex items-center">
                        <img
                            src={assignedDriver.image}
                            alt={assignedDriver.name}
                            className="w-16 h-16 object-cover rounded-full mr-4"
                        />
                        <div>
                            <h4 className="text-lg font-semibold">{assignedDriver.name}</h4>
                            <p className="text-gray-700"><strong>Phone:</strong> {assignedDriver.phone}</p>
                            <p className="text-gray-700"><strong>Min Delivery Time:</strong> {assignedDriver.minDeliveryTime}</p>
                            <p className="text-gray-700 flex items-center">
                                <FaStar className="text-yellow-500 mr-2" /> {assignedDriver.rating}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {drivers.map((driver) => (
                    <div key={driver.id} className="p-4 bg-white rounded-lg shadow-lg">
                        <img
                            src={driver.image}
                            alt={driver.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{driver.name}</h3>
                        <p className="text-gray-700 mb-2"><strong>Phone:</strong> {driver.phone}</p>
                        <p className="text-gray-700 mb-2"><strong>Min Delivery Time:</strong> {driver.minDeliveryTime}</p>
                        <p className="text-gray-700 mb-2 flex items-center">
                            <FaStar className="text-yellow-500 mr-2" /> {driver.rating}
                        </p>
                        <button
                            onClick={() => handleAssignDriver(driver)}
                            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
                        >
                            <FaUserCheck className="mr-2" /> Assign Driver
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Drivers;
