const User = require('../models/User'); // Ensure correct path
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc Register new user
// @route POST /api/users/register
// @access Public
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d' }),
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d' }),
        });
    } else {
        res.status(400).json({ message: 'Invalid email or password' });
    }
};

module.exports = { registerUser, loginUser };
