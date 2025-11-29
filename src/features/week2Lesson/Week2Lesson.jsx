import { Link } from "react-router-dom";

const Week2Lesson = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-8 px-4">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        <div className="border-b-2 border-[#e8eaed] pb-4 mb-6 text-center">
          <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">
            Entity Structuring & S-Corp Benefits
          </h1>
          <p className="text-[#8b95a5] text-base mt-2">
            Save $15K-$40K/Year on Self-Employment Taxes
          </p>
        </div>

        <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460]">
          <strong>⏱️ Estimated Time:</strong> 30 minutes for video + 15 minutes
          for notes
        </div>

        <div className="relative pb-[56.25%] h-0 overflow-hidden bg-[#1a2332] rounded-lg my-6 mt-3">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#e8eaed] text-[1.2rem] text-center w-full px-4">
            <p>🎬 Video: Entity Structuring Strategy</p>
            <p className="mt-4">Duration: 28 minutes</p>
            <button className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold hover:bg-[#b8952e] transition-colors mt-3 border-none">
              ▶ Play Video
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">
          🔑 Key Concepts
        </h2>
        <p className="text-[#8b95a5] mt-3">
          This week you'll master choosing the right business entity structure
          for your dental practice. Learn the differences between LLC,
          S-Corporation, and C-Corporation, and discover how proper structuring
          can save you tens of thousands in taxes annually.
        </p>

        <div className="mt-4">
          <h3 className="text-[#1a2332] text-lg mb-2">Topics Covered:</h3>
          <ul className="list-none p-0 mt-2">
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Understanding entity types: Sole Prop, LLC, S-Corp, C-Corp
            </li>
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Self-employment tax savings with S-Corporation election
            </li>
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Reasonable compensation requirements
            </li>
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Multi-entity structures for asset protection
            </li>
            <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              State-specific considerations
            </li>
          </ul>
        </div>

        <div className="py-4 px-6 rounded-md mt-4 border-0 border-solid border-l-4 bg-[#d4edda] border-[#155724] text-[#155724]">
          <strong>Potential Savings: $15,000 - $40,000 annually</strong>{" "}
          depending on your practice income
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-[#8b95a5] text-white rounded-lg font-semibold text-center hover:bg-[#6b7480] transition-colors no-underline"
          >
            ← Back to Dashboard
          </Link>
          <Link
            to="/certifications"
            className="px-6 py-3 bg-[#d4af37] text-[#1a2332] rounded-lg font-semibold text-center hover:bg-[#b8952e] transition-colors no-underline"
          >
            🏆 Show Certification
          </Link>
          <Link
            to="/curriculum"
            className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold text-center hover:bg-[#0e131c] transition-colors no-underline"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Week2Lesson;
