import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-black text-white w-32 px-3 mt-6 rounded-lg py-2"
      onClick={() => {
        navigate("/"); // Replace '/' with your desired route
      }}
    >
      <FontAwesomeIcon icon={faChevronLeft} className="pr-3 " />
      Home Page
    </button>
  );
};

export default HomeButton;
