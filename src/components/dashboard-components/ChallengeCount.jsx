import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChallengeCount = ({ label, count, icon }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`challenge-count-container ${
        isFocused ? "bg-blue-200" : "bg-gray-200"
      } rounded-md mx-4 w-full md:w-[250px] flex items-center justify-between font-[work sans] outline-none`}
    >
      <FontAwesomeIcon icon={icon} className="text-md text-blue-500 pl-2" />
      <p className="text-gray-800 text-base">{label}</p>
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
