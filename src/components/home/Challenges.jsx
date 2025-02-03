
import dsd from '../../assets/dsd.jpg'
import { useNavigate} from 'react-router-dom';

const Challenges = () => {

  const Navigate = useNavigate();

  const handleNavigation = () => {
    Navigate("/Hackatons")
  }

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
      ];

  return (
    <div className="py-16 px-6">
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-xl md:text-3xl font-bold text-gray-800">
        Explore Challenges & Hackathons
      </h1>
      <p className="mt-4 text-gray-600">
        Join Skills Challenges Program to accelerate your career growth and
        become part of Africa’s largest workforce of digital professionals.
      </p>
    </div>

    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {challenges.map((challenge) => (
        <div
          key={challenge.id}
          className="bg-white shadow-lg rounded-lg p-4 border"
        >
          <div className="relative">
            <img
              src={dsd}
              alt={challenge.title}
              className="rounded-lg"
            />
            <span className="absolute top-3 right-3 bg-green-500 text-white text-sm px-3 py-1 rounded-full cursor-pointer">
              {challenge.status}
            </span>
          </div>
          <h2 className="mt-4 text-lg font-bold text-gray-800">
            {challenge.title}
          </h2>
          <div className="mt-3">
            <p className="text-sm font-semibold text-gray-800 ">
              Skills Needed:
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
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
          <p className="mt-4 text-sm text-gray-600">
            <strong>Seniority Level:</strong> {challenge.seniority}
          </p>
          <p className="mt-1 text-sm text-gray-600">
            <strong>Timeline:</strong> {challenge.timeline}
          </p>
          <button className="mt-4 bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg w-full hover:bg-blue-600">
            View Challenge
          </button>
        </div>
      ))}
    </div>

    {/* View More Button */}
    <div className="flex justify-center mt-12">
      <button onClick={handleNavigation} className="px-12 py-2 text-blue-500  bg-white border border-blue-500 rounded-md hover:bg-blue-500 font-medium hover:text-white transition-colors duration-300">
        View More
      </button>
    </div>
  </div>

  )
}

export default Challenges
