# School Management System

## 🚀 Project Overview
The **School Management System** is a Node.js-based backend application with an integrated frontend that allows users to:
- Add new schools to a database with details like name, address, latitude, and longitude.
- Find nearby schools by providing their current location (latitude and longitude). The results are sorted by geographical proximity.

This project is perfect for demonstrating the ability to create, manage, and query a database using APIs, while also integrating it with a user-friendly frontend.

---

## 🌟 Features
1. **Add a School**:
   - Enter school details (name, address, latitude, longitude).
   - Data is saved to a MySQL database.
   
2. **Find Nearby Schools**:
   - Provide your current location (latitude, longitude).
   - Fetch and display nearby schools sorted by distance.

3. **Haversine Formula**:
   - Distance calculations use the Haversine formula for accuracy.

4. **User-Friendly Frontend**:
   - Simple forms for adding and searching schools.

---

## 📁 Project Structure

school-management/
├── public/                     # Frontend files
│   ├── index.html              # HTML file for the frontend
│   ├── style.css               # Optional: Add custom styles here
│   └── script.js               # JS file to handle frontend-backend communication
├── db/                         # Database connection logic
│   └── connection.js
├── routes/                     # API route definitions
│   └── schoolRoutes.js
├── controllers/                # API logic implementation
│   └── schoolController.js
├── models/                     # Database query logic
│   └── schoolModel.js
├── server.js                   # Main entry point for the server
├── package.json                # Project dependencies
├── .env                        # Environment variables
└── README.md                   # Optional: Project documentation



---

## 🛠️ Setup Instructions
### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- [MySQL](https://www.mysql.com/) installed and running.
- A MySQL database created with a `schools` table:
  ```sql
  CREATE TABLE schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      latitude FLOAT NOT NULL,
      longitude FLOAT NOT NULL
  );




---

## 🛠️ Setup Instructions
### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- [MySQL](https://www.mysql.com/) installed and running.
- A MySQL database created with a `schools` table:
  ```sql
  CREATE TABLE schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      latitude FLOAT NOT NULL,
      longitude FLOAT NOT NULL
  );
