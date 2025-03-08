import React from "react";
import { useNavigate } from "react-router-dom";

const ViewChallengeButton = ({ challenge }) => {
  const navigate = useNavigate();

  const handleViewChallenge = () => {
    navigate(`/admin-challenge/${challenge.id}`);
  };

  return (
    <div className="challenge-card p-4 bg-white rounded-md shadow-md">
      <button
        className="px-4 py-2 bg-blue-600 text-lg font-semibold text-white rounded-md hover:bg-blue-700 transition duration-200 ease-in-out"
        onClick={handleViewChallenge}
      >
        View Challenge
      </button>
    </div>
  );
};

export default ViewChallengeButton;
