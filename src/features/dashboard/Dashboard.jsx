import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-8">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">Welcome Back, Doctor! 👋</h1>
        <p className="text-[#8b95a5] text-base mt-2">Ready to build your wealth and slash your taxes?</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-[fadeIn_0.5s_ease-in]">
        <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
          <h3 className="text-[#1a2332]">Your Learning Progress</h3>
          <div className="my-6">
            <div className="flex justify-between mb-2 text-[0.9rem] text-[#2c3e50]">
              <span>Curriculum Completion</span>
              <span>15%</span>
            </div>
            <div className="w-full h-6 bg-[#e8eaed] rounded-xl overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
              <div className="h-full bg-gradient-to-r from-[#4a90e2] to-[#d4af37] rounded-xl flex items-center justify-end pr-2 text-white font-bold text-[0.85rem]" style={{ width: '15%' }}>15%</div>
            </div>
          </div>
          <div className="mt-6 text-[#2c3e50]">
            <p><strong>1 of 8</strong> courses completed</p>
            <p><strong>1 of 8</strong> quizzes passed (70% required)</p>
            <p><strong>2 of 8</strong> strategies in progress</p>
          </div>
          <p className="mt-6 text-[0.9rem] text-[#666]">
            <em>📊 Your courses are generated from your personalized tax plan</em>
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
          <h3 className="text-[#1a2332]">Your Tax Savings Impact</h3>
          <div className="text-[2.5rem] text-[#d4af37] font-bold text-center my-8">
            $67,450
          </div>
          <p className="text-center text-[#2c3e50]"><strong>Projected Year 1 Savings</strong></p>
          <p className="text-center text-[#8b95a5] text-[0.9rem]">Based on strategies in your tax plan</p>
          <div className="mt-6 p-4 bg-[#e8eaed] rounded-lg text-center">
            <p className="m-0 text-[#2c3e50]"><strong>Implementation Status:</strong></p>
            <p className="mt-2 mb-0 text-[0.9rem] text-[#2c3e50]">2 strategies active • 6 pending completion</p>
          </div>
        </div>
      </div>

      {/* Current Focus */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8 animate-[fadeIn_0.5s_ease-in]">
        <div className="border-b-2 border-[#e8eaed] pb-4 mb-6">
          <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">📚 Continue Learning: Entity Structuring & S-Corp Benefits</h2>
          <p className="text-[#8b95a5] text-base mt-2">Optimize your business structure to maximize tax savings</p>
        </div>

        <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460]">
          <strong>🎯 Learning Goal:</strong> Master business entity structures and understand how S-Corp election can save you $15K-$40K annually in self-employment taxes.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            <h4 className="text-[#1a2332] font-semibold">✅ Completed</h4>
            <ul className="list-none p-0 mt-4">
              <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">Welcome & orientation</li>
              <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">Platform overview</li>
              <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">Goal setting exercise</li>
              <li className="py-3 pl-6 relative border-b-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">Tax plan creation</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            <h4 className="text-[#1a2332] font-semibold">⏳ Up Next</h4>
            <ul className="ml-6 list-disc mt-4 text-[#2c3e50]">
              <li className="py-2">Complete Entity Structuring lesson</li>
              <li className="py-2">Review case study examples</li>
              <li className="py-2">Pass knowledge quiz (70% required)</li>
              <li className="py-2">Download implementation checklist</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/curriculum" className="py-4 px-8 border-none rounded-md text-[1.1rem] font-semibold cursor-pointer transition-all duration-300 inline-block text-center bg-[#1a2332] text-white hover:bg-[#2d3e50] hover:-translate-y-0.5 hover:shadow-lg no-underline">Start Entity Structuring Lesson →</Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 animate-[fadeIn_0.5s_ease-in]">
        <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-center">
          <div className="w-[60px] h-[60px] mx-auto mb-4 bg-gradient-to-br from-[#4a90e2] to-[#d4af37] rounded-full flex items-center justify-center text-[1.5rem] text-white">📹</div>
          <h3 className="mt-4 text-[#1a2332]">Video Library</h3>
          <p className="text-[#2c3e50]">Access all lessons</p>
          <Link to="/curriculum" className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center mt-4 bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] no-underline">View All</Link>
        </div>

        <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-center">
          <div className="w-[60px] h-[60px] mx-auto mb-4 bg-gradient-to-br from-[#4a90e2] to-[#d4af37] rounded-full flex items-center justify-center text-[1.5rem] text-white">💬</div>
          <h3 className="mt-4 text-[#1a2332]">Ask Vicky</h3>
          <p className="text-[#2c3e50]">Get instant answers</p>
          <Link to="/chat" className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center mt-4 bg-[#d4af37] text-[#1a2332] hover:bg-[#c49a2e] no-underline">Start Chat</Link>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8 animate-[fadeIn_0.5s_ease-in]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">📅 Upcoming Live Sessions & Consultations</h2>
        <div className="mt-6">
          <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="text-[#1a2332] font-semibold">Monthly "Architect's Q&A" with Norman Dotch</h4>
                <p className="mt-2 text-[#2c3e50]">First Thursday of Month • 7:00 PM EST</p>
                <p className="text-[#8b95a5]">Live session covering advanced strategies and student questions</p>
              </div>
              <a href="#" className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center bg-[#1a2332] text-white hover:bg-[#2d3e50] hover:-translate-y-0.5 hover:shadow-lg no-underline whitespace-nowrap">Add to Calendar</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#d4af37] to-[#4a90e2] text-white rounded-lg p-8 shadow-md mt-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="font-semibold">Your Quarterly Consultation</h4>
                <p className="mt-2">Next session: Q1 2025 Review</p>
                <p className="opacity-90">Direct consultation to review your tax plan and implementation progress</p>
              </div>
              <a href="#" className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center bg-white text-[#1a2332] hover:bg-[#e8eaed] no-underline whitespace-nowrap">Schedule Now</a>
            </div>
          </div>

          <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md mt-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="text-[#1a2332] font-semibold">Student Success Stories</h4>
                <p className="mt-2 text-[#2c3e50]">Next Tuesday, 8:00 PM EST</p>
                <p className="text-[#8b95a5]">Hear from graduates who saved $100K+ in taxes</p>
              </div>
              <a href="#" className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] no-underline whitespace-nowrap">Register</a>
            </div>
          </div>
        </div>
      </div>

      {/* Your Goals Reminder */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8 animate-[fadeIn_0.5s_ease-in]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">🎯 Your Goals Reminder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="text-[#1a2332] font-semibold">Tax Savings Goal</h4>
            <p className="mt-4 text-[1.5rem] text-[#d4af37] font-bold">$50K - $100K/year</p>
          </div>
          <div>
            <h4 className="text-[#1a2332] font-semibold">10-Year Net Worth Target</h4>
            <p className="mt-4 text-[1.5rem] text-[#d4af37] font-bold">$5M - $10M</p>
          </div>
        </div>
        <Link to="/onboarding" className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center mt-6 bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] no-underline">Update Goals</Link>
      </div>

      {/* Motivational Message from Vicky */}
      <div className="bg-gradient-to-br from-[#4a90e2] to-[#d4af37] text-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8 animate-[fadeIn_0.5s_ease-in]">
        <h3 className="font-semibold">💡 Message from Vicky</h3>
        <p className="text-[1.1rem] mt-4">
          "Great job completing onboarding! You're already ahead of 90% of dentists who never take action on their taxes. This week's R.O.B.S. strategy could save you tens of thousands if you're buying or expanding a practice. Let's dive in! 🚀"
        </p>
        <p className="mt-4">
          <em>- Vicky, Your AI Learning Companion</em>
        </p>
      </div>
    </div>
  )
}

export default Dashboard
