

const Stats = () => {
  return (
    <section className="bg-blue-600 py-10  rounded-lg mx-6 mb-10">
      <div className="container mx-auto flex flex-row md:flex-row justify-center items-center 
      lg:gap-40 md:gap-20 sm:gap-5 sm:text-xs px-6">
        {/* Stat Item */}
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold">1</h3>
          <p className="text-sm">Year</p>
        </div>
        {/* Stat Item */}
        <div className="text-center justify-center items-center text-white">
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-sm">Challenges <br /> Completed</p>
        </div>
        {/* Stat Item */}
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold">10K+</h3>
          <p className="text-sm">Users</p>
        </div>
        {/* Stat Item */}
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold">6+</h3>
          <p className="text-sm">Countries</p>
        </div>
      </div>
    </section>
  )
}

export default Stats
