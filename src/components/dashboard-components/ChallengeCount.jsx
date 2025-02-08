import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChallengeCount = ({ label, count, icon }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Handlers for focus and blur events
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      tabIndex={0} // Makes the container focusable
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`challenge-count-container ${
        isFocused ? "bg-blue-200" : "bg-gray-200"
      } rounded-md w-full sm:w-1/2 md:w-1/3 lg:w-[18%] flex items-center justify-between font-[work sans] outline-none`}
    >
      {/* Icon */}
      <FontAwesomeIcon icon={icon} className="text-md text-blue-500 pl-2" />

      {/* Label */}
      <p className="text-gray-800 text-base">{label}</p>

      {/* Count */}
      <div
        className={` 
          ${
            isFocused ? "bg-blue-500" : "bg-gray-300"
          } text-white flex items-center justify-center rounded-full w-10 h-6`}
      >
        {count}
      </div>
    </div>
  );
};

export default ChallengeCount;
