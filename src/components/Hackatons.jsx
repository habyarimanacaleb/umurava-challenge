import dsd from "../assets/dsd.jpg";
import { useNavigate } from "react-router-dom";
const challenges = [
  {
    id: 1,
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
    status: "Open",
  },
  {
    id: 2,
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
    status: "Open",
  },
  {
    id: 3,
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
    status: "Open",
  },
  {
    id: 4,
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
    status: "Open",
  },
  {
    id: 5,
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
    status: "Open",
  },
  {
    id: 6,
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
    status: "Open",
  },
  {
    id: 7,
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
    status: "Open",
  },
  {
    id: 8,
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
    status: "Open",
  },
];

const Hackatons = () => {
  const Navigate = useNavigate();

  const handleNavigation = () => {
    Navigate("/");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 mt-20">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2 mb-8">
        <button
          onClick={handleNavigation}
          className="text-blue-500 hover:text-blue-700"
        >
          ← Go Back
        </button>
        <span className="text-gray-500">/ Challenges & Hackathons</span>
      </div>

      {/* Challenge Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Challenge Header */}
            <div className="relative">
              <img
                src={dsd}
                alt={challenge.title}
                className="w-full h-40 object-cover"
              />
              <span className="absolute top-2 right-2 bg-green-500 text-white text-sm font-semibold py-1 px-3 rounded-full">
                {challenge.status}
              </span>
            </div>

            {/* Challenge Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {challenge.title}
              </h3>
              <div className="mt-2">
                <p className="text-sm font-semibold text-gray-600">
                  Skills Needed:
                </p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {challenge.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs text-blue-500 bg-white border border-blue-500 
                  rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm">
                  <span className="font-semibold">Seniority Level:</span>{" "}
                  {challenge.seniority}
                </p>
                <p className="text-sm mt-1">
                  <span className="font-semibold">Timeline:</span>{" "}
                  {challenge.timeline}
                </p>
              </div>
            </div>

            {/* View Challenge Button */}
            <div className="p-4">
              <button className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition">
                View Challenge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackatons;
