import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="container">
      <div className="card fade-in">
        <h1 className="card-title">Welcome Back, Doctor! 👋</h1>
        <p className="card-subtitle">Ready to build your wealth and slash your taxes?</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-2 fade-in">
        <div className="card">
          <h3>Your Learning Progress</h3>
          <div className="progress-container mt-3">
            <div className="progress-label">
              <span>Curriculum Completion</span>
              <span>15%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '15%' }}>15%</div>
            </div>
          </div>
          <div className="mt-3">
            <p><strong>1 of 8</strong> courses completed</p>
            <p><strong>1 of 8</strong> quizzes passed (70% required)</p>
            <p><strong>2 of 8</strong> strategies in progress</p>
          </div>
          <p className="mt-3" style={{ fontSize: '0.9rem', color: '#666' }}>
            <em>📊 Your courses are generated from your personalized tax plan</em>
          </p>
        </div>

        <div className="card">
          <h3>Your Tax Savings Impact</h3>
          <div style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', fontWeight: 'bold', textAlign: 'center', margin: '2rem 0' }}>
            $67,450
          </div>
          <p className="text-center"><strong>Projected Year 1 Savings</strong></p>
          <p className="text-center" style={{ color: 'var(--silver-dark)', fontSize: '0.9rem' }}>Based on strategies in your tax plan</p>
          <div className="mt-3" style={{ padding: '1rem', background: 'var(--silver-light)', borderRadius: '8px', textAlign: 'center' }}>
            <p style={{ margin: 0 }}><strong>Implementation Status:</strong></p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>2 strategies active • 6 pending completion</p>
          </div>
        </div>
      </div>

      {/* Current Focus */}
      <div className="card mt-4 fade-in">
        <div className="card-header">
          <h2 className="card-title">📚 Continue Learning: Entity Structuring & S-Corp Benefits</h2>
          <p className="card-subtitle">Optimize your business structure to maximize tax savings</p>
        </div>

        <div className="alert alert-info">
          <strong>🎯 Learning Goal:</strong> Master business entity structures and understand how S-Corp election can save you $15K-$40K annually in self-employment taxes.
        </div>

        <div className="grid grid-2 mt-3">
          <div className="card">
            <h4>✅ Completed</h4>
            <ul className="list-styled">
              <li>Welcome & orientation</li>
              <li>Platform overview</li>
              <li>Goal setting exercise</li>
              <li>Tax plan creation</li>
            </ul>
          </div>

          <div className="card">
            <h4>⏳ Up Next</h4>
            <ul style={{ marginLeft: '1.5rem' }}>
              <li style={{ padding: '0.5rem 0' }}>Complete Entity Structuring lesson</li>
              <li style={{ padding: '0.5rem 0' }}>Review case study examples</li>
              <li style={{ padding: '0.5rem 0' }}>Pass knowledge quiz (70% required)</li>
              <li style={{ padding: '0.5rem 0' }}>Download implementation checklist</li>
            </ul>
          </div>
        </div>

        <div className="btn-group btn-group-center mt-4">
          <Link to="/curriculum" className="btn btn-primary btn-lg">Start Entity Structuring Lesson →</Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-2 mt-4 fade-in">
        <div className="card text-center">
          <div className="role-icon" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>📹</div>
          <h3 className="mt-2">Video Library</h3>
          <p>Access all lessons</p>
          <Link to="/curriculum" className="btn btn-secondary mt-2">View All</Link>
        </div>

        <div className="card text-center">
          <div className="role-icon" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>💬</div>
          <h3 className="mt-2">Ask Vicky</h3>
          <p>Get instant answers</p>
          <Link to="/chat" className="btn btn-gold mt-2">Start Chat</Link>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="card mt-4 fade-in">
        <h2 className="card-title">📅 Upcoming Live Sessions & Consultations</h2>
        <div className="mt-3">
          <div className="card" style={{ background: 'var(--silver-light)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4>Monthly "Architect's Q&A" with Norman Dotch</h4>
                <p style={{ marginTop: '0.5rem' }}>First Thursday of Month • 7:00 PM EST</p>
                <p style={{ color: 'var(--silver-dark)' }}>Live session covering advanced strategies and student questions</p>
              </div>
              <a href="#" className="btn btn-primary">Add to Calendar</a>
            </div>
          </div>

          <div className="card mt-2" style={{ background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-blue) 100%)', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4>Your Quarterly Consultation</h4>
                <p style={{ marginTop: '0.5rem' }}>Next session: Q1 2025 Review</p>
                <p style={{ opacity: 0.9 }}>Direct consultation to review your tax plan and implementation progress</p>
              </div>
              <a href="#" className="btn" style={{ background: 'white', color: 'var(--navy-primary)' }}>Schedule Now</a>
            </div>
          </div>

          <div className="card mt-2" style={{ background: 'var(--silver-light)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4>Student Success Stories</h4>
                <p style={{ marginTop: '0.5rem' }}>Next Tuesday, 8:00 PM EST</p>
                <p style={{ color: 'var(--silver-dark)' }}>Hear from graduates who saved $100K+ in taxes</p>
              </div>
              <a href="#" className="btn btn-secondary">Register</a>
            </div>
          </div>
        </div>
      </div>

      {/* Your Goals Reminder */}
      <div className="card mt-4 fade-in">
        <h2 className="card-title">🎯 Your Goals Reminder</h2>
        <div className="grid grid-2 mt-3">
          <div>
            <h4>Tax Savings Goal</h4>
            <p className="mt-2" style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>$50K - $100K/year</p>
          </div>
          <div>
            <h4>10-Year Net Worth Target</h4>
            <p className="mt-2" style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>$5M - $10M</p>
          </div>
        </div>
        <Link to="/onboarding" className="btn btn-secondary mt-3">Update Goals</Link>
      </div>

      {/* Motivational Message from Vicky */}
      <div className="card mt-4 fade-in" style={{ background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-gold) 100%)', color: 'white' }}>
        <h3>💡 Message from Vicky</h3>
        <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
          "Great job completing onboarding! You're already ahead of 90% of dentists who never take action on their taxes. This week's R.O.B.S. strategy could save you tens of thousands if you're buying or expanding a practice. Let's dive in! 🚀"
        </p>
        <p style={{ marginTop: '1rem' }}>
          <em>- Vicky, Your AI Learning Companion</em>
        </p>
      </div>
    </div>
  )
}

export default Dashboard
