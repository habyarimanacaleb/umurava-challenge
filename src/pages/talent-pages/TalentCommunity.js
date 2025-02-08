import React, { useState, useEffect } from "react";
import SideBar from "../../components/dashboard-components/SideBar";
import TopNavbar from "../../components/dashboard-components/TopNavbar";
import NewChallengeCard from "../../components/NewChallengeCard";
import ChallengeCount from "../../components/dashboard-components/ChallengeCount";
import challengeCountData from "../../asset/data-infor/ChallengecountData";
import Pagination from "../../components/dashboard-components/Pagination";

const TalentCommunity = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [showModal, setShowModal] = useState(true); // Modal is visible by default

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  // Disable scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showModal]);

  return (
    <div className="relative h-full min-h-screen">
      {/* Darkened Background Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
      )}

      {/* Sidebar and Main Content */}
      <div className={`flex ${showModal ? "opacity-30" : "opacity-100"} transition-opacity duration-300`}>
        <SideBar isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

        <div className="flex-1 transition-all duration-300">
          <TopNavbar />
          <div className="content bg-gray-100 mt-4 pb-4 flex flex-col space-y-4">
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

      {/* Join Community Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-20 p-4">
          <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 max-w-xs sm:max-w-md text-center">
            <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-full mx-auto mb-4">
              <span className="text-blue-500 text-3xl">📢</span>
            </div>
            <h2 className="text-lg font-semibold">Join our WhatsApp community</h2>
            <p className="text-gray-600 mt-2">Get notified on the latest projects and hackathons</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 transition"
              onClick={() => setShowModal(false)}
            >
              Join
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentCommunity;
