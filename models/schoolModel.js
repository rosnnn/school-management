const db = require('../db/connection');

exports.insertSchool = (school, callback) => {
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [school.name, school.address, school.latitude, school.longitude], callback);
};

exports.getSchools = callback => {
    const query = 'SELECT * FROM schools';
    db.query(query, callback);
};
