import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { FaUser, FaTasks, FaChartLine, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showTasks, setShowTasks] = useState(false);

  if (!user) {
    return <h2 className="dashboard-message">⚠ Please log in first</h2>;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">EmbedSquare</h2>
        <ul className="menu">
          <li onClick={() => navigate("/profile")}><FaUser /> Profile</li>
          <li onClick={() => setShowTasks(true)}><FaTasks /> Tasks</li>
          <li><FaChartLine /> Reports</li>
          <li onClick={handleLogout} className="logout"><FaSignOutAlt /> Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <h2>Welcome, {user.name || "User"} 👋</h2>
        <p className="subtitle">Your role: {user.role || "N/A"} | Designation: {user.designation || "N/A"}</p>

        {/* About Section */}
        {!showTasks && (
          <div className="about-section">
            <h3>About {user.name}</h3>
            <p><strong>Email:</strong> {user.email || "N/A"}</p>
            <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
            <p><strong>Department:</strong> {user.department || "IT"}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        )}

        {/* Task List */}
        {showTasks && (
          <div className="task-section">
            <h3>Tasks Assigned to {user.name}</h3>
            <ul className="task-list">
              {user.tasks && user.tasks.length > 0 ? (
                user.tasks.map((task, index) => (
                  <li key={index} className="task-item">
                    <strong>{task.title}:</strong> {task.description}
                  </li>
                ))
              ) : (
                <p>No tasks assigned.</p>
              )}
            </ul>
            <button className="back-button" onClick={() => setShowTasks(false)}>Back to Dashboard</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
