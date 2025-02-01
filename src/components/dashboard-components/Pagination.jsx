import React, { useState } from "react";

const Pagination = () => {
  const [focusedButton, setFocusedButton] = useState(null); // Track which button is focused

  // Handlers for focus and blur events
  const handleFocus = (button) => {
    setFocusedButton(button);
  };

  const handleBlur = () => {
    setFocusedButton(null);
  };

  return (
    <div className="pagination text-xl font-semibold flex justify-between lg:px-[100px] sm:px-[40px] md:px-[60px]">
      {/* Previous Button */}
      <button
        onFocus={() => handleFocus("previous")}
        onBlur={handleBlur}
        className={`border border-gray-400 rounded-md py-2 w-[100px] cursor-pointer transition-all hover:shadow-md ${
          focusedButton === "previous"
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-400"
        }`}
      >
        Previous
      </button>

      {/* Next Button */}
      <button
        onFocus={() => handleFocus("next")}
        onBlur={handleBlur}
        className={`border border-gray-400 rounded-md py-2 w-[100px] cursor-pointer transition-all hover:shadow-md ${
          focusedButton === "next"
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-400"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
