import { useState } from "react";
import { Link } from "react-router-dom";

const Week1CaseStudy = () => {
  const [checklist, setChecklist] = useState({
    planning: false,
    hasFunds: false,
    underAge: false,
    minimizeDebt: false,
    comfortable: false,
  });

  const handleCheckboxChange = (key) => {
    setChecklist((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="max-w-[1400px] mx-auto my-8 px-4">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        <div className="border-b-2 border-[#e8eaed] pb-4 mb-6 text-center">
          <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">
            Case Study: Dr. Sarah Chen's Practice Acquisition
          </h1>
          <p className="text-[#8b95a5] text-base mt-2">
            How R.O.B.S. Saved $160K and Made Ownership Possible
          </p>
        </div>

        <div className="mt-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#1a2332] font-medium">Week 1 Progress</span>
            <span className="text-[#1a2332] font-semibold">66%</span>
          </div>
          <div className="w-full h-6 bg-[#e8eaed] rounded-xl overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4a90e2] to-[#d4af37] rounded-xl transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: "66%" }}
            >
              <span className="text-white text-xs font-semibold">66%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-xl font-semibold mb-3 text-white">
          Meet Dr. Sarah Chen
        </h2>
        <p className="mt-2 opacity-90">
          <strong>Age:</strong> 38
          <br />
          <strong>Location:</strong> Portland, Oregon
          <br />
          <strong>Experience:</strong> 8 years as associate dentist
          <br />
          <strong>Goal:</strong> Buy her mentor's practice upon his retirement
        </p>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          The Challenge
        </h2>
        <p className="text-[#8b95a5] mb-3">
          Dr. Chen had been working as an associate at Dr. Morrison's successful
          practice. When Dr. Morrison decided to retire, he offered to sell the
          practice to Sarah for $500,000 - a fair market value.
        </p>
        <div className="py-4 px-6 rounded-md mt-3 border-0 border-solid border-l-4 bg-[#fff3cd] border-[#856404] text-[#856404]">
          <strong>Sarah's Dilemma:</strong>
          <ul className="ml-6 mt-4 space-y-1 list-disc">
            <li>She had $400K in her IRA from years of saving</li>
            <li>Banks would only finance 60% ($300K) requiring $200K down</li>
            <li>She didn't have $200K in liquid cash</li>
            <li>
              Withdrawing from IRA would trigger massive taxes and penalties
            </li>
            <li>
              Traditional withdrawal would cost her $160K in taxes/penalties
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          The Numbers: Traditional vs. R.O.B.S.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="bg-[#f8d7da] border-2 border-solid border-[#dc3545] rounded-lg p-6">
            <h3 className="text-[#dc3545] text-lg font-semibold mb-3">
              ❌ Traditional IRA Withdrawal
            </h3>
            <ul className="mt-4 ml-6 space-y-1 list-disc">
              <li>Withdraw $400K from IRA</li>
              <li>
                10% penalty: <strong>-$40,000</strong>
              </li>
              <li>
                Income tax (30%): <strong>-$120,000</strong>
              </li>
              <li>
                <strong>Net proceeds: $240,000</strong>
              </li>
              <li>Still need $60K more for down payment</li>
              <li>Plus full $300K loan to repay</li>
            </ul>
            <p className="mt-3 text-[1.3rem] font-bold text-[#dc3545]">
              Total Cost: $160K in taxes/penalties
            </p>
          </div>
          <div className="bg-[#d4edda] border-2 border-solid border-[#28a745] rounded-lg p-6">
            <h3 className="text-[#28a745] text-lg font-semibold mb-3">
              ✓ R.O.B.S. Strategy
            </h3>
            <ul className="mt-4 ml-6 space-y-1 list-disc">
              <li>Rollover $400K (tax-free)</li>
              <li>
                No penalty: <strong>$0</strong>
              </li>
              <li>
                No income tax: <strong>$0</strong>
              </li>
              <li>
                <strong>Full $400K available</strong>
              </li>
              <li>Only need $100K loan</li>
              <li>Much smaller debt burden</li>
            </ul>
            <p className="mt-3 text-[1.3rem] font-bold text-[#28a745]">
              Total Cost: $0 in taxes/penalties
            </p>
          </div>
        </div>
        <div className="py-4 px-6 rounded-md mt-3 border-0 border-solid border-l-4 bg-[#d4edda] border-[#155724] text-[#155724]">
          <strong>
            R.O.B.S. Advantage: $160,000 saved in taxes and penalties!
          </strong>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          The Implementation Process
        </h2>
        <h3 className="text-[#1a2332] text-lg font-semibold mt-3 mb-2">
          Timeline (6 weeks total)
        </h3>
        <ul className="list-none p-0 mt-2">
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <strong>Week 1:</strong> Consulted with R.O.B.S. specialist,
            confirmed eligibility
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <strong>Week 2:</strong> Formed "Chen Dental Corporation" (C-Corp in
            Oregon)
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <strong>Week 3:</strong> Established 401(k) plan for the new
            corporation
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <strong>Week 4:</strong> Rolled over $400K IRA into new 401(k) plan
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <strong>Week 5:</strong> 401(k) purchased $400K in Chen Dental Corp
            stock
          </li>
          <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <strong>Week 6:</strong> Corporation had $400K capital, closed on
            practice purchase
          </li>
        </ul>

        <h3 className="text-[#1a2332] text-lg font-semibold mt-4 mb-2">
          Total Setup Costs
        </h3>
        <ul className="ml-6 space-y-1 list-disc">
          <li>R.O.B.S. provider setup: $5,200</li>
          <li>Legal review: $1,800</li>
          <li>Accounting setup: $1,000</li>
          <li>
            <strong>Total: $8,000</strong>
          </li>
        </ul>
        <p className="mt-2 italic text-[#8b95a5]">
          ROI: $160K saved ÷ $8K cost ={" "}
          <strong>20x return on investment</strong>
        </p>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          The Results (Year 1)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
              Financial Impact
            </h3>
            <ul className="list-none p-0 mt-2">
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Saved $160K in taxes/penalties
              </li>
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Only borrowed $100K vs $300K
              </li>
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Annual interest savings: ~$10K
              </li>
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Owns 100% of the practice
              </li>
              <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                No outside investors to answer to
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
              Practice Performance
            </h3>
            <ul className="list-none p-0 mt-2">
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Maintained patient retention: 94%
              </li>
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Year 1 revenue: $680K
              </li>
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Year 1 net income: $220K
              </li>
              <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Paid herself salary: $180K
              </li>
              <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Practice value increased to $550K
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          Sarah's Advice to Other Dentists
        </h2>
        <div className="bg-[#e8eaed] rounded-lg p-6 border-0 border-solid border-l-4 border-[#d4af37]">
          <p className="italic text-[1.1rem] text-[#2c3e50]">
            "I almost didn't pursue the practice because I thought I couldn't
            afford it. My accountant had never heard of R.O.B.S., so I nearly
            gave up. Thank goodness I found this program and learned about it!
          </p>
          <p className="italic text-[1.1rem] text-[#2c3e50] mt-4">
            The setup process was surprisingly smooth. Yes, there's paperwork
            and compliance, but my R.O.B.S. provider handled most of it. The $8K
            in setup costs seemed scary at first, but when I realized I was
            saving $160K, it was a no-brainer.
          </p>
          <p className="italic text-[1.1rem] text-[#2c3e50] mt-4">
            My only regret? Not learning about this sooner. If you're thinking
            about buying a practice, talk to a R.O.B.S. specialist immediately.
            This literally made my dream of ownership possible."
          </p>
          <p className="mt-3 text-[#2c3e50]">
            <strong>- Dr. Sarah Chen, Portland, OR</strong>
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          Key Takeaways
        </h2>
        <ul className="list-none p-0">
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            R.O.B.S. can save six figures in taxes and penalties on practice
            acquisitions
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            The setup process takes 4-8 weeks, so plan ahead
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            Setup costs are typically $6K-$11K but ROI is 10-20x
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            You need existing retirement funds ($50K minimum, ideally $200K+)
          </li>
          <li className="py-3 pl-6 relative border-0 border-solid border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            This works for practice purchases, not just working capital
          </li>
          <li className="py-3 pl-6 relative border-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            You must maintain C-Corp structure and ongoing compliance
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-3">
          Could This Work for You?
        </h2>
        <div className="space-y-2">
          <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
            <input
              type="checkbox"
              checked={checklist.planning}
              onChange={() => handleCheckboxChange("planning")}
              className="mr-4 w-5 h-5 cursor-pointer"
            />
            I'm planning to buy or start a practice in the next 1-2 years
          </label>
          <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
            <input
              type="checkbox"
              checked={checklist.hasFunds}
              onChange={() => handleCheckboxChange("hasFunds")}
              className="mr-4 w-5 h-5 cursor-pointer"
            />
            I have at least $50K in IRA or 401(k) funds
          </label>
          <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
            <input
              type="checkbox"
              checked={checklist.underAge}
              onChange={() => handleCheckboxChange("underAge")}
              className="mr-4 w-5 h-5 cursor-pointer"
            />
            I'm under age 59½
          </label>
          <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
            <input
              type="checkbox"
              checked={checklist.minimizeDebt}
              onChange={() => handleCheckboxChange("minimizeDebt")}
              className="mr-4 w-5 h-5 cursor-pointer"
            />
            I want to minimize debt or avoid it entirely
          </label>
          <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
            <input
              type="checkbox"
              checked={checklist.comfortable}
              onChange={() => handleCheckboxChange("comfortable")}
              className="mr-4 w-5 h-5 cursor-pointer"
            />
            I'm comfortable with C-Corporation structure
          </label>
        </div>
        <div className="py-4 px-6 rounded-md mt-3 border-0 border-solid border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460]">
          If you checked 3+ boxes, R.O.B.S. may be worth exploring for your
          situation. Discuss with your CPA and a qualified R.O.B.S. provider.
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link
            to="/week1-lesson"
            className="px-6 py-3 bg-[#8b95a5] text-white rounded-lg font-semibold text-center hover:bg-[#6b7480] transition-colors no-underline"
          >
            ← Previous: Lesson
          </Link>
          <Link
            to="/week1-quiz"
            className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold text-center hover:bg-[#0e131c] transition-colors no-underline"
          >
            Next: Quiz →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Week1CaseStudy;
