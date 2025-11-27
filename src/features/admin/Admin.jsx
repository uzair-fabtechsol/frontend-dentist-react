import { useState } from 'react'

const Admin = () => {
  const [activeRole, setActiveRole] = useState('admin')
  const [activeUserTab, setActiveUserTab] = useState('users')
  const [activeCurriculumTab, setActiveCurriculumTab] = useState('courses')
  const [showAddCourseModal, setShowAddCourseModal] = useState(false)

  const switchRole = (role) => {
    setActiveRole(role)
  }

  const handleAddCourse = (e) => {
    e.preventDefault()
    alert('Course created successfully!')
    setShowAddCourseModal(false)
  }

  return (
    <div className="container">
      {/* Role Switcher */}
      <div className="card fade-in">
        <div className="role-switcher">
          <button 
            className={`role-btn ${activeRole === 'admin' ? 'active' : ''}`}
            onClick={() => switchRole('admin')}
          >
            ⚙️ Administrator View
          </button>
          <button 
            className={`role-btn ${activeRole === 'instructor' ? 'active' : ''}`}
            onClick={() => switchRole('instructor')}
          >
            👨‍🏫 Instructor View
          </button>
        </div>
      </div>

      {/* ADMIN ROLE SECTION */}
      {activeRole === 'admin' && (
        <div className="fade-in">
          <div className="card fade-in">
            <h1 className="card-title">Admin Dashboard</h1>
            <p className="card-subtitle">Complete System Overview & Management</p>
          </div>

          {/* Key Metrics */}
          <div className="dashboard-grid fade-in">
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)' }}>
              <h3>336</h3>
              <p>Total Users</p>
            </div>
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)' }}>
              <h3>247</h3>
              <p>Active Students</p>
            </div>
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C49A2E 100%)' }}>
              <h3>89</h3>
              <p>Certified Graduates</p>
            </div>
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)' }}>
              <h3>15</h3>
              <p>Active Instructors</p>
            </div>
          </div>

          {/* Student Tracking & Monitoring */}
          <div className="card mt-4">
            <h2 className="card-title">📊 Student Tracking & Monitoring</h2>
            <div className="search-filter-bar">
              <input type="text" placeholder="Search students by name..." />
              <select>
                <option value="">All Weeks</option>
                <option value="1-3">Week 1-3</option>
                <option value="4-6">Week 4-6</option>
                <option value="7-9">Week 7-9</option>
                <option value="10-12">Week 10-12</option>
              </select>
              <select>
                <option value="">All Status</option>
                <option value="on-track">On Track</option>
                <option value="at-risk">At Risk</option>
                <option value="needs-attention">Needs Attention</option>
              </select>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Current Week</th>
                    <th>Progress</th>
                    <th>Quiz Avg</th>
                    <th>Last Activity</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Dr. Sarah Chen</strong></td>
                    <td>Week 12</td>
                    <td>
                      <div className="progress-bar-container">
                        <div className="progress-bar-admin" style={{ width: '100%' }}>100%</div>
                      </div>
                    </td>
                    <td>92%</td>
                    <td>2 hours ago</td>
                    <td><span className="badge badge-success">On Track</span></td>
                    <td><button className="btn btn-primary btn-sm">View</button></td>
                  </tr>
                  <tr>
                    <td><strong>Dr. Michael Johnson</strong></td>
                    <td>Week 5</td>
                    <td>
                      <div className="progress-bar-container">
                        <div className="progress-bar-admin" style={{ width: '42%' }}>42%</div>
                      </div>
                    </td>
                    <td>88%</td>
                    <td>5 hours ago</td>
                    <td><span className="badge badge-warning">At Risk</span></td>
                    <td><button className="btn btn-primary btn-sm">View</button></td>
                  </tr>
                  <tr>
                    <td><strong>Dr. Lisa Martinez</strong></td>
                    <td>Week 8</td>
                    <td>
                      <div className="progress-bar-container">
                        <div className="progress-bar-admin" style={{ width: '67%' }}>67%</div>
                      </div>
                    </td>
                    <td>94%</td>
                    <td>1 day ago</td>
                    <td><span className="badge badge-success">On Track</span></td>
                    <td><button className="btn btn-primary btn-sm">View</button></td>
                  </tr>
                  <tr>
                    <td><strong>Dr. James Williams</strong></td>
                    <td>Week 3</td>
                    <td>
                      <div className="progress-bar-container">
                        <div className="progress-bar-admin" style={{ width: '18%' }}>18%</div>
                      </div>
                    </td>
                    <td>76%</td>
                    <td>3 days ago</td>
                    <td><span className="badge badge-danger">Needs Attention</span></td>
                    <td><button className="btn btn-primary btn-sm">View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* User Management & Administration */}
          <div className="card mt-4">
            <h2 className="card-title">👥 User Management & Administration</h2>
            <div className="tab-container">
              <div className="tab-header">
                <button 
                  className={`tab-btn ${activeUserTab === 'users' ? 'active' : ''}`}
                  onClick={() => setActiveUserTab('users')}
                >
                  Users
                </button>
                <button 
                  className={`tab-btn ${activeUserTab === 'instructors' ? 'active' : ''}`}
                  onClick={() => setActiveUserTab('instructors')}
                >
                  Instructors
                </button>
                <button 
                  className={`tab-btn ${activeUserTab === 'permissions' ? 'active' : ''}`}
                  onClick={() => setActiveUserTab('permissions')}
                >
                  Permissions
                </button>
              </div>

              {activeUserTab === 'users' && (
                <div className="tab-content">
                  <div className="metric-row">
                    <span className="metric-label">Total Users:</span>
                    <span className="metric-value">336</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Active This Month:</span>
                    <span className="metric-value">312</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">New Registrations (30 days):</span>
                    <span className="metric-value">47</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Suspended Accounts:</span>
                    <span className="metric-value">3</span>
                  </div>
                  <div className="btn-grid mt-3">
                    <button className="btn btn-primary">Add New User</button>
                    <button className="btn btn-secondary">Bulk Import Users</button>
                    <button className="btn btn-secondary">Export User Data</button>
                    <button className="btn btn-secondary">Manage Suspensions</button>
                  </div>
                </div>
              )}

              {activeUserTab === 'instructors' && (
                <div className="tab-content">
                  <div className="metric-row">
                    <span className="metric-label">Total Instructors:</span>
                    <span className="metric-value">15</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Active This Week:</span>
                    <span className="metric-value">12</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Average Response Time:</span>
                    <span className="metric-value">2.3 hours</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Student Satisfaction:</span>
                    <span className="metric-value">4.8/5.0</span>
                  </div>
                  <div className="btn-grid mt-3">
                    <button className="btn btn-primary">Add Instructor</button>
                    <button className="btn btn-secondary">View Performance Reports</button>
                    <button className="btn btn-secondary">Assign Students</button>
                    <button className="btn btn-secondary">Manage Schedules</button>
                  </div>
                </div>
              )}

              {activeUserTab === 'permissions' && (
                <div className="tab-content">
                  <div className="metric-row">
                    <span className="metric-label">Admin Roles:</span>
                    <span className="metric-value">5 roles configured</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Instructor Permissions:</span>
                    <span className="metric-value">8 permissions active</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Student Access Levels:</span>
                    <span className="metric-value">3 levels</span>
                  </div>
                  <div className="btn-grid mt-3">
                    <button className="btn btn-primary">Configure Roles</button>
                    <button className="btn btn-secondary">Audit Permissions</button>
                    <button className="btn btn-secondary">Access Logs</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Certification Management */}
          <div className="card mt-4">
            <h2 className="card-title">🏆 Certification Management</h2>
            <div className="grid grid-2 mt-3">
              <div className="action-panel">
                <h4>Pending Certifications (12)</h4>
                <div className="student-detail-card mt-2">
                  <strong>Dr. Sarah Chen</strong> - Week 12 Complete
                  <div className="mt-2 flex gap-2">
                    <button className="btn btn-primary btn-sm">Review & Approve</button>
                    <button className="btn btn-secondary btn-sm">View Details</button>
                  </div>
                </div>
                <div className="student-detail-card">
                  <strong>Dr. Emily Rodriguez</strong> - Week 12 Complete
                  <div className="mt-2 flex gap-2">
                    <button className="btn btn-primary btn-sm">Review & Approve</button>
                    <button className="btn btn-secondary btn-sm">View Details</button>
                  </div>
                </div>
              </div>
              <div className="action-panel">
                <h4>Certification Statistics</h4>
                <div className="metric-row">
                  <span className="metric-label">Total Certified:</span>
                  <span className="metric-value">89</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">This Month:</span>
                  <span className="metric-value">14</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Certification Rate:</span>
                  <span className="metric-value">72%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Avg. Completion Time:</span>
                  <span className="metric-value">14.2 weeks</span>
                </div>
                <button className="btn btn-secondary mt-3">Generate Certificates</button>
              </div>
            </div>
          </div>

          {/* Compliance & System Monitoring */}
          <div className="card mt-4">
            <h2 className="card-title">✅ Compliance Checks & System Monitoring</h2>
            <div className="alert-item alert-success">
              <strong>✓ All Systems Operational</strong><br />
              Platform uptime: 99.97% this month | Last backup: 2 hours ago
            </div>
            <div className="alert-item alert-warning">
              <strong>⚠️ Compliance Alert</strong><br />
              3 students have incomplete mandatory assessments - automated reminders sent
            </div>
            <div className="alert-item alert-success">
              <strong>✓ Data Privacy Compliance</strong><br />
              GDPR & CCPA compliant | Last audit: January 15, 2025
            </div>
            <div className="btn-grid mt-3">
              <button className="btn btn-primary">View Full Compliance Report</button>
              <button className="btn btn-secondary">System Health Check</button>
              <button className="btn btn-secondary">Security Audit</button>
              <button className="btn btn-secondary">Generate Compliance Certificate</button>
            </div>
          </div>

          {/* Module Integration & Content Management */}
          <div className="card mt-4">
            <h2 className="card-title">📚 Module Integration & Content Management</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Module</th>
                    <th>Status</th>
                    <th>Enrolled Students</th>
                    <th>Completion Rate</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Entity Structuring & S-Corp Benefits</strong></td>
                    <td><span className="badge badge-success rounded-full">Active</span></td>
                    <td>247</td>
                    <td>94%</td>
                    <td>Jan 10, 2025</td>
                    <td className="flex gap-2">
                      <button className="btn btn-primary btn-sm">Edit</button>
                      <button className="btn btn-secondary btn-sm">Stats</button>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>IRC §7702 - Private Banking Strategy</strong></td>
                    <td><span className="badge badge-success rounded-full">Active</span></td>
                    <td>178</td>
                    <td>87%</td>
                    <td>Jan 12, 2025</td>
                    <td className="flex gap-2">
                      <button className="btn btn-primary btn-sm">Edit</button>
                      <button className="btn btn-secondary btn-sm">Stats</button>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Estate Planning & Wealth Transfer</strong></td>
                    <td><span className="badge badge-success ">Active</span></td>
                    <td>89</td>
                    <td>91%</td>
                    <td>Jan 15, 2025</td>
                    <td className="flex gap-2">
                      <button className="btn btn-primary btn-sm ">Edit</button>
                      <button className="btn btn-secondary btn-sm">Stats</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="btn-grid mt-3">
              <button className="btn btn-primary">Add New Module</button>
              <button className="btn btn-secondary">Bulk Update Content</button>
              <button className="btn btn-secondary">Schedule Content Release</button>
              <button className="btn btn-secondary">Module Analytics</button>
            </div>
          </div>

          {/* Analytics & Reporting */}
          <div className="card mt-4">
            <h2 className="card-title">📈 Platform Analytics & Revenue</h2>
            <div className="grid grid-2">
              <div>
                <h4>Platform Statistics</h4>
                <div className="metric-row">
                  <span className="metric-label">Completion Rate:</span>
                  <span className="metric-value">76%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Average Quiz Score:</span>
                  <span className="metric-value">88%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Active Sessions Today:</span>
                  <span className="metric-value">142</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Total Video Views:</span>
                  <span className="metric-value">12,847</span>
                </div>
              </div>
              <div>
                <h4>Revenue Metrics</h4>
                <div className="metric-row">
                  <span className="metric-label">Monthly Revenue:</span>
                  <span className="metric-value">$247,000</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Annual Projection:</span>
                  <span className="metric-value">$2.96M</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Student LTV:</span>
                  <span className="metric-value">$12,500</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">NPS Score:</span>
                  <span className="metric-value">87</span>
                </div>
              </div>
            </div>
            <div className="btn-grid mt-3">
              <button className="btn btn-primary">Download Full Report</button>
              <button className="btn btn-secondary">Revenue Dashboard</button>
              <button className="btn btn-secondary">Custom Analytics</button>
              <button className="btn btn-secondary">Export Data</button>
            </div>
          </div>

          {/* Curriculum & Video Management */}
          <div className="card mt-4">
            <h2 className="card-title">📚 Curriculum & Video Management</h2>
            <p className="card-subtitle">Manage course content, upload video lessons, and organize weekly curriculum</p>
            <div className="alert alert-info mt-3">
              <strong>📊 Content Status:</strong> 11 active courses • 8 video lessons uploaded • 4 pending review
            </div>

            <div className="tab-header mt-3">
              <button 
                className={`tab-btn ${activeCurriculumTab === 'courses' ? 'active' : ''}`}
                onClick={() => setActiveCurriculumTab('courses')}
              >
                Courses
              </button>
              <button 
                className={`tab-btn ${activeCurriculumTab === 'videos' ? 'active' : ''}`}
                onClick={() => setActiveCurriculumTab('videos')}
              >
                Video Lessons
              </button>
              <button 
                className={`tab-btn ${activeCurriculumTab === 'weekly' ? 'active' : ''}`}
                onClick={() => setActiveCurriculumTab('weekly')}
              >
                Weekly Content
              </button>
              <button 
                className={`tab-btn ${activeCurriculumTab === 'pillars' ? 'active' : ''}`}
                onClick={() => setActiveCurriculumTab('pillars')}
              >
                Manage Pillars
              </button>
            </div>

            {/* Courses Tab */}
            {activeCurriculumTab === 'courses' && (
              <div className="mt-3">
                <div className="mt-3 flex gap-2">
                  <button className="btn btn-primary" onClick={() => setShowAddCourseModal(true)}>+ Add New Course</button>
                  <button className="btn btn-secondary">Import Courses</button>
                  <button className="btn btn-secondary">Bulk Edit</button>
                </div>
                <div className="table-container mt-3">
                  <table>
                    <thead>
                      <tr>
                        <th>Course Title</th>
                        <th>Pillar</th>
                        <th>Video Status</th>
                        <th>Active Students</th>
                        <th>Completion Rate</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Entity Structuring & S-Corp Benefits</strong></td>
                        <td><span className="badge" style={{ background: '#4a90e2', color: 'white' }}>Pillar 1</span></td>
                        <td><span className="badge badge-success">Video Uploaded</span></td>
                        <td>147</td>
                        <td>78%</td>
                         <td className="flex gap-2">
                          <button className="btn btn-sm btn-primary">Edit</button>
                          <button className="btn btn-sm btn-secondary">Preview</button>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Asset Protection Strategies</strong></td>
                        <td><span className="badge" style={{ background: '#4a90e2', color: 'white' }}>Pillar 1</span></td>
                        <td><span className="badge badge-warning">Pending</span></td>
                        <td>32</td>
                        <td>45%</td>
                         <td className="flex gap-2">
                          <button className="btn btn-sm btn-primary">Edit</button>
                          <button className="btn btn-sm btn-secondary">Preview</button>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>IRC §469 - Passive Loss Planning</strong></td>
                        <td><span className="badge" style={{ background: '#d4af37', color: 'white' }}>Pillar 2</span></td>
                        <td><span className="badge badge-success">Video Uploaded</span></td>
                        <td>89</td>
                        <td>82%</td>
                         <td className="flex gap-2">
                          <button className="btn btn-sm btn-primary">Edit</button>
                          <button className="btn btn-sm btn-secondary">Preview</button>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>EXIT & SALE OF PRACTICE - The R.O.B.S. Roth 401(k) Strategy</strong></td>
                        <td><span className="badge" style={{ background: '#764ba2', color: 'white' }}>Pillar 4</span></td>
                        <td><span className="badge badge-warning">Pending</span></td>
                        <td>15</td>
                        <td>23%</td>
                        <td className="flex gap-2">
                          <button className="btn btn-sm btn-primary">Edit</button>
                          <button className="btn btn-sm btn-secondary">Preview</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Videos Tab */}
            {activeCurriculumTab === 'videos' && (
              <div className="grid grid-2 mt-3">
                {/* Upload Video Section */}
                <div className="card" style={{ background: 'var(--silver-light)' }}>
                  <h3>📹 Upload New Video Lesson</h3>
                  <form className="mt-3">
                    <div className="form-group">
                      <label className="form-label">Course Title</label>
                      <select className="form-control">
                        <option value="">Select Course</option>
                        <option value="1">Entity Structuring & S-Corp Benefits</option>
                        <option value="2">Asset Protection Strategies</option>
                        <option value="3">IRC §469 - Passive Loss Planning</option>
                        <option value="4">IRC §7702 - Private Banking Strategy</option>
                        <option value="5">Augusta Rule (IRC §280A)</option>
                        <option value="6">Defined Benefit & Cash Balance Plans</option>
                        <option value="7">EXIT & SALE OF PRACTICE</option>
                        <option value="8">Captive Insurance (IRC §831(b))</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Lesson Type</label>
                      <select className="form-control">
                        <option value="main">Main Lesson</option>
                        <option value="case-study">Case Study</option>
                        <option value="implementation">Implementation Guide</option>
                        <option value="bonus">Bonus Content</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Video File</label>
                      <input type="file" className="form-control" accept="video/*" />
                      <small style={{ color: 'var(--silver-dark)' }}>Accepted formats: MP4, MOV, AVI (Max: 500MB)</small>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Video URL (Alternative)</label>
                      <input type="url" className="form-control" placeholder="https://vimeo.com/... or YouTube link" />
                      <small style={{ color: 'var(--silver-dark)' }}>Use Vimeo, YouTube, or direct video URL</small>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Duration</label>
                      <input type="text" className="form-control" placeholder="e.g., 45 minutes" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Thumbnail</label>
                      <input type="file" className="form-control" accept="image/*" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Description</label>
                      <textarea className="form-control" rows="3" placeholder="Brief description of the video lesson"></textarea>
                    </div>
                    <div className="btn-group">
                      <button type="submit" className="btn btn-primary">Upload Video</button>
                      <button type="button" className="btn btn-secondary">Save as Draft</button>
                    </div>
                  </form>
                </div>
                {/* Video Library */}
                <div className="card" style={{ background: 'var(--silver-light)' }}>
                  <h3>🎬 Video Library</h3>
                  <div className="mt-3">
                    <div className="student-detail-card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                          <strong>Entity Structuring - Main Lesson</strong>
                          <p className="mt-1" style={{ fontSize: '0.9rem', color: 'var(--silver-dark)' }}>
                            Duration: 42:15 • Uploaded: Jan 15, 2025<br />
                            Views: 1,247 • Avg. Completion: 87%
                          </p>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-primary">Edit</button>
                          <button className="btn btn-sm btn-secondary">Preview</button>
                        </div>
                      </div>
                    </div>
                    <div className="student-detail-card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                          <strong>IRC §469 - Passive Loss Planning</strong>
                          <p className="mt-1" style={{ fontSize: '0.9rem', color: 'var(--silver-dark)' }}>
                            Duration: 38:20 • Uploaded: Jan 12, 2025<br />
                            Views: 892 • Avg. Completion: 92%
                          </p>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-primary">Edit</button>
                          <button className="btn btn-sm btn-secondary">Preview</button>
                        </div>
                      </div>
                    </div>
                    <div className="student-detail-card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                          <strong>Private Banking Strategy - Case Study</strong>
                          <p className="mt-1" style={{ fontSize: '0.9rem', color: 'var(--silver-dark)' }}>
                            Duration: 28:45 • Uploaded: Jan 10, 2025<br />
                            Views: 673 • Avg. Completion: 78%
                          </p>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-primary">Edit</button>
                          <button className="btn btn-sm btn-secondary">Preview</button>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-secondary btn-block mt-2">View All Videos (24)</button>
                  </div>
                </div>
              </div>
            )}

            {/* Weekly Content Tab */}
            {activeCurriculumTab === 'weekly' && (
              <div className="mt-3">
                <div className="mt-3 flex gap-2">
                  <button className="btn btn-primary">+ Add Weekly Content</button>
                  <button className="btn btn-secondary">Schedule Release</button>
                  <button className="btn btn-secondary">Clone Week</button>
                </div>
                <div className="grid grid-2 mt-3">
                  <div className="card" style={{ background: 'var(--silver-light)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3>Week 1 [DEPRECATED]</h3>
                      <span className="badge badge-danger">Inactive</span>
                    </div>
                    <p className="mt-2"><strong>R.O.B.S. Strategy</strong></p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--silver-dark)' }}>Removed for compliance</p>
                    <div className="btn-group mt-2">
                      <button className="btn btn-sm btn-secondary">View Archive</button>
                    </div>
                  </div>
                  <div className="card" style={{ background: 'var(--silver-light)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3>Week 2</h3>
                      <span className="badge badge-success">Active</span>
                    </div>
                    <p className="mt-2"><strong>Entity Structuring & S-Corp Benefits</strong></p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--silver-dark)' }}>
                      📹 Video: ✓ Uploaded<br />
                      📝 Quiz: 10 questions<br />
                      📄 Resources: 3 PDFs
                    </p>
                    <div className="btn-group mt-2">
                      <button className="btn btn-sm btn-primary">Edit Week</button>
                      <button className="btn btn-sm btn-secondary">Preview</button>
                    </div>
                  </div>
                  <div className="card" style={{ background: 'var(--silver-light)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3>Week 3</h3>
                      <span className="badge badge-warning">Draft</span>
                    </div>
                    <p className="mt-2"><strong>Asset Protection Strategies</strong></p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--silver-dark)' }}>
                      📹 Video: ⏳ Pending<br />
                      📝 Quiz: Not created<br />
                      📄 Resources: 1 PDF
                    </p>
                    <div className="btn-group mt-2">
                      <button className="btn btn-sm btn-primary">Edit Week</button>
                      <button className="btn btn-sm btn-secondary">Add Content</button>
                    </div>
                  </div>
                  <div className="card" style={{ background: 'var(--silver-light)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3>Week 7</h3>
                      <span className="badge badge-warning">Draft</span>
                    </div>
                    <p className="mt-2"><strong>EXIT & SALE OF PRACTICE - R.O.B.S. Roth 401(k)</strong></p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--silver-dark)' }}>
                      📹 Video: ⏳ Pending<br />
                      📝 Quiz: Not created<br />
                      📄 Resources: 0 files
                    </p>
                    <div className="btn-group mt-2">
                      <button className="btn btn-sm btn-primary">Edit Week</button>
                      <button className="btn btn-sm btn-secondary">Add Content</button>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button className="btn btn-secondary">View All 12 Weeks →</button>
                </div>
              </div>
            )}

            {/* Pillars Tab */}
            {activeCurriculumTab === 'pillars' && (
              <div className="mt-3">
                <div className="mt-3 flex gap-2">
                  <button className="btn btn-primary">+ Add New Pillar</button>
                  <button className="btn btn-secondary">Reorder Pillars</button>
                </div>
                <div className="grid grid-2 mt-3">
                  <div className="card" style={{ background: 'linear-gradient(135deg, #4a90e2 0%, #357ABD 100%)', color: 'white' }}>
                    <h3>📘 Pillar 1: Business Foundation</h3>
                    <p className="mt-2">2 active courses • 147 enrolled students</p>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      • Entity Structuring & S-Corp Benefits<br />
                      • Asset Protection Strategies
                    </p>
                    <div className="btn-group mt-2">
                      <button className="btn btn-sm" style={{ background: 'white', color: 'var(--navy-primary)' }}>Edit Pillar</button>
                      <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid white', color: 'white' }}>Manage Courses</button>
                    </div>
                  </div>
                  <div className="card" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #C49A2E 100%)', color: 'white' }}>
                    <h3>💰 Pillar 2: Personal Tax Optimization</h3>
                    <p className="mt-2">3 active courses • 234 enrolled students</p>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      • IRC §469 - Passive Loss Planning<br />
                      • IRC §7702 - Private Banking Strategy<br />
                      • Augusta Rule (IRC §280A)
                    </p>
                    <div className="btn-group mt-2">
                      <button className="btn btn-sm" style={{ background: 'white', color: 'var(--navy-primary)' }}>Edit Pillar</button>
                      <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid white', color: 'white' }}>Manage Courses</button>
                    </div>
                  </div>
                  <div className="card" style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)', color: 'white' }}>
                    <h3>🏦 Pillar 3: Retirement & Investment</h3>
                    <p className="mt-2">2 active courses • 189 enrolled students</p>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      • Defined Benefit & Cash Balance Plans<br />
                      • IRC §1031 Exchanges
                    </p>
                    <div className="btn-group mt-2">
                      <button className="btn btn-sm" style={{ background: 'white', color: 'var(--navy-primary)' }}>Edit Pillar</button>
                      <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid white', color: 'white' }}>Manage Courses</button>
                    </div>
                  </div>
                  <div className="card" style={{ background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)', color: 'white' }}>
                    <h3>🏛️ Pillar 4: Legacy & Advanced Strategies</h3>
                    <p className="mt-2">4 active courses • 156 enrolled students</p>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      • Captive Insurance (IRC §831(b))<br />
                      • Estate Planning & Wealth Transfer<br />
                      • EXIT & SALE OF PRACTICE<br />
                      • Tax Plan Integration & Implementation
                    </p>
                    <div className="btn-group mt-2">
                      <button className="btn btn-sm" style={{ background: 'white', color: 'var(--navy-primary)' }}>Edit Pillar</button>
                      <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid white', color: 'white' }}>Manage Courses</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* INSTRUCTOR ROLE SECTION */}
      {activeRole === 'instructor' && (
        <div className="fade-in">
          <div className="card fade-in">
            <h1 className="card-title">Instructor Dashboard</h1>
            <p className="card-subtitle">Student Mentoring & Progress Management</p>
          </div>

          {/* Instructor Metrics */}
          <div className="dashboard-grid fade-in">
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)' }}>
              <h3>247</h3>
              <p>Active Students</p>
            </div>
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)' }}>
              <h3>89</h3>
              <p>Certified Graduates</p>
            </div>
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C49A2E 100%)' }}>
              <h3>$42M+</h3>
              <p>Total Student Savings</p>
            </div>
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)' }}>
              <h3>18</h3>
              <p>Students Need Attention</p>
            </div>
          </div>

          {/* Student Progress Overview */}
          <div className="card mt-4">
            <h2 className="card-title">📊 Student Progress Overview</h2>
            <div className="grid grid-2 mt-3">
              <div className="action-panel">
                <h4>Current Week Distribution</h4>
                <div className="metric-row">
                  <span className="metric-label">Week 1-3:</span>
                  <span className="metric-value">89 students</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Week 4-6:</span>
                  <span className="metric-value">67 students</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Week 7-9:</span>
                  <span className="metric-value">54 students</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Week 10-12:</span>
                  <span className="metric-value">37 students</span>
                </div>
              </div>
              <div className="action-panel">
                <h4>Completion Rates</h4>
                <div className="metric-row">
                  <span className="metric-label">Average Quiz Score:</span>
                  <span className="metric-value">88%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Course Completion:</span>
                  <span className="metric-value">76%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Implementation Rate:</span>
                  <span className="metric-value">84%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Certification Rate:</span>
                  <span className="metric-value">72%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Students Requiring Attention */}
          <div className="card mt-4">
            <h2 className="card-title">⚠️ Students Requiring Attention</h2>
            <div className="student-detail-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Dr. James Williams</h4>
                  <p style={{ margin: '0.5rem 0', color: 'var(--silver-dark)' }}>Week 3 - No activity in 3 days</p>
                  <span className="badge badge-danger">Needs Attention</span>
                </div>
                <div>
                  <button className="btn btn-primary btn-sm">Send Message</button>
                  <button className="btn btn-secondary btn-sm">Schedule Call</button>
                </div>
              </div>
              <div className="mt-2">
                <div className="progress-bar-container">
                  <div className="progress-bar-admin" style={{ width: '18%' }}>18% Complete</div>
                </div>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Last quiz score: 76% | 2 modules incomplete</p>
              </div>
            </div>
            <div className="student-detail-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Dr. Michael Johnson</h4>
                  <p style={{ margin: '0.5rem 0', color: 'var(--silver-dark)' }}>Week 5 - Behind schedule</p>
                  <span className="badge badge-warning">At Risk</span>
                </div>
                <div>
                  <button className="btn btn-primary btn-sm">Send Message</button>
                  <button className="btn btn-secondary btn-sm">Schedule Call</button>
                </div>
              </div>
              <div className="mt-2">
                <div className="progress-bar-container">
                  <div className="progress-bar-admin" style={{ width: '42%' }}>42% Complete</div>
                </div>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Last quiz score: 88% | Has questions pending</p>
              </div>
            </div>
          </div>

          {/* Student Questions */}
          <div className="card mt-4">
            <h2 className="card-title">💬 Recent Student Questions</h2>
            <div className="student-detail-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <strong>Dr. Michael Johnson</strong> (Week 5)
                  <p style={{ margin: '0.5rem 0' }}>"Can you explain the difference between §7702 and §831(b) for practice structure?"</p>
                  <span className="badge badge-info">2 hours ago</span>
                </div>
                <button className="btn btn-primary btn-sm">Respond</button>
              </div>
            </div>
            <div className="student-detail-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <strong>Dr. Lisa Martinez</strong> (Week 8)
                  <p style={{ margin: '0.5rem 0' }}>"What's the typical timeline for completing a cost segregation study?"</p>
                  <span className="badge badge-info">5 hours ago</span>
                </div>
                <button className="btn btn-primary btn-sm">Respond</button>
              </div>
            </div>
            <div className="student-detail-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <strong>Dr. Emily Rodriguez</strong> (Week 10)
                  <p style={{ margin: '0.5rem 0' }}>"Need guidance on structuring my first 1031 exchange for real estate investment."</p>
                  <span className="badge badge-info">1 day ago</span>
                </div>
                <button className="btn btn-primary btn-sm">Respond</button>
              </div>
            </div>
            <button className="btn btn-secondary mt-3">View All Questions (47)</button>
          </div>

          {/* Live Sessions */}
          <div className="card mt-4">
            <h2 className="card-title">🎥 Upcoming Live Sessions</h2>
            <div className="action-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Monthly "Architect's Q&A" Session</h4>
                  <p style={{ margin: '0.5rem 0' }}>First Thursday of Month, 7:00 PM EST</p>
                  <span className="badge badge-success">67 students registered</span>
                </div>
                <button className="btn btn-primary">Join Session</button>
              </div>
            </div>
            <div className="action-panel mt-2">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Advanced Tax Strategies Workshop</h4>
                  <p style={{ margin: '0.5rem 0' }}>Saturday, 2:00 PM EST</p>
                  <span className="badge badge-success">143 students registered</span>
                </div>
                <button className="btn btn-primary">Prepare Session</button>
              </div>
            </div>
            <div className="btn-grid mt-3">
              <button className="btn btn-secondary">Schedule New Session</button>
              <button className="btn btn-secondary">View Session History</button>
              <button className="btn btn-secondary">Upload Recording</button>
            </div>
          </div>

          {/* Quarterly Consultations */}
          <div className="card mt-4">
            <h2 className="card-title">📅 Quarterly Consultations</h2>
            <div className="action-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Scheduled Q1 2025 Consultations</h4>
                  <p style={{ margin: '0.5rem 0' }}>Direct one-on-one strategy review sessions</p>
                  <span className="badge badge-info">34 consultations scheduled</span>
                </div>
                <button className="btn btn-primary">View Schedule</button>
              </div>
            </div>
            <div className="action-panel mt-2">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Pending Consultation Requests</h4>
                  <p style={{ margin: '0.5rem 0' }}>Students requesting quarterly review</p>
                  <span className="badge badge-warning">12 pending requests</span>
                </div>
                <button className="btn btn-primary">Review Requests</button>
              </div>
            </div>
            <div className="btn-grid mt-3">
              <button className="btn btn-secondary">Manage Consultation Calendar</button>
              <button className="btn btn-secondary">Send Consultation Invites</button>
              <button className="btn btn-secondary">View Past Consultations</button>
            </div>
          </div>

          {/* Certification Review */}
          <div className="card mt-4">
            <h2 className="card-title">🏆 Certification Review Queue</h2>
            <div className="student-detail-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Dr. Sarah Chen</h4>
                  <p style={{ margin: '0.5rem 0' }}>Completed all 12 weeks | Quiz average: 92%</p>
                  <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', color: 'var(--silver-dark)' }}>
                    ✓ All modules complete | ✓ Final assessment passed | ✓ Implementation case study submitted
                  </p>
                </div>
                <button className="btn btn-primary btn-sm">Review & Certify</button>
              </div>
            </div>
            <div className="student-detail-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Dr. Emily Rodriguez</h4>
                  <p style={{ margin: '0.5rem 0' }}>Completed all 12 weeks | Quiz average: 91%</p>
                  <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', color: 'var(--silver-dark)' }}>
                    ✓ All modules complete | ✓ Final assessment passed | ✓ Implementation case study submitted
                  </p>
                </div>
                <button className="btn btn-primary btn-sm">Review & Certify</button>
              </div>
            </div>
            <button className="btn btn-secondary mt-3">View All Pending (12)</button>
          </div>

          {/* Success Stories */}
          <div className="card mt-4">
            <h2 className="card-title">⭐ Recent Success Stories</h2>
            <ul className="list-styled">
              <li><strong>Dr. Sarah Chen</strong> - Achieved $127K in annual tax savings through Defined Benefit Plan implementation</li>
              <li><strong>Dr. James Williams</strong> - Successfully structured §831(b) captive insurance for asset protection</li>
              <li><strong>Dr. Emily Rodriguez</strong> - Completed first 1031 exchange, deferring $85K in capital gains</li>
              <li><strong>Dr. Michael Thompson</strong> - Implemented cost segregation study, accelerating $340K in depreciation</li>
            </ul>
            <div className="btn-grid mt-3">
              <button className="btn btn-primary">Share Success Story</button>
              <button className="btn btn-secondary">Request Testimonial</button>
              <button className="btn btn-secondary">View All Stories</button>
            </div>
          </div>

          {/* Instructor Actions */}
          <div className="card mt-4">
            <h2 className="card-title">⚙️ Instructor Actions</h2>
            <div className="btn-grid">
              <button className="btn btn-primary">Send Announcement to All Students</button>
              <button className="btn btn-secondary">Schedule New Live Session</button>
              <button className="btn btn-secondary">Update Course Content</button>
              <button className="btn btn-secondary">View Student Analytics</button>
              <button className="btn btn-secondary">Message Students at Risk</button>
              <button className="btn btn-secondary">Generate Progress Reports</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Course Modal */}
      {showAddCourseModal && (
        <div className="modal-overlay" onClick={() => setShowAddCourseModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>➕ Add New Course</h2>
              <button className="modal-close" onClick={() => setShowAddCourseModal(false)}>&times;</button>
            </div>
            <form onSubmit={handleAddCourse}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Course Title *</label>
                  <input type="text" className="form-control" placeholder="e.g., Advanced Tax Planning Strategies" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Course Code</label>
                  <input type="text" className="form-control" placeholder="e.g., TAX-401" />
                </div>
                <div className="form-group">
                  <label className="form-label">Select Pillar *</label>
                  <select className="form-control" required>
                    <option value="">Choose a pillar...</option>
                    <option value="1">📘 Pillar 1: Business Foundation</option>
                    <option value="2">💰 Pillar 2: Personal Tax Optimization</option>
                    <option value="3">🏦 Pillar 3: Retirement & Investment</option>
                    <option value="4">🏛️ Pillar 4: Legacy & Advanced Strategies</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Week Number</label>
                  <select className="form-control">
                    <option value="">Select week...</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>Week {i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Course Description *</label>
                  <textarea className="form-control" rows="4" placeholder="Describe what students will learn..." required></textarea>
                </div>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Potential Savings</label>
                    <input type="text" className="form-control" placeholder="e.g., $30K-$100K annually" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Duration (minutes)</label>
                    <input type="number" className="form-control" placeholder="e.g., 45" min="1" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Course Status *</label>
                  <select className="form-control" required>
                    <option value="draft">Draft - Not visible to students</option>
                    <option value="active">Active - Available to students</option>
                    <option value="locked">Locked - Visible but not accessible</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddCourseModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Create Course</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin
