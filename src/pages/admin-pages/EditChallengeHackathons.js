import React, { useEffect, useState } from "react";
import SideBar from "../../components/dashboard-components/SideBar";
import TopNavbar from "../../components/dashboard-components/TopNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import ChallengeDetailData from "../../asset/data-infor/ChallengeDetailData";
import { useUser } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
const EditChallengeHackathons = () => {
  const { userRole } = useUser();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  // Sample data for the form fields
  const [challengeData, setChallengeData] = useState(ChallengeDetailData);

  const [projectDescription, setProjectDescription] = useState(
    challengeData.projectDescription.split(".")
  );

  // Sync project description when challenge data changes
  useEffect(() => {
    setProjectDescription(challengeData.projectDescription.split("."));
  }, [challengeData.projectDescription]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "projectDescription") {
      setProjectDescription(value.split("."));
    } else if (projectDescription.join(".").length > 250) {
      alert("Project Description cannot exceed 250 characters.");
      return;
    } else {
      setChallengeData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here (e.g., API call)
    console.log("Challenge data submitted:", challengeData);
  };
  //use navidate to suitch to different route
  const navigate = useNavigate();
  //get id params
  const { id } = useParams.id;

  if (!userRole) return null; // Prevents errors
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      {userRole && (
        <SideBar
          isSidebarExpanded={isSidebarExpanded}
          userRole={userRole}
          toggleSidebar={toggleSidebar}
          className={`${
            isSidebarExpanded ? "w-64" : "w-16"
          } fixed z-10 transition-all duration-300 lg:relative`}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300 bg-gray-200">
        <TopNavbar />
        <hr />
        <div className="flex px-4 py-2">
          <div
            onClick={() => {
              navigate(`/challenge/:${id}`);
            }}
            className="back flex items-center space-x-2 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="bg-gray-300 p-2 rounded-md text-xs"
            />
            <p className="text-gray-500">Go Back</p>
          </div>
          <div className="challenge-hackathons flex items-center space-x-3">
            <p className="pl-3">Challenges & Hackathons </p>
            <span>/</span>
            <p className="text-blue-500">Edit Challenge</p>
          </div>
        </div>
        <hr />
        <div className="new-challenge-form-container md:mx-auto sm:mx-auto lg:w-[500px] sm:w-[90%] md:w-[80%] mt-4 mb-8 bg-white p-3 rounded-lg shadow">
          <div className="form-heading flex flex-col items-center">
            <h2 className="form-title font-bold text-2xl">
              Edit Challenge Details
            </h2>
            <p className="text-gray-500">
              Update the details to modify your challenge.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-field mt-2">
              <label className="pb-2" htmlFor="title">
                Challenge/Hackathon Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={challengeData.title}
                onChange={handleChange}
                className="border-2 border-gray-400 p-3 w-full rounded-md"
                placeholder="Enter Title"
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
                    value={challengeData.date}
                    onChange={handleChange}
                    className="border-2 border-gray-400 p-3 w-full rounded-md"
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
                    value={challengeData.prize}
                    onChange={handleChange}
                    className="border-2 border-gray-400 p-3 w-full rounded-md"
                    placeholder="Prize"
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
                    value={challengeData.duration}
                    onChange={handleChange}
                    className="border-2 border-gray-400 p-3 w-full rounded-md"
                    placeholder="Duration"
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
                    value={challengeData.contact}
                    onChange={handleChange}
                    className="border-2 border-gray-400 p-3 w-full rounded-md"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-field mt-4">
              <label className="pb-2" htmlFor="projectBrief">
                Project Brief (Max 50 characters)
              </label>
              <textarea
                id="projectBrief"
                name="projectBrief"
                value={challengeData.projectBrief}
                onChange={handleChange}
                className="border-2 border-gray-400 p-3 w-full rounded-md"
                placeholder="Enter text here..."
                rows={6}
                maxLength={50}
                required
              />
            </div>
            <div
              className="form-field mt-4"
              title="Separate descriptions using '.'"
            >
              <label className="pb-2" htmlFor="projectDescription">
                Project Description (Max 250 characters)
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={challengeData.projectDescription}
                onChange={handleChange}
                className="border-2 border-gray-400 p-3 w-full rounded-md"
                placeholder="Enter text here..."
                rows={6}
                maxLength={250}
                required
              />
            </div>

            <div
              className="form-field mt-4"
              title="Separate descriptions using '.'"
            >
              <label className="pb-2" htmlFor="projectDescTask">
                Project Description & Tasks (Max 500 characters)
              </label>
              <textarea
                id="projectDescTask"
                name="projectDescTask"
                value={challengeData.projectRequirement}
                onChange={handleChange}
                className="border-2 border-gray-400 p-3 w-full rounded-md"
                placeholder="Enter text here..."
                rows={6}
                maxLength={500}
                required
              />
            </div>
            <div className="call-in-action-buttons flex justify-between mt-6">
              <button
                type="button"
                className="cancel-button bg-white text-blue-500 px-8 py-2 rounded-md border border-blue-500 transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!challengeData.title}
                className={`create-button ${
                  !challengeData.title
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                } px-8 py-2 rounded-md`}
              >
                Update Challenge
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditChallengeHackathons;
