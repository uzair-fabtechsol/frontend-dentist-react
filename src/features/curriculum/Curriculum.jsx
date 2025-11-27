import { Link } from 'react-router-dom'

const Curriculum = () => {
  return (
    <div className="container">
      <div className="card fade-in">
        <h1 className="card-title">Your Personalized Curriculum</h1>
        <p className="card-subtitle">Dynamic Courses Generated from Your Tax Plan</p>

        <div className="alert alert-info mt-3">
          <strong>📊 Tailored to Your Strategy</strong><br />
          These courses are automatically generated based on the specific tax strategies selected in your personalized tax plan. As you update your plan, your curriculum will adapt to match.
        </div>

        <div className="progress-container mt-3">
          <div className="progress-label">
            <span>Overall Progress</span>
            <span>15%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '15%' }}>15%</div>
          </div>
        </div>

        <div className="mt-3" style={{ padding: '1rem', background: 'var(--silver-light)', borderRadius: '8px' }}>
          <p><strong>Completion Requirement:</strong> Achieve 70% completion in each course to unlock certification</p>
        </div>
      </div>

      {/* Pillar 1: Business Foundation */}
      <div className="card mt-4 fade-in" style={{ borderLeft: '4px solid var(--accent-blue)' }}>
        <h2 className="card-title">📘 Pillar 1: Business Foundation</h2>
        <p className="mt-2" style={{ color: '#666' }}>Courses in this pillar are based on your business structure selections</p>

        <div className="card mt-3" style={{ background: 'var(--silver-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>Entity Structuring & S-Corp Benefits</h3>
              <p className="mt-2">Choose the right business structure and save $15K-$40K/year on self-employment taxes.</p>
              <p className="mt-1"><strong>Key Learning:</strong> LLC vs S-Corp vs C-Corp optimization</p>
              <p className="mt-1"><em style={{ color: 'var(--accent-blue)' }}>✓ Active in your tax plan</em></p>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span className="badge badge-warning">In Progress</span>
              <div className="mt-2">
                <Link to="/curriculum" className="btn btn-primary btn-sm">Continue</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3" style={{ background: 'var(--silver-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>Asset Protection Strategies</h3>
              <p className="mt-2">Shield your wealth from lawsuits, creditors, and business risks with legal structures.</p>
              <p className="mt-1"><strong>Key Learning:</strong> Multi-entity structures and protection layers</p>
              <p className="mt-1"><em style={{ color: 'var(--accent-blue)' }}>✓ Active in your tax plan</em></p>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span className="badge badge-primary">Locked</span>
              <div className="mt-2">
                <button className="btn btn-secondary btn-sm" disabled>Complete Previous First</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 2: Personal Tax Optimization */}
      <div className="card mt-4 fade-in" style={{ borderLeft: '4px solid var(--accent-gold)' }}>
        <h2 className="card-title">💰 Pillar 2: Personal Tax Optimization</h2>
        <p className="mt-2" style={{ color: '#666' }}>Courses in this pillar match your personal tax strategy selections</p>

        <div className="card mt-3" style={{ background: 'var(--silver-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>IRC §469 - Passive Loss Planning</h3>
              <p className="mt-2">Become a Real Estate Professional on paper and unlock massive tax deductions.</p>
              <p className="mt-1"><strong>Potential Savings:</strong> $30K-$100K+ annually</p>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span className="badge badge-primary">Locked</span>
            </div>
          </div>
        </div>

        <div className="card mt-3" style={{ background: 'var(--silver-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>IRC §7702 - Private Banking Strategy</h3>
              <p className="mt-2">Build your own tax-free bank using specially designed life insurance policies.</p>
              <p className="mt-1"><strong>Key Benefit:</strong> Tax-free growth and withdrawals for life</p>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span className="badge badge-primary">Locked</span>
            </div>
          </div>
        </div>

        <div className="card mt-3" style={{ background: 'var(--silver-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>Augusta Rule (IRC §280A)</h3>
              <p className="mt-2">Rent your home to your business for up to 14 days/year, tax-free income.</p>
              <p className="mt-1"><strong>Potential Savings:</strong> $10K-$50K tax-free income</p>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span className="badge badge-primary">Locked</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 3: Retirement & Investment Mastery */}
      <div className="card mt-4 fade-in" style={{ borderLeft: '4px solid var(--success)' }}>
        <h2 className="card-title">🏦 Pillar 3: Retirement & Investment</h2>
        <p className="mt-2" style={{ color: '#666' }}>Courses in this pillar align with your retirement and investment strategies</p>

        <div className="card mt-3" style={{ background: 'var(--silver-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>Defined Benefit Plans & Cash Balance Plans</h3>
              <p className="mt-2">Contribute $100K-$300K+ per year to retirement, fully tax-deductible.</p>
              <p className="mt-1"><strong>Best For:</strong> High-income dentists age 45+</p>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span className="badge badge-primary">Locked</span>
            </div>
          </div>
        </div>

        <div className="card mt-3" style={{ background: 'var(--silver-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>IRC §1031 Exchanges</h3>
              <p className="mt-2">Defer capital gains taxes indefinitely by rolling property sales into new investments.</p>
              <p className="mt-1"><strong>Potential Savings:</strong> 15-20% capital gains tax deferred</p>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span className="badge badge-primary">Locked</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 4: Legacy & Advanced Strategies */}
      <div className="card mt-4 fade-in" style={{ borderLeft: '4px solid #764ba2' }}>
        <h2 className="card-title">🏛️ Pillar 4: Legacy & Advanced Strategies</h2>
        <p className="mt-2" style={{ color: '#666' }}>Advanced courses based on your legacy and wealth transfer goals</p>

        <div className="card mt-3" style={{ background: 'var(--silver-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>Captive Insurance (IRC §831(b))</h3>
              <p className="mt-2">Create your own insurance company, deduct up to $2.8M, grow funds tax-free.</p>
              <p className="mt-1"><strong>Best For:</strong> Multi-location practices, $1M+ income</p>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span className="badge badge-primary">Locked</span>
            </div>
          </div>
        </div>

        <div className="card mt-3" style={{ background: 'var(--silver-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>Estate Planning & Wealth Transfer</h3>
              <p className="mt-2">Minimize estate taxes and transfer wealth to heirs tax-efficiently using trusts.</p>
              <p className="mt-1"><strong>Key Tools:</strong> GRATs, IDGTs, Family LLCs, Dynasty Trusts</p>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span className="badge badge-primary">Locked</span>
            </div>
          </div>
        </div>

        <div className="card mt-3" style={{ background: 'var(--silver-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>EXIT & SALE OF PRACTICE - The R.O.B.S. Roth 401(k) Strategy</h3>
              <p className="mt-2">Retire tax-free by selling your practice to yourself using a specially structured retirement plan.</p>
              <p className="mt-1"><strong>Key Strategy:</strong> 98% Roth 401(k) / 2% Personal ownership structure for tax-free exit</p>
              <p className="mt-1"><strong>Potential Benefit:</strong> Tax-free sale proceeds and retirement distributions</p>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span className="badge badge-primary">Locked</span>
            </div>
          </div>
        </div>

        <div className="card mt-3" style={{ background: 'var(--silver-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>Tax Plan Integration & Implementation</h3>
              <p className="mt-2">Combine all strategies into your personalized tax architecture blueprint with actionable steps.</p>
              <p className="mt-1"><strong>Deliverable:</strong> Your complete implementation roadmap with timeline</p>
            </div>
            <div style={{ marginLeft: '2rem' }}>
              <span className="badge badge-primary">Locked</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-3 mt-4 fade-in">
        <div className="card text-center">
          <h3>8</h3>
          <p>Active Courses<br /><small style={{ color: '#666' }}>(from your plan)</small></p>
        </div>

        <div className="card text-center">
          <h3>24+</h3>
          <p>Implementation Tools<br /><small style={{ color: '#666' }}>(customized)</small></p>
        </div>

        <div className="card text-center">
          <h3>$67,450</h3>
          <p>Your Projected Savings<br /><small style={{ color: '#666' }}>(Year 1)</small></p>
        </div>
      </div>

      <div className="card mt-4">
        <div className="alert alert-success">
          <strong>💡 Pro Tip:</strong> Your curriculum updates automatically when you modify your tax plan. Add or remove strategies anytime, and your courses will adapt accordingly.
        </div>

        <div className="btn-group btn-group-center mt-3">
          <Link to="/dashboard" className="btn btn-secondary">Back to Dashboard</Link>
          <Link to="/curriculum" className="btn btn-primary">Continue Learning →</Link>
        </div>
      </div>
    </div>
  )
}

export default Curriculum
