import { useState } from "react";
import { Link } from "react-router-dom";

const MasteryDashboard = () => {
  const [checklist, setChecklist] = useState({
    review: false,
    meetCPA: false,
    evaluate: false,
    reviewEstate: false,
    schedule: false,
  });

  const handleCheckboxChange = (key) => {
    setChecklist((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleRegister = () => {
    alert("Registration successful!");
  };

  return (
    <div className="max-w-[1200px] mx-auto my-8 px-4">
      <div className="bg-gradient-to-br from-[#4a90e2] to-[#d4af37] text-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        <h1 className="text-[1.75rem] font-semibold mb-2">
          Welcome to the Mastery Portal
        </h1>
        <p className="text-base opacity-90">
          Continue Your Journey to Financial Excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white rounded-lg p-8 shadow-md border border-[#e8eaed]">
          <h3 className="text-[#1a2332] text-xl font-semibold mb-4">
            📊 Your Tax Architecture Dashboard
          </h3>
          <p className="text-[#8b95a5] mt-2">
            <strong className="text-[#1a2332]">Implemented Strategies:</strong>{" "}
            8 of 12
          </p>
          <p className="text-[#8b95a5] mt-2">
            <strong className="text-[#1a2332]">Annual Tax Savings:</strong>{" "}
            $127,000
          </p>
          <p className="text-[#8b95a5] mt-2">
            <strong className="text-[#1a2332]">5-Year Projection:</strong>{" "}
            $635,000+
          </p>
          <p className="text-[#8b95a5] mt-2">
            <strong className="text-[#1a2332]">Net Worth Growth:</strong> +$2.1M
            (since start)
          </p>
          <div className="mt-3">
            <button className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold hover:bg-[#0e131c] transition-colors no-underline inline-block">
              View Full Report
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md border border-[#e8eaed]">
          <h3 className="text-[#1a2332] text-xl font-semibold mb-4">
            📅 Upcoming Masterclasses
          </h3>
          <div className="mt-2">
            <p className="text-[#1a2332] mb-2">
              <strong>Next Session:</strong> Advanced Captive Insurance
              Strategies
            </p>
            <p className="text-[#8b95a5] mb-4">March 15, 2025 • 7:00 PM EST</p>
            <button
              onClick={handleRegister}
              className="px-6 py-3 bg-[#d4af37] text-[#1a2332] rounded-lg font-semibold hover:bg-[#b8952e] transition-colors mt-2 border-none"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-2">
          🎯 Quarterly Review Checklist
        </h2>
        <p className="text-[#8b95a5] text-base mb-4">Q1 2025 - Action Items</p>
        <div className="mt-3 space-y-2">
          <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
            <input
              type="checkbox"
              checked={checklist.review}
              onChange={() => handleCheckboxChange("review")}
              className="mr-4 w-5 h-5 cursor-pointer"
            />
            Review Q4 2024 tax savings and update projections
          </label>
          <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
            <input
              type="checkbox"
              checked={checklist.meetCPA}
              onChange={() => handleCheckboxChange("meetCPA")}
              className="mr-4 w-5 h-5 cursor-pointer"
            />
            Meet with CPA to discuss new tax law changes
          </label>
          <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
            <input
              type="checkbox"
              checked={checklist.evaluate}
              onChange={() => handleCheckboxChange("evaluate")}
              className="mr-4 w-5 h-5 cursor-pointer"
            />
            Evaluate new real estate investment opportunities
          </label>
          <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
            <input
              type="checkbox"
              checked={checklist.reviewEstate}
              onChange={() => handleCheckboxChange("reviewEstate")}
              className="mr-4 w-5 h-5 cursor-pointer"
            />
            Review and update estate plan documents
          </label>
          <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
            <input
              type="checkbox"
              checked={checklist.schedule}
              onChange={() => handleCheckboxChange("schedule")}
              className="mr-4 w-5 h-5 cursor-pointer"
            />
            Schedule Defined Benefit Plan contribution
          </label>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          📚 Advanced Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div>
            <h4 className="text-[#1a2332] text-lg font-semibold mb-2">
              Latest Masterclasses
            </h4>
            <ul className="list-none p-0 mt-2">
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <Link
                  to="#"
                  className="text-[#4a90e2] hover:text-[#357abd] hover:underline no-underline"
                >
                  Maximizing Captive Insurance ROI
                </Link>
              </li>
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <Link
                  to="#"
                  className="text-[#4a90e2] hover:text-[#357abd] hover:underline no-underline"
                >
                  2025 Tax Law Updates
                </Link>
              </li>
              <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <Link
                  to="#"
                  className="text-[#4a90e2] hover:text-[#357abd] hover:underline no-underline"
                >
                  Multi-Generational Wealth Transfer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#1a2332] text-lg font-semibold mb-2">
              Community Forum Highlights
            </h4>
            <ul className="list-none p-0 mt-2">
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <Link
                  to="#"
                  className="text-[#4a90e2] hover:text-[#357abd] hover:underline no-underline"
                >
                  Case Study: $300K Savings via Cost Seg
                </Link>
              </li>
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <Link
                  to="#"
                  className="text-[#4a90e2] hover:text-[#357abd] hover:underline no-underline"
                >
                  New IRS Guidance on §831(b)
                </Link>
              </li>
              <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <Link
                  to="#"
                  className="text-[#4a90e2] hover:text-[#357abd] hover:underline no-underline"
                >
                  Best Practices for Family LLCs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-2">
          🏛️ Legacy Vault
        </h2>
        <p className="text-[#8b95a5] mb-4">
          Track your long-term wealth building and legacy planning progress
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          <div className="bg-[#e8eaed] rounded-lg p-6 text-center">
            <p className="text-[#1a2332] font-semibold mb-2">
              <strong>Estate Plan Status</strong>
            </p>
            <p className="text-[1.5rem] text-[#28a745] font-semibold">
              ✓ Current
            </p>
          </div>
          <div className="bg-[#e8eaed] rounded-lg p-6 text-center">
            <p className="text-[#1a2332] font-semibold mb-2">
              <strong>Trust Structures</strong>
            </p>
            <p className="text-[1.5rem] text-[#d4af37] font-semibold">
              3 Active
            </p>
          </div>
          <div className="bg-[#e8eaed] rounded-lg p-6 text-center">
            <p className="text-[#1a2332] font-semibold mb-2">
              <strong>Legacy Goal Progress</strong>
            </p>
            <p className="text-[1.5rem] text-[#4a90e2] font-semibold">67%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasteryDashboard;
