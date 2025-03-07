import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import ViewChallengeButton from "./dashboard-components/ViewChallengeButton";
const NewChallengeCard = ({ isSidebarExpanded }) => {
  const challenges = [
    {
      id: 1,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "Web Development"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
      status: "Open",
    },
    {
      id: 2,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "Web Development"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
      status: "Open",
    },
    {
      id: 3,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "Web Development"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
      status: "Open",
    },
    {
      id: 4,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "Web Development"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
      status: "Open",
    },
    {
      id: 5,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "Web Development"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
      status: "Open",
    },
    {
      id: 6,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "Web Development"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
      status: "Open",
    },
  ];
  const navigate = useNavigate();
  const handleViewChallenge = () => {
    navigate("/join");
  };
  return (
    <div className="p-4">
      <div className=" text-center flex justify-between items-center">
        <h1 className="text-md font-semibold md:text-xl font-bold ">
          Recent Challenges
        </h1>
        <button className="right-3 text-blue-600 font-inter font-semibold cursor-pointer flex items-center">
          <span className="text-md pr-2">See more</span>
          <FontAwesomeIcon icon={faChevronRight} size="sm" />
        </button>
      </div>
      <div className="flex flex-wrap gap-4 mt-12">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className={`bg-white shadow-lg rounded-lg ${
              isSidebarExpanded ? "w-[18rem]" : "w-[25rem]"
            } border max-w-[500px]  shadow-md md:w-full mx-auto`}
          >
            <div className="relative">
              <img
                src={`${process.env.PUBLIC_URL}/images/dsd-copy.jpg`}
                alt={challenge.title}
                className="w-full h-44 object-cover rounded-t-lg p-2"
                style={{ borderRadius: "14px" }}
              />
              <button
                onClick={handleViewChallenge}
                className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full"
              >
                {challenge.status}
              </button>
            </div>
            <h2
              className={`mt-4 ${
                isSidebarExpanded ? "text-[15px]" : "text-lg"
              }  font-bold text-gray-800 px-4`}
            >
              {challenge.title}
            </h2>
            <div className="mt-3 px-4">
              <p className="text-sm font-semibold text-gray-800">
                Skills Needed:
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {challenge.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-blue-500 bg-white border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <p
              className={`mt-4 ${
                isSidebarExpanded ? "text-[12px]" : "text-sm"
              } text-gray-600 px-4`}
            >
              <strong>Seniority Level:</strong> {challenge.seniority}
            </p>
            <p className="mt-1 text-sm text-gray-600 px-4 pb-2">
              <strong>Timeline:</strong> {challenge.timeline}
            </p>
            <hr className="my-2" />
            <ViewChallengeButton challenge={challenge} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewChallengeCard;
