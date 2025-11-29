import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GoalSetting = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    revenue: "",
    taxBill: "",
    entity: "",
    savingsGoal: "",
    dreamUse: "",
    netWorthGoal: "",
    retirementAge: "",
    incomeSource: [],
    legacyGoal: "",
    legacyAmount: "",
    commitment: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData((prev) => ({
          ...prev,
          [name]: [...prev[name], value],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: prev[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would save to a database
    alert("Goals saved successfully! Redirecting to How to Use guide...");
    navigate("/how-to-use");
  };

  return (
    <div className="max-w-[1400px] mx-auto my-8">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        <div className="border-b-2 border-[#e8eaed] pb-4 mb-6 text-center">
          <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">
            Define Your Financial Goals 🎯
          </h1>
          <p className="text-[#8b95a5] text-base mt-2">
            Let's Get Crystal Clear on What Success Looks Like for You
          </p>
        </div>

        <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460]">
          <strong>Why This Matters:</strong> Studies show that people who write
          down specific goals are 42% more likely to achieve them. Let's make
          your financial freedom inevitable, not accidental.
        </div>

        <div className="mt-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#1a2332] font-medium">
              Onboarding Progress
            </span>
            <span className="text-[#1a2332] font-semibold">67%</span>
          </div>
          <div className="w-full h-6 bg-[#e8eaed] rounded-xl overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4a90e2] to-[#d4af37] rounded-xl transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: "67%" }}
            >
              <span className="text-white text-xs font-semibold">67%</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <h2 className="text-[#1a2332] text-xl font-semibold mb-2">
            1. Your Current Financial Situation
          </h2>
          <p className="mb-3 text-[#8b95a5]">
            Help us understand where you're starting from:
          </p>

          <div className="mb-6">
            <label className="block mb-2 text-[#1a2332] font-semibold">
              Current Annual Practice Revenue:
            </label>
            <select
              name="revenue"
              value={formData.revenue}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2]"
            >
              <option value="">Select range...</option>
              <option value="under500k">Under $500K</option>
              <option value="500k-1m">$500K - $1M</option>
              <option value="1m-2m">$1M - $2M</option>
              <option value="2m-3m">$2M - $3M</option>
              <option value="over3m">Over $3M</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-[#1a2332] font-semibold">
              Estimated Annual Tax Bill:
            </label>
            <select
              name="taxBill"
              value={formData.taxBill}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2]"
            >
              <option value="">Select range...</option>
              <option value="under50k">Under $50K</option>
              <option value="50k-100k">$50K - $100K</option>
              <option value="100k-200k">$100K - $200K</option>
              <option value="200k-300k">$200K - $300K</option>
              <option value="over300k">Over $300K</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-[#1a2332] font-semibold">
              Current Entity Structure:
            </label>
            <select
              name="entity"
              value={formData.entity}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2]"
            >
              <option value="">Select...</option>
              <option value="sole-prop">Sole Proprietorship</option>
              <option value="llc">LLC</option>
              <option value="s-corp">S-Corporation</option>
              <option value="c-corp">C-Corporation</option>
              <option value="not-sure">Not Sure</option>
            </select>
          </div>

          <hr className="mt-4 mb-4 border-t border-[#e8eaed]" />

          <h2 className="text-[#1a2332] text-xl font-semibold mb-2">
            2. Your Tax Savings Goals
          </h2>
          <p className="mb-3 text-[#8b95a5]">
            What would meaningful tax reduction look like for you?
          </p>

          <div className="mb-6">
            <label className="block mb-2 text-[#1a2332] font-semibold">
              Target Annual Tax Savings:
            </label>
            <select
              name="savingsGoal"
              value={formData.savingsGoal}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2]"
            >
              <option value="">Select target...</option>
              <option value="25k-50k">$25K - $50K</option>
              <option value="50k-100k">$50K - $100K</option>
              <option value="100k-150k">$100K - $150K</option>
              <option value="150k-200k">$150K - $200K</option>
              <option value="over200k">Over $200K</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-[#1a2332] font-semibold">
              What would you do with an extra $100K/year after taxes?
            </label>
            <textarea
              name="dreamUse"
              value={formData.dreamUse}
              onChange={handleInputChange}
              rows="4"
              placeholder="Be specific... Pay off debt? Invest in real estate? Fund retirement? Take more time off? Build a legacy for your kids?"
              className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2] min-h-[100px] resize-y"
            />
          </div>

          <hr className="mt-4 mb-4 border-t border-[#e8eaed]" />

          <h2 className="text-[#1a2332] text-xl font-semibold mb-2">
            3. Your Wealth Building Vision
          </h2>
          <p className="mb-3 text-[#8b95a5]">
            Beyond saving taxes, what wealth do you want to build?
          </p>

          <div className="mb-6">
            <label className="block mb-2 text-[#1a2332] font-semibold">
              Target Net Worth in 10 Years:
            </label>
            <select
              name="netWorthGoal"
              value={formData.netWorthGoal}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2]"
            >
              <option value="">Select target...</option>
              <option value="2m-5m">$2M - $5M</option>
              <option value="5m-10m">$5M - $10M</option>
              <option value="10m-20m">$10M - $20M</option>
              <option value="over20m">Over $20M</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-[#1a2332] font-semibold">
              Desired Retirement Age:
            </label>
            <select
              name="retirementAge"
              value={formData.retirementAge}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2]"
            >
              <option value="">Select age...</option>
              <option value="55">Age 55</option>
              <option value="60">Age 60</option>
              <option value="65">Age 65</option>
              <option value="70">Age 70</option>
              <option value="never">Work as long as I enjoy it</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-[#1a2332] font-semibold">
              Income Sources You Want to Build (check all that apply):
            </label>
            <div className="space-y-2">
              <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
                <input
                  type="checkbox"
                  name="incomeSource"
                  value="practice"
                  checked={formData.incomeSource.includes("practice")}
                  onChange={handleInputChange}
                  className="mr-4 w-5 h-5 cursor-pointer"
                />
                Practice Income (active)
              </label>
              <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
                <input
                  type="checkbox"
                  name="incomeSource"
                  value="real-estate"
                  checked={formData.incomeSource.includes("real-estate")}
                  onChange={handleInputChange}
                  className="mr-4 w-5 h-5 cursor-pointer"
                />
                Real Estate Rentals (passive)
              </label>
              <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
                <input
                  type="checkbox"
                  name="incomeSource"
                  value="investments"
                  checked={formData.incomeSource.includes("investments")}
                  onChange={handleInputChange}
                  className="mr-4 w-5 h-5 cursor-pointer"
                />
                Investment Portfolio (passive)
              </label>
              <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
                <input
                  type="checkbox"
                  name="incomeSource"
                  value="business"
                  checked={formData.incomeSource.includes("business")}
                  onChange={handleInputChange}
                  className="mr-4 w-5 h-5 cursor-pointer"
                />
                Other Business Ventures
              </label>
              <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
                <input
                  type="checkbox"
                  name="incomeSource"
                  value="consulting"
                  checked={formData.incomeSource.includes("consulting")}
                  onChange={handleInputChange}
                  className="mr-4 w-5 h-5 cursor-pointer"
                />
                Consulting / Speaking
              </label>
            </div>
          </div>

          <hr className="mt-4 mb-4 border-t border-[#e8eaed]" />

          <h2 className="text-[#1a2332] text-xl font-semibold mb-2">
            4. Your Legacy Goals
          </h2>
          <p className="mb-3 text-[#8b95a5]">
            What do you want to leave behind?
          </p>

          <div className="mb-6">
            <label className="block mb-2 text-[#1a2332] font-semibold">
              Primary Legacy Goal:
            </label>
            <select
              name="legacyGoal"
              value={formData.legacyGoal}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2]"
            >
              <option value="">Select...</option>
              <option value="family">Provide for family/children</option>
              <option value="charity">Support charitable causes</option>
              <option value="business">Build lasting business</option>
              <option value="all">All of the above</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-[#1a2332] font-semibold">
              Target Amount to Leave as Legacy:
            </label>
            <select
              name="legacyAmount"
              value={formData.legacyAmount}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border-2 border-[#e8eaed] rounded-md text-base transition-colors focus:outline-none focus:border-[#4a90e2]"
            >
              <option value="">Select target...</option>
              <option value="1m-3m">$1M - $3M</option>
              <option value="3m-5m">$3M - $5M</option>
              <option value="5m-10m">$5M - $10M</option>
              <option value="over10m">Over $10M</option>
            </select>
          </div>

          <hr className="mt-4 mb-4 border-t border-[#e8eaed]" />

          <h2 className="text-[#1a2332] text-xl font-semibold mb-2">
            5. Your Commitment
          </h2>
          <p className="mb-3 text-[#8b95a5]">
            Success requires action. What are you committing to?
          </p>

          <div className="space-y-2 mb-6">
            <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
              <input
                type="checkbox"
                name="commitment"
                value="time"
                checked={formData.commitment.includes("time")}
                onChange={handleInputChange}
                className="mr-4 w-5 h-5 cursor-pointer"
              />
              I commit to spending 60-90 minutes per week on this program
            </label>
            <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
              <input
                type="checkbox"
                name="commitment"
                value="implement"
                checked={formData.commitment.includes("implement")}
                onChange={handleInputChange}
                className="mr-4 w-5 h-5 cursor-pointer"
              />
              I commit to implementing at least one strategy per month
            </label>
            <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
              <input
                type="checkbox"
                name="commitment"
                value="team"
                checked={formData.commitment.includes("team")}
                onChange={handleInputChange}
                className="mr-4 w-5 h-5 cursor-pointer"
              />
              I commit to working with my CPA/tax team on these strategies
            </label>
            <label className="flex items-center px-3 py-3 bg-[#e8eaed] rounded-md cursor-pointer hover:bg-[#d0d5dc] transition-colors">
              <input
                type="checkbox"
                name="commitment"
                value="finish"
                checked={formData.commitment.includes("finish")}
                onChange={handleInputChange}
                className="mr-4 w-5 h-5 cursor-pointer"
              />
              I commit to completing all 12 weeks
            </label>
          </div>

          <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#d4edda] border-[#155724] text-[#155724]">
            <strong>📝 Your Goals Will Be Saved</strong>
            <br />
            Vicky (your AI assistant) will reference these goals throughout your
            journey to keep you focused and motivated. You can update them
            anytime in your dashboard.
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
            <Link
              to="/onboarding"
              className="px-6 py-3 bg-[#8b95a5] text-white rounded-lg font-semibold text-center hover:bg-[#6b7480] transition-colors no-underline"
            >
              ← Previous: Welcome
            </Link>
            <button
              type="submit"
              className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold hover:bg-[#0e131c] transition-colors"
            >
              Save Goals & Continue →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoalSetting;
