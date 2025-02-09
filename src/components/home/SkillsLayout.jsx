import { useState } from "react";
import dashboard from "../../assets/dashboard.png";

const SkillsLayout = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <section>
      <div className="bg-gray-50 py-16 px-6">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-lg md:text-2xl font-bold text-gray-800">
            Skills Challenges Cover various in-demand skills and Careers for the
            digital economy
          </h1>
          <p className="mt-4 text-gray-600">
            Explore the projects that various talents are working on.
          </p>
        </div>

        {/* Skills Tags Section */}
        <div className="flex gap-4 justify-center my-6">
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition">
            UI/UX Design
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition">
            Data Science
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Graphic Design",
            "Data Analysis & Research",
            "Animation",
            "Videography & Photography",
            "AI & Machine Learning",
            "Web3",
            "Digital Marketing & Communications",
          ].map((skill, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white transition"
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Card Section (Slides) */}
        <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row items-center mt-16 max-w-6xl mx-auto p-6 lg:p-12 transition-all duration-500 ease-in-out">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="w-10 h-10 bg-gray-950 rounded-full flex items-center justify-center text-xl font-semibold mb-4">
              <span className="text-green-600">s</span>
              <span className="text-gray-300">f.</span>
            </div>
            <h2 className="text-base text-gray-600">
              The Embedded Finance Platform and Payroll Management Software
              Solutions for your organization and Workforce.
            </h2>
            <span className="mt-4 inline-block text-blue-500 font-medium hover:underline cursor-pointer">
              Learn more{" "}
              <span className="inline-flex items-center justify-center w-6 h-6 ml-2 bg-blue-500 rounded-full text-gray-100">
                &#8594;
              </span>
            </span>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={dashboard}
              alt="Dashboard Preview"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeSlide === dot ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
              onClick={() => handleSlideChange(dot)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsLayout;
