const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello, Node.js CI/CD!' });
});

export default app; // Export the app

