const express = require('express');
const { getTasks, createTask } = require('../controllers/taskController'); // Ensure correct import
const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);

module.exports = router;
