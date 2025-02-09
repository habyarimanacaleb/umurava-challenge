import React, { useState } from "react";
import SideBar from "../../components/dashboard-components/SideBar";
import TopNavbar from "../../components/dashboard-components/TopNavbar";
import TalentKeyInstructionsBox from "../../components/dashboard-components/TalentKeyInstructionsBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../App";
const TalentChallengeDetail = () => {
  const { userRole } = useUser();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  if (!userRole) return null; // Prevents errors

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      {userRole && (
        <SideBar
          isSidebarExpanded={isSidebarExpanded}
          userRole={userRole}
          toggleSidebar={toggleSidebar}
          className={`${
            isSidebarExpanded ? "w-64" : "w-16"
          } fixed z-10 transition-all duration-300 lg:relative`}
        />
      )}
      {/* Main Content */}
      <div className="flex-1 transition-all duration-300 bg-gray-200 lg:ml-0">
        <TopNavbar />
        <hr />
        <div className="filter-container flex flex-wrap items-center justify-between px-4 py-2 space-y-2 md:space-y-0">
          {/* Left Section: Back and Challenge Text */}
          <div className="flex items-center space-x-3">
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

        <hr />
        {/* New Section: Project Brief */}
        <div className="p-4 w-full  mx-auto flex space-x-5 lg:flex md:block ">
          <div className="bg-white shadow-md rounded-lg p-6 md:w-3/4 lg:w-2/3 lg:my-0 sm:my-5">
            <img
              src="images/dsd.jpg"
              alt="Umurava Logo"
              className="w-full rounded-lg h-58 mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2">
              Project Brief: Payroll and HR Management System
            </h3>

            <p className="text-gray-600 mt-4">
              A Fintech company that is developing a Digital Financial Platform
              designed for businesses and their workforce in Africa is
              partnering with Umurava to run a Skills Challenge for Product
              Design. This Fintech Company offers a Payroll Management System to
              Employers and Embedded Financial services and products to
              Employees and Gig Workers across Africa.
            </p>

            {/* Tasks Section */}
            <h4 className="text-lg font-semibold mt-6">Tasks:</h4>
            <h3 className="text-lg font-semibold mt-6">Product Requirements</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>UX research to understand Project Requirements</li>
              <li>Understanding User Needs</li>
              <li>Understanding Business Goals</li>
              <li>Determine Interaction between users</li>
              <li>Requirements Catalog</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6">Product Design:</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>User Interface Design for each step</li>
              <li>
                Creating wireframe to outline the basic structure and layout of
                the web and mobile app.
              </li>
              <li>
                Designing Visually appearing and user-friendly interfaces for
                web,mobile, and tablet devices.
              </li>
              <li>Provide a feedback session for in-development guidance</li>
            </ul>

            {/* Deliverables Section */}
            <h4 className="text-lg font-semibold mt-6">Deliverables:</h4>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Requirements Catalog and User Interaction Diagram</li>
              <li>User Interface Mockups</li>
              <li>Payroll and HR System Design Completed</li>
            </ul>
            {/* Deliverables Section */}
            <h4 className="text-lg font-semibold mt-6">Deliverables:</h4>
            <ul className="list-disc pl-5 text-gray-600">
              <li>
                The Product Designer will provide all documents and deliverables
                to the client before the review meetings
              </li>
            </ul>

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
          <div className="key-instruction md:w-3/4 lg:w-2/3 lg:my-0 md:my-5">
            <TalentKeyInstructionsBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentChallengeDetail;
