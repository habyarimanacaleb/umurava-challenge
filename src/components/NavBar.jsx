import { useNavigate, useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/Official Logo 2 (1).png";
import menu_icon from "../assets/th (10).jpeg";
import cross_icon from "../assets/1-01.jpg";

export const Navbar = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    Navigate("/join");
  };
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`${
            isActive("/") ? "text-blue-500 font-semibold" : "text-gray-600"
          } hover:text-blue-500 transition-colors duration-300`}
        >
          <img src={logo} alt="Logo" className="w-28" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm ">
          <Link
            to="/"
            className={`${
              isActive("/") ? "text-blue-500 " : "text-gray-600"
            }  transition-colors duration-300`}
          >
            Home
          </Link>
          <Link
            to="/Hackathons"
            className={`${
              isActive("/Hackatons") ? "text-blue-500 " : "text-gray-600"
            }  transition-colors duration-300`}
          >
            Challenges & Hackathons
          </Link>
          <Link
            to="/institution"
            className={`${
              isActive("/institution") ? "text-blue-500 " : "text-gray-600"
            } transition-colors duration-300`}
          >
            For Educational Institutions
          </Link>
          <Link
            to="/about"
            className={`${
              isActive("/about") ? "text-blue-500 " : "text-gray-600"
            } transition-colors duration-300`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`${
              isActive("/contact") ? "text-blue-500 " : "text-gray-600"
            } transition-colors duration-300`}
          >
            Contact Us
          </Link>
        </div>

        {/* Join Button */}
        <button
          onClick={handleNavigation}
          className="bg-black hover:bg-customBlue text-white font-medium py-2 px-4 text-sm rounded-md transition-colors duration-300 hidden md:block"
        >
          Join the Program
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={menu_icon}
          alt=""
          className="md:hidden w-7 cursor-pointer"
        />
        {/*mobile-menu*/}
        <div
          className={`md:hidden ${
            showMobileMenu ? "fixed w-full" : "h-0 w-0"
          } fixed right-0 top-0 
        bottom-0 overflow-hidden bg-white transition-all `}
        >
          <div className="flex justify-end p-6 cursor-pointer">
            <img
              onClick={() => setShowMobileMenu(false)}
              src={cross_icon}
              alt=""
              className="w-6"
            />
          </div>
          <ul className="flex flex-col items-center mt-5 px-5 text-lg ">
            <Link
              to="/"
              className="px-4 py-1 rounded-full inline-block text-base"
              onClick={() => setShowMobileMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/Hackatons"
              className="px-4 py-1 rounded-full inline-block text-base"
              onClick={() => setShowMobileMenu(false)}
            >
              Challenges & Hackathons
            </Link>
            <Link
              to="/institution"
              className="px-4 py-1 rounded-full inline-block text-base"
              onClick={() => setShowMobileMenu(false)}
            >
              For Educational Institutions
            </Link>
            <Link
              to="/about"
              className="px-4 py-1 rounded-full inline-block text-base"
              onClick={() => setShowMobileMenu(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="px-4 py-1 rounded-full inline-block text-base"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
