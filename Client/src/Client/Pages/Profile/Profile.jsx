import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProfileDetails from "./ProfileDetails";
import Orders from "../Orders/Orders";
import Settings from "./Settings";
import Contact from "./Contact";

const Profile = () => {
    return (
        <div className="w-full pt-20 h-[100vh] overflow-hidden">
            <div className="flex h-full">
                <Sidebar className="z-50" />
                <div className="flex-1 h-full overflow-y-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    <Routes>
                        <Route path="/" element={<ProfileDetails />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="support" element={<Contact/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Profile;
