import { useState } from "react";
import { FaCog } from "react-icons/fa";
import bg from '../../assets/bg.jpg';

const Settings = () => {
    const [adminPassword, setAdminPassword] = useState("");
    const [firmName, setFirmName] = useState("");
    const [firmAddress, setFirmAddress] = useState("");
    const [firmPhone, setFirmPhone] = useState("");

    const handleAdminPasswordChange = () => {
        alert("Admin password updated successfully");
    };

    const handleFirmDetailsChange = () => {
        alert("Firm details updated successfully");
    };

    return (
        <div className="flex justify-center items-center w-full m-auto">
            <div className="flex flex-col mt-[-4rem] md:flex-row mx-4 bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
                <div className="md:w-1/2 h-auto">
                    <img src={bg} alt="background" className="object-cover w-full h-full" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    {/* <div className="w-full overflow-hidden whitespace-nowrap mb-4">
                        <p className="animate-scroll text-teal-500 font-semibold text-center">
                            Update your settings for a better experience ⚙️
                        </p>
                    </div> */}
                    <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700 flex justify-center items-center gap-2">
                        <FaCog />Settings
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="adminPassword" className="block font-medium text-gray-700">New Admin Password</label>
                            <input
                                type="password"
                                name="adminPassword"
                                placeholder="Enter new admin password"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                value={adminPassword}
                                onChange={(e) => setAdminPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center mb-2"
                            onClick={handleAdminPasswordChange}
                        >
                            Update Admin Password
                        </button>
                        <div className="mb-4">
                            <label htmlFor="firmName" className="block font-medium text-gray-700">Firm Name</label>
                            <input
                                type="text"
                                name="firmName"
                                placeholder="Enter firm name"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                value={firmName}
                                onChange={(e) => setFirmName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="firmAddress" className="block font-medium text-gray-700">Firm Address</label>
                            <input
                                type="text"
                                name="firmAddress"
                                placeholder="Enter firm address"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                value={firmAddress}
                                onChange={(e) => setFirmAddress(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="firmPhone" className="block font-medium text-gray-700">Firm Phone</label>
                            <input
                                type="text"
                                name="firmPhone"
                                placeholder="Enter firm phone"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                value={firmPhone}
                                onChange={(e) => setFirmPhone(e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center mb-2"
                            onClick={handleFirmDetailsChange}
                        >
                            Update Firm Details
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;
