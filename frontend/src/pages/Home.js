import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center">
      <h1>Task Manager</h1>
      <Link to="/login" className="btn btn-primary">Login</Link>
      <Link to="/register" className="btn btn-secondary mx-2">Register</Link>
    </div>
  );
}

export default Home;
