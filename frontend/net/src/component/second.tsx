
import { Link } from "react-router-dom";
function Sec() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      {/* Header */}
     

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">

          {/* Red Check Circle */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 border-2 border-red-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Step Text */}
          <p className="text-sm text-gray-400 mb-2">
            Step <span className="font-bold text-white">2</span> of <span className="font-bold text-white">3</span>
          </p>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Choose your plan</h1>

          {/* Features List */}
          <ul className="text-left space-y-4 text-base mb-8">
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">✔</span>
              <p>No commitments, cancel anytime.</p>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">✔</span>
              <p>Everything on Netflix for one low price.</p>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">✔</span>
              <p>No ads and no extra fees. Ever.</p>
            </li>
          </ul>

          {/* Next Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md text-lg transition">
           <Link to="/finally"> Next</Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Sec;
