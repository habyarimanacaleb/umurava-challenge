
import bag from '../../assets/th (11).jpeg'

const Solution = () => {
  return (
     <section className="bg-gray-100 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Why solving this problem
        </h2>
        
      </div>
    
      {/* Card Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {/* Card 1 - Full Width */}
        <div className="col-span-1 md:col-span-2 bg-blue-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col items-start gap-4">
            {/* Icon */}
            <div className="w-12 h-12 bg-white text-blue-600  flex items-center justify-center">
            <img src={bag} alt="Portfolio Icon" className="w-6 h-6"  />
            </div>
            {/* Content */}
            <div>
              <h3 className="text-base font-bold mb-2">
                Bridging the Experience Ga
              </h3>
              <p className="text-xs text-left">
              Many talents acquired theoretical knowledge and are rejected from jobs because they lack work 
              experience and are not able to put in actions what they acquired in the schools.
              </p>
            </div>
          </div>
        </div>
    
        {/* Card 2 */}
        <div className="bg-blue-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col items-start gap-4">
            {/* Icon */}
            <div className="w-12 h-12 bg-white text-blue-600  flex items-center justify-center">
              <img src={bag} alt="Employment Icon" className="w-6 h-6" />
            </div>
            {/* Content */}
            <div>
              <h3 className="text-base font-bold mb-2">
                Bridging Education and Employment
              </h3>
              <p className="text-xs text-left">
              Traditional education does not always prepare talents for the demands of the 
              tech and digital economy and we are providing in-demand skills through Skills Challenges.
              </p>
            </div>
          </div>
        </div>
    
        {/* Card 3 */}
        <div className="bg-blue-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col items-start gap-4">
            {/* Icon */}
            <div className="w-12 h-12 bg-white text-blue-600  flex items-center justify-center">
              <img src={bag} alt="Recognition Icon" className="w-6 h-6" />
            </div>
            {/* Content */}
            <div>
              <h3 className="text-base font-bold mb-2">
                Preparing Talents for Global Job Markets
              </h3>
              <p className="text-xs text-left">
              We are ensuring that African talents shine globally and that is why we are 
              equipping them with global technical experience and standout globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
