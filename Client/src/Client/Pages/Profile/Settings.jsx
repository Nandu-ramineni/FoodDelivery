import  { useState } from 'react';
import { FaEnvelope, FaBell, FaMoon, FaPalette, FaLanguage, FaUserShield } from 'react-icons/fa';
import { IoSettingsOutline } from "react-icons/io5";
const Settings = () => {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        pushNotifications: false,
        darkMode: false,
        theme: 'light',
        language: 'english',
        activityTracking: false,
    });

    const handleToggle = (setting) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [setting]: !prevSettings[setting],
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: value,
        }));
    };

    return (
        <div className="w-full h-full p-4">
            <h1 className="pt-4 text-gray-700 font-semibold text-center text-xl flex  items-center gap-2"><IoSettingsOutline /> Settings</h1>
            <div className="">
                <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 my-3 space-y-4">
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-700" />
                        <span className="text-gray-700">Email Notifications</span>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none ">
                        <input
                            type="checkbox"
                            name="emailNotifications"
                            id="emailNotifications"
                            checked={settings.emailNotifications}
                            onChange={() => handleToggle('emailNotifications')}
                            className="toggle-checkbox"
                        />
                        <label
                            htmlFor="emailNotifications"
                            className="toggle-label"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 my-3 space-y-4">
                    <div className="flex items-center gap-2">
                        <FaBell className="text-gray-700" />
                        <span className="text-gray-700">Push Notifications</span>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                            type="checkbox"
                            name="pushNotifications"
                            id="pushNotifications"
                            checked={settings.pushNotifications}
                            onChange={() => handleToggle('pushNotifications')}
                            className="toggle-checkbox"
                        />
                        <label
                            htmlFor="pushNotifications"
                            className="toggle-label"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 my-3 space-y-4">
                    <div className="flex items-center gap-2">
                        <FaMoon className="text-gray-700" />
                        <span className="text-gray-700">Dark Mode</span>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                            type="checkbox"
                            name="darkMode"
                            id="darkMode"
                            checked={settings.darkMode}
                            onChange={() => handleToggle('darkMode')}
                            className="toggle-checkbox"
                        />
                        <label
                            htmlFor="darkMode"
                            className="toggle-label"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 my-3 space-y-4">
                    <div className="flex items-center gap-2">
                        <FaPalette className="text-gray-700" />
                        <span className="text-gray-700">Theme</span>
                    </div>
                    <select
                        name="theme"
                        value={settings.theme}
                        onChange={handleChange}
                        className="bg-gray-200 p-2 rounded-lg">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
                <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 my-3 space-y-4">
                    <div className="flex items-center gap-2">
                        <FaLanguage className="text-gray-700" />
                        <span className="text-gray-700">Language</span>
                    </div>
                    <select
                        name="language"
                        value={settings.language}
                        onChange={handleChange}
                        className="bg-gray-200 p-2 rounded-lg">
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                        <option value="chinese">Chinese</option>
                    </select>
                </div>
                <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 my-3 space-y-4">
                    <div className="flex items-center gap-2">
                        <FaUserShield className="text-gray-700" />
                        <span className="text-gray-700">Activity Tracking</span>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                            type="checkbox"
                            name="activityTracking"
                            id="activityTracking"
                            checked={settings.activityTracking}
                            onChange={() => handleToggle('activityTracking')}
                            className="toggle-checkbox"
                        />
                        <label
                            htmlFor="activityTracking"
                            className="toggle-label"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
