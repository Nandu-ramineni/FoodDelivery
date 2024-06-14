import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';

const faqs = [
    {
        question: "How do I place an order?",
        answer: "To place an order, select the items you want, add them to your cart, and proceed to checkout. You can choose your payment method and confirm your order.",
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept various payment methods including credit/debit cards, net banking, and popular digital wallets.",
    },
    {
        question: "How can I track my order?",
        answer: "You can track your order in the 'My Orders' section of the app. You'll also receive real-time updates via notifications.",
    },
    {
        question: "What should I do if my order is late?",
        answer: "If your order is late, please check the tracking details. If you need further assistance, contact our support team through the app's help section.",
    },
    {
        question: "How do I cancel my order?",
        answer: "You can cancel your order from the 'My Orders' section before it is dispatched. Once dispatched, cancellations are not possible.",
    },
    {
        question: "What is the refund policy?",
        answer: "Refunds are processed within 5-7 business days for canceled or returned orders, depending on the payment method used.",
    },
    {
        question: "How do I use a promo code?",
        answer: "You can apply a promo code at checkout. Enter the code in the promo code field and the discount will be applied to your total.",
    },
    {
        question: "How do I contact customer support?",
        answer: "You can contact customer support through the 'Help' section in the app or by calling our customer service number.",
    },
];

const tips = [
    "Ensure your delivery address is correct for timely delivery.",
    "Check the estimated delivery time before placing an order.",
    "Use promo codes and offers to save on your orders.",
    "Keep your app updated for the best experience and new features.",
    "Provide accurate contact information for any delivery issues.",
];

const contactInfo = {
    phone: "+1-800-123-4567",
    email: "support@fooddeliveryapp.com",
    address: "123 Food Street, Culinary City, Foodland",
};

const Help = () => {
    const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaqIndex(index === expandedFaqIndex ? null : index);
    };

    return (
        <div className="offers mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4 pt-20">Help & Support</h2>

            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                            <div className="flex justify-between items-center">
                                <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                                <button onClick={() => toggleFaq(index)} className="text-xl focus:outline-none">
                                    {expandedFaqIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                </button>
                            </div>
                            {expandedFaqIndex === index && (
                                <p className="text-gray-700 mt-2">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Tips for Using the App</h3>
                <ul className="list-disc pl-6 space-y-2">
                    {tips.map((tip, index) => (
                        <li key={index} className="text-gray-700 flex items-center">
                            <MdOutlineTipsAndUpdates className="mr-2 text-green-500" />{tip}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <div className="space-y-4">
                    <p className="text-gray-700 flex items-center">
                        <FaPhone className="mr-2 text-green-500" />
                        <strong>Phone:</strong> {contactInfo.phone}
                    </p>
                    <p className="text-gray-700 flex items-center">
                        <FaEnvelope className="mr-2 text-green-500" />
                        <strong>Email:</strong> <a href={`mailto:${contactInfo.email}`} className="text-blue-500">{contactInfo.email}</a>
                    </p>
                    <p className="text-gray-700 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-green-500" />
                        <strong>Address:</strong> {contactInfo.address}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Help;
