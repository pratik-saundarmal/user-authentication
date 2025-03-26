import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaArrowLeft } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <p className="profile-message">⚠ User not found. Please log in.</p>;
  }

  return (
    <div className="profile-container">
      <h2>Profile Details</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Designation:</strong> {user.designation}</p>
      </div>
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        <FaArrowLeft className="back-icon" /> Back to Dashboard
      </button>
    </div>
  );
};

export default Profile;
