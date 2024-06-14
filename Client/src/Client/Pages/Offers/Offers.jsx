import React from 'react';
import { TbRosetteDiscount } from "react-icons/tb";
const offers = [
    {
        id: 1,
        title: "10% off on HDFC Credit Cards",
        description: "Get 10% off on your order when you use HDFC Credit Cards.",
        image: "https://static.vecteezy.com/system/resources/previews/020/190/428/non_2x/hdfc-logo-hdfc-icon-free-free-vector.jpg",
    },
    {
        id: 2,
        title: "15% off on ICICI Debit Cards",
        description: "Enjoy 15% discount on orders above $100 with ICICI Debit Cards.",
        image: "https://www.firstnaukri.com/career-guidance/wp-content/uploads/2023/08/icici-bank.jpg",
    },
    {
        id: 3,
        title: "Shop above $500 and get 20% off",
        description: "Get a flat 20% discount on your orders above $500.",
        image: "https://cdn.wedevs.com/uploads/2021/04/Limited-Time-Offer_-How-To-Write-a-Discount-Offer-For-Limited-Time-Only.png",
    },
    {
        id: 4,
        title: "Free delivery on orders above $50",
        description: "Enjoy free delivery on orders above $50.",
        image: "https://img.freepik.com/premium-vector/free-delivery-banner-with-courier-scooter-delivers-package-free-shipping-order-fast-delivery-badge-advertisement-express-delivery-with-man-scooter-vector-illustration_435184-1202.jpg",
    },
    {
        id: 5,
        title: "Buy 1 Get 1 Free on select items",
        description: "Buy one get one free on select items this weekend.",
        image: "https://media.istockphoto.com/id/1315099583/vector/buy-one-get-one-free-banner-vector-illustration.jpg?s=612x612&w=0&k=20&c=dxiPJflRyiADNXUqJC4ghU1KvNoHdLc6bVzbi_BLSoM=",
    },
    {
        id: 6,
        title: "5% off on all orders",
        description: "Get 5% off on all orders, no minimum spend required.",
        image: "https://static.vecteezy.com/system/resources/thumbnails/019/902/041/small/5-percent-off-yellow-banner-with-five-percent-discount-on-a-black-balloon-for-mega-big-sales-vector.jpg",
    },
    {
        id: 7,
        title: "20% off on your first order",
        description: "First time ordering? Get 20% off on your first purchase.",
        image: "https://images.bewakoof.com/uploads/grid/app/coupon--2-1701604407.jpg",
    },
    {
        id: 8,
        title: "Special discount for members",
        description: "Members enjoy an additional 10% off on all orders.",
        image: "https://imamiddleeast.org/Fall40/image/Promo-Banner40.png",
    },
    {
        id: 9,
        title: "Weekend special: 25% off",
        description: "Enjoy 25% off on your order this weekend only.",
        image: "https://st2.depositphotos.com/1915171/43751/v/450/depositphotos_437513942-stock-illustration-sale-percent-discount-megaphone-yellow.jpg",
    },
    {
        id: 10,
        title: "Festival offer: 30% off",
        description: "Celebrate with a 30% discount during the festival season.",
        image: "https://images.indianexpress.com/2023/11/Diwali_30_Off.jpg?w=414",
    },
    {
        id: 11,
        title: "Refer a friend and get $10 off",
        description: "Refer a friend and both get $10 off your next order.",
        image: "https://www.lukuhome.com/media/wysiwyg/Refer-A-Friend-Roundals.png",
    },
    {
        id: 12,
        title: "Mid-week madness: 10% off",
        description: "Get 10% off on your mid-week orders.",
        image: "https://img.freepik.com/premium-vector/10-off-limited-time-offer-super-discount-discount-promotion-special-offer-10-discount-yellow-sq_901408-1203.jpg",
    },
    {
        id: 13,
        title: "Summer sale: 20% off",
        description: "Cool off with a 20% discount on all orders this summer.",
        image: "https://forums.sonicacademy.com/uploads/default/original/2X/6/6acb120b7d071a19c0e3bfc853349714d65eecfa.jpg",
    },
    {
        id: 14,
        title: "Winter special: 25% off",
        description: "Stay warm with a 25% discount on your winter orders.",
        image: "https://www.shutterstock.com/image-vector/mega-sale-special-offer-25-260nw-2354267527.jpg",
    },
    {
        id: 15,
        title: "Back to school: 15% off",
        description: "Get 15% off on all orders during the back-to-school season.",
        image: "https://www.smtusa.com/uploads/back-to-school-digital-marketing-ideas-smt-orlando-marketing-agency.jpg",
    },
    {
        id: 16,
        title: "Holiday special: 30% off",
        description: "Enjoy a 30% discount on all orders during the holidays.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdceu2VK5v2KlfRBBkGWwoZ6BmMdipLcYG1Q&s",
    },
    {
        id: 17,
        title: "Flash sale: 50% off",
        description: "Don't miss out on our flash sale: 50% off for a limited time.",
        image: "https://img.freepik.com/premium-vector/flash-sale-50-percent-off-discount-banner-promotion-template-vector-images_39405-82.jpg",
    },
    {
        id: 18,
        title: "Clearance sale: up to 70% off",
        description: "Up to 70% off on clearance items. Limited stock available.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiVxhtAOiTIgNEtYOxcQETtj6E4Ulk7Y3-Q&s",
    },
    {
        id: 19,
        title: "Midnight sale: 40% off",
        description: "Get 40% off on orders placed during our midnight sale.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFE3DLY_wH5BeaKcRvIzPDJ1Rdkjecmkhrg&s",
    },
    {
        id: 20,
        title: "Daily deals: 10% off",
        description: "Enjoy 10% off with our daily deals.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTiHQ0jpzZ57ePsvXt04BA3b5Z2_0BwBoDfg&s",
    },
];

const Offer = () => {
    return (
        <div className="offers mx-auto px-8 ">
            <h2 className="text-xl font-semibold mb-4 pt-20 text-gray-700 flex items-center justify-center gap-2 "><TbRosetteDiscount />Exclusive Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {offers.map((offer) => (
                    <div key={offer.id} className="p-4 bg-white rounded-lg shadow-lg">
                        <img
                            src={offer.image} 
                            alt={offer.title}
                            className="w-full h-32 object-cover rounded-md mb-4 bg-white"
                        />
                        <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                        <p className="text-gray-700">{offer.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offer;
