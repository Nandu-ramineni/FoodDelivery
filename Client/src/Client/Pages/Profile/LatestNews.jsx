import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const LatestNews = () => {
    const offers = [
        { id: 1, title: "50% off on your first order!", description: "Use code FIRST50 to get 50% off on your first food delivery order.", imageUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-6467b.appspot.com/o/img2.jpg?alt=media&token=5fd1d086-f8f7-488e-b0b1-737616471caa" },
        { id: 2, title: "Free delivery on orders over $20", description: "Enjoy free delivery when you order for $20 or more.", imageUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-6467b.appspot.com/o/img3.jpg?alt=media&token=e58db275-e45d-4ab4-a489-9456bd07b8d1" },
    ];

    

    return (
        <div className="items px-4 py-4">
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Exciting Offers for you</h3>
                <Carousel showThumbs={false} showStatus={false} labels={false} infiniteLoop useKeyboardArrows autoPlay swipeable>
                    {offers.map(offer => (
                        <div key={offer.id}>
                            <img src={offer.imageUrl} alt={offer.title} className="carousel-image rounded-md" />
                            <div className="mb-1">
                                <h4 className="font-bold">{offer.title}</h4>
                                <p>{offer.description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            
        </div>
    );
}

export default LatestNews;
