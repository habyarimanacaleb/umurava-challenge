import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChallengeActions = ({ challengeId }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/admin-edit-challenge/${challengeId}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://umurava-challenge-bn.onrender.com/api/challenges/${challengeId}`
      );
      alert("Challenge deleted successfully");
      navigate("/admin-challenge");
    } catch (error) {
      console.error("Failed to delete challenge", error);
      alert("Failed to delete challenge");
    }
  };

  return (
    <div className="challenge-actions">
      <button onClick={handleEdit} className="edit-button">
        Edit Challenge
      </button>
      <button onClick={handleDelete} className="delete-button">
        Delete Challenge
      </button>
    </div>
  );
};

export default ChallengeActions;
