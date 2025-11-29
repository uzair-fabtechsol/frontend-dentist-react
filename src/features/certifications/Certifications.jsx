import { Link } from "react-router-dom";

const Certifications = () => {
  const handleDownloadCertificate = () => {
    alert("Certificate downloaded!");
  };

  const handleGetBadge = () => {
    alert("Badge copied to clipboard!");
  };

  return (
    <div className="max-w-[1200px] mx-auto my-8 px-4">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in] text-center">
        <h1 className="text-[#1a2332] text-[1.75rem] font-semibold mb-2">
          🏆 Congratulations, Tax Architect!
        </h1>
        <p className="text-[#8b95a5] text-base mt-2 mb-4">
          You've Completed the Architect's Edition
        </p>

        <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#d4edda] border-[#155724] text-[#155724] mt-4">
          <strong>
            You have successfully completed all 12 weeks and earned your
            certification!
          </strong>
          <br />
          You are now among the elite group of financially sophisticated
          dentists.
        </div>

        <div className="bg-gradient-to-br from-[#1a2332] to-[#d4af37] text-white p-12 rounded-xl my-8">
          <h2 className="text-[2rem] mb-4">Certificate of Completion</h2>
          <p className="text-[1.2rem]">This certifies that</p>
          <p className="text-[2.5rem] font-bold my-4">Dr. [Your Name]</p>
          <p className="text-[1.2rem]">has successfully completed</p>
          <p className="text-[1.8rem] font-bold my-4">
            The The Dentist's Tax & Business Architecture Learning System
            <br />
            Architect's Edition
          </p>
          <p className="text-base mt-8">
            Certified Tax Architect
            <br />
            Completed with 70%+ Mastery
            <br />
            January 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <button
            onClick={handleDownloadCertificate}
            className="px-6 py-4 bg-[#1a2332] text-white rounded-lg font-semibold text-lg hover:bg-[#0e131c] transition-colors border-none"
          >
            📥 Download Certificate
          </button>
          <button
            onClick={handleGetBadge}
            className="px-6 py-4 bg-[#d4af37] text-[#1a2332] rounded-lg font-semibold text-lg hover:bg-[#b8952e] transition-colors border-none"
          >
            🏅 Get Digital Badge
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          Your Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          <div className="bg-[#e8eaed] rounded-lg p-6 text-center">
            <h3 className="text-[2rem] text-[#d4af37] font-semibold mb-2">
              8/8
            </h3>
            <p className="text-[#8b95a5]">Personalized Courses Completed</p>
          </div>
          <div className="bg-[#e8eaed] rounded-lg p-6 text-center">
            <h3 className="text-[2rem] text-[#d4af37] font-semibold mb-2">8</h3>
            <p className="text-[#8b95a5]">Tax Strategies Implemented</p>
          </div>
          <div className="bg-[#e8eaed] rounded-lg p-6 text-center">
            <h3 className="text-[2rem] text-[#28a745] font-semibold mb-2">
              $127K
            </h3>
            <p className="text-[#8b95a5]">Projected Annual Savings (Year 1)</p>
          </div>
        </div>
        <p className="mt-3 text-center text-[#666] text-sm italic">
          📊 Based on strategies from your personalized tax plan • 70%+ mastery
          achieved
        </p>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          What's Next?
        </h2>
        <ul className="list-none p-0 mt-3">
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            Access to quarterly masterclasses with advanced strategies
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            Lifetime membership in the Certified Tax Architects community
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            Priority support from Norman Dotch and the team
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            Annual updates on new tax laws and opportunities
          </li>
          <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            Referral network of vetted CPAs, attorneys, and specialists
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-[#8b95a5] text-white rounded-lg font-semibold text-center hover:bg-[#6b7480] transition-colors no-underline"
        >
          Back to Dashboard
        </Link>
        <Link
          to="/mastery-dashboard"
          className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold text-center hover:bg-[#0e131c] transition-colors no-underline"
        >
          Enter Mastery Portal →
        </Link>
      </div>
    </div>
  );
};

export default Certifications;
