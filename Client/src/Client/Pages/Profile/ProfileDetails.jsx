import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getUserProfile } from "../../Services/api";
import LatestNews from "./LatestNews";
const ProfileDetails = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const userId = localStorage.getItem('userId');
            try {
                const response = await getUserProfile(userId);
                setUsers(response);
            } catch (error) {
                console.log("Error while calling getUserProfile api", error);
            }
        }
        getUsers();
    }, [])
    const logoutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userId');
        navigate('/login');
    }

    return (
        <div className="w-full pt-4">
            <div className="flex justify-between items-center px-4 py-4">
                <div className="lg: flex justify-center items-center gap-2 ">
                    <div className="flex flex-col items-center">
                        <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg" alt="profile" className="w-16 h-16 rounded-full" />
                    </div>
                    <div>
                        <p className="text-gray-700 font-bold text-xl "> {users.userName}</p>
                        <p className="text-gray-500 font-medium text-sm ">{users.email}</p>
                        <p className="text-gray-500 font-medium text-sm ">{users.phoneNumber}</p>
                    </div>
                </div>
                <abbr title="logout">
                <button
                    onClick={logoutHandler}
                    className=" bg-red-500 text-white py-1.5 px-2 rounded-2xl hover:bg-red-600 transition duration-300">
                    <FaPowerOff />
                </button>
                </abbr>
            </div>
            <LatestNews/>
        </div>
        
    )
}

export default ProfileDetails
