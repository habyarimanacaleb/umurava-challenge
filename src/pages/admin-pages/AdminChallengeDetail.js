import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the challenge ID
import SideBar from "../../components/dashboard-components/SideBar";
import TopNavbar from "../../components/dashboard-components/TopNavbar";
import AdminKeyInstructionsBox from "../../components/dashboard-components/AdminKeyInstructionsBox";
import { adminChallengeDetailData } from "../../asset/data-infor/ChallengeDetailData";
import { useUser } from "../../context/UserContext";

const AdminChallengeDetail = () => {
  const { user } = useUser();
  const { id } = useParams();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  // Find challenge based on ID
  const challenge = adminChallengeDetailData.find(
    (challenge) => challenge.id === id
  );

  // Handle case where no challenge is found
  if (!challenge) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg font-semibold">
          Challenge not found!
        </p>
      </div>
    );
  }

  // Convert descriptions into arrays
  let projectDescription = challenge.projectDescription.split(".");
  let projectRequirement = challenge.projectRequirement.split(".");
  let deliverables = challenge.deliverables.split(".");

  if (!user) return null; // Prevents errors if user is not available

  return (
    <div className="flex h-full">
      <SideBar
        isSidebarExpanded={isSidebarExpanded}
        userRole={user.role}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex-1 transition-all duration-300 bg-gray-100">
        <TopNavbar />
        <hr className="font-semibold text-gray-300" />
        <div className="p-4 w-full mx-auto flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 mb-10">
          <div className="bg-white shadow-md rounded-lg p-6 lg:w-2/3">
            <img
              src={challenge.image}
              alt="Challenge"
              className="w-full rounded-lg h-58 mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2">{challenge.title}</h3>
            <p className="text-gray-600 mt-4">{challenge.projectBrief}</p>
            <div className="project-requirement mt-6">
              <h3 className="text-lg font-semibold">Project Requirements</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {projectRequirement.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="project-description mt-6">
              <h3 className="text-lg font-semibold">Project Description</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {projectDescription.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
            <div className="deliverables mt-6">
              <h4 className="text-lg font-semibold">Deliverables:</h4>
              <ul className="list-disc pl-5 text-gray-600">
                {deliverables.map((deliverable, index) => (
                  <li key={index}>{deliverable}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="key-instruction lg:w-1/3">
            <AdminKeyInstructionsBox challengeId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminChallengeDetail;
