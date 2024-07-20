
# Food Order Management System

FoodDelivery is a comprehensive food ordering and delivery application built using the MERN stack. It provides a platform for users to browse restaurants, place orders, and track deliveries. The application also offers functionalities for restaurant management and administrative oversight.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Images

![screencapture-yummz-netlify-app-2024-07-21-01_05_48](https://github.com/user-attachments/assets/4598e367-0bb1-4310-a4db-4090ce6d4344)
![screencapture-yummz-netlify-app-profile-orders-2024-07-21-01_09_05](https://github.com/user-attachments/assets/0ddbf4ae-c253-48bb-b1b3-77733f83ead6)

![screencapture-yumzvendordashboard-netlify-app-welcome-2024-07-21-01_06_55](https://github.com/user-attachments/assets/dd4940db-c354-4079-9666-dec589a2e89f)
![screencapture-yumzvendordashboard-netlify-app-menu-2024-07-21-01_08_17](https://github.com/user-attachments/assets/feeb22df-3c90-491d-897a-145ad5248ff1)



## Features

### User Features
- **Restaurant Browsing:** Explore various restaurants based on location, cuisine, and ratings.
- **Menu Viewing:** Access detailed menus with item descriptions and prices.
- **Order Placement:** Select items and place orders with options for customization.
- **Order Tracking:** Track the status of your order in real-time.
- **User Authentication:** Secure login and registration with profile management.
- **Order History:** View past orders and reorder items.

### Restaurant Features
- **Profile Management:** Update restaurant details and contact information.
- **Menu Management:** Add, edit, or remove menu items.
- **Order Management:** View and manage incoming orders.
- **Order Tracking:** Monitor the status of orders and update delivery status.

### Admin Features
- **User Management:** Administer user accounts, including activation and deactivation.
- **Restaurant Management:** Oversee restaurant profiles and menu items.
- **Analytics:** View and analyze system usage statistics and order trends.

## Technologies Used

### Frontend
- **React:** JavaScript library for building user interfaces.
- **Redux:** State management library for handling application state.
- **Axios:** Promise-based HTTP client for making API requests.
- **React Router:** For client-side routing and navigation.

### Backend
- **Node.js:** JavaScript runtime for building scalable network applications.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing application data.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.

### Deployment
- **Docker:** Containerization platform for consistent development and production environments.
- **AWS:** Cloud services provider for hosting and scaling the application.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (installed locally or accessible remotely)
- Docker (optional, for containerized deployment)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nandu-ramineni/FoodDelivery.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd FoodDelivery
   ```

3. **Set up backend environment variables:**
   - Create a `.env` file in the `backend` directory with the following content:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     SECRET_KEY=your_secret_key
     ```

4. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

5. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

6. **Start the backend server:**
   ```bash
   cd ../backend
   npm start
   ```

7. **Start the frontend server:**
   ```bash
   cd ../frontend
   npm start
   ```

8. **(Optional) Run with Docker:**
   - Build Docker images:
     ```bash
     docker-compose build
     ```
   - Start the application:
     ```bash
     docker-compose up
     ```

## Usage

1. **Open your browser and navigate to `http://localhost:3000`** to access the FoodDelivery application.
2. **Sign Up or Log In** to start exploring restaurants and placing orders.
3. **Browse Restaurants**: Use the search and filter options to find restaurants.
4. **Place Orders**: Select items from the menu and complete your order.
5. **Track Orders**: Check the status of your orders in real-time.

## API Endpoints

### User Endpoints
- **POST `/users/register`** - Register a new user
- **POST `/users/login`** - Log in a user
- **GET `/users/:id`** - Get user profile

### Restaurant Endpoints
- **POST `/restaurants`** - Add a new restaurant (Admin only)
- **GET `/restaurants`** - List all restaurants
- **PUT `/restaurants/:id`** - Update restaurant details (Admin only)

### Order Endpoints
- **POST `/orders`** - Place a new order
- **GET `/orders/:id`** - Get order details
- **PUT `/orders/:id`** - Update order status (Restaurant only)

## Folder Structure

```
FoodDelivery/
│
├── backend/
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── controllers/      # Route controllers
│   ├── config/           # Configuration files
│   └── index.js         # Entry point for backend
│
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── redux/        # Redux state management
│   │   ├── api/          # API service functions
│   │   └── App.js        # Main entry point for frontend
│   └── public/
│
└── docker-compose.yml    # Docker configuration file
```

## Contributing

We welcome contributions to the FoodDelivery project! If you'd like to contribute, please follow these steps:

1. **Fork the repository** on GitHub.
2. **Create a new branch** (`git checkout -b feature/YourFeature`).
3. **Make your changes** and commit them (`git commit -am 'Add new feature'`).
4. **Push your branch** to your forked repository (`git push origin feature/YourFeature`).
5. **Create a Pull Request** on GitHub.

Please ensure your code adheres to the existing style and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to [your.email@example.com](mailto:your.email@example.com).

---


