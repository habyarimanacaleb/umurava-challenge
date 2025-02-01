import React from "react";
const UserAccount = ({ isSidebarExpanded }) => {
  return (
    <div className="flex text-white py-4 px-2   mt-4 mb-2">
      {/* User Profile */}
      <div className="relative">
        <img
          src="images/person-image-2.png"
          alt="User profile"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
        {/* Green Circle for User Status */}
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
      </div>

      {isSidebarExpanded && (
        <div className="flex flex-col text-justify  ml-2">
          {/* <FontAwesomeIcon icon={faUserCircle} size="3x" /> */}
          <span className="text-xs font-semibold">Hilaire Sh</span>
          <span className="text-xs">hilaire@uidesigner.com</span>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
