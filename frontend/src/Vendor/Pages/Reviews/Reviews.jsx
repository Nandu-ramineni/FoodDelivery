
import { FaStar } from 'react-icons/fa';

const reviewsList = [
    {
        id: 1,
        name: "Priya Sharma",
        rating: 5,
        review: "Excellent service and timely delivery! The food was hot and delicious. Highly recommend.",
        date: "2024-05-01",
    },
    {
        id: 2,
        name: "Ravi Kumar",
        rating: 4,
        review: "Good experience overall. The food could have been a bit warmer, but it was tasty.",
        date: "2024-05-03",
    },
    {
        id: 3,
        name: "Sita Reddy",
        rating: 3,
        review: "The delivery was late by 15 minutes. The food was average. Need to improve timing.",
        date: "2024-05-05",
    },
    {
        id: 4,
        name: "Ajay Varma",
        rating: 4.5,
        review: "Great service! The delivery was quick, and the food was fresh. Will order again.",
        date: "2024-05-07",
    },
    {
        id: 5,
        name: "Lakshmi Nair",
        rating: 5,
        review: "Amazing food and super fast delivery! The driver was very courteous. Thank you!",
        date: "2024-05-09",
    },
];

const Reviews = () => {
    return (
        <div className="container mx-auto py-8 px-8">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            {reviewsList.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviewsList.map((review) => (
                        <div key={review.id} className="p-4 bg-white rounded-lg shadow-lg">
                            <div className="flex items-center mb-2">
                                <FaStar className="text-yellow-500 mr-2" />
                                <h3 className="text-xl font-semibold">{review.name}</h3>
                            </div>
                            <p className="text-gray-700 mb-2">
                                <strong>Rating:</strong> {Array.from({ length: review.rating }, (_, i) => (
                                    <FaStar key={i} className="inline text-yellow-500" />
                                ))}
                            </p>
                            <p className="text-gray-700 mb-2"><strong>Review:</strong> {review.review}</p>
                            <p className="text-gray-600 text-sm"><strong>Date:</strong> {review.date}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">No reviews found.</p>
            )}
        </div>
    );
};

export default Reviews;
