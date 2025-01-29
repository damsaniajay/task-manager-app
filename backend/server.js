const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');  // Import database connection
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');  // Import user routes

dotenv.config();
connectDB();  // Call this to connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);  // ✅ Add user routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

