import { Link } from "react-router-dom"
import {  IoSettingsOutline, IoFastFood } from "react-icons/io5";
import { BiHomeCircle } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { PiUserSwitch } from "react-icons/pi";
const SideBar = () => {
    return (
        <div className="navbar-container w-52 bg-[#FFFFFF] h-[100vh] shadow-lg rounded-tr-2xl rounded-br-2xl pl-[-4rem] overflow-hidden">
            <Link to='/' className="flex justify-center items-center gap-1 text-[#8EC44C] pt-6">
                <h2 className="text-4xl"><IoFastFood /></h2>
                <h2 className="text-2xl font-medium pt-1">Yumz</h2>
            </Link>
            <div className="block justify-start items-center pt-12">
                <nav className="w-full flex justify-center">
                    <ul className="flex flex-col justify-start items-start">
                        <Link to='/onboarding' className="text-[#AAACA9] text-lg font-normal py-2 px-4 cursor-pointer flex items-center gap-2 hover:text-[#8EC44C]">
                            <BiHomeCircle />Home
                        </Link>
                        <Link to='/users' className="text-[#AAACA9] text-lg font-normal py-2 px-4 cursor-pointer flex items-center gap-2 hover:text-[#8EC44C]">
                            <FiUsers />Users
                        </Link>
                        <Link to='/vendors' className="text-[#AAACA9] text-lg font-normal py-2 px-4 flex items-center gap-2 hover:text-[#8EC44C]">
                            <PiUserSwitch /> Vendors
                        </Link>
                        <Link to='/settings' className="text-[#AAACA9] text-lg font-normal py-2 px-4 flex items-center gap-2 hover:text-[#8EC44C]">
                            <IoSettingsOutline />Settings
                        </Link>
                    </ul>
                </nav>
            </div> 
            
            
        </div>
    )
}

export default SideBar
