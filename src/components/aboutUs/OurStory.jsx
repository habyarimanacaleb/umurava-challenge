import video from '../../assets/video.mp4'

const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-8 md:p-16 rounded-lg 
    shadow-lg space-y-8 md:space-y-0 md:space-x-8 mt-10">
      {/* Left Text Section */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
          Our Story
        </h2>
        <p className="text-gray-700 leading-relaxed">
          With 3 years of experience matching African digital talents to local
          and global job markets, we still remain with a big number of jobs
          that remain unfilled due to the lack of experienced African Talents.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Driven by our mission to place skilled and professional digital
          talent, we created Skills Challenges as a project-based learning
          solution for talents to gain real-world experience, solve problems,
          and build portfolios so that they become ready for global job
          markets.
        </p>
      </div>

      {/* Right Video Section */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <video
            className="w-5/6 h-5/6 object-cover rounded-md shadow-md"
            autoPlay
            loop
            
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-lg md:text-xl font-bold text-yellow-500 text-center">
              UMURAVA <br /> SKILLS CHALLENGES
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
