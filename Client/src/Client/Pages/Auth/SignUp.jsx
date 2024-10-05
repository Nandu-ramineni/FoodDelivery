import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticateSignUp } from "../../Services/api";
import bg from '../../../assets/bg.jpg';
// import { FaRegUserCircle } from "react-icons/fa";

const SignUpInitialValues = {
    userName: "",
    email: "",
    phoneNumber: '',
    password: "",
}

const SignUp = () => {
    const [data, setData] = useState(SignUpInitialValues);
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const navigate = useNavigate();
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
        const response = await authenticateSignUp(data);
        navigate('/login');
        console.log(response);
        setData(SignUpInitialValues);
        } catch(err){
            console.log("error");
            setLoading(false);
        }
    }
    return (
        <div className="flex justify-center items-center w-full bg-gray-100 ">
        <div className="flex flex-col my-24 md:flex-row mx-4 bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl ">
            <div className="md:w-1/2 h-auto">
                <img src={bg} alt="background" className="object-cover w-full h-full" />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-center">SignUp</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="email" name="email" value={data.email} placeholder="Enter your Email" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]" onChange={changeHandler} required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input type="text" name="userName" value={data.userName}  placeholder="Enter your username" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]" onChange={changeHandler} required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-700">Mobile No</label>
                        <input type="text" name="phoneNumber" value={data.phoneNumber} placeholder="Enter your Mobile No" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]" onChange={changeHandler} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input type="password" name="password" value={data.password} placeholder="Enter your Password" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]" onChange={changeHandler} required/>
                    </div>
                    <button className="w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">SignUp</button>
                    
                    
                </form>
                <div className="flex gap-3 mt-6 justify-center">
                    <p>Already Have an account?</p>
                    <Link to='/login' className="text-[#8EC44C] font-semibold ">Login</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp
