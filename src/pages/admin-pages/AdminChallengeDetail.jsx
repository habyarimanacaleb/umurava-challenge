import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdminChallengeDetail = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(
          `https://umurava-challenge-bn.onrender.com/api/getSingleBlog/${id}`
        );
        setChallenge(response.data);
        console.log(response.data);
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
      <img src={challenge.imageUrl} alt={`${challenge.title} profile`} />
      <p>{challenge.projectDescription}</p>
      <div className="user-info">
        <img
          src={challenge.user?.image}
          alt={`${challenge.user?.name} avatar`}
        />
        <p>{challenge.user?.name}</p>
      </div>
    </div>
  );
};

export default AdminChallengeDetail;
