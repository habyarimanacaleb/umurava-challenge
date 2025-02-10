import React, { useState } from "react";
import SideBar from "../../components/dashboard-components/SideBar";
import TopNavbar from "../../components/dashboard-components/TopNavbar";
import NewChallengeCard from "../../components/NewChallengeCard";
import ChallengeCount from "../../components/dashboard-components/ChallengeCount";
import challengeCountData from "../../asset/data-infor/ChallengecountData";
import Pagination from "../../components/dashboard-components/Pagination";
import { useUser } from "../../context/UserContext";

const TalentChallenges = () => {
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
      <div className="flex-1 transition-all duration-300">
        <TopNavbar />

        <div className="content bg-gray-100 mt-4 pb-4 flex flex-col space-y-4">
          {/* Welcome Text */}
          <div className="welcome-text p-4">
            <h1 className="text-2xl font-semibold text-gray-800">Challenges</h1>
            <p className="text-gray-600 text-base pt-1">
              Join a challenge or a hackathon to gain valuable work experience.
            </p>
          </div>

          {/* Challenge Count */}
          <div className="flex flex-wrap gap-5 p-4">
            {challengeCountData.map((challenge, index) => (
              <ChallengeCount
                key={index}
                label={challenge.label}
                count={challenge.count}
                icon={challenge.icon}
                bgColor={challenge.bgColor}
              />
            ))}
          </div>

          {/* Challenge Card */}
          <div className="challenge-card-container px-4 flex-wrap">
            <NewChallengeCard isSidebarExpanded={isSidebarExpanded} />
          </div>

          {/* Pagination */}
          <div className="pagination-container py-5 mx-3">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentChallenges;
