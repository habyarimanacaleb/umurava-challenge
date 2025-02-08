import React, { useState } from "react";
import SideBar from "../../components/dashboard-components/SideBar";
import TopNavbar from "../../components/dashboard-components/TopNavbar";
import NewChallengeCard from "../../components/NewChallengeCard";
import ChallengeOverview from "../../components/dashboard-components/ChallengeOverview";
import { faStickyNote, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../App";

const Dashboard = () => {
  const { userRole } = useUser();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

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

        <div className="content bg-gray-100 mt-4 flex flex-col space-y-4">
          {/* Welcome Text */}
          <div className="welcome-text p-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              Welcome Back, Hilaire
            </h1>
            <p className="text-gray-600 text-base">
              Build Work Experience through Skills Challenges.
            </p>
          </div>

          {/* Challenges Overview */}
          <div className="flex flex-col p-[10px]">
            {/* Overview Section */}
            <div className="challenge-overview grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <ChallengeOverview
                title="Total Challenge"
                count="29,405"
                percentage="15%"
                icon={faStickyNote}
                period="This Week"
              />
              <ChallengeOverview
                title="Total Participants"
                count="29,405"
                percentage="15%"
                icon={faUsers}
                period="This Week"
              />
            </div>

            {/* Status Section */}
            <div className="challenge-status grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ChallengeOverview
                title="Completed Challenges"
                count="5,837"
                percentage="15%"
                icon={faStickyNote}
                period="Last 30 days"
              />
              <ChallengeOverview
                title="Open Challenges"
                count="5,837"
                percentage="15%"
                icon={faStickyNote}
                period="Last 30 days"
              />
              <ChallengeOverview
                title="Ongoing Challenges"
                count="5,837"
                percentage="15%"
                icon={faStickyNote}
                period="Last 30 days"
              />
            </div>
          </div>

          {/* Challenge Card */}
          <div className="challenge-card-container px-4 pb-10">
            <NewChallengeCard isSidebarExpanded={isSidebarExpanded} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
