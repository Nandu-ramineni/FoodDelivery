import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import AddFirm from "../Components/forms/AddFirm";
import AddProducts from "../Components/forms/AddProducts";
import Login from "../Components/forms/Login";
import SignUp from "../Components/forms/SignUp";
import WelcomePage from "./WelcomePage";
import AllProducts from "../Components/AllProducts";
import ProtectedRoute from "../Components/forms/ProtectedRoute"; 
import { DataContext } from "../Context/DataProvider";
import Orders from "../Components/Orders/Orders";
import Settings from "./Settings/Settings";
import Drivers from "./Drivers/Drivers";
import Reviews from "./Reviews/Reviews";

const HomePage = () => {
    const { account } = useContext(DataContext); 
    const isAuthenticated = !!account; 

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex flex-col w-full">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/addProduct" element={<ProtectedRoute element={<AddProducts />} isAuthenticated={isAuthenticated} />} />
                        <Route path="/welcome" element={<WelcomePage />} />
                        <Route path="/menu" element={<AllProducts />} />
                        <Route path="/orders" element={<ProtectedRoute element={<Orders />} isAuthenticated={isAuthenticated} />} />
                        <Route path="/addFirm" element={<ProtectedRoute element={<AddFirm />} isAuthenticated={isAuthenticated} />} />
                        <Route path="/settings" element={<ProtectedRoute element={<Settings />} isAuthenticated={isAuthenticated} />} />
                        <Route path="/drivers" element={<ProtectedRoute element={<Drivers />} isAuthenticated={isAuthenticated} />} />
                        <Route path="/reviews" element={<ProtectedRoute element={<Reviews/>} isAuthenticated={isAuthenticated} />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default HomePage;
