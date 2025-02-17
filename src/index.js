const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello, Node.js CI/CD!' });
});

module.exports = app; // Export the app

