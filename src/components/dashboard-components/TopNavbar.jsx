import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

const TopNavbar = () => {
  const [notificationCount, setNotificationCount] = useState("");
  useEffect(() => {
    // Fetch notification count from API
    setNotificationCount("3");
  }, [notificationCount]);
  return (
    <div className="flex justify-between items-center p-4">
      {/* Search Bar */}
      <div className="flex items-center justify-center bg-gray-100 w-full max-w-[60%] rounded-md">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400 w-4 px-2" />
        <input
          type="text"
          className="w-full py-2 rounded-lg bg-transparent focus:outline-none"
          placeholder="Search..."
        />
      </div>

      {/* Icons - Notification and User Profile */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faBell}
            className="w-6 h-6 bg-gray-100 rounded-full p-2"
          />
          {/* Notification Count */}
          {notificationCount > 0 && (
            <div className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 bg-red-500 text-xs text-white rounded-full">
              {notificationCount}
            </div>
          )}
        </div>

        {/* User Profile Icon */}
        <img
          src="images/person-image-2.png"
          alt="User profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
    </div>
  );
};

export default TopNavbar;
