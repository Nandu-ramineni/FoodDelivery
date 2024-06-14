
# Yumz-Food Order & Delivery Platform
## Summary

The **Yumz** is a comprehensive web application designed to streamline interactions between users, vendors, and administrators. Users can browse and purchase products, vendors can manage their inventory and orders, and administrators have complete oversight of the system. Built with a modern tech stack including React, Node.js, Express, and MongoDB, this project aims to deliver a robust, scalable, and user-friendly platform.

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Images](#images)
- [Project Structure](#project-structure)
- [User Panel](#user-panel)
- [Vendor Panel](#vendor-panel)
- [Admin Panel](#admin-panel)
- [Summary](#summary)

## Introduction

Welcome to the **Yumz**! This project is designed to provide a comprehensive platform for users, vendors, and administrators. Users can interact with the platform to manage their profiles and order food, vendors can manage their products and orders, and administrators can oversee the entire system.

## Tech Stack

- **Frontend**: React, Tailwind CSS , Redux, Thunk
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Other Libraries**: Axios, React Router, XLSX

## Images

### User Panel
![user-pannel](https://github.com/Nandu-ramineni/FoodDelivery/assets/123319320/5411e26e-55cd-492d-96d7-bc4b6f629a44)

### Vendor Panel
![screencapture-yumzvendordashboard-netlify-app-2024-06-14-21_48_50](https://github.com/Nandu-ramineni/FoodDelivery/assets/123319320/8a49f103-314b-4716-83d8-4fffed6faa4b)

## Project Structure

```
project-root/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── index.js.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── .gitignore
├── README.md
└── package.json
```

## User Panel

The User Panel allows users to:
- Sign up and log in.
- View and edit their profile.
- Browse and search for food.
- Place and track orders.

### Key Components

- **UserProfile**: Displays user profile information.
- **FoodList**: Lists all available food Items.
- **OrderHistory**: Shows the user's past orders.

## Vendor Panel

The Vendor Panel enables vendors to:
- Log in to their accounts.
- Manage their product listings.
- View and process orders.
- Access sales analytics.

### Key Components

- **VendorDashboard**: Displays an overview of vendor activities.
- **ProductManagement**: Allows vendors to add, edit, or delete products.
- **OrderManagement**: Lets vendors process customer orders.

## Admin Panel

The Admin Panel provides administrators with the tools to:
- Manage users and vendors.
- View platform analytics.
- Configure system settings.
- Oversee the entire system operations.

### Key Components

- **AdminDashboard**: Central hub for admin activities and analytics.
- **UserManagement**: Interface to manage user accounts.
- **VendorManagement**: Interface to manage vendor accounts.
- **SystemSettings**: Allows configuration of various system parameters.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository**:
    ```sh
    git clone [https://github.com/yourusername/project-name.git](https://github.com/Nandu-ramineni/FoodDelivery.git)
    ```

2. **Backend Setup**:
    ```sh
    cd backend
    npm install
    npm run dev
    ```

3. **Client Setup**
    ```sh
    cd Client
    npm install
    npm run dev
    ```

```markdown
3. **Frontend Setup**:
    ```sh
    cd frontend
    npm install
    npm run dev
    ```

### Configuration

Create a `.env` file in the `backend` directory with the following environment variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Running the Application

To run the application, ensure both backend and frontend servers are running simultaneously. You can use a tool like `concurrently` to run both servers together:

1. Install `concurrently`:
    ```sh
    npm install -g concurrently
    ```

2. Run both servers:
    ```sh
    concurrently "npm start --prefix backend" "npm start --prefix frontend"
    ```

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any queries or issues, please contact [nanduramineni2233@gmail.com](mailto:nanduramineni2233@gmail.com).
```

This README template provides a comprehensive overview of your project, including sections for introduction, tech stack, images, project structure, user panel, vendor panel, admin panel, getting started, contributing, license, and contact information. Adjust the paths, links, and details according to your specific project.
