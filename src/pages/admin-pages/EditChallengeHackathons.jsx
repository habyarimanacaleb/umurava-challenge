import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditChallengeHackathons = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    prize: "",
    time: "",
    contact: "",
    projectDescription: "",
    projectBrief: "",
    projectDescTask: "",
  });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(
          `https://umurava-challenge-bn.onrender.com/api/challenges/${id}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Failed to fetch challenge details", error);
      }
    };

    fetchChallenge();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateChallenge = async (e) => {
    e.preventDefault();

    if (formData.prize && isNaN(formData.prize)) {
      setFormError("Prize must be a valid number.");
      return;
    }

    if (formData.projectDescription.length > 250) {
      setFormError("Project Description should be within 250 characters.");
      return;
    }

    if (formData.projectBrief.length > 50) {
      setFormError("Project Brief should be within 50 characters.");
      return;
    }

    if (formData.projectDescTask.length > 500) {
      setFormError("Project Tasks should be within 500 characters.");
      return;
    }

    try {
      await axios.put(
        `https://umurava-challenge-bn.onrender.com/api/challenges/${id}`,
        formData
      );
      alert("Challenge updated successfully");
      navigate("/admin-challenge");
    } catch (error) {
      console.error("Failed to update challenge", error);
      alert("Failed to update challenge");
    }
  };

  return (
    <div className="edit-challenge-form-container">
      <h2>Edit Challenge</h2>
      {formError && <div className="text-red-500 mt-2">{formError}</div>}
      <form onSubmit={handleUpdateChallenge}>
        <div className="form-field">
          <label htmlFor="title">Challenge/Hackathon Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="date">Deadline</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="prize">Money Prize</label>
          <input
            type="text"
            id="prize"
            name="prize"
            value={formData.prize}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="time">Duration</label>
          <input
            type="text"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact">Contact Email</label>
          <input
            type="email"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="projectBrief">Project Brief</label>
          <textarea
            id="projectBrief"
            name="projectBrief"
            value={formData.projectBrief}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="projectDescTask">Project Description & Tasks</label>
          <textarea
            id="projectDescTask"
            name="projectDescTask"
            value={formData.projectDescTask}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Update Challenge</button>
      </form>
    </div>
  );
};

export default EditChallengeHackathons;
