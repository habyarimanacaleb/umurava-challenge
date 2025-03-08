import React, { useState, useEffect } from "react";
import axios from "axios";
import ChallengeCard from "../../components/dashboard-components/ChallengeCard";
import SideBar from "../../components/dashboard-components/SideBar";
import TopNavbar from "../../components/dashboard-components/TopNavbar";
import { useUser } from "../../context/UserContext";
import ParticipateList from "../../components/dashboard-components/ParticipateList"; // Import ParticipateList

const AdminHomePages = () => {
  const { userRole } = useUser();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [challenges, setChallenges] = useState([]);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(
          "https://umurava-challenge-bn.onrender.com/api/challenges"
        );
        setChallenges(response.data);
      } catch (error) {
        console.error("Failed to fetch challenges", error);
      }
    };

    fetchChallenges();
  }, []); // No dependencies needed here

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
      <div className="flex-1 transition-all duration-300 bg-gray-200 lg:ml-0">
        <TopNavbar />
        <hr />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Admin Home</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge._id} challenge={challenge} />
            ))}
          </div>
          <ParticipateList /> {/* Render ParticipateList */}
        </div>
      </div>
    </div>
  );
};

export default AdminHomePages;
