import React from "react";
import axios from "axios";

function TaskList({ tasks, setTasks }) {
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          {task.title} - {task.completed ? "Completed" : "Pending"}
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
