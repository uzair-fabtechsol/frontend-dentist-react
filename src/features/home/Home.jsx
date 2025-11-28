import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-8 ">
      {/* Welcome Card */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-center animate-[fadeIn_0.5s_ease-in]">
        <div className="border-b-2 border-[#e8eaed] pb-4 mb-6">
          <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">Welcome to Your Financial Freedom Journey</h1>
          <p className="text-[#8b95a5] text-base mt-2">Master Tax & Wealth Planning with Norman Dotch's Proven System</p>
        </div>
        
        <div className="py-4 px-6 rounded-md mb-6 border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460]">
          <strong>The Architect's Edition</strong> - A personalized training program that generates custom courses based on your specific tax strategies, designed exclusively for dentists to master wealth building and legacy planning.
        </div>

        <h2 className="mt-8 mb-6 text-[#1a2332]">Select Your Portal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link to="/onboarding" className="no-underline">
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#4a90e2] to-[#d4af37] rounded-full flex items-center justify-center text-3xl text-white">🎓</div>
              <h3 className="text-[#1a2332]">Student Portal</h3>
              <p className="text-[#2c3e50]">Access your training curriculum, complete modules, track progress, and earn your certification.</p>
              <button className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center mt-6 bg-[#1a2332] text-white hover:bg-[#2d3e50] hover:-translate-y-0.5 hover:shadow-lg">Enter Student Portal</button>
            </div>
          </Link>

          <Link to="/chat" className="no-underline">
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#4a90e2] to-[#d4af37] rounded-full flex items-center justify-center text-3xl text-white">🤖</div>
              <h3 className="text-[#1a2332]">AI Assistant - Vicky</h3>
              <p className="text-[#2c3e50]">24/7 AI companion for personalized guidance, reminders, and implementation support.</p>
              <button className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 inline-block text-center mt-6 bg-[#d4af37] text-[#1a2332] hover:bg-[#c49a2e]">Chat with Vicky</button>
            </div>
          </Link>
        </div>
      </div>

      {/* Program Overview Card */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8 animate-[fadeIn_0.5s_ease-in]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">Program Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <h3 className="text-[#1a2332]">💻 Tax Planning Software</h3>
            <p className="text-[#2c3e50]">Full access to The Tax Truths Tax Planning Software with updates through December 31, 2030.</p>
          </div>
          <div>
            <h3 className="text-[#1a2332]">🎯 Personalized Curriculum</h3>
            <p className="text-[#2c3e50]">12-week Training Academy with voice narration - dynamic courses generated based on your tax plan.</p>
          </div>
          <div>
            <h3 className="text-[#1a2332]">📚 Strategy Archive</h3>
            <p className="text-[#2c3e50]">Access 150+ IRS-backed tax codes and strategies with regular law updates.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <h3 className="text-[#1a2332]">📊 Real-Time Savings</h3>
            <p className="text-[#2c3e50]">Track your actual tax savings as you implement strategies from your custom plan.</p>
          </div>
          <div>
            <h3 className="text-[#1a2332]">🎙️ Monthly Expert Q&A</h3>
            <p className="text-[#2c3e50]">Live Monthly "Architect's Q&A" sessions with Norman Dotch plus direct quarterly consultations.</p>
          </div>
          <div>
            <h3 className="text-[#1a2332]">🤖 AI Assistant - Vicky</h3>
            <p className="text-[#2c3e50]">24/7 AI Tax Architect providing personalized guidance and implementation support.</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-[#1a2332]">What You'll Master:</h3>
          <ul className="list-none p-0 mt-4">
            <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">Advanced tax strategies tailored to your practice (IRC §469, §7702, §831(b), and more)</li>
            <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">Asset protection and wealth preservation techniques</li>
            <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">Retirement planning and passive income generation</li>
            <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">Legacy planning and multi-generational wealth transfer</li>
            <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">Real estate investing and tax optimization</li>
            <li className="py-3 pl-6 relative border-b-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">Business entity structuring and optimization specific to your situation</li>
          </ul>
        </div>
      </div>

      {/* Meet Your Team Card */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8 animate-[fadeIn_0.5s_ease-in]">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">Meet Your Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="text-[#1a2332] font-semibold">Norman Dotch - Lead Instructor</h4>
            <p className="text-[#2c3e50]">Expert tax architect with decades of experience helping dentists build wealth through strategic tax planning.</p>
          </div>
          <div>
            <h4 className="text-[#1a2332] font-semibold">Vicky - AI Learning Companion</h4>
            <p className="text-[#2c3e50]">Your 24/7 AI assistant providing personalized guidance, reminders, and implementation support throughout your journey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
