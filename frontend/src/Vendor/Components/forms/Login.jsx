import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticateLogin } from "../../Services/api";
import { DataContext } from "../../Context/DataProvider";

const LoginInitialValues = {
    username: "",
    password: "",
}

const Login = () => {
    const [data, setData] = useState(LoginInitialValues);
    const navigate = useNavigate();
    const { setAccount,setFirmName } = useContext(DataContext);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const vendorUsername = localStorage.getItem('vendorUsername');
            setAccount(vendorUsername);
            navigate('/addFirm');
        }
    }, [navigate, setAccount]);

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await authenticateLogin(data);
            console.log(response);
            if (response && response.status === 200) {
                console.log("Login Successful");
                const { token, vendorUsername, vendorId } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('vendorUsername', vendorUsername);
                setAccount(vendorUsername);
                setData(LoginInitialValues);
                navigate('/welcome');
                // const vendorResponse = await fetch(`http://localhost:7000/vendor/getVendorById/${vendorId}`);
                const vendorResponse = await fetch(`https://fooddelivery-xe7w.onrender.com/vendor/getVendorById/${vendorId}`);
                const vendorData = await vendorResponse.json();
                if (vendorResponse.status === 200) {
                    const vendorFirmId = vendorData.vendorFirmId;
                    const firmName = vendorData.vendorId.firm[0].firmName;
                    console.log("Firm Name:", firmName);
                    localStorage.setItem('firmName', firmName);
                    setFirmName(firmName);
                    localStorage.setItem('vendorFirmId', vendorFirmId);
                }
            } else {
                console.log("Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }
    return (
        <div className="flex justify-center items-center w-full">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Vendor Login</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Enter your Username" 
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]" 
                            onChange={changeHandler}  required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter your Password" 
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]" 
                            onChange={changeHandler} required
                        />
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                        Login
                    </button>
                </form>
                <div className="flex gap-3 mt-4">
                    <p>Are you a New Vendor?</p>
                    <Link to='/signUp' className="text-[#FF7D29] font-semibold">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
