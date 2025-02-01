import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCog,
  faChevronRight,
  faSignOutAlt,
  faHome,
  faUsers,
  faUserFriends,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons"; // Correct library

import UserAccount from "./UserAccount";

const SideBar = ({ isSidebarExpanded, toggleSidebar }) => {
  const onLogout = () => {
    // Logout logic here
    console.log("Logout");
  };
  return (
    <div className="bg-blue-500 min-h-[100vh]">
      <div
        className={`bg-blue-500 text-white ${
          isSidebarExpanded ? "w-60" : "w-16"
        } transition-all duration-300 flex flex-col justify-between`}
        style={{ minHeight: "100vh", position: "relative" }}
      >
        {/* Logo Section */}
        <div className="flex justify-center py-4">
          <img
            src="images/official-logo-image.png"
            alt="Logo"
            className={`rounded-full ${
              isSidebarExpanded ? "w-16 h-16" : "w-12 h-12"
            } transition-all`}
          />
        </div>

        {/* Sidebar Toggle Button */}
        <button
          className="py-1 focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <FontAwesomeIcon
            icon={isSidebarExpanded ? faChevronLeft : faChevronRight}
            size="2x"
          />
        </button>

        {/* Sidebar Content */}
        <div className="px-2 flex-grow">
          {/* Menu Items */}
          {[
            { icon: faHome, label: "Dashboard", path: ["/admin", "/talent"] },
            {
              icon: faNoteSticky,
              label: "Challenges & Hackathon",
              path: ["/admin/challenge", "/talent/challenge"],
            },
            {
              icon: faUsers,
              label: "Community",
              path: ["/admin/community", "/talent/community"],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 hover:bg-white hover:text-blue-500 p-2 rounded-md cursor-pointer"
            >
              <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
              {isSidebarExpanded && (
                <span className="text-sm">{item.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-t border-white/30 my-2" />

        {/* Settings & User Section */}
        <div className="settings-container px-2">
          {/* Settings Options */}
          <div className="flex flex-col space-y-2">
            {[
              { icon: faCog, label: "Settings" },
              { icon: faQuestionCircle, label: "Help Center" },
              { icon: faUserFriends, label: "Refer Family & Friends" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 hover:bg-white hover:text-blue-500 p-2 rounded-md cursor-pointer"
              >
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                {isSidebarExpanded && (
                  <span className="text-sm">{item.label}</span>
                )}
              </div>
            ))}
          </div>

          {/* User Account */}
          <div className="mt-4 mb-4 flex">
            {isSidebarExpanded && (
              <UserAccount isSidebarExpanded={isSidebarExpanded} />
            )}
            {/* Logout Button */}
            <button
              onClick={onLogout}
              className=" cursor-pointer hover:transform-flat transition-300"
            >
              <FontAwesomeIcon
                className={`w-4 h-4 ${isSidebarExpanded ? "ml-1" : "ml-3"}`}
                icon={faSignOutAlt}
                title="Logout"
                titleId="logout"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
