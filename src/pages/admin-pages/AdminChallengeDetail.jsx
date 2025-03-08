import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChallengeActions from "../components/dashboard-components/ChallengeActions";

const AdminChallengeDetail = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(`/api/challenges/${id}`);
        setChallenge(response.data);
      } catch (error) {
        console.error("Failed to fetch challenge details", error);
      }
    };

    fetchChallenge();
  }, [id]);

  if (!challenge) {
    return <div>Loading...</div>;
  }

  return (
    <div className="challenge-detail">
      <h1>{challenge.title}</h1>
      <img src={challenge.image} alt={`${challenge.title} image`} />
      <img src={challenge.logo} alt={`${challenge.title} logo`} />
      <p>{challenge.description}</p>
      <div className="user-info">
        <img src={challenge.user.image} alt={`${challenge.user.name} avatar`} />
        <p>{challenge.user.name}</p>
      </div>
      <ChallengeActions challengeId={id} />
    </div>
  );
};

export default AdminChallengeDetail;
