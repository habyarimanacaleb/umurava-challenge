import React, { useState } from "react";
import SideBar from "../../components/dashboard-components/SideBar";
import TopNavbar from "../../components/dashboard-components/TopNavbar";
import NewChallengeCard from "../../components/NewChallengeCard";
import TalentChallengeCount from "../../components/dashboard-components/TalentChallengeCount";
import { faEye, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "../../context/UserContext";

const TalentHomePages = () => {
  const { user } = useUser();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  if (!user) return null; // Prevents errors if user is not available

  return (
    <div className="flex" style={{ height: "100%" }}>
      {/* Sidebar */}
      <SideBar
        isSidebarExpanded={isSidebarExpanded}
        userRole={user.role}
        toggleSidebar={toggleSidebar}
        className={`${
          isSidebarExpanded ? "w-64" : "w-16"
        } fixed z-10 transition-all duration-300 lg:relative`}
      />

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300 ">
        <TopNavbar />

        <div className="content bg-gray-100 mt-4 flex flex-col space-y-4">
          {/* Welcome Text */}
          <div className="welcome-text flex justify-between items-center p-4">
            <div className="hello-message">
              <h1 className="text-2xl font-semibold text-gray-800">
                Welcome Back, {user.userName}
              </h1>
              <p className="text-gray-600 text-base">
                Build Work Experience through Skills Challenges.
              </p>
            </div>
            <div className="view-profile flex items-center justify-center text-sm p-3 bg-blue-500 rounded-md text-white">
              <FontAwesomeIcon icon={faEye} />
              <p className="pl-1">View Profile</p>
            </div>
          </div>

          {/* Challenges Overview */}
          <div className="space-y-6 p-4">
            {/* Overview Section */}
            <div className="challenge-overview space-x-4 lg:flex md:block">
              <TalentChallengeCount
                title="Complete Challenges"
                count="05"
                icon={faStickyNote}
              />
              <TalentChallengeCount
                title="Open Challenges"
                count="200"
                icon={faStickyNote}
              />
              <TalentChallengeCount
                title="Open Challenges"
                count="200"
                icon={faStickyNote}
              />
            </div>
          </div>

          {/* Challenge Card */}
          <div className="challenge-card-container px-4 pb-10 flex flex-wrap justify-center gap-4">
            <NewChallengeCard isSidebarExpanded={isSidebarExpanded} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentHomePages;
