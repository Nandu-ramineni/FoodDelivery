import { useState } from "react";
import { Link } from "react-router-dom";
import { IoFastFood, IoSearch } from "react-icons/io5";
import CustomButtons from "./CustomButtons";
import { TbRosetteDiscount } from "react-icons/tb";
import { MdOutlineSell } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GoHome } from "react-icons/go";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex justify-between items-center px-4 fixed w-full z-10 md:px-20 py-4 shadow-md rounded-br-2xl rounded-bl-2xl bg-white" >
            <div className="flex items-center gap-6">
                <Link to="/" >
                    <h2 className="text-5xl text-[#8EC44C] hover:scale-110 transition ease-in-out flex gap-2 items-center"><IoFastFood /><span className="text-3xl capitalize" style={{ fontFamily: '"Outfit", sans-serif' }}>Yumz</span></h2>
                </Link>
                {/* <div className="hidden md:block">
                    <select className="rounded-lg px-4 py-1 w-60 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8EC44C] transition ease-in-out duration-300">
                        <option value="" disabled selected>Select Location</option>
                        <option value="Hyderabad" >Hyderabad</option>
                        <option value="Nalgonda">Nalgonda</option>
                        <option value="Miryalaguda">Miryalaguda</option>
                    </select>
                </div> */}
            </div>
            <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-[#8EC44C] transition ease-in-out duration-300"><GoHome />Home</Link>
                <Link to="/search" className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-[#8EC44C] transition ease-in-out duration-300"><IoSearch />Search</Link>
                <Link to="/offers" className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-[#8EC44C] transition ease-in-out duration-300"><TbRosetteDiscount />Offers</Link>
                <Link to="/help" className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-[#8EC44C] transition ease-in-out duration-300"><BiSupport />Help</Link>
{/*                 <Link to="https://yumzvendordashboard.netlify.app/" className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-[#8EC44C] transition ease-in-out duration-300"><MdOutlineSell />Be a Vendor</Link> */}
            </div>
            <div className="hidden md:block">
                <CustomButtons />
            </div>
            <div className="md:hidden flex items-center gap-6">
                <CustomButtons />
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl  hover:text-[#8EC44C] transition ease-in-out duration-300">
                    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-br-2xl rounded-bl-2xl md:hidden flex flex-col items-center gap-6 py-4">
                    <select className="rounded-lg px-4 py-1 w-60 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8EC44C] transition ease-in-out duration-300">
                        <option value="" disabled selected>Select Location</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nalgonda">Nalgonda</option>
                        <option value="Miryalaguda">Miryalaguda</option>
                    </select>
                    <Link to="/" className="flex items-center gap-2 text-xl text-gray-700 hover:text-[#8EC44C] transition ease-in-out duration-300"><GoHome />Home</Link>
                    <Link to="/search" className="flex items-center gap-2 text-xl text-gray-700 hover:text-[#8EC44C] transition ease-in-out duration-300"><IoSearch />Search</Link>
                    <Link to="/offers" className="flex items-center gap-2 text-xl text-gray-700 hover:text-[#8EC44C] transition ease-in-out duration-300"><TbRosetteDiscount />Offers</Link>
                    <Link to="/help" className="flex items-center gap-2 text-xl text-gray-700 hover:text-[#8EC44C] transition ease-in-out duration-300"><TbRosetteDiscount />Help</Link>
{/*                     <Link to="https://yumzvendordashboard.netlify.app/" className="flex items-center gap-2 text-xl text-gray-700 hover:text-[#8EC44C] transition ease-in-out duration-300"><MdOutlineSell />Become a Vendor</Link> */}
                    
                </div>
            )}
        </div>
    );
};

export default Navbar;
