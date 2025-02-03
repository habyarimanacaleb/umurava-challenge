import Challenge from "../../assets/chllng.png";
import signIn from '../../assets/sign in.png';

const Start = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
    <div className="max-w-6xl mx-auto">
  <h2 className="text-center text-2xl font-bold text-gray-800 mb-12">
    How to Get Started
  </h2>

  {/* Step 1 + Image (Stacks on small screens) */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
    <div className="w-full md:w-2/3">
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <div className="mb-4">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full font-semibold text-sm">
            Step 1
          </span>
        </div>
        <h3 className="text-base font-semibold text-gray-800 mb-3">
          Sign up on Umurava Platform
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Submit your completed project for evaluation.
        </p>
      </div>
    </div>
    <div className="w-full md:w-1/3 flex justify-center">
      <img src={signIn} alt="Sign up illustration" className="rounded-lg w-80" />
    </div>
  </div>

  {/* Step 2 (Stacks below Step 1 on small screens) */}
  <div className="w-full md:w-1/2 mx-auto mb-12">
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="mb-4">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full font-semibold text-sm">
          Step 2
        </span>
      </div>
      <h3 className="text-base font-semibold text-gray-800 mb-3">
        Browse Open Challenges
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals.
      </p>
    </div>
  </div>

  {/* Step 3 + Image (Stacks on small screens) */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
    <div className="w-full md:w-2/3">
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <div className="mb-4">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full font-semibold text-sm">
            Step 3
          </span>
        </div>
        <h3 className="text-base font-semibold text-gray-800 mb-3">
          Register and Participate
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Sign up for the challenge and start working on the project.
        </p>
      </div>
    </div>
    <div className="w-full md:w-1/3 flex justify-center">
      <img src={Challenge} alt="Browse challenges illustration" className="rounded-lg w-80" />
    </div>
  </div>

  {/* Step 4 (No image, aligns in order) */}
  <div className="flex flex-col md:flex-row justify-center items-center ">
  <div className="w-full md:w-1/2 ">
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="mb-4">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full font-semibold text-sm">
          Step 4
        </span>
      </div>
      <h3 className="text-base font-semibold text-gray-800 mb-3">
        Submit your work
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Submit your completed project for evaluation.
      </p>
    </div>
  </div>

  <div className="w-full md:w-1/2 ">
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="mb-4">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full font-semibold text-sm">
          Step 5
        </span>
      </div>
      <h3 className="text-base font-semibold text-gray-800 mb-3">
        Receive Feedback and Recognition
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Get feedback on your work and celebrate your achievements.
      </p>
    </div>
  </div>
</div>
</div>


    </section>
  );
};

export default Start;