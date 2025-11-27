import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      {/* Welcome Card */}
      <div className="card text-center fade-in">
        <div className="card-header">
          <h1 className="card-title">Welcome to Your Financial Freedom Journey</h1>
          <p className="card-subtitle">Master Tax & Wealth Planning with Norman Dotch's Proven System</p>
        </div>
        
        <div className="alert alert-info">
          <strong>The Architect's Edition</strong> - A personalized training program that generates custom courses based on your specific tax strategies, designed exclusively for dentists to master wealth building and legacy planning.
        </div>

        <h2 className="mt-4 mb-3">Select Your Portal</h2>
        
        <div className="grid grid-2 mt-4">
          <Link to="/onboarding" style={{ textDecoration: 'none' }}>
            <div className="role-card">
              <div className="role-icon">🎓</div>
              <h3>Student Portal</h3>
              <p>Access your training curriculum, complete modules, track progress, and earn your certification.</p>
              <button className="btn btn-primary mt-3">Enter Student Portal</button>
            </div>
          </Link>

          <Link to="/chat" style={{ textDecoration: 'none' }}>
            <div className="role-card">
              <div className="role-icon">🤖</div>
              <h3>AI Assistant - Vicky</h3>
              <p>24/7 AI companion for personalized guidance, reminders, and implementation support.</p>
              <button className="btn btn-gold mt-3">Chat with Vicky</button>
            </div>
          </Link>
        </div>
      </div>

      {/* Program Overview Card */}
      <div className="card mt-4 fade-in">
        <h2 className="card-title">Program Overview</h2>
        
        <div className="grid grid-3 mt-3">
          <div>
            <h3>💻 Tax Planning Software</h3>
            <p>Full access to The Tax Truths Tax Planning Software with updates through December 31, 2030.</p>
          </div>
          <div>
            <h3>🎯 Personalized Curriculum</h3>
            <p>12-week Training Academy with voice narration - dynamic courses generated based on your tax plan.</p>
          </div>
          <div>
            <h3>📚 Strategy Archive</h3>
            <p>Access 150+ IRS-backed tax codes and strategies with regular law updates.</p>
          </div>
        </div>

        <div className="grid grid-3 mt-3">
          <div>
            <h3>📊 Real-Time Savings</h3>
            <p>Track your actual tax savings as you implement strategies from your custom plan.</p>
          </div>
          <div>
            <h3>🎙️ Monthly Expert Q&A</h3>
            <p>Live Monthly "Architect's Q&A" sessions with Norman Dotch plus direct quarterly consultations.</p>
          </div>
          <div>
            <h3>🤖 AI Assistant - Vicky</h3>
            <p>24/7 AI Tax Architect providing personalized guidance and implementation support.</p>
          </div>
        </div>

        <div className="mt-4">
          <h3>What You'll Master:</h3>
          <ul className="list-styled mt-2">
            <li>Advanced tax strategies tailored to your practice (IRC §469, §7702, §831(b), and more)</li>
            <li>Asset protection and wealth preservation techniques</li>
            <li>Retirement planning and passive income generation</li>
            <li>Legacy planning and multi-generational wealth transfer</li>
            <li>Real estate investing and tax optimization</li>
            <li>Business entity structuring and optimization specific to your situation</li>
          </ul>
        </div>
      </div>

      {/* Meet Your Team Card */}
      <div className="card mt-4 fade-in">
        <h2 className="card-title">Meet Your Team</h2>
        
        <div className="grid grid-2 mt-3">
          <div>
            <h4>Norman Dotch - Lead Instructor</h4>
            <p>Expert tax architect with decades of experience helping dentists build wealth through strategic tax planning.</p>
          </div>
          <div>
            <h4>Vicky - AI Learning Companion</h4>
            <p>Your 24/7 AI assistant providing personalized guidance, reminders, and implementation support throughout your journey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
