import { Link } from 'react-router-dom'

const Onboarding = () => {
  return (
    <div className="container">
      <div className="card fade-in">
        <div className="card-header text-center">
          <h1 className="card-title">Welcome to the Architect's Edition! 🎉</h1>
          <p className="card-subtitle">Your Journey to Financial Freedom Starts Here</p>
        </div>

        <div className="alert alert-success">
          <strong>Congratulations on Taking Control of Your Financial Future!</strong><br />
          You're about to embark on a transformative journey with a personalized curriculum that will revolutionize how you think about taxes, wealth, and legacy.
        </div>

        <div className="mt-4">
          <h2>A Personal Message from Norman Dotch</h2>
          <div className="card" style={{ background: 'var(--silver-light)', borderLeft: '4px solid var(--accent-gold)' }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
              "Welcome, Doctor! I'm thrilled you're here. For over three decades, I've watched dentists work incredibly hard, only to give away 40-50% of their income to taxes they could have legally avoided. This program exists to change that story for you.
            </p>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginTop: '1rem' }}>
              You didn't spend years in dental school to become a tax expert - but you did work too hard to let the IRS take more than their fair share. Through this personalized program, I'm going to show you exactly how the wealthy dentists protect and grow their money, with strategies tailored specifically to your situation.
            </p>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginTop: '1rem' }}>
              This isn't theory. This is the exact playbook I've used with thousands of dentists to save millions in taxes and build lasting wealth. Are you ready?"
            </p>
            <p className="mt-3"><strong>- Norman Dotch</strong><br />Tax Architect & Founder</p>
          </div>
        </div>

        <div className="mt-4">
          <h2>What's Included in Your Architect's Edition</h2>
          <div className="grid grid-2 mt-3">
            <div className="card">
              <h3>💻 Tax Planning Software</h3>
              <p>Full access to The Tax Truths Tax Planning Software with updates through December 31, 2030.</p>
            </div>
            <div className="card">
              <h3>🎓 Training Academy (LMS)</h3>
              <p>12-week personalized curriculum with professional voice narration on every lesson.</p>
            </div>
            <div className="card">
              <h3>🎙️ Live Monthly Q&A</h3>
              <p>Exclusive "Architect's Q&A" sessions with Norman Dotch plus direct quarterly consultations.</p>
            </div>
            <div className="card">
              <h3>🤖 Vicky - AI Tax Architect</h3>
              <p>24/7 AI assistant providing personalized guidance and strategy recommendations.</p>
            </div>
            <div className="card">
              <h3>📚 Strategy Archive</h3>
              <p>Access to 150+ IRS-backed tax codes and continuously updated strategies.</p>
            </div>
            <div className="card">
              <h3>⚖️ Law Updates Through 2030</h3>
              <p>Stay current with all tax law changes and new opportunities through December 31, 2030.</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2>What You're About to Achieve</h2>
          <div className="grid grid-2 mt-3">
            <div className="card">
              <h3>💰 Save $50K - $200K+ Annually</h3>
              <p>Learn proven strategies that have saved dentists millions in taxes through legal, ethical optimization.</p>
            </div>
            <div className="card">
              <h3>🏛️ Master the Four Pillars</h3>
              <p>Build a complete financial framework covering Business, Personal, Retirement, and Legacy.</p>
            </div>
            <div className="card">
              <h3>🎓 Earn Your Certification</h3>
              <p>Join an elite group of financially sophisticated dentists who've mastered tax architecture.</p>
            </div>
            <div className="card">
              <h3>🤝 Lifetime Community Access</h3>
              <p>Connect with fellow dentists on the same journey and continue learning together.</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2>Your Personalized Learning Path</h2>
          <p className="mt-2">Your curriculum is dynamically generated based on your specific tax plan and selected strategies:</p>
          <ul className="list-styled mt-3">
            <li><strong>Business Foundation:</strong> Entity Structuring, Asset Protection, S-Corp Optimization</li>
            <li><strong>Personal Tax Strategies:</strong> IRC §469, §7702, Real Estate Tax Benefits, Augusta Rule</li>
            <li><strong>Retirement & Investment:</strong> Defined Benefit Plans, Cost Segregation, 1031 Exchanges</li>
            <li><strong>Legacy & Advanced:</strong> Captive Insurance, Estate Planning, Wealth Transfer, Integration</li>
          </ul>
          <div className="alert alert-info mt-3">
            <strong>📊 Dynamic Curriculum:</strong> Only the strategies you've selected in your tax plan will appear in your courses - ensuring every lesson is relevant to your specific situation.
          </div>
        </div>

        <div className="mt-4">
          <h2>Meet Vicky - Your AI Learning Companion</h2>
          <div className="card" style={{ background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-gold) 100%)', color: 'white' }}>
            <p style={{ fontSize: '1.1rem' }}>
              👋 Hi! I'm Vicky, your 24/7 AI assistant. I'll be with you every step of this journey to:
            </p>
            <ul style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
              <li>Send personalized reminders and check-ins</li>
              <li>Answer questions about the material</li>
              <li>Help you implement strategies in your practice</li>
              <li>Track your progress and celebrate your wins</li>
              <li>Connect you with resources and experts when needed</li>
            </ul>
            <p className="mt-3">
              <strong>You can reach me anytime through the Chat button in your dashboard!</strong>
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h2>Program Structure</h2>
          <p>Each week includes:</p>
          <div className="grid grid-2 mt-3">
            <div className="card">
              <h4>📹 Video Lesson</h4>
              <p>20-30 minute focused training on that week's tax strategy</p>
            </div>
            <div className="card">
              <h4>📄 Implementation Guide</h4>
              <p>Step-by-step checklist to apply the strategy to your practice</p>
            </div>
            <div className="card">
              <h4>🧮 Case Study</h4>
              <p>Real dentist examples showing actual tax savings</p>
            </div>
            <div className="card">
              <h4>✅ Knowledge Check</h4>
              <p>Quick quiz to ensure you've mastered the concepts</p>
            </div>
          </div>
        </div>

        <div className="alert alert-warning mt-4">
          <strong>⏰ Time Commitment:</strong> Plan for 60-90 minutes per week. Most students find Sunday mornings or Wednesday evenings work best. Block your calendar now!
        </div>

        <div className="btn-group btn-group-between mt-4">
          <Link to="/" className="btn btn-secondary">← Back to Home</Link>
          <Link to="/dashboard" className="btn btn-primary">Next: Set Your Goals →</Link>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
