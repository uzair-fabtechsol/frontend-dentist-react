import { Link } from 'react-router-dom'

const Onboarding = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-8 px-8 md:px-6 sm:px-4">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        <div className="border-b-2 border-[#e8eaed] pb-4 mb-6 text-center">
          <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">Welcome to the Architect's Edition! 🎉</h1>
          <p className="text-[#8b95a5] text-base mt-2">Your Journey to Financial Freedom Starts Here</p>
        </div>

        <div className="py-4 px-6 rounded-md mb-6 border-l-4 bg-[#d4edda] border-[#155724] text-[#155724]">
          <strong>Congratulations on Taking Control of Your Financial Future!</strong><br />
          You're about to embark on a transformative journey with a personalized curriculum that will revolutionize how you think about taxes, wealth, and legacy.
        </div>

        <div className="mt-8">
          <h2 className="text-[#1a2332]">A Personal Message from Norman Dotch</h2>
          <div className="bg-[#e8eaed] rounded-lg p-8 mb-6 shadow-md border-l-4 border-[#d4af37] mt-4">
            <p className="italic text-[1.1rem] text-[#2c3e50]">
              "Welcome, Doctor! I'm thrilled you're here. For over three decades, I've watched dentists work incredibly hard, only to give away 40-50% of their income to taxes they could have legally avoided. This program exists to change that story for you.
            </p>
            <p className="italic text-[1.1rem] text-[#2c3e50] mt-4">
              You didn't spend years in dental school to become a tax expert - but you did work too hard to let the IRS take more than their fair share. Through this personalized program, I'm going to show you exactly how the wealthy dentists protect and grow their money, with strategies tailored specifically to your situation.
            </p>
            <p className="italic text-[1.1rem] text-[#2c3e50] mt-4">
              This isn't theory. This is the exact playbook I've used with thousands of dentists to save millions in taxes and build lasting wealth. Are you ready?"
            </p>
            <p className="mt-6 text-[#2c3e50]"><strong>- Norman Dotch</strong><br />Tax Architect & Founder</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-[#1a2332]">What's Included in Your Architect's Edition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h3 className="text-[#1a2332]">💻 Tax Planning Software</h3>
              <p className="text-[#2c3e50]">Full access to The Tax Truths Tax Planning Software with updates through December 31, 2030.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h3 className="text-[#1a2332]">🎓 Training Academy (LMS)</h3>
              <p className="text-[#2c3e50]">12-week personalized curriculum with professional voice narration on every lesson.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h3 className="text-[#1a2332]">🎙️ Live Monthly Q&A</h3>
              <p className="text-[#2c3e50]">Exclusive "Architect's Q&A" sessions with Norman Dotch plus direct quarterly consultations.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h3 className="text-[#1a2332]">🤖 Vicky - AI Tax Architect</h3>
              <p className="text-[#2c3e50]">24/7 AI assistant providing personalized guidance and strategy recommendations.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h3 className="text-[#1a2332]">📚 Strategy Archive</h3>
              <p className="text-[#2c3e50]">Access to 150+ IRS-backed tax codes and continuously updated strategies.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h3 className="text-[#1a2332]">⚖️ Law Updates Through 2030</h3>
              <p className="text-[#2c3e50]">Stay current with all tax law changes and new opportunities through December 31, 2030.</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-[#1a2332]">What You're About to Achieve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h3 className="text-[#1a2332]">💰 Save $50K - $200K+ Annually</h3>
              <p className="text-[#2c3e50]">Learn proven strategies that have saved dentists millions in taxes through legal, ethical optimization.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h3 className="text-[#1a2332]">🏛️ Master the Four Pillars</h3>
              <p className="text-[#2c3e50]">Build a complete financial framework covering Business, Personal, Retirement, and Legacy.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h3 className="text-[#1a2332]">🎓 Earn Your Certification</h3>
              <p className="text-[#2c3e50]">Join an elite group of financially sophisticated dentists who've mastered tax architecture.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h3 className="text-[#1a2332]">🤝 Lifetime Community Access</h3>
              <p className="text-[#2c3e50]">Connect with fellow dentists on the same journey and continue learning together.</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-[#1a2332]">Your Personalized Learning Path</h2>
          <p className="mt-4 text-[#2c3e50]">Your curriculum is dynamically generated based on your specific tax plan and selected strategies:</p>
          <ul className="list-none p-0 mt-6">
            <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold"><strong>Business Foundation:</strong> Entity Structuring, Asset Protection, S-Corp Optimization</li>
            <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold"><strong>Personal Tax Strategies:</strong> IRC §469, §7702, Real Estate Tax Benefits, Augusta Rule</li>
            <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold"><strong>Retirement & Investment:</strong> Defined Benefit Plans, Cost Segregation, 1031 Exchanges</li>
            <li className="py-3 pl-6 relative border-b-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold"><strong>Legacy & Advanced:</strong> Captive Insurance, Estate Planning, Wealth Transfer, Integration</li>
          </ul>
          <div className="py-4 px-6 rounded-md mb-6 border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460] mt-6">
            <strong>📊 Dynamic Curriculum:</strong> Only the strategies you've selected in your tax plan will appear in your courses - ensuring every lesson is relevant to your specific situation.
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-[#1a2332]">Meet Vicky - Your AI Learning Companion</h2>
          <div className="bg-gradient-to-br from-[#4a90e2] to-[#d4af37] text-white rounded-lg p-8 shadow-md mt-4">
            <p className="text-[1.1rem]">
              👋 Hi! I'm Vicky, your 24/7 AI assistant. I'll be with you every step of this journey to:
            </p>
            <ul className="mt-4 ml-6 list-disc">
              <li>Send personalized reminders and check-ins</li>
              <li>Answer questions about the material</li>
              <li>Help you implement strategies in your practice</li>
              <li>Track your progress and celebrate your wins</li>
              <li>Connect you with resources and experts when needed</li>
            </ul>
            <p className="mt-6">
              <strong>You can reach me anytime through the Chat button in your dashboard!</strong>
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-[#1a2332]">Program Structure</h2>
          <p className="text-[#2c3e50]">Each week includes:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h4 className="text-[#1a2332] font-semibold">📹 Video Lesson</h4>
              <p className="text-[#2c3e50]">20-30 minute focused training on that week's tax strategy</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h4 className="text-[#1a2332] font-semibold">📄 Implementation Guide</h4>
              <p className="text-[#2c3e50]">Step-by-step checklist to apply the strategy to your practice</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h4 className="text-[#1a2332] font-semibold">🧮 Case Study</h4>
              <p className="text-[#2c3e50]">Real dentist examples showing actual tax savings</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <h4 className="text-[#1a2332] font-semibold">✅ Knowledge Check</h4>
              <p className="text-[#2c3e50]">Quick quiz to ensure you've mastered the concepts</p>
            </div>
          </div>
        </div>

        <div className="py-4 px-6 rounded-md mb-6 border-l-4 bg-[#fff3cd] border-[#856404] text-[#856404] mt-8">
          <strong>⏰ Time Commitment:</strong> Plan for 60-90 minutes per week. Most students find Sunday mornings or Wednesday evenings work best. Block your calendar now!
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-between">
          <Link to="/" className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] no-underline">← Back to Home</Link>
          <Link to="/dashboard" className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center bg-[#1a2332] text-white hover:bg-[#2d3e50] hover:-translate-y-0.5 hover:shadow-lg no-underline">Next: Set Your Goals →</Link>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
