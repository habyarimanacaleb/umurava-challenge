
import students from '../../assets/students.png'

const Project = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-2xl shadow-md mt-20">
    {/* Text Content */}
    <div className="md:w-1/2 text-center md:text-left space-y-4">
      <h1 className="text-xl md:text-2xl font-bold text-blue-700">
        Accelerate Your Students and Trainees Employability and Career Growth through Project-based Learning Solution
      </h1>
      <p className="text-gray-600 text-sm md:text-base">
        We partner with Universities, Schools, and Training Institutions to build the work experience of their students and trainees through project-based learning challenges and hackathons.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Partner with us
      </button>
    </div>

    {/* Image Content */}
    <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
      <img
        src={students}
        alt="Students working on computers"
        className="rounded-2xl shadow-lg object-cover w-full max-w-md md:max-w-lg"
      />
    </div>
  </div>
  )
}

export default Project
