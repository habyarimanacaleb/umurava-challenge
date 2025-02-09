import React, { useState } from "react";
import SideBar from "../../components/dashboard-components/SideBar";
import TopNavbar from "../../components/dashboard-components/TopNavbar";
import NewChallengeCard from "../../components/NewChallengeCard";
import ChallengeCount from "../../components/dashboard-components/ChallengeCount";
import challengeCountData from "../../asset/data-infor/ChallengecountData";
import Pagination from "../../components/dashboard-components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../App";

const AdminChallenges = () => {
  const { userRole } = useUser();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };
  // use navigation for routes
  const navigate = useNavigate();

  if (!userRole) return null; // Prevents errors
  return (
    <div className="flex" style={{ height: "100%" }}>
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
      <div className="flex-1 transition-all duration-300">
        <TopNavbar />

        <div className="content bg-gray-100 mt-4 pb-4 flex flex-col space-y-4">
          {/* Welcome Text */}
          <div className="welcome-text p-4">
            <h1 className="text-2xl font-semibold text-gray-800">Challenges</h1>
            <p className="text-gray-600 text-base pt-1">
              Join a challenge or a hackathon to gain valuable work experience,
            </p>
          </div>
          {/* Challenge Count */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {challengeCountData.map((challenge, index) => (
              <ChallengeCount
                key={index}
                label={challenge.label}
                count={challenge.count}
                icon={challenge.icon}
                bgColor={challenge.bgColor}
              />
            ))}
            <div
              onClick={() => {
                navigate("/admin-create-challenge");
              }}
              className="create-challenge flex items-center p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200 ease-in-out shadow-md ml-auto"
            >
              <FontAwesomeIcon icon={faPlus} size="sm" className="pr-2" />
              <p className="font-sans font-semibold text-sm">
                Create New Challenge
              </p>
            </div>
          </div>

          {/* Challenge Card */}
          <div className="challenge-card-container px-4 flex-wrap">
            <NewChallengeCard isSidebarExpanded={isSidebarExpanded} />
          </div>
          {/* pagination here */}
          <div className="pagination-container py-5 mx-3">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminChallenges;
