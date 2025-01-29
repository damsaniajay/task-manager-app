import React, { useState } from "react";
import axios from "axios";

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:5000/api/tasks", { title }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(prev => [...prev, data]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Title" onChange={(e) => setTitle(e.target.value)} required />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
