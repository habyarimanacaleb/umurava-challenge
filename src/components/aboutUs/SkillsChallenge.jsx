import skillschallenge from '../../assets/skillschallenge.png'

const SkillsChallenge = () => {
  return (
    <div className="bg-gray-50 py-16 px-8 md:px-16 lg:px-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Skills Challenges Program is built on the Umurava Talent Marketplace Platform
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          A Project-based Learning Solution aimed at providing young and senior talents with 
          an opportunity to showcase their skills to real-world projects and challenges from 
          our partner companies and organizations.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          Umurava Skills Challenges enables young talents to build a portfolio and 
          experience that increases their readiness to access job opportunities and projects.
        </p>
        <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="relative">
        <div className="bg-blue-100 rounded-lg p-4 shadow-md">
          
          <img
            src={skillschallenge}
            alt="Umurava Talent Platform"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default SkillsChallenge
