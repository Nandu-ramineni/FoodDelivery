import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { authenticateSignUp } from "../../Services/api";

const SignUpInitialValues = {
    username: "",
    email: "",
    password: "",
}

const SignUp = () => {
    const [data,setData] = useState(SignUpInitialValues);
    const navigate = useNavigate();
    const changeHandler = (e) =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await authenticateSignUp(data);
        navigate('/login');
        console.log(response);
        setData(SignUpInitialValues);
    }
    
    return (
        <div className=" flex justify-center items-center w-full">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Vendor Register</h2>
                <form onSubmit={submitHandler}>
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="email" name="email" value={data.email} placeholder="Enter your Email" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]" onChange={changeHandler} required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input type="text" name="username" value={data.username} placeholder="Enter your Email" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]" onChange={changeHandler} required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input type="password" name="password" value={data.password} placeholder="Enter your Password" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]" onChange={changeHandler} required/>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">SignUp</button>
                    
                    <div className="flex gap-3 justify-center">
                        <p>Already a vendor!</p>
                        <Link to='/login' className="text-[#FF7D29] font-semibold">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
