import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChallengeCard.css"; // Import the CSS file for styling

const ChallengeCard = ({ challenge }) => {
  const navigate = useNavigate();

  const handleViewChallenge = () => {
    navigate(`/admin-challenge/${challenge._id}`);
  };

  return (
    <div className="challenge-card">
      <h3>{challenge.title}</h3>
      <img src={challenge.imageUrl} alt={`${challenge.title} image`} />
      <button onClick={handleViewChallenge}>View Challenge</button>
    </div>
  );
};

export default ChallengeCard;
