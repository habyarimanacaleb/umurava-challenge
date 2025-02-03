import React, { useState } from "react";
import SideBar from "../../components/dashboard-components/SideBar";
import TopNavbar from "../../components/dashboard-components/TopNavbar";
import AdminKeyInstructionsBox from "../../components/dashboard-components/AdminKeyInstructionsBox";
import ChallengeDetailData from "../../asset/data-infor/ChallengeDetailData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
const AdminChallengeDetail = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };
  /// change project;description,description and tsk and deliverables into ARRAY.

  let projectDescription = ChallengeDetailData.projectDescription.split(".");
  let projectRequirement = ChallengeDetailData.projectRequirement.split(".");
  let deliverables = ChallengeDetailData.deliverables.split(".");
  // console.log(projectDescription, projectRequirement, deliverables);
  ///
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <SideBar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
        className={`${
          isSidebarExpanded ? "w-64" : "w-16"
        } fixed z-10 transition-all duration-300 lg:relative`}
      />

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300 bg-gray-100 lg:ml-0">
        <TopNavbar />
        <hr className="font-semibold text-gray-300" />
        <div className="filter-container flex flex-wrap items-center justify-between px-4 py-2 space-y-2 md:space-y-0">
          {/* Left Section: Back and Challenge Text */}
          <div className="flex items-center sm:text-[14px] lg:text-[18px] space-x-3">
            <div className="back flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="bg-gray-300 p-2 rounded-md text-xs cursor-pointer"
              />
              <p className="text-gray-500">Go Back</p>
            </div>
            <div className="challenge-hackthons flex items-center space-x-3">
              <p>Challenges & Hackathons</p>
              <span>/</span>
              <p className="text-blue-500">Design a Dashboard for Sokofund</p>
            </div>
          </div>

          {/* Right Section: Search Bar and Filter */}
          <div className="filter flex items-center space-x-4 ml-auto">
            {/* Search Bar */}
            <div className="search-bar flex items-center px-3 py-1 border rounded-lg">
              <FontAwesomeIcon
                icon={faSearch}
                size="sm"
                className="text-gray-500 pr-2"
              />
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm w-20 md:w-32"
              />
            </div>

            {/* Filter */}
            <div className="filter-bar flex items-center px-3 py-1 border rounded-lg cursor-pointer">
              <FontAwesomeIcon
                icon={faSlidersH}
                size="sm"
                className="text-gray-500 pr-2"
              />
              <p className="text-sm">Filter</p>
            </div>
          </div>
        </div>

        <hr className="font-semibold text-gray-300" />

        {/* New Section: Project Brief */}
        <div className="p-4 w-full  mx-auto flex space-x-5 lg:flex md:block sm:block mb-10">
          <div className="bg-white shadow-md rounded-lg p-6 md:w-3/4 lg:w-2/3 lg:my-0 sm:my-5">
            <img
              src="images/dsd.jpg"
              alt="Umurava Logo"
              className="w-full rounded-lg h-58 mx-auto"
            />
            <div className="project-brief">
              <h3 className="text-lg font-semibold mt-2">
                Project Brief: Payroll and HR Management System
              </h3>

              <p className="text-gray-600 mt-4">
                {ChallengeDetailData.projectBrief}
              </p>
            </div>

            {/* Tasks Section */}
            <div className="task">
              <h4 className="text-lg font-semibold mt-6">Tasks:</h4>
            </div>
            <div className="project-requirement">
              <h3 className="text-lg font-semibold mt-6">
                Project Requirements
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {projectRequirement.map((projectRequire, index) => (
                  <li key={index}>{projectRequire}</li>
                ))}
              </ul>
            </div>
            <div className="project-description">
              <h3 className="text-lg font-semibold mt-6">
                Project Description:Product Design
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {projectDescription.map((projectDesc, index) => (
                  <li key={index}>{projectDesc}</li>
                ))}
              </ul>
            </div>
            {/* Deliverables Section */}
            <div className="deliverables">
              <h4 className="text-lg font-semibold mt-6">Deliverables:</h4>
              <ul className="list-disc pl-5 text-gray-600">
                {deliverables.map((deliverable, index) => (
                  <li key={index}>{deliverable}</li>
                ))}
              </ul>
            </div>
            {/* Deliverables Section */}
            <div className="deliverable-set">
              <h4 className="text-lg font-semibold mt-6">Deliverables set:</h4>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Requirements Catalog and User Interaction Diagram</li>
                <li>User Interface Mockups</li>
                <li>Payroll and HR System Design Completed</li>
              </ul>
            </div>

            {/* Key Instructions */}
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-semibold">NOTE:</h4>
              <ul className="text-gray-600">
                <li>
                  Find Product Requirements Summary and Features Description for
                  Saway Pay{" "}
                  <span className=" underline cursor-pointer hover:text-blue-500 transition-300">
                    HERE
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col   space-y-4">
            <div className="key-instruction md:w-3/4 lg:w-2/3 lg:my-0 md:my-5 mb-6">
              <AdminKeyInstructionsBox />
            </div>
            <div className="Admin-side-complession-box bg-white shadow-lg rounded-lg py-6 md:w-3/4 lg:w-[100%] lg:my-0 md:my-5">
              {/* Title */}

              <div className="flex items-center px-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 pr-2">
                  Participants
                </h3>
                <span className="text-xs bg-blue-500 text-white px-2 rounded-full justify-center items-center">
                  250
                </span>
              </div>
              <hr className="font-semibold text-gray-300" />

              {/* Items */}
              <div className="space-y-4 ">
                <div className="flex items-center space-x-3 px-4 pt-4">
                  <div className="flex">
                    {/* User Profile */}
                    <div>
                      <img
                        src="images/person-image-2.png"
                        alt="User profile"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      {/* Green Circle for User Status */}
                    </div>
                    <div className="flex flex-col text-justify  ml-2">
                      <span className="text-xs font-semibold">Hilaire Sh</span>
                      <span className="text-xs">hilaire@uidesigner.com</span>
                    </div>
                  </div>
                </div>
                <hr className="font-semibold text-gray-300" />
                <div className="flex items-center space-x-3 px-4">
                  <div>
                    <h3 className="text-sm text-gray-700 font-medium">
                      Christian Manzi
                    </h3>
                    <p className="text-xs text-gray-500">UI/UX Designer</p>
                  </div>
                </div>
                <hr className="font-semibold text-gray-300" />
                <div className="flex items-center space-x-3 px-4">
                  <div>
                    <h3 className="text-sm text-gray-700 font-medium">
                      Jolly Mutesi
                    </h3>
                    <p className="text-xs text-gray-500">Content Creator</p>
                  </div>
                </div>
                <hr className="font-semibold text-gray-300" />
                <div className="flex items-center space-x-3 px-4">
                  <div>
                    <h3 className="text-sm text-gray-700 font-medium">
                      Dr. Samuel Smith
                    </h3>
                    <p className="text-xs text-gray-500">
                      Mental Health Professional
                    </p>
                  </div>
                </div>
                <hr className="font-semibold text-gray-300" />
                <div className="flex items-center space-x-3 px-4">
                  <div>
                    <h3 className="text-sm text-gray-700 font-medium">
                      Dr. Lily Chen
                    </h3>
                    <p className="text-xs text-gray-500">Dermatologist</p>
                  </div>
                </div>
                <hr className="font-semibold text-gray-300" />
              </div>

              {/* CTA Button */}
              <div className="cta flex">
                <button className="mt-6 w-full bg-blue-500 text-white text-sm py-2 mx-4 flex items-center text-center justify-center rounded-lg hover:bg-blue-600 transition duration-300">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminChallengeDetail;
