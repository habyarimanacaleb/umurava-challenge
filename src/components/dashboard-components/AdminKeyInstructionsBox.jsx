import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCode,
  faCalendarAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AdminKeyInstructionsBox = () => {
  const navigate = useNavigate();
  // const { id } = useParams.id;
  const handleDelete = () => {
    //Delete challenge logic
    alert("Challenge deleted!");
    navigate("/admin");
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-80">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Key Instructions:
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        You are free to schedule the clarification call with the team via this.
      </p>

      {/* Items */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-700 font-medium">
              talent@umurava.africa
            </p>
            <p className="text-xs text-gray-500">Contact Email</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faCode} className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-700 font-medium">Web Design</p>
            <p className="text-xs text-gray-500">Challenge Category</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-700 font-medium">7 Days</p>
            <p className="text-xs text-gray-500">Duration</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faDollarSign} className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-700 font-medium">$150 - $400</p>
            <p className="text-xs text-gray-500">Money Prize</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="call-to-action flex space-x-4">
        <button
          onClick={handleDelete}
          className="mt-6 w-full bg-red-500 text-white text-sm py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Delete
        </button>
        <button
          onClick={() => navigate("/admin-edit-challenge")}
          className="mt-6 w-full bg-blue-500 text-white text-sm py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default AdminKeyInstructionsBox;
