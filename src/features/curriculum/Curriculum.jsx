import { Link } from "react-router-dom";

const Curriculum = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-8">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">
          Your Personalized Curriculum
        </h1>
        <p className="text-[#8b95a5] text-base mt-2">
          Dynamic Courses Generated from Your Tax Plan
        </p>

        <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460] mt-6">
          <strong>📊 Tailored to Your Strategy</strong>
          <br />
          These courses are automatically generated based on the specific tax
          strategies selected in your personalized tax plan. As you update your
          plan, your curriculum will adapt to match.
        </div>

        <div className="my-6">
          <div className="flex justify-between mb-2 text-[0.9rem] text-[#2c3e50]">
            <span>Overall Progress</span>
            <span>15%</span>
          </div>
          <div className="w-full h-6 bg-[#e8eaed] rounded-xl overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
            <div
              className="h-full bg-gradient-to-r from-[#4a90e2] to-[#d4af37] rounded-xl flex items-center justify-end pr-2 text-white font-bold text-[0.85rem]"
              style={{ width: "15%" }}
            >
              15%
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-[#e8eaed] rounded-lg">
          <p className="text-[#2c3e50]">
            <strong>Completion Requirement:</strong> Achieve 70% completion in
            each course to unlock certification
          </p>
        </div>
      </div>

      {/* Pillar 1: Business Foundation */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8 animate-[fadeIn_0.5s_ease-in] border-0 border-solid border-l-4 border-[#4a90e2]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">
          📘 Pillar 1: Business Foundation
        </h2>
        <p className="mt-4 text-[#666]">
          Courses in this pillar are based on your business structure selections
        </p>

        <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-[#1a2332]">
                Entity Structuring & S-Corp Benefits
              </h3>
              <p className="mt-4 text-[#2c3e50]">
                Choose the right business structure and save $15K-$40K/year on
                self-employment taxes.
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Key Learning:</strong> LLC vs S-Corp vs C-Corp
                optimization
              </p>
              <p className="mt-2">
                <em className="text-[#4a90e2]">✓ Active in your tax plan</em>
              </p>
            </div>
            <div className="md:ml-8 flex flex-col items-start md:items-end gap-2">
              <span className="inline-block py-1.5 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#ffc107] text-[#1a2332]">
                In Progress
              </span>
              <div className="mt-2">
                <Link
                  to="/curriculum"
                  className="py-2 px-4 border-none rounded-md text-[0.875rem] font-semibold cursor-pointer transition-all duration-300 inline-block text-center bg-[#1a2332] text-white hover:bg-[#2d3e50] no-underline"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-[#1a2332]">Asset Protection Strategies</h3>
              <p className="mt-4 text-[#2c3e50]">
                Shield your wealth from lawsuits, creditors, and business risks
                with legal structures.
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Key Learning:</strong> Multi-entity structures and
                protection layers
              </p>
              <p className="mt-2">
                <em className="text-[#4a90e2]">✓ Active in your tax plan</em>
              </p>
            </div>
            <div className="md:ml-8 flex flex-col items-start md:items-end gap-2">
              <span className="inline-block py-1.5 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#1a2332] text-white">
                Locked
              </span>
              <div className="mt-2">
                <button
                  className="py-2 px-4 border-none rounded-md text-[0.875rem] font-semibold cursor-not-allowed transition-all duration-300 inline-block text-center bg-[#c0c5ce] text-[#1a2332] opacity-60"
                  disabled
                >
                  Complete Previous First
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 2: Personal Tax Optimization */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8 animate-[fadeIn_0.5s_ease-in] border-0 border-solid border-l-4 border-[#d4af37]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">
          💰 Pillar 2: Personal Tax Optimization
        </h2>
        <p className="mt-4 text-[#666]">
          Courses in this pillar match your personal tax strategy selections
        </p>

        <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-[#1a2332]">
                IRC §469 - Passive Loss Planning
              </h3>
              <p className="mt-4 text-[#2c3e50]">
                Become a Real Estate Professional on paper and unlock massive
                tax deductions.
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Potential Savings:</strong> $30K-$100K+ annually
              </p>
            </div>
            <div className="md:ml-8">
              <span className="inline-block py-1.5 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#1a2332] text-white">
                Locked
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-[#1a2332]">
                IRC §7702 - Private Banking Strategy
              </h3>
              <p className="mt-4 text-[#2c3e50]">
                Build your own tax-free bank using specially designed life
                insurance policies.
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Key Benefit:</strong> Tax-free growth and withdrawals
                for life
              </p>
            </div>
            <div className="md:ml-8">
              <span className="inline-block py-1.5 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#1a2332] text-white">
                Locked
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-[#1a2332]">Augusta Rule (IRC §280A)</h3>
              <p className="mt-4 text-[#2c3e50]">
                Rent your home to your business for up to 14 days/year, tax-free
                income.
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Potential Savings:</strong> $10K-$50K tax-free income
              </p>
            </div>
            <div className="md:ml-8">
              <span className="inline-block py-1.5 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#1a2332] text-white">
                Locked
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 3: Retirement & Investment Mastery */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8 animate-[fadeIn_0.5s_ease-in] border-0 border-solid border-l-4 border-[#28a745]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">
          🏦 Pillar 3: Retirement & Investment
        </h2>
        <p className="mt-4 text-[#666]">
          Courses in this pillar align with your retirement and investment
          strategies
        </p>

        <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-[#1a2332]">
                Defined Benefit Plans & Cash Balance Plans
              </h3>
              <p className="mt-4 text-[#2c3e50]">
                Contribute $100K-$300K+ per year to retirement, fully
                tax-deductible.
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Best For:</strong> High-income dentists age 45+
              </p>
            </div>
            <div className="md:ml-8">
              <span className="inline-block py-1.5 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#1a2332] text-white">
                Locked
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-[#1a2332]">IRC §1031 Exchanges</h3>
              <p className="mt-4 text-[#2c3e50]">
                Defer capital gains taxes indefinitely by rolling property sales
                into new investments.
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Potential Savings:</strong> 15-20% capital gains tax
                deferred
              </p>
            </div>
            <div className="md:ml-8">
              <span className="inline-block py-1.5 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#1a2332] text-white">
                Locked
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 4: Legacy & Advanced Strategies */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8 animate-[fadeIn_0.5s_ease-in] border-0 border-solid border-l-4 border-[#764ba2]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">
          🏛️ Pillar 4: Legacy & Advanced Strategies
        </h2>
        <p className="mt-4 text-[#666]">
          Advanced courses based on your legacy and wealth transfer goals
        </p>

        <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-[#1a2332]">
                Captive Insurance (IRC §831(b))
              </h3>
              <p className="mt-4 text-[#2c3e50]">
                Create your own insurance company, deduct up to $2.8M, grow
                funds tax-free.
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Best For:</strong> Multi-location practices, $1M+ income
              </p>
            </div>
            <div className="md:ml-8">
              <span className="inline-block py-1.5 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#1a2332] text-white">
                Locked
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-[#1a2332]">
                Estate Planning & Wealth Transfer
              </h3>
              <p className="mt-4 text-[#2c3e50]">
                Minimize estate taxes and transfer wealth to heirs
                tax-efficiently using trusts.
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Key Tools:</strong> GRATs, IDGTs, Family LLCs, Dynasty
                Trusts
              </p>
            </div>
            <div className="md:ml-8">
              <span className="inline-block py-1.5 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#1a2332] text-white">
                Locked
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-[#1a2332]">
                EXIT & SALE OF PRACTICE - The R.O.B.S. Roth 401(k) Strategy
              </h3>
              <p className="mt-4 text-[#2c3e50]">
                Retire tax-free by selling your practice to yourself using a
                specially structured retirement plan.
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Key Strategy:</strong> 98% Roth 401(k) / 2% Personal
                ownership structure for tax-free exit
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Potential Benefit:</strong> Tax-free sale proceeds and
                retirement distributions
              </p>
            </div>
            <div className="md:ml-8">
              <span className="inline-block py-1.5 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#1a2332] text-white">
                Locked
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-[#1a2332]">
                Tax Plan Integration & Implementation
              </h3>
              <p className="mt-4 text-[#2c3e50]">
                Combine all strategies into your personalized tax architecture
                blueprint with actionable steps.
              </p>
              <p className="mt-2 text-[#2c3e50]">
                <strong>Deliverable:</strong> Your complete implementation
                roadmap with timeline
              </p>
            </div>
            <div className="md:ml-8">
              <span className="inline-block py-1.5 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#1a2332] text-white">
                Locked
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-[fadeIn_0.5s_ease-in]">
        <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-center">
          <h3 className="text-[#1a2332] text-2xl">8</h3>
          <p className="text-[#2c3e50]">
            Active Courses
            <br />
            <small className="text-[#666]">(from your plan)</small>
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-center">
          <h3 className="text-[#1a2332] text-2xl">24+</h3>
          <p className="text-[#2c3e50]">
            Implementation Tools
            <br />
            <small className="text-[#666]">(customized)</small>
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-center">
          <h3 className="text-[#1a2332] text-2xl">$67,450</h3>
          <p className="text-[#2c3e50]">
            Your Projected Savings
            <br />
            <small className="text-[#666]">(Year 1)</small>
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8">
        <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#d4edda] border-[#155724] text-[#155724]">
          <strong>💡 Pro Tip:</strong> Your curriculum updates automatically
          when you modify your tax plan. Add or remove strategies anytime, and
          your courses will adapt accordingly.
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            to="/dashboard"
            className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] no-underline"
          >
            Back to Dashboard
          </Link>
          <Link
            to="/week2-lesson"
            className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center bg-[#1a2332] text-white hover:bg-[#2d3e50] hover:-translate-y-0.5 hover:shadow-lg no-underline"
          >
            Continue Learning →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
