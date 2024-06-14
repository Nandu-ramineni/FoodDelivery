import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const Navbar = () => {
    const navigate = useNavigate();
    const { account, setAccount } = useContext(DataContext);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const storedAccount = localStorage.getItem('admin');
        if (storedAccount) {
            setAccount(storedAccount);
        }
    }, [setAccount]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('admin');
        setAccount(null);
        navigate('/login');
    };

    return (
        <div className="w-full flex justify-between items-center py-6 px-4">
            {account ? (
                <div>
                    <h2 className="text-lg">Hello👋 {account}</h2>
                </div>
            ) : (
                <p></p>
            )}
            {account ? (
                <div className="relative">
                    <div
                        className="flex justify-center items-center gap-3 cursor-pointer"
                        onClick={() => setDropdownVisible(!dropdownVisible)}
                    >
                        <img
                            src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg"
                            alt="dp"
                            className="w-9 h-9 rounded-2xl"
                        />
                        <div>
                            <h2 className="text-sm">{account}</h2>
                            <p className="text-xs">admin</p>
                        </div>
                    </div>
                    {dropdownVisible && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                            <button
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => navigate('/profile')}
                            >
                                Profile
                            </button>
                            <button
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => navigate('/settings')}
                            >
                                Settings
                            </button>
                            <button
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <button
                        className="text-[#FF7D29] text-lg font-medium"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
