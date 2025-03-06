import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const VerifyEmail = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkConfirmation = async () => {
      try {
        const response = await axios.get(
          "https://umurava-challenge-bn.onrender.com/api/confirm/:token"
        );
        if (response.data.isConfirmed) {
          navigate("/join");
        } else {
          alert("Please check your email for verfication.");
        }
      } catch (error) {
        console.error("Failed to check confirmation status", error);
      }
    };
    checkConfirmation();
  }, [navigate]);
  return <div>Checking email confirmation status...</div>;
};
export default VerifyEmail;
