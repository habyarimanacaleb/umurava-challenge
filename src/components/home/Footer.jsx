import { useState } from "react";
import { Link } from "react-router-dom";

import facebook from "../../assets/facebook1.png";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import call from "../../assets/call.png";

const Footer = () => {
  const [emailInput, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch(
        "https://umurava-challenge-bn.onrender.com/api/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailInput }),
        }
      );

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage("Subscribed successfully!");
        setEmailInput("");
        setTimeout(() => setMessage(""), 5000);
      } else {
        setMessage(data.message || "Subscription failed.");
      }
    } catch (error) {
      setLoading(false);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <footer className="bg-customDark text-white py-4">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Section: Logo and Social Media */}
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-white text-blue-900 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-2xl font-bold">G</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <img src={facebook} alt="facebook" className="w-10 h-10" />
            <img src={gmail} alt="gmail" className="w-10 h-10" />
            <img src={linkedin} alt="linkedin" className="w-10 h-10" />
            <img src={youtube} alt="youtube" className="w-10 h-10" />
          </div>
        </div>

        <div className="border-t border-blue-700 mt-4"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* Contact Section */}
          <div>
            <p className="font-bold">Our Address</p>
            <p className="text-sm flex items-center space-x-2">
              <img src={email} alt="email" className="w-6 h-6" />
              <span>career@tickets.com</span>
            </p>
            <p className="text-sm flex items-center space-x-2">
              <img src={location} alt="location" className="w-6 h-6" />
              <span>89 KG 14 Ave, Kigali</span>
            </p>
            <p className="text-sm flex items-center space-x-2">
              <img src={call} alt="call" className="w-6 h-6" />
              <span>+250 700 000</span>
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <p className="font-bold">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <Link to="/">
                {" "}
                <li>Home</li>{" "}
              </Link>
              <Link to="/Hackatons">
                {" "}
                <li>Program</li>{" "}
              </Link>
              <Link to="/about">
                {" "}
                <li>About</li>{" "}
              </Link>
              <Link to="/contact">
                {" "}
                <li>Contact Us</li>{" "}
              </Link>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <p className="font-bold">
              Join our newsletter to keep up to date with us!
            </p>
            <form
              onSubmit={handleSubscribe}
              className="w-full max-w-md mt-2">
                  <div className="flex items-center bg-white p-2 rounded-lg
                    border-none outline-none">
              <input
                type="email"
                placeholder="Email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 
                leading-tight focus:outline-none"
                required
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 
                text-sm border-4 text-white py-1 px-2 rounded"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
              </div>
            </form>
            {message && (
              <p className="text-sm text-center mt-2 text-green-600">
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Footer Line */}
        <div className="border-t border-blue-700 mt-8 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © All Rights Reserved SawaPay 2024.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:underline hover:decoration-sky-500/30">
              Privacy Policy
            </span>
            <span>|</span>
            <span className="hover:underline hover:decoration-sky-500/30">
              Terms and Condition
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
