import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Dashboard;
