import  { useState } from 'react';
import { FaStore, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBell, FaTruck } from 'react-icons/fa';

const Settings = () => {
    const [businessName, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [notificationPreferences, setNotificationPreferences] = useState({
        email: false,
        sms: false,
        push: false,
    });
    const [deliverySettings, setDeliverySettings] = useState({
        minOrderAmount: "",
        deliveryFee: "",
        deliveryRadius: "",
    });

    const handleNotificationChange = (e) => {
        const { name, checked } = e.target;
        setNotificationPreferences((prevPreferences) => ({
            ...prevPreferences,
            [name]: checked,
        }));
    };

    const handleDeliverySettingChange = (e) => {
        const { name, value } = e.target;
        setDeliverySettings((prevSettings) => ({
            ...prevSettings,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            businessName,
            email,
            phone,
            address,
            notificationPreferences,
            deliverySettings,
        });
    };

    return (
        <div className="container px-4 mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Vendor Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700">
                        <FaStore className="inline-block mr-2" /> Business Name
                    </label>
                    <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">
                        <FaEnvelope className="inline-block mr-2" /> Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">
                        <FaPhone className="inline-block mr-2" /> Phone
                    </label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">
                        <FaMapMarkerAlt className="inline-block mr-2" /> Address
                    </label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">
                        <FaBell className="inline-block mr-2" /> Notification Preferences
                    </label>
                    <div className="mt-2 space-y-2">
                        <div>
                            <input
                                type="checkbox"
                                name="email"
                                checked={notificationPreferences.email}
                                onChange={handleNotificationChange}
                                className="mr-2"
                            />
                            <label>Email Notifications</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="sms"
                                checked={notificationPreferences.sms}
                                onChange={handleNotificationChange}
                                className="mr-2"
                            />
                            <label>SMS Notifications</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="push"
                                checked={notificationPreferences.push}
                                onChange={handleNotificationChange}
                                className="mr-2"
                            />
                            <label>Push Notifications</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700">
                        <FaTruck className="inline-block mr-2" /> Delivery Settings
                    </label>
                    <div className="space-y-2 mt-2">
                        <input
                            type="number"
                            name="minOrderAmount"
                            value={deliverySettings.minOrderAmount}
                            onChange={handleDeliverySettingChange}
                            placeholder="Minimum Order Amount"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="number"
                            name="deliveryFee"
                            value={deliverySettings.deliveryFee}
                            onChange={handleDeliverySettingChange}
                            placeholder="Delivery Fee"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="number"
                            name="deliveryRadius"
                            value={deliverySettings.deliveryRadius}
                            onChange={handleDeliverySettingChange}
                            placeholder="Delivery Radius (km)"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Save Settings
                </button>
            </form>
        </div>
    );
};

export default Settings;
