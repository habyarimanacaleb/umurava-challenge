import React, { useState } from "react";
import SideBar from "./SideBar";
import TopNavbar from "./TopNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { useNavigate } from "react-router-dom";

const CreateNewChallenge = () => {
  const navigate = useNavigate();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
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

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateChallenge = (e) => {
    e.preventDefault();

    // Basic form validation
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

    // If no errors, submit the form (simulating backend API call here)
    // For now, we can simply navigate to the admin page
    console.log("Challenge created:", formData);

    // Reset the form (if necessary)
    setFormData({
      title: "",
      date: "",
      prize: "",
      time: "",
      contact: "",
      projectDescription: "",
      projectBrief: "",
      projectDescTask: "",
    });

    navigate("/admin"); // Redirect to the admin page after submission
  };

  return (
    <div className="flex" style={{ height: "100%" }}>
      {/* Sidebar */}
      <SideBar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300 bg-gray-200">
        <TopNavbar />
        <hr />
        <div className="flex px-4 py-2">
          {/* Welcome Text */}
          <div className="back flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="bg-gray-300 p-2 rounded-md text-xs"
              onClick={() => navigate("/admin")} // Navigate back to the admin page
            />
            <p className="text-gray-500">Go Back</p>
          </div>
          <div className="challenge-hackthons flex items-center space-x-3">
            <p className="pl-3">Challenges & Hackathons </p>
            <span>/</span>
            <p className="text-blue-500">Create New Challenge</p>
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
                  <label className="pb-2" htmlFor="time">
                    Duration
                  </label>
                  <input
                    type="text"
                    id="time"
                    name="time"
                    className="border-2 border-gray-400 p-3 w-full rounded-md"
                    placeholder="Duration"
                    value={formData.time}
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
              <label className="pb-2" htmlFor="project-description">
                Project Description (Max 250 characters)
              </label>
              <textarea
                id="project-description"
                name="projectdescription"
                className="border-2 border-gray-400 p-3 w-full rounded-md"
                placeholder="Enter text here..."
                rows={4}
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-field mt-4">
              <label className="pb-2" htmlFor="project-brief">
                Project Brief (Max 50 characters)
              </label>
              <textarea
                id="project-brief"
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
              <label className="pb-2" htmlFor="project-tasks">
                Project Description & Tasks (Max 500 characters)
              </label>
              <textarea
                id="project-tasks"
                name="projectDescTask"
                className="border-2 border-gray-400 p-3 w-full rounded-md"
                placeholder="Enter text here..."
                rows={6}
                value={formData.projectDescTask}
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
