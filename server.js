require('dotenv').config();
const express = require('express');
const path = require('path'); // New import for serving frontend
const schoolRoutes = require('./routes/schoolRoutes');
const app = express();

// Middleware to parse JSON requests
app.use(express.json()); // Parses incoming JSON requests

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Request Body:', req.body); // Log POST request body
    console.log('Query Params:', req.query); // Log GET request params
    next();
});


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route for displaying a welcome message
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the School Management API</h1>
        <p>Available Endpoints:</p>
        <ul>
            <li><strong>POST /api/addSchool</strong>: Add a new school to the database.</li>
            <li><strong>GET /api/listSchools</strong>: Retrieve a list of schools sorted by proximity.</li>
        </ul>
        <p>Use tools like Postman to interact with the API.</p>
    `);
});

// Mount school-related routes
app.use('/api', schoolRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
