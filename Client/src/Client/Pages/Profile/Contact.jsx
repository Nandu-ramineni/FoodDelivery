import { useState } from 'react';
import emailjs from 'emailjs-com';
import Contactbg from './Contactbg.png';
import { FaRegUser } from "react-icons/fa6"; import { HiOutlineMail } from "react-icons/hi"; import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai"; import { LuSend } from "react-icons/lu"; import { BiSupport } from "react-icons/bi";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        tel:''
    });
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const showSnackbar = (message) => {
        setSnackbar({
            open: true,
            message,
        });
        setTimeout(() => {
            setSnackbar({
                open: false,
                message: '',
            });
        }, 3000);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_dqxnwde', 'template_aictf9n', e.target, 'ia-QOhpcwXsN3Eu09')
            .then((response) => {
                console.log('Email sent successfully:', response);
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    tel:''
                });
                showSnackbar('Email sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                showSnackbar('Error sending email. Please try again.');
            });
    };
    return (
        <div className="w-full h-full p-4">
            <h2 className="pt-4 text-gray-700 font-semibold text-center text-xl flex  items-center gap-2"><BiSupport /> Contact Us</h2>
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
                <div className="flex-1 mb-8 sm:mb-0 sm:mr-8 flex justify-center m-auto">
                    <img src={Contactbg} alt="img" className="w-3/4 h-auto" />
                </div>
                <div className="flex-1 justify-center m-auto">
                    <form onSubmit={handleSubmit} className="w-full max-w-md text-lg items-center block justify-center">
                        <div className="mb-4">
                            <label htmlFor="name" className="flex  items-center gap-1 text-md font-medium text-gray-700"><FaRegUser /> Full Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder='Enter Your Name' className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="flex  items-center gap-1 text-md font-medium text-gray-700"><HiOutlineMail /> Email Address </label>
                            <input type="email" id="email" name="email" value={formData.email}  onChange={handleChange} placeholder='Email address' required className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tel" className="flex  items-center gap-1 text-md font-medium text-gray-700"><FiPhoneCall /> Contact No </label>
                            <input type="tel" id="tel" name="tel" value={formData.tel}  onChange={handleChange}  required placeholder='Contact No' className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="flex  items-center gap-1 text-md font-medium text-gray-700"><AiOutlineMessage /> Your Message </label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder='Your Message' rows="4" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" ></textarea>
                        </div>
                        <div className="flex justify-center m-auto">
                        <button type="submit" className="w-1/2 flex justify-center items-center gap-1  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"><LuSend /> Send</button>
                        </div>
                        {snackbar.open && (
                            <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
                                {snackbar.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
            <div className='flex flex-col gap-4 lg:flex-row justify-between items-center m-auto pt-8 max-w-screen-xl'>
                <div className="bg-white p-6 lg:p-8 flex-1 rounded-md shadow-md">
                    <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">Contact Information</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                        <div className="text-center ">
                            <a href="mailto:nanduramineni2233@gmail.com" className='flex items-center justify-center pb-4 text-4xl lg:text-4xl' ><HiOutlineMail /></a>
                            <p className="text-gray-700">infoyumz@gmail.com</p>
                            
                        </div>
                        <div className="text-center ">
                            <a href="tel:+91 9063730699" className='flex items-center justify-center text-4xl lg:text-4xl pb-4' ><FiPhoneCall /></a>
                            <p className="text-gray-700">+91 123 457 0004</p>
                            
                        </div>
                        <div className="text-center ">
                            <a href="tel:+9063730699" className='flex items-center justify-center text-4xl lg:text-4xl pb-4 ' ><BiSupport /></a>
                            <p className="text-gray-700">24/7 Support</p>
                            
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-center">Join Our Job Portal</h3>
                        <p className="text-gray-700 text-md font-medium">
                        Yumz simplifies food delivery with an intuitive interface for browsing menus, customizing orders, and real-time delivery tracking.
                        </p>
                        <p className="text-gray-700 font-medium">
                        Yumz offers personalized meal recommendations, seamless payment options, and a rewards program for earning points and discounts.
                        </p>
                    </div>
                </div>
                <div className="flex-1 mt-6 lg:mt-0">
                    <div className="bg-white h-auto lg:h-96 rounded-md overflow-hidden shadow-md">
                        <iframe title="Google Maps - Jubilee Hills, Hyderabad, Telangana"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.78522462824!2d78.38917185706381!3d17.431062091644133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cc62a87613%3A0xa8317fa22362be49!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1705490717880!5m2!1sen!2sin"  width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;