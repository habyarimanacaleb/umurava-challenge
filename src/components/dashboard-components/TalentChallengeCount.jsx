import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TalentChallengeCount = ({ title, count, icon }) => {
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
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`challenge-count-container relative 
    ${isFocused ? "bg-blue-200" : "bg-white"} 
    rounded-md py-2 px-2 sm:w-1/2 md:w-1/3 lg:w-[28%] 
    flex items-center justify-between font-sans space-x-2 outline-none
   `}
    >
      <div className="left-content flex flex-col py-1 pl-2">
        <p className="text-gray-800 text-[14px]">{title}</p>
        <div className="bg-blue-500bg-gray-300 flex items-center justify-center rounded-full w-10 h-6">
          {count}
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center">
        <FontAwesomeIcon
          icon={icon}
          className="text-[20px] text-blue-500 pl-2"
        />
      </div>
    </div>
  );
};

export default TalentChallengeCount;
