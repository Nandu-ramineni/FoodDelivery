import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const DisplayItems = () => {
    const images = [
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png" },
        { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png" },
    ];
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(7);
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth <= 640) {
                setItemsPerPage(3);
            } else if (window.innerWidth <= 768) {
                setItemsPerPage(5);
            } else {
                setItemsPerPage(7);
            }
        };
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    };
    const handleNext = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, images.length - itemsPerPage));
    };

    const currentItems = images.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="items">
            <div className="flex justify-between items-center mt-16">
                <h2 className="text-xl font-bold">What{"'"}s on your Mind?</h2>
                <div className="flex gap-3">
                    <button onClick={handlePrev} disabled={startIndex === 0} className='bg-[#DFDFE4] flex items-center py-2 px-2 rounded-3xl'><FaChevronLeft /></button>
                    <button onClick={handleNext} disabled={startIndex + itemsPerPage >= images.length} className='bg-[#DFDFE4] flex items-center py-2 px-2 rounded-3xl'><FaChevronRight /></button>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 mt-4">
                {currentItems.map((image, index) => (
                    <div key={index} className="item">
                        <img src={image.img} alt="food" className="w-full h-full object-cover cursor-pointer" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayItems;
