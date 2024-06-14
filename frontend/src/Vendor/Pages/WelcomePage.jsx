import { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataProvider";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, BarChart, Bar, Legend, AreaChart, Area
} from 'recharts';
import login from '../../assets/login.png';
import { useState } from "react";
import { getOrders } from "../Services/api";
import { FaPercentage, FaGift, FaCoffee, FaPizzaSlice, FaHamburger } from 'react-icons/fa';

const WelcomePage = () => {
    const { account, firmName, setFirmName } = useContext(DataContext);
    const [orders, setOrders] = useState([]);
    const [totalamount, setTotalAmount] = useState(0);
    
    useEffect(() => {
        const storedFirmName = localStorage.getItem('firmName');
        if (storedFirmName) {
            setFirmName(storedFirmName);
        }
        const fetchOrders = async () => {
            try {
                const response = await getOrders();
                setOrders(response.length);
                const totalAmt = response.reduce((total, order) => total + order.totalAmount, 0);
                setTotalAmount(totalAmt);
            } catch (error) {
                console.log("Error while fetching orders", error);
            }
        }
        fetchOrders();
    }, [setFirmName, setOrders]);

    const orderRateData = [
        { name: 'Jun', orders: 40 },
        { name: 'Jul', orders: 80 },
        { name: 'Aug', orders: 20 },
        { name: 'Sep', orders: 60 },
        { name: 'Oct', orders: 30 },
        { name: 'Nov', orders: 90 },
        { name: 'Dec', orders: 50 },
    ];

    const popularFoodData = [
        { name: 'Asian Foods', value: 55 },
        { name: 'Italian Foods', value: 40 },
        { name: 'Western Foods', value: 25 },
    ];

    const activityData = [
        { name: 'Apr', activity: 80 },
        { name: 'May', activity: 50 },
        { name: 'Jun', activity: 70 },
        { name: 'Jul', activity: 90 },
        { name: 'Aug', activity: 60 },
        { name: 'Sep', activity: 100 },
        { name: 'Oct', activity: 80 },
        { name: 'Nov', activity: 110 },
        { name: 'Dec', activity: 120 },
    ];

    const miniChartData = [
        { name: 'Jan', value: 40 },
        { name: 'Feb', value: 30 },
        { name: 'Mar', value: 20 },
        { name: 'Apr', value: 27 },
        { name: 'May', value: 18 },
        { name: 'Jun', value: 23 },
        { name: 'Jul', value: 34 },
        { name: 'Aug', value: 44 },
        { name: 'Sep', value: 65 },
        { name: 'Oct', value: 55 },
        { name: 'Nov', value: 42 },
        { name: 'Dec', value: 37 },
    ];

    const COLORS = ['#FF8042', '#FFBB28', '#00C49F'];

    if (!account) {
        return (
            <div className="flex flex-col items-center justify-center m-auto ">
                <img src={login} alt="Random Placeholder" className="mb-4 w-1/4 " />
                <h2 className="text-2xl font-semibold">Please sign in to view your insights, orders, etc.</h2>
            </div>
        );
    }

    return (
        <div className="w-full pt-6 h-[89vh] overflow-y-scroll" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="flex justify-around h-full">
                <div className="w-3/4">
                    <section className="banner rounded-md text-white text-center py-20 mx-6">
                        <h1 className="text-4xl font-bold mb-4">Welcome,🙏 {firmName}!</h1>
                        <p className="text-xl">Partnering for Success</p>
                    </section>
                    <section id="offers" className="py-12  ">
                        <div className="container mx-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                            <div className=" p-6 rounded-lg  flex flex-col ">
                                <h2 className="text-2xl font-semibold mb-4">🎉 Today{"'"}s Offers</h2>
                                <p className="text-xl flex  items-center font-medium py-2 gap-2"><FaPercentage className="mr-2 text-[#85BC3A]"/> 50% off on all orders</p>
                                <p className="text-xl flex items-center font-medium py-2 gap-2"><FaGift className="mr-2 text-[#85BC3A]"/> Buy 1 Get 1 Free on selected items</p>
                                <p className="text-xl flex items-center font-medium py-2 gap-2"><FaCoffee className="mr-2 text-[#85BC3A]"/> Free coffee with breakfast</p>
                                <p className="text-xl flex items-center font-medium py-2 gap-2"><FaPizzaSlice className="mr-2 text-[#85BC3A]"/> Special discount on pizzas</p>
                                <p className="text-xl flex items-center font-medium py-2 gap-2"><FaHamburger className="mr-2 text-[#85BC3A]"/> Free burger with any combo meal</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="block justify-center gap-3">
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <h2 className="text-2xl font-semibold mb-4">Total Orders</h2>
                        <p className="text-3xl font-bold">{orders}</p>
                        <p className="text-green-500 mt-2">+56%</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <AreaChart data={miniChartData}>
                                <Area type="monotone" dataKey="value" stroke="#82ca9d" fill="#82ca9d" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center mt-2">
                        <h2 className="text-2xl font-semibold mb-4">Total Revenue</h2>
                        <p className="text-3xl font-bold">₹ {totalamount}</p>
                        <p className="text-green-500 mt-2">+34.7%</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart data={miniChartData}>
                                <Line type="monotone" dataKey="value" stroke="#ff7300" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="flex justify-around px-8">
                <section id="order-rate" className="py-12 w-1/2">
                    <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Order Rate</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={orderRateData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="orders" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </section>

                <section id="popular-food" className="py-12 text-center w-1/2">
                    <div className="container mx-auto">
                        <h2 className="text-2xl font-semibold mb-4">Popular Food</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={popularFoodData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label
                                >
                                    {popularFoodData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </section>
            </div>

            <section id="activity" className="py-12 px-8">
                <div className="container mx-auto bg-white p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-semibold mb-4">Activity</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={activityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="activity" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>

            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} {firmName}. All rights reserved.</p>
                    <div className="mt-2">
                        <a href="#" className="text-gray-400 hover:text-white mx-2">Facebook</a>
                        <a href="#" className="text-gray-400 hover:text-white mx-2">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default WelcomePage;
