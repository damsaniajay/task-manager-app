const getTasks = (req, res) => {
    res.json({ message: 'Get all tasks' });
};

const createTask = (req, res) => {
    res.json({ message: 'Task created' });
};

module.exports = { getTasks, createTask };
