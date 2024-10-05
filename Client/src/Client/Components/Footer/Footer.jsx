import React from "react";
import { FaInstagram, FaYoutube, FaFacebook , } from "react-icons/fa";
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";
import shipping from '../../../assets/fast-delivery.png';
import wallet from '../../../assets/wallet.png';
import { Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import visa from '../../../assets/visa2x.avif';
import master from '../../../assets/master_card2x.avif';
import american from '../../../assets/american_express2x.avif';
import rupay from '../../../assets/rupay2x.avif';
import net from '../../../assets/netbanking.avif';
import phonepe from '../../../assets/phonepe.avif';
import paytm from '../../../assets/paytm.avif';
import cred from '../../../assets/cred.avif';
import mob from '../../../assets/mobikwik.avif';
const Footer = () => {
    return (
        <footer className="w-full bg-[#F5F5F5] text-black p-4">
            <div className="flex flex-col justify-around items-center gap-4 py-4 px-4 md:flex-row border-b border-gray-200">
                <div className="flex flex-col justify-around items-center gap-12  md:flex-row">
                    <div className="flex  items-center gap-2">
                        <img src={shipping} alt="Free Shipping" className=" w-24 h-24 py-2 px-1 border rounded-full object-contain " />
                        <p className="text-center"><span className="text-green-500 font-medium text-lg">Free Delivery</span> <br /> On Order Above Rs. 399</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={wallet} alt="COD Available" className=" w-20 h-20 py-2 px-1 border rounded-full " />
                        <p className="text-center"><span className="text-green-500 font-medium text-lg">COD Available</span> <br /> @ Rs.119 Per Order</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p>Have Queries or Concerns?</p>
                    <Link to="/profile/support" className="bg-white border border-green-500 text-black px-4 py-2 rounded-xl">CONTACT US</Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center gap-4 py-4 border-b border-gray-200">
                <div className="mb-8 md:mb-0">
                <h2 className="text-5xl text-[#8EC44C] hover:scale-110 transition ease-in-out uppercase flex items-center gap-2"><IoFastFood /><span className="text-3xl capitalize" style={{ fontFamily: '"Outfit", sans-serif' }}> V-Eats</span></h2>
                <h4 className="text-lg py-2">Locate us:</h4>
                <p className="text-gray-400 py-1">Head Office: Jubiliee Hills</p>
                <p className="text-gray-400 py-1">Road No 05 Opposite to Metro Station</p>
                <p className="text-gray-400 py-1">Hyderabad,Telangana. 501506</p>
                <div className="flex  items-start gap-4 mt-4 text-2xl ">
                    <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaInstagram /></a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaFacebook /></a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaYoutube /></a>
                </div>
                </div>
                <div className="flex flex-col gap-20  md:flex-row ">
                    <div>
                        <h4 className="font-bold mb-4">USEFUL LINKS</h4>
                        <ul className="">
                            <li className="mb-2"><Link to='/' className="hover:text-green-500">Home</Link></li>
                            <li className="mb-2"><Link to='/search' className="hover:text-green-500">Search</Link></li>
                            <li className="mb-2"><Link to='/offers' className="hover:text-green-500">Offers</Link></li>
                            <li className="mb-2"><Link to='/help' className="hover:text-green-500">Help</Link></li>
                            <li className="mb-2"><Link to='/profile/support' className="hover:text-green-500">Contact Us</Link></li>
                            <li className="mb-2"><Link to='https://yumzvendordashboard.netlify.app/' className="hover:text-green-500">Be a Vendor</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">CATEGORIES</h4>
                        <ul>
                            <li className="mb-2"><Link to='' className="hover:text-green-500">South Indian</Link></li>
                            <li className="mb-2"><Link to='' className="hover:text-green-500">North Indian</Link></li>
                            <li className="mb-2"><Link to='' className="hover:text-green-500">American</Link></li>
                            <li className="mb-2"><Link to='' className="hover:text-green-500">Italian</Link></li>
                            <li className="mb-2"><Link to='' className="hover:text-green-500">Chinese</Link></li>
                            <li className="mb-2"><Link to='' className="hover:text-green-500">Bakery</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">MY ACCOUNT</h4>
                        <ul>
                            <li className="mb-2"><Link to='/profile' className="hover:text-green-500">Account</Link></li>
                            <li className="mb-2"><Link to='/profile/orders' className="hover:text-green-500">Orders</Link></li>
                            <li className="mb-2"><Link to='/profile' className="hover:text-green-500">profile</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="block">
                    <div className="flex flex-col items-center gap-4">
                        <div className="mb-2">
                            <GooglePlayButton className="bg-white text-black text-xs py-5 mb-2" height={60} direction={"row"} width={200} />
                        </div>
                        <div className="mb-2">
                            <AppStoreButton className="bg-white text-black" height={60} direction={"row"} width={200} />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col justify-around items-center md:flex-row">
                <div className="">
                <p className="text-center text-green-500 mt-4">100% Payment Protection, Easy Return Policy</p>
                <div className="flex flex-wrap justify-between mt-4">
                    <img src={visa} alt="Visa" className="mr-4 object-contain w-16 h-16" />
                    <img src={master} alt="MasterCard" className="mr-4 object-contain w-16 h-16" />
                    <img src={rupay} alt="RuPay" className="mr-4 object-contain w-16 h-16" />
                    <img src={net} alt="Net Banking" className="mr-4 object-contain w-16 h-16" />
                    <img src={phonepe} alt="PhonePe" className="mr-4 object-contain w-16 h-16" />
                    <img src={paytm} alt="Paytm" className="mr-4 object-contain w-16 h-16" />
                    <img src={mob} alt="MobiKwik" className="mr-4 object-contain w-16 h-16" />
                    <img src={cred} alt="cred" className="mr-4 object-contain w-16 h-16" />
                </div>
                </div>
                <div>
                    <p className="font-medium">&copy; {new Date().getFullYear()} YumZ. All rights reserved.</p> <br />
                    <p className="text-gray-400">Designed and Developed by <a href="https://nanduvarmaportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">Nandu Varma</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
