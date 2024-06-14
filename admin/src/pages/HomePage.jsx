import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import SideBar from "../components/SideBar/SideBar";
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Auth/Login';
import WelcomePage from "./WelcomePage";
import Users from "../components/Users/Users";
import Vendors from "../components/Vendors/Vendors";
import ProtectedRoute from "../components/ProtectedRoutes";
import Settings from "../components/settings/Settings";

const HomePage = () => {
    const { account } = useContext(DataContext);
    const isAuthenticated = !!account;

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col w-full">
                <Navbar />
                <Routes>
                    <Route path="/onboarding" element={<WelcomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/users" element={<ProtectedRoute element={<Users />} isAuthenticated={isAuthenticated} />} />
                    <Route path="/vendors" element={<ProtectedRoute element={<Vendors />} isAuthenticated={isAuthenticated} />} />
                    <Route path="/settings" element={<ProtectedRoute element={<Settings />} isAuthenticated={isAuthenticated} />} />
                </Routes>
            </div>
        </div>
    );
}

export default HomePage;
