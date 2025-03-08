import React, { useState } from "react";
import SideBar from "./SideBar";
import TopNavbar from "./TopNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateNewChallenge = () => {
  const navigate = useNavigate();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [formData, setFormData] = useState({
    imageUrl: "",
    title: "",
    date: "",
    duration: "",
    prize: "",
    contact: "",
    projectDescription: "",
    projectBrief: "",
    projectTasks: "",
  });
  const [formError, setFormError] = useState("");
  const [imageFile, setImageFile] = useState(null);
  // const [message, setMessage] = useState("");

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleCreateChallenge = async (e) => {
    e.preventDefault();
    if (formData.prize && isNaN(formData.prize)) {
      setFormError("Prize must be a valid number.");
      return;
    }

    if (formData.projectDescription.length > 500) {
      setFormError("Project Description should be within 500 characters.");
      return;
    }

    if (formData.projectBrief.length > 250) {
      setFormError("Project Brief should be within 0 characters.");
      return;
    }

    if (formData.projectTasks.length > 500) {
      setFormError("Project Tasks should be within 500 characters.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("imageUrl", imageFile);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("duration", formData.duration);
    formDataToSend.append("prize", formData.prize);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("projectDescription", formData.projectDescription);
    formDataToSend.append("projectBrief", formData.projectBrief);
    formDataToSend.append("projectTasks", formData.projectTasks);

    try {
      await axios.post(
        "https://umurava-challenge-bn.onrender.com/api/createBlog",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Challenge created successfully");
      navigate("/admin-challenge");
    } catch (error) {
      console.error("Failed to create challenge", error);
      alert("Failed to create challenge");
    }
    setFormData({
      imageUrl: "",
      title: "",
      date: "",
      duration: "",
      prize: "",
      contact: "",
      projectDescription: "",
      projectBrief: "",
      projectTasks: "",
    });
    setImageFile(null);
  };

  return (
    <div className="flex" style={{ height: "100%" }}>
      <SideBar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex-1 transition-all duration-300 bg-gray-200">
        <TopNavbar />
        <hr />
        <div className="flex px-4 py-2">
          <div className="back flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="bg-gray-300 p-2 rounded-md text-xs"
              onClick={() => navigate("/admin")}
            />
            <p
              onClick={() => {
                navigate("/admin");
              }}
              className="text-gray-500 hover:text-blue-500"
            >
              Go Back
            </p>
          </div>
          <div className="challenge-hackthons flex items-center space-x-3">
            <p
              onClick={() => {
                navigate("/admin-challenge");
              }}
              className="hover:text-blue-500 pl-3 "
            >
              Challenges & Hackathons{" "}
            </p>
            <span>/</span>
            <p className="text-gray-500 hover:text-blue-500">
              Create New Challenge
            </p>
          </div>
        </div>
        <hr />
        <div className="new-challenge-form-container md:mx-auto sm:mx-auto lg:w-[500px] sm:w-[90%] md:w-[80%] mt-4 mb-8 bg-white p-3 rounded-lg">
          <div className="form-heading flex flex-col items-center">
            <h2 className="form-title font-bold text-2xl">
              Create New Challenge
            </h2>
            <p className="text-gray-500">
              Fill out these details to build your broadcast
            </p>
          </div>

          {formError && <div className="text-red-500 mt-2">{formError}</div>}

          <form onSubmit={handleCreateChallenge}>
            <div className="form-field mt-2">
              <label className="pb-2" htmlFor="imageUrl">
                Image
              </label>
              <input
                type="file"
                id="imageUrl"
                name="imageUrl"
                className="border-2 border-gray-400 p-3 w-full rounded-md"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-field mt-2">
              <label className="pb-2" htmlFor="title">
                Challenge/Hackathon Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border-2 border-gray-400 p-3 w-full rounded-md"
                placeholder="Enter Title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group flex gap-4 mt-2">
              <div className="sub-input-group flex-1">
                <div className="form-field mt-2">
                  <label className="pb-2" htmlFor="date">
                    Deadline
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="border-2 border-gray-400 p-3 w-full rounded-md"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-field mt-2">
                  <label className="pb-2" htmlFor="prize">
                    Money Prize
                  </label>
                  <input
                    type="text"
                    id="prize"
                    name="prize"
                    className="border-2 border-gray-400 p-3 w-full rounded-md"
                    placeholder="Prize"
                    value={formData.prize}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="sub-input-group flex-1">
                <div className="form-field mt-2">
                  <label className="pb-2" htmlFor="duration">
                    Duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    className="border-2 border-gray-400 p-3 w-full rounded-md"
                    placeholder="Duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-field mt-2">
                  <label className="pb-2" htmlFor="contact">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    id="contact"
                    name="contact"
                    className="border-2 border-gray-400 p-3 w-full rounded-md"
                    placeholder="Email"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-field mt-4">
              <label className="pb-2" htmlFor="projectDescription">
                Project Description (Max 250 characters)
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                className="border-2 border-gray-400 p-3 w-full rounded-md"
                placeholder="Enter text here..."
                rows={4}
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-field mt-4">
              <label className="pb-2" htmlFor="projectBrief">
                Project Brief (Max 500 characters)
              </label>
              <textarea
                id="projectBrief"
                name="projectBrief"
                className="border-2 border-gray-400 p-3 w-full rounded-md"
                placeholder="Enter text here..."
                rows={2}
                value={formData.projectBrief}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field mt-4">
              <label className="pb-2" htmlFor="projectTasks">
                Project Description & Tasks (Max 500 characters)
              </label>
              <textarea
                id="projectTasks"
                name="projectTasks"
                className="border-2 border-gray-400 p-3 w-full rounded-md"
                placeholder="Enter text here..."
                rows={6}
                value={formData.projectTasks}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="call-in-action-buttons flex justify-between mt-6">
              <button
                type="button"
                onClick={() => navigate("/admin")}
                className="cancel-button bg-white text-blue-500 px-8 py-2 rounded-md border border-blue-500  transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="create-button bg-blue-500 text-white px-8 py-2 rounded-md border border-blue-600 transition duration-300"
              >
                Create Challenge
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewChallenge;
