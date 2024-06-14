import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoRestaurantOutline, IoSettingsOutline, IoFastFood } from "react-icons/io5";
import { LiaProductHunt } from "react-icons/lia";
import { BiFoodMenu } from "react-icons/bi";
// import { FaRegUserCircle } from "react-icons/fa";
import { CgRecord } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import burger from '../../assets/burger.png';
import { BiHomeCircle } from "react-icons/bi";
const Sidebar = () => {
    const [firmExists, setFirmExists] = useState(false);

    useEffect(() => {
        const firmName = localStorage.getItem('firmName');
        if (firmName) {
            setFirmExists(true);
        }
    }, []);

    return (
        <div className="navbar-container w-52 bg-[#FFFFFF] h-[100vh] rounded-tr-2xl rounded-br-2xl pl-[-4rem] overflow-hidden">
            <Link to='/' className="flex justify-center items-center gap-1 text-[#8EC44C] pt-6">
                <h2 className="text-4xl"><IoFastFood /></h2>
                <h2 className="text-2xl font-medium pt-1">Yummy</h2>
            </Link>
            <div className="block justify-start items-center pt-12">
                <nav className="w-full flex justify-center">
                    <ul className="flex flex-col justify-start items-start">
                        <Link to='/' className="text-[#AAACA9] text-lg font-normal py-2 px-4 cursor-pointer flex items-center gap-2 hover:text-[#8EC44C]">
                            <BiHomeCircle />Home
                        </Link>
                        {!firmExists && (
                            <Link to='/addFirm' className="text-[#AAACA9] text-lg font-normal py-2 px-4 cursor-pointer flex items-center gap-2 hover:text-[#8EC44C]">
                                <IoRestaurantOutline />Add Firm
                            </Link>
                        )}
                        <Link to='/addProduct' className="text-[#AAACA9] text-lg font-normal py-2 px-4 cursor-pointer flex items-center gap-2 hover:text-[#8EC44C]">
                            <LiaProductHunt />Add Item
                        </Link>
                        <Link to='/menu' className="text-[#AAACA9] text-lg font-normal py-2 px-4 flex items-center gap-2 hover:text-[#8EC44C]">
                            <BiFoodMenu />Menu
                        </Link>
                        {/* <Link className="text-[#AAACA9] text-lg font-normal py-2 px-4 flex items-center gap-2 hover:text-[#8EC44C]">
                            <FaRegUserCircle />User Details
                        </Link> */}
                        <Link to='/orders' className="text-[#AAACA9] text-lg font-normal py-2 px-4 flex items-center gap-2 hover:text-[#8EC44C]">
                            <CgRecord />Orders
                        </Link>
                        <Link to='/reviews' className="text-[#AAACA9] text-lg font-normal py-2 px-4 flex items-center gap-2 hover:text-[#8EC44C]">
                            <CiStar />Reviews
                        </Link>
                        <Link to='/drivers' className="text-[#AAACA9] text-lg font-normal py-2 px-4 flex items-center gap-2 hover:text-[#8EC44C]">
                            <FiUserPlus />Drivers
                        </Link>
                        <Link to='/settings' className="text-[#AAACA9] text-lg font-normal py-2 px-4 flex items-center gap-2 hover:text-[#8EC44C]">
                            <IoSettingsOutline />Settings
                        </Link>
                    </ul>
                </nav>
            </div> <br /> <br />
            <img src={burger} alt="img" className="translate-y-8"/>
            <div className="text-center bg-[#B8C8AC]  w-40 rounded-tr-2xl rounded-br-2xl h-44 mt-[-2rem] pt-12 pb-6">
                <p className="pt-4">Share Your Own  <br /><span>Recipe</span></p>
                <button className="bg-[#85BC3A] text-white flex justify-center mx-auto py-2 px-4 rounded-md mb-6 mt-2">Upload Now</button>
            </div>
        </div>
    );
};

export default Sidebar;
