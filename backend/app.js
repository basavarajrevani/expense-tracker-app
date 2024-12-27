const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const { readdirSync } = require('fs');
const { protect } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log('DB Connection Error:', err));

// Routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1', protect, require('./routes/transactions'));

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});