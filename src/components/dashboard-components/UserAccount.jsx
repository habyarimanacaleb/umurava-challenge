import React, { useState, useEffect } from "react";

const UserAccount = ({ isSidebarExpanded }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    getUserData();
    window.addEventListener("storage", getUserData);
    return () => {
      window.removeEventListener("storage", getUserData);
    };
  }, []);
  return (
    <div className="flex text-white py-4 px-2 mt-4 mb-2">
      <div className="relative">
        <img
          src="images/person-image-2.png"
          alt="User profile"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
      </div>
      {isSidebarExpanded && user && (
        <div className="flex flex-col text-justify ml-2">
          <span className="text-xs font-semibold">{user.userName}</span>
          <span className="text-xs">{user.email}</span>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
