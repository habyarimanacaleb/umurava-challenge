import integration from '../../assets/integration.png'
function IntegrationItem({number, text }) {
    return (
      <div className="flex items-start space-x-4">
        <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold 
        rounded-full">
          {number}
        </div>
        <p className="text-base text-gray-700">{text}</p>
      </div>
    );
  }
  
const Integration = () => {
  return (
    <div className="bg-gray-50 p-8 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        How Skills Challenges Program can Be Integrated into your Learning Institution
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  items-center">
        <div className="space-y-4">
          <IntegrationItem number="1" text="As Career Development and Job Readiness Program" />
          <IntegrationItem number="2" text="As Skills Assessments Method after a course or a term" />
          <IntegrationItem number="3" text="As extracurricular activities to complement academic courses" />
          <IntegrationItem number="4" text="As the portfolio of the Students" />
          <IntegrationItem number="5" text="As part of Capstone Projects or final-year assignments" />
        </div>
        <div className="relative">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
              src={integration}
              alt="Challenges Dashboard" 
              className="w-3/4 h-auto shadow-slate-400 "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Integration
