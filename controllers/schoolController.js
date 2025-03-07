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
    const { lat, lon } = req.query;
    if (!lat || !lon) {
        return res.status(400).send({ message: 'Latitude and Longitude are required!' });
    }

    getSchools((err, schools) => {
        if (err) return res.status(500).send(err);

        schools.forEach(school => {
            school.distance = calculateDistance(lat, lon, school.latitude, school.longitude);
        });

        schools.sort((a, b) => a.distance - b.distance);
        res.send(schools);
    });
};
