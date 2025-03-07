const { insertSchool, getSchools } = require('../models/schoolModel');
const { calculateDistance } = require('../utils/distanceCalc');

exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).send({ message: 'All fields are required!' });
    }

    insertSchool({ name, address, latitude, longitude }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'School added successfully!', id: result.insertId });
    });
};


exports.listSchools = (req, res) => {
    const { lat, lon } = req.query; // Extract latitude and longitude from query parameters

    console.log('Query Params Received:', req.query); // Debug log (leave this in for testing!)

    // Validate query parameters
    if (!lat || !lon) {
        return res.status(400).send({ message: 'Latitude and Longitude are required!' });
    }

    const latNum = parseFloat(lat); // Convert latitude to a number
    const lonNum = parseFloat(lon); // Convert longitude to a number

    // Fetch schools from the database using getSchools
    getSchools((err, schools) => {
        if (err) {
            console.error('Error fetching schools:', err); // Log the error
            return res.status(500).send({ message: 'Failed to retrieve schools!' });
        }

        // Calculate distances for each school
        schools.forEach(school => {
            school.distance = calculateDistance(latNum, lonNum, school.latitude, school.longitude);
            console.log(`Distance to ${school.name}:`, school.distance); // Debug log for each distance
        });

        // Sort schools by distance
        schools.sort((a, b) => a.distance - b.distance);
        console.log('Sorted Schools:', schools); // Debug log for sorted schools

        // Send the sorted schools back to the frontend
        res.send(schools);
    });
};

