import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/admin.png"
import { DataContext } from "../context/DataProvider";
import { FiUsers } from "react-icons/fi";
import { PiUserSwitch } from "react-icons/pi";
import {  IoSettingsOutline} from "react-icons/io5";
import { getUsers, getVendors } from "../services/api";
const WelcomePage = () => {
    const navigate = useNavigate();
    const {  setAccount } = useContext(DataContext);
    const [users,setUsers] = useState([]);
    const [vendors,setVendors] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
        const admin = localStorage.getItem('admin');
        if (!token || !admin) {
            navigate('/login');
        } else {
            setAccount(admin);
        }
        const fetchUsersAndVendors = async () => {
            try {
                const response = await getUsers(token);
                setUsers(response.length);
                const response1 = await getVendors(token);
                setVendors(response1.vendors.length);
            } catch (error) {
                console.log("Error while fetching users and vendors", error);
            }
        }
        fetchUsersAndVendors();
    }, [navigate, setAccount]);
    
    return (
        <div className=" w-full ">
            <div className="flex justify-between px-4">
                <div className="bg-white px-4 py-2 rounded-md shadow-md">
                    <h1 className="text-[#219C90] text-lg font-medium">Total Users: <strong>{users}</strong></h1>
                </div>
                <div className="bg-white px-4 py-2 rounded-md shadow-md">
                <h1 className="text-[#219C90] text-lg font-medium">Total Vendors: <strong>{vendors}</strong></h1>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-2 p-10 text-center md:flex-row ">
                <div className="w-1/2 ">
                    <img src={bg} alt="Welcome" className="w-3/4 h-auto object-cover rounded-lg mb-6"/>
                </div>
                <div className="m-auto">
                    <h1 className="text-4xl font-bold text-gray-700 mb-4">Welcome, Admin!</h1>
                    <p className="text-gray-600 mb-6">We{"'"}re glad to have you back. Use the navigation menu to manage the platform.</p>
                    <div className="flex flex-col items-center justify-center gap-2 m-auto">
                        <div className="flex items-center gap-2">
                            <FiUsers className="text-2xl hover:text-[#8EC44C] " />
                            <button
                                onClick={() => navigate('/users')}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-48"
                            >
                                Manage Users
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                        <PiUserSwitch className="text-2xl hover:text-[#8EC44C]"/>
                            <button
                                onClick={() => navigate('/vendors')}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 w-48"
                            >
                                Manage Vendors
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                        <IoSettingsOutline className="text-2xl hover:text-[#8EC44C] "/>
                            <button
                                onClick={() => navigate('/settings')}
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600  w-48"
                            >
                                Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
