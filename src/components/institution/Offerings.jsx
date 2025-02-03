
import bag from '../../assets/th (11).jpeg'

const Offerings = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-md">
    <h2 className="text-base sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8 text-black">
      Key Offerings & Benefits:
    </h2>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {/* Card 1 */}
      <div className="bg-blue-500 text-white rounded-xl shadow p-4 sm:p-6 space-y-3 
      sm:space-y-4 flex flex-col items-start text-start">
        <div className="w-8 h-8 bg-white text-blue-600 flex items-center justify-center">
          <img src={bag} alt="Portfolio Icon" className="w-4 h-4" />
        </div>
        <h3 className="text-sm sm:text-lg font-semibold">
          Employability and Career Development Opportunities
        </h3>
        <p className="text-xs ">
          Students gain hands-on experience working on real-world challenges
          and help them build professional networks that increase their
          chances and readiness of landing job opportunities and this lead to
          career advancement and long-term success.
        </p>
      </div>
      {/* Card 2 */}
      <div className="bg-blue-500 text-white rounded-xl shadow p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col items-start text-start">
        <div className="w-8 h-8 bg-white text-blue-600 flex items-center justify-center">
          <img src={bag} alt="Portfolio Icon" className="w-4 h-4" />
        </div>
        <h3 className="text-sm sm:text-lg font-semibold">
          Practical Application of Classroom Knowledge
        </h3>
        <p className="text-xs ">
          The Skills Challenges bridge the gap between theoretical learning
          and practical application, reinforcing what students learn in their
          academic courses.
        </p>
      </div>
      {/* Card 3 */}
      <div className="bg-blue-500 text-white rounded-xl shadow p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col items-start text-start">
        <div className="w-8 h-8 bg-white text-blue-600 flex items-center justify-center">
          <img src={bag} alt="Portfolio Icon" className="w-4 h-4" />
        </div>
        <h3 className="text-sm sm:text-lg font-semibold">
          Students & Trainees Engagement
        </h3>
        <p className="text-xs ">
          Embed and incorporate Skills Challenges into your courses to give
          students and trainees hands-on projects and practices that enhance
          their learning experience and skills mastery. Competitive and
          project-based challenges keep students motivated and actively
          engaged in their learning journey.
        </p>
      </div>
      {/* Card 4 */}
      <div className="bg-blue-500 text-white rounded-xl shadow p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col items-start text-start col-span-1 sm:col-span-2">
        <div className="w-12 h-12 bg-white text-blue-600 flex items-center justify-center">
          <img src={bag} alt="Portfolio Icon" className="w-6 h-6" />
        </div>
        <h3 className="text-sm sm:text-lg font-semibold">
          Access to the Industry Experts & Mentors
        </h3>
        <p className="text-xs ">
          Skills Challenges expose students to Industry experts and mentors
          who offer guidance, support, and insights on the trends of digital
          careers. This can help students gain a deep understanding of their
          chosen field.
        </p>
      </div>
      {/* Card 5 */}
      <div className="bg-blue-500 text-white rounded-xl shadow p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col items-start text-start">
        <div className="w-8 h-8 bg-white text-blue-600 flex items-center justify-center">
          <img src={bag} alt="Portfolio Icon" className="w-4 h-4" />
        </div>
        <h3 className="text-sm sm:text-lg font-semibold">Skills Assessments</h3>
        <p className="text-xs ">
          Embed our project-based tests and skills assessments directly into
          your curriculum.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Offerings
