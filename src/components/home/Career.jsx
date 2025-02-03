import career from '../../assets/career.png'

const Career = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
    <div className="bg-blue-500 rounded-lg p-8 flex flex-col md:flex-row items-center md:items-stretch">
      {/* Left Image Section */}
      <div className="md:w-1/2">
        <img
          src={career}
          alt="Career Growth"
          className="rounded-lg object-cover h-64"
        />
      </div>

      {/* Right Text Section */}
      <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0 text-white flex flex-col justify-center">
        <h2 className="text-xl font-bold leading-tight">
          Ready to Unlock Your Career Potential Today!
        </h2>
        <p className="mt-2 text-sm leading-relaxed">
          Join a challenge or a hackathon to gain valuable work experience,
          build an impressive portfolio, and increase your chances to land
          job opportunities and accelerate your career growth.
        </p>
        <button className="mt-4 px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition">
          View Challenge
        </button>
      </div>
    </div>
  </div>
  )
}

export default Career
