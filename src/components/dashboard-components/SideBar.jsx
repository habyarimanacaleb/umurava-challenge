import React from "react";
import { NavLink } from "react-router-dom";
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
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import UserAccount from "./UserAccount";

const SideBar = ({ isSidebarExpanded, toggleSidebar, userRole }) => {
  const onLogout = () => {
    const confirmLogout = window.confirm("Do you want to sign out?");
    if (confirmLogout) {
      console.log("User logged out");
      localStorage.removeItem("userRole");
      localStorage.removeItem("authToken");
      window.location.href = "/login"; // Redirect to login page
    }
  };

  // Define sidebar links based on user role
  const sidebarLinks =
    userRole === "admin"
      ? [
          { icon: faHome, label: "Dashboard", path: "/admin" },
          {
            icon: faNoteSticky,
            label: "Challenges & Hackathon",
            path: "/admin-challenge",
          },
          { icon: faUsers, label: "Community", path: "/admin-community" },
        ]
      : [
          { icon: faHome, label: "Dashboard", path: "/talent" },
          {
            icon: faNoteSticky,
            label: "Challenges & Hackathon",
            path: "/talent-challenge",
          },
          { icon: faUsers, label: "Community", path: "/talent-community" },
        ];

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

        {/* Sidebar Navigation */}
        <div className="px-2 flex-grow">
          {sidebarLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md cursor-pointer transition-all ${
                  isActive
                    ? "bg-white text-blue-500 font-bold"
                    : "hover:text-white"
                }`
              }
            >
              <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
              {isSidebarExpanded && (
                <span className="text-sm">{item.label}</span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-t border-white/30 my-2" />

        {/* Settings & User Section */}
        <div className="settings-container px-2">
          {[
            { icon: faCog, label: "Settings", path: "/settings" },
            { icon: faQuestionCircle, label: "Help Center" },
            { icon: faUserFriends, label: "Refer Family & Friends" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="flex items-center space-x-2 p-2 rounded-md cursor-pointer transition-all text-white"
            >
              <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
              {isSidebarExpanded && (
                <span className="text-sm">{item.label}</span>
              )}
            </NavLink>
          ))}

          {/* User Account & Logout */}
          <div className="mt-4 mb-4 flex">
            {isSidebarExpanded && (
              <UserAccount isSidebarExpanded={isSidebarExpanded} />
            )}
            <button
              onClick={onLogout}
              className="cursor-pointer transition-300"
            >
              <FontAwesomeIcon
                className={`w-4 h-4 ${isSidebarExpanded ? "ml-1" : "ml-3"}`}
                icon={faSignOutAlt}
                title="Logout"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
