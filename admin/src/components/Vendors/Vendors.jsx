import { useEffect, useState } from "react";
import { API_URL, deleteFirmById, getVendors } from "../../services/api";
import { CiLocationOn } from "react-icons/ci";
import { PiBowlFoodLight } from "react-icons/pi";
import { TbSquareDot } from "react-icons/tb";
import * as XLSX from 'xlsx';
import { BsUpload } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

const Vendors = () => {
    const [vendors, setVendors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const response = await getVendors(token);
                if (response && response.vendors) {
                    setVendors(response.vendors);
                }
            } catch (error) {
                console.log("Error while calling getVendors API", error);
            }
        };
        fetchVendors();
    }, [token]);

    const exportToExcel = () => {
        const exportData = vendors.map(vendor => ({
            Username: vendor.username,
            Email: vendor.email,
            FirmName: vendor.firm.map(f => f.firmName).join(", "),
            Area: vendor.firm.map(f => f.area).join(", "),
            Category: vendor.firm.map(f => f.category.join(", ")).join(", "),
            Region: vendor.firm.map(f => f.region.join(", ")).join(", "),
            Offer: vendor.firm.map(f => f.offer).join(", "),
            image: vendor.firm.map(f => f.image).join(", "),
        }));

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Vendors");
        XLSX.writeFile(workbook, "VendorsData.xlsx");
    };

    const deleteFirm = async (firmId) => {
        try {
            const response = await deleteFirmById(firmId, token);
            if (response && response.message) {
                alert(response.message);
                const updatedVendors = vendors.filter(vendor => vendor.firm.every(firm => firm._id !== firmId));
                setVendors(updatedVendors);
            }
        } catch (error) {
            console.log("Error while deleting firm", error);
        }
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredVendors = vendors.filter(vendor =>
        vendor.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.firm.some(firm => firm.firmName.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <div className="flex justify-between items-center px-4">
                <h2 className="text-2xl font-semibold mb-4 px-4 text-gray-700">Vendors Data</h2>
                <button
                    onClick={exportToExcel}
                    className="bg-[#8EC44C] text-white px-4 py-2 rounded-md mb-4 ml-4 flex items-center gap-2"
                >
                    <BsUpload />Excel
                </button>
            </div>
            <div className="w-full flex m-auto py-4">
                <div className="relative w-3/4 m-auto">
                    <input
                        type="text"
                        placeholder="Search by name, email, or firm name"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="border border-gray-300 px-3 py-2 w-full rounded-full focus:outline-none focus:border-[#8EC44C] pl-10"
                    />
                    <div className="absolute left-3 top-2">
                        <AiOutlineSearch className="text-gray-400" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[69vh] overflow-y-scroll" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {filteredVendors.length > 0 ? (
                    filteredVendors.map((vendor) => (
                        <div key={vendor._id} className="p-4">
                            <div className="bg-white p-4 rounded-lg shadow-lg truncate">
                                <h3 className="text-lg font-medium">Name: {vendor.username}</h3>
                                <a href={`mailto:${vendor.email}`} className="text-gray-600 text-sm truncate">Email:{vendor.email}</a>
                                <div className="mt-2">
                                    {vendor.firm.map((firm) => (
                                        <div key={firm._id} className="mt-2 truncate">
                                            <h4 className="font-medium">Firm: {firm.firmName}</h4>
                                            <p className="text-gray-700 mb-2 truncate flex items-center gap-2">
                                                <TbSquareDot className="text-[#8EC44C]" />
                                                {firm.category.join(', ')}
                                            </p>
                                            <p className="text-gray-700 mb-2 flex items-center gap-2">
                                                <PiBowlFoodLight className="text-[#8EC44C]" />
                                                <span className="truncate">{firm.region.join(', ')}</span>
                                            </p>
                                            <p className="text-gray-700 mb-2 flex items-center gap-2">
                                                <CiLocationOn className="text-[#8EC44C]" />
                                                <span className="truncate">{firm.area}</span>
                                            </p>
                                            <div className="flex justify-between">
                                                <p>Offer: {firm.offer}</p>
                                                <button onClick={() => deleteFirm(firm._id)} className="text-red-500 text-lg"><AiOutlineDelete /></button>
                                            </div>
                                            <img src={`${API_URL}/uploads/${firm.image}`} alt={firm.firmName} className="w-full h-48 object-cover mt-2 rounded-md" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h3 className="text-lg font-medium">No Vendors Found</h3>
                )}
            </div>
        </div>
    );
}

export default Vendors;
