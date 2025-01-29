const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController'); // Ensure the correct path
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
