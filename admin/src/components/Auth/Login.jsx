import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from '../../assets/bg.jpg';
import { FaRegUserCircle } from "react-icons/fa";
import { DataContext } from "../../context/DataProvider";
import { authenticateLogin } from "../../services/api";

const LoginInitialValues = {
    username: "",
    password: "",
}

const Login = () => {
    const [data, setData] = useState(LoginInitialValues);
    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);
    const [error, setError] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const admin = localStorage.getItem('admin');
            setAccount(admin);
            navigate('/onboarding')
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
                const { token, username } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('admin', username);
                setAccount(username);
                setData(LoginInitialValues);
                navigate('/onboarding')
            } else {
                console.log("Login failed");
                setError(true);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    return (
        <div className="flex justify-center items-center w-full m-auto  ">
            <div className="flex flex-col mt-[-4rem]  md:flex-row mx-4 bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
                <div className="md:w-1/2 h-auto">
                    <img src={bg} alt="background" className="object-cover w-full h-full" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="w-full overflow-hidden whitespace-nowrap mb-4">
                        <p className="animate-scroll text-teal-500 font-semibold text-center">
                            Login to see exciting offers 🎉 and your insights 📈
                        </p>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700 flex justify-center items-center gap-2">
                        <FaRegUserCircle />Login
                    </h2>
                    <form onSubmit={submitHandler}>
                        <div className="mb-4">
                            <label htmlFor="userName" className="block font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your Username"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#FF7D29]"
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">Invalid Credentials</p>}
                        <button className="w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center mb-2">
                            Login
                        </button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Login;
