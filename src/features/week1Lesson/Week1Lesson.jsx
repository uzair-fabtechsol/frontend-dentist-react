import { useState } from "react";
import { Link } from "react-router-dom";

const Week1Lesson = () => {
  const [notes, setNotes] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const handleNoteChange = (key, value) => {
    setNotes((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSaveNotes = () => {
    alert("Notes saved! You can review them anytime in your dashboard.");
  };

  const handlePlayVideo = () => {
    alert("Video would play here in production");
  };

  return (
    <div className="max-w-[1400px] mx-auto my-8 px-4">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        <div className="border-b-2 border-[#e8eaed] pb-4 mb-6 text-center">
          <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">
            Week 1: R.O.B.S. - Rollover for Business Startups
          </h1>
          <p className="text-[#8b95a5] text-base mt-2">
            Fund Your Practice with Retirement Dollars Tax-Free
          </p>
        </div>

        <div className="mt-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#1a2332] font-medium">Week 1 Progress</span>
            <span className="text-[#1a2332] font-semibold">0%</span>
          </div>
          <div className="w-full h-6 bg-[#e8eaed] rounded-xl overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4a90e2] to-[#d4af37] rounded-xl transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: "0%" }}
            >
              <span className="text-white text-xs font-semibold">Start</span>
            </div>
          </div>
        </div>

        <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460]">
          <strong>⏱️ Estimated Time:</strong> 25 minutes for video + 10 minutes
          for notes
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4 animate-[fadeIn_0.5s_ease-in]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-2">
          📹 Video Lesson
        </h2>
        <p className="text-[#8b95a5] text-base mb-4">
          Norman Dotch explains R.O.B.S. strategy step-by-step
        </p>
        <div className="relative pb-[56.25%] h-0 overflow-hidden bg-[#1a2332] rounded-lg my-6 mt-3">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#e8eaed] text-[1.2rem] text-center w-full px-4">
            <p>🎬 Video: R.O.B.S. Strategy Explained</p>
            <p className="mt-4">Duration: 24 minutes</p>
            <button
              onClick={handlePlayVideo}
              className="px-6 py-3 bg-[#1a2332]  text-white rounded-lg font-semibold hover:bg-[#b8952e] transition-colors mt-3 border-none"
            >
              ▶ Play Video
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4 animate-[fadeIn_0.5s_ease-in]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          🔑 Key Concepts
        </h2>

        <div className="mt-3">
          <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
            What is R.O.B.S.?
          </h3>
          <p className="text-[#8b95a5]">
            R.O.B.S. (Rollover for Business Startups) is an IRS-approved method
            that allows you to use retirement funds to finance a business
            (including purchasing or starting a dental practice) without
            triggering taxes or early withdrawal penalties.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
            How It Works (Simplified)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            <div className="bg-[#e8eaed] rounded-lg p-6">
              <h4 className="text-[#1a2332] font-semibold mb-2">
                Step 1: New C-Corporation
              </h4>
              <p className="text-[#8b95a5] text-sm">
                Create a new C-Corporation for your practice
              </p>
            </div>
            <div className="bg-[#e8eaed] rounded-lg p-6">
              <h4 className="text-[#1a2332] font-semibold mb-2">
                Step 2: 401(k) Plan
              </h4>
              <p className="text-[#8b95a5] text-sm">
                The C-Corp establishes a 401(k) plan
              </p>
            </div>
            <div className="bg-[#e8eaed] rounded-lg p-6">
              <h4 className="text-[#1a2332] font-semibold mb-2">
                Step 3: Rollover Funds
              </h4>
              <p className="text-[#8b95a5] text-sm">
                Roll your existing IRA/401(k) into the new plan
              </p>
            </div>
            <div className="bg-[#e8eaed] rounded-lg p-6">
              <h4 className="text-[#1a2332] font-semibold mb-2">
                Step 4: Buy Stock
              </h4>
              <p className="text-[#8b95a5] text-sm">
                The 401(k) uses those funds to buy C-Corp stock
              </p>
            </div>
            <div className="bg-[#e8eaed] rounded-lg p-6">
              <h4 className="text-[#1a2332] font-semibold mb-2">
                Step 5: Fund Practice
              </h4>
              <p className="text-[#8b95a5] text-sm">
                The C-Corp now has capital to buy/operate the practice
              </p>
            </div>
            <div className="bg-[#e8eaed] rounded-lg p-6">
              <h4 className="text-[#1a2332] font-semibold mb-2">
                Step 6: No Taxes/Penalties
              </h4>
              <p className="text-[#8b95a5] text-sm">
                No taxes, no penalties - completely legal!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
            Tax Advantages
          </h3>
          <ul className="list-none p-0 mt-2">
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              No 10% early withdrawal penalty (saves $10K per $100K used)
            </li>
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              No income tax on the rollover (saves 25-37% depending on bracket)
            </li>
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Use retirement funds without waiting until age 59½
            </li>
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Maintain tax-deferred growth on remaining funds
            </li>
            <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Avoid taking on debt or finding outside investors
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
            Real Example: Dr. Sarah's Acquisition
          </h3>
          <div className="bg-[#d4edda] rounded-lg p-6 border-0 border-solid border-l-4 border-[#28a745]">
            <p className="text-[#155724] mb-2">
              <strong>Situation:</strong> Dr. Sarah wanted to buy a practice for
              $500K but didn't want a bank loan.
            </p>
            <p className="text-[#155724] mt-2 mb-2">
              <strong>Solution:</strong> Used R.O.B.S. with her $400K IRA +
              $100K bank loan
            </p>
            <p className="text-[#155724] mt-2 mb-2">
              <strong>Result:</strong>
            </p>
            <ul className="ml-6 mt-4 space-y-1 list-disc text-[#155724]">
              <li>
                <strong>Avoided:</strong> $40K early withdrawal penalty (10%)
              </li>
              <li>
                <strong>Avoided:</strong> $120K income tax (30% rate)
              </li>
              <li>
                <strong>Saved:</strong> $160K in taxes and penalties
              </li>
              <li>
                <strong>Only borrowed:</strong> $100K instead of $500K
              </li>
              <li>
                <strong>Annual savings:</strong> ~$20K in interest payments
              </li>
            </ul>
            <p className="mt-3 text-[1.2rem] font-bold text-[#28a745]">
              Total 5-year savings: $260K+
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
            Who Should Use R.O.B.S.?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-[#28a745] text-base font-semibold mb-2">
                ✓ Ideal Candidates
              </h4>
              <ul className="list-none p-0 mt-2">
                <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                  Buying or starting a practice
                </li>
                <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                  Have $50K+ in IRA/401(k)
                </li>
                <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                  Under age 59½
                </li>
                <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                  Want to avoid debt
                </li>
                <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                  Can set up C-Corporation
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#dc3545] text-base font-semibold mb-2">
                ✗ Not Ideal For
              </h4>
              <ul className="ml-6 mt-2 space-y-1 list-disc">
                <li className="text-[#8b95a5]">Already own your practice</li>
                <li className="text-[#8b95a5]">Less than $50K in retirement</li>
                <li className="text-[#8b95a5]">
                  Can't handle C-Corp complexity
                </li>
                <li className="text-[#8b95a5]">Only need working capital</li>
                <li className="text-[#8b95a5]">
                  Over age 59½ (other options better)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
            Common Mistakes to Avoid
          </h3>
          <div className="py-4 px-6 rounded-md border-0 border-solid border-l-4 bg-[#fff3cd] border-[#856404] text-[#856404]">
            <ul className="ml-6 space-y-1 list-disc">
              <li>
                <strong>Using a DIY approach:</strong> This is complex - you
                need specialized help
              </li>
              <li>
                <strong>Not following ongoing rules:</strong> Annual compliance
                is required
              </li>
              <li>
                <strong>Mixing personal/business:</strong> Must maintain
                corporate formalities
              </li>
              <li>
                <strong>Ignoring the exit strategy:</strong> Plan how you'll
                eventually distribute funds
              </li>
              <li>
                <strong>Using prohibited transaction structures:</strong> IRS
                has strict rules
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
            Setup Process & Timeline
          </h3>
          <p className="text-[#8b95a5] mb-2">
            <strong>Average timeline: 4-8 weeks</strong>
          </p>
          <ul className="list-none p-0 mt-2">
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              <strong>Week 1-2:</strong> Consult with R.O.B.S. specialist,
              determine eligibility
            </li>
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              <strong>Week 2-3:</strong> Form C-Corporation, establish 401(k)
              plan
            </li>
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              <strong>Week 3-4:</strong> Complete rollover paperwork
            </li>
            <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              <strong>Week 4-6:</strong> Transfer funds, purchase stock
            </li>
            <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              <strong>Week 6-8:</strong> Finalize documentation, ready to
              acquire practice
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
            Costs to Expect
          </h3>
          <div className="bg-white rounded-lg p-6 border border-[#e8eaed]">
            <ul className="ml-6 space-y-1 list-disc">
              <li className="text-[#8b95a5]">
                <strong>Setup fees:</strong> $4,000 - $6,000 (one-time)
              </li>
              <li className="text-[#8b95a5]">
                <strong>Annual maintenance:</strong> $1,200 - $2,000/year
              </li>
              <li className="text-[#8b95a5]">
                <strong>Legal/accounting:</strong> $1,000 - $3,000 (one-time)
              </li>
              <li className="text-[#8b95a5]">
                <strong>Total first year:</strong> $6,000 - $11,000
              </li>
            </ul>
            <p className="mt-3 italic text-[#8b95a5]">
              <strong>ROI:</strong> If you're rolling over $200K+, the tax
              savings typically exceed setup costs by 10-20x
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4 animate-[fadeIn_0.5s_ease-in]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-2">
          💭 Reflection Questions
        </h2>
        <p className="text-[#8b95a5] mb-4">
          Think about these before moving to the case study:
        </p>
        <div className="mb-6">
          <label className="block mb-2 text-[#1a2332] font-semibold">
            1. Do you have plans to buy a practice or expand in the next 1-2
            years?
          </label>
          <textarea
            value={notes.question1}
            onChange={(e) => handleNoteChange("question1", e.target.value)}
            rows="2"
            placeholder="Your thoughts..."
            className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2] min-h-[80px] resize-y"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-[#1a2332] font-semibold">
            2. How much do you have in rollover-eligible retirement accounts?
          </label>
          <textarea
            value={notes.question2}
            onChange={(e) => handleNoteChange("question2", e.target.value)}
            rows="2"
            placeholder="Your thoughts..."
            className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2] min-h-[80px] resize-y"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-[#1a2332] font-semibold">
            3. What concerns or questions do you have about R.O.B.S.?
          </label>
          <textarea
            value={notes.question3}
            onChange={(e) => handleNoteChange("question3", e.target.value)}
            rows="2"
            placeholder="Your thoughts..."
            className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2] min-h-[80px] resize-y"
          />
        </div>
        <button
          onClick={handleSaveNotes}
          className="px-6 py-3 bg-[#8b95a5] text-white rounded-lg font-semibold hover:bg-[#6b7480] transition-colors border-none"
        >
          Save Notes
        </button>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4 animate-[fadeIn_0.5s_ease-in]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          📚 Additional Resources
        </h2>
        <ul className="list-none p-0">
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <Link
              to="#"
              className="text-[#4a90e2] hover:text-[#357abd] hover:underline no-underline"
            >
              📄 R.O.B.S. Implementation Checklist (PDF)
            </Link>
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <Link
              to="#"
              className="text-[#4a90e2] hover:text-[#357abd] hover:underline no-underline"
            >
              📊 R.O.B.S. Cost-Benefit Calculator (Excel)
            </Link>
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <Link
              to="#"
              className="text-[#4a90e2] hover:text-[#357abd] hover:underline no-underline"
            >
              📋 Questions to Ask Your R.O.B.S. Provider
            </Link>
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <Link
              to="#"
              className="text-[#4a90e2] hover:text-[#357abd] hover:underline no-underline"
            >
              🔗 IRS Guidance on R.O.B.S. Transactions
            </Link>
          </li>
          <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <Link
              to="#"
              className="text-[#4a90e2] hover:text-[#357abd] hover:underline no-underline"
            >
              👥 List of Vetted R.O.B.S. Providers
            </Link>
          </li>
        </ul>
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
            to="/week1-case-study"
            className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold text-center hover:bg-[#0e131c] transition-colors no-underline"
          >
            Next: Case Study →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Week1Lesson;
