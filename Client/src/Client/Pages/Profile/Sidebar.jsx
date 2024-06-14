import { useState } from 'react';
import { Link } from "react-router-dom";
import { CgProfile, CgShoppingBag } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { IoIosArrowForward,IoMdClose } from "react-icons/io";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className="fixed left-4 z-50 bg-[#8EC44C] text-white p-1 rounded-full md:hidden mt-1"
                onClick={toggleSidebar}
            >
                {isOpen ? <IoMdClose className="text-xl" /> : <IoIosArrowForward className="text-xl" />}
            </button>
            <div className={`navbar-container fixed ${isOpen ? "top-0.5 md:top-20" : "top-20 md:top-1"} left-0 h-full z-40 bg-[#F9FAFB] shadow-md transform ${isOpen ? "translate-x-0 " : "-translate-x-full"} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-40 md:w-40 overflow-hidden rounded-tr-2xl rounded-br-2xl`} style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="block justify-start items-center pt-12">
                    <nav className="w-full flex justify-center">
                        <ul className="flex flex-col justify-start items-start">
                            <li className="py-3 ">
                                <Link to="/profile" className="text-[#374151] font-medium flex justify-center items-center gap-2 hover:text-[#8EC44C] transition ease-in-out"><CgProfile /> Profile</Link>
                            </li>
                            <li className="py-3 ">
                                <Link to="orders" className="text-[#374151] font-medium flex justify-center items-center gap-2 hover:text-[#8EC44C] transition ease-in-out"><CgShoppingBag /> Orders</Link>
                            </li>
                            <li className="py-3 ">
                                <Link to="settings" className="text-[#374151] font-medium flex justify-center items-center gap-2 hover:text-[#8EC44C] transition ease-in-out"><IoSettingsOutline /> Settings</Link>
                            </li>
                            <li className="py-3 ">
                                <Link to="support" className="text-[#374151] font-medium flex justify-center items-center gap-2 hover:text-[#8EC44C] transition ease-in-out"><BiSupport /> Support</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
