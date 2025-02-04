import { useNavigate } from "react-router-dom";
import people_img_1 from "../../assets/gallery-1.png";

import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import bag from "../../assets/th (11).jpeg";

const Hero = () => {
  const Navigate = useNavigate();

  const handleNavigation = () => {
    Navigate("/join");
  };
  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-12 px-6 mt-20">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:w-1/2 mt-5">
            <h1 className="text-2xl lg:text-3xl font-bold text- leading-tight mb-4 mr-4">
              Build Work Experience <br />
              through Skills Challenges Program
            </h1>
            <p className="text-gray-600 text-base mb-6 mr-6">
              Enhance your Employability and Accelerate your Career Growth by
              working on Hands-on projects & hackathons from various businesses
              & organizations.
            </p>
            <button
              onClick={handleNavigation}
              className="bg-customBlue text-white px-5 py-2 rounded-md text-base  shadow-md hover:bg-customBlue transition duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Right Content with Two Images */}
          <div className="lg:w-1/2  flex justify-center lg:justify-end space-x-4">
            {/* Image 1 */}
            <div className="relative">
              <img
                src={people_img_1}
                alt="Group working"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              {/* Overlay Icon */}
              <div className="absolute -top-5 right-8 bg-white p-2 rounded-full shadow-lg">
                <img src={user_2} alt="Icon" className="w-8 h-8" />
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative">
              <img
                src={people_img_1}
                alt="Individual working"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              {/* Talents Info */}

              <div className="absolute bottom-4 -left-80 bg-white p-3 rounded-lg shadow-md flex items-center  lg:flex">
                <div className="flex -space-x-2">
                  <img
                    src={user_2}
                    alt="Avatar 1"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src={user_3}
                    alt="Avatar 2"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src={user_4}
                    alt="Avatar 3"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
                <span className="ml-2 text-gray-700 text-sm font-medium">
                  20k+ <br /> Talents
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* second section */}
      <section className="bg-gray-100 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Experience a New Way of Building Work Experience
          </h2>
          <p className="text-gray-600 text-lg">
            Join Skills Challenges Program to accelerate your career growth and
            become part of Africa’s largest workforce of digital professionals.
          </p>
        </div>

        {/* Card Grid */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {/* Card 1 - Full Width */}
          <div className="col-span-1 md:col-span-2 bg-customBlue text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 bg-white text-customBlue  flex items-center justify-center">
                <img src={bag} alt="Portfolio Icon" className="w-6 h-6" />
              </div>
              {/* Content */}
              <div>
                <h3 className="text-base font-bold mb-2">
                  Build a Strong Portfolio and Hands-On Experience
                </h3>
                <p className="text-xs text-left">
                  Tackle real-world projects through challenges and hackathons
                  that mirror real-world challenges faced by businesses and
                  organizations. Showcase your skills and accomplishments to
                  potential employers and clients through a portfolio of
                  completed projects.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-customBlue text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 bg-white text-customBlue  flex items-center justify-center">
                <img src={bag} alt="Employment Icon" className="w-6 h-6" />
              </div>
              {/* Content */}
              <div>
                <h3 className="text-base font-bold mb-2">
                  Enhance Your Employment Path
                </h3>
                <p className="text-xs text-left">
                  Develop in-demand skills and build a strong portfolio to
                  increase your chances of landing your dream job or contract.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-customBlue text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 bg-white text-customBlue  flex items-center justify-center">
                <img src={bag} alt="Recognition Icon" className="w-6 h-6" />
              </div>
              {/* Content */}
              <div>
                <h3 className="text-base font-bold mb-2">
                  Earn Recognition and Prizes
                </h3>
                <p className="text-xs text-left">
                  Earn both Money and Knowledge Prizes by participating in
                  various contests and competitions by working on real-world
                  projects and hackathons from our partner companies &
                  organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
