import skills from '../../assets/skills.png'

const Skills = () => {
    const benefits = [
        {
          id: 1,
          title: "Enhance Your Employment Path",
          description:
            "Network with other talented individuals and learn from their experiences.",
          icon: "📘", 
        },
        {
          id: 2,
          title: "Earn Recognition and Prizes",
          description:
            "Gain valuable experience and knowledge to advance your career in the digital economy.",
          icon: "🎖️", 
        },
        {
          id: 3,
          title: "Personal Growth",
          description:
            "Challenge yourself, learn new skills, and expand your professional network.",
          icon: "🌱", 
        },
        {
          id: 4,
          title: "Learn from Industry Experts",
          description:
            "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces.",
          icon: "👨‍🏫", 
        },
      ];
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-xl md:text-4xl font-bold text-gray-800">
            What else can I gain from participating in Skills Challenges?
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join Skills Challenges Program to accelerate your career growth and
            become part of Africa’s largest workforce of digital professionals.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
          {/* Left Side (Text and Icons) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex flex-col gap-4 items-start">
                {/* Icon */}
                <div className="text-blue-500 text-2xl">{benefit.icon}</div>
                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side (Image) */}
          <div className="flex-1">
            <img
              src={skills}
              alt="Skills Challenges Dashboard"
              className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
