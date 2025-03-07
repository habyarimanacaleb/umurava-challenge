import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const EmailConfirmation = () => {
  const { token } = useParams();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const response = await fetch(
          `https://umurava-challenge-bn.onrender.com/api/confirm/${token}`
        );
        if (!response.ok) {
          throw new Error("Failed to confirm email");
        }
        const data = await response.json();

        if (data.message === "Email confirmed successfully") {
          setMessage(
            "Email confirmed successfully! You will be redirected to the login page."
          );
        } else {
          setMessage("Failed to confirm email. Please try again.");
        }
      } catch (error) {
        setMessage("There was an error confirming your email.");
      } finally {
        setIsLoading(false);
      }
    };
    confirmEmail();
  }, [token]);

  useEffect(() => {
    if (!isLoading && message) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [isLoading, message, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>{message && <p>{message}</p>}</div>;
};
export default EmailConfirmation;
