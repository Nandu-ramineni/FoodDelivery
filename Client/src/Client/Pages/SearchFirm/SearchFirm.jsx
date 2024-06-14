import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FirmsCollections from '../../Components/FirmsCollections';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchFirm = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const vendorsData = useSelector((state) => state.getVendors);
    const { vendors } = vendorsData;

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredFirms = vendors && vendors.vendors && vendors.vendors.length > 0
        ? vendors.vendors.filter((vendor) =>
            vendor.firm.some(firm => firm.firmName.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        : [];

    return (
        <div className="container mx-auto pt-24">
            <div className="flex justify-center my-4">
                <div className="relative w-full md:w-1/2">
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={handleSearch} 
                        className="px-4 py-2 border rounded-2xl w-full pl-10 focus:outline-none focus:ring-1 focus:ring-gray-400" 
                        placeholder="Search Restaurants in Hyderabad... "
                    />
                    <AiOutlineSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
            </div>
            <FirmsCollections filteredVendors={filteredFirms} />
        </div>
    );
};

export default SearchFirm;
