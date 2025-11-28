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
    <div className="max-w-[1200px] mx-auto my-8 px-8 md:px-6 sm:px-4">
      {/* Role Switcher */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        <div className="bg-[#1a2332] p-4 my-4 rounded-lg flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className={`py-3 px-8 border-2 border-[#d4af37] bg-transparent text-white cursor-pointer rounded-md font-semibold transition-all duration-300 ${activeRole === 'admin' ? 'bg-[#d4af37] text-[#1a2332]' : 'hover:bg-[#d4af37] hover:text-[#1a2332]'}`}
            onClick={() => switchRole('admin')}
          >
            ⚙️ Administrator View
          </button>
          <button 
            className={`py-3 px-8 border-2 border-[#d4af37] bg-transparent text-white cursor-pointer rounded-md font-semibold transition-all duration-300 ${activeRole === 'instructor' ? 'bg-[#d4af37] text-[#1a2332]' : 'hover:bg-[#d4af37] hover:text-[#1a2332]'}`}
            onClick={() => switchRole('instructor')}
          >
            👨‍🏫 Instructor View
          </button>
        </div>
      </div>

      {/* ADMIN ROLE SECTION */}
      {activeRole === 'admin' && (
        <div className="animate-[fadeIn_0.5s_ease-in]">
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
            <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">Admin Dashboard</h1>
            <p className="text-[#8b95a5] text-base mt-2">Complete System Overview & Management</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 animate-[fadeIn_0.5s_ease-in]">
            <div className="bg-gradient-to-br from-[#4A90E2] to-[#357ABD] text-white p-6 rounded-lg text-center shadow-md">
              <h3 className="text-[2.5rem] m-0">336</h3>
              <p className="mt-2 opacity-90">Total Users</p>
            </div>
            <div className="bg-gradient-to-br from-[#2ECC71] to-[#27AE60] text-white p-6 rounded-lg text-center shadow-md">
              <h3 className="text-[2.5rem] m-0">247</h3>
              <p className="mt-2 opacity-90">Active Students</p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#C49A2E] text-white p-6 rounded-lg text-center shadow-md">
              <h3 className="text-[2.5rem] m-0">89</h3>
              <p className="mt-2 opacity-90">Certified Graduates</p>
            </div>
            <div className="bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] text-white p-6 rounded-lg text-center shadow-md">
              <h3 className="text-[2.5rem] m-0">15</h3>
              <p className="mt-2 opacity-90">Active Instructors</p>
            </div>
          </div>

          {/* Student Tracking & Monitoring */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">📊 Student Tracking & Monitoring</h2>
            <div className="flex flex-col md:flex-row gap-4 my-4">
              <input type="text" placeholder="Search students by name..." className="flex-1 min-w-[200px] py-3 px-4 border border-[#8b95a5] rounded-md" />
              <select className="flex-1 min-w-[200px] py-3 px-4 border border-[#8b95a5] rounded-md">
                <option value="">All Weeks</option>
                <option value="1-3">Week 1-3</option>
                <option value="4-6">Week 4-6</option>
                <option value="7-9">Week 7-9</option>
                <option value="10-12">Week 10-12</option>
              </select>
              <select className="flex-1 min-w-[200px] py-3 px-4 border border-[#8b95a5] rounded-md">
                <option value="">All Status</option>
                <option value="on-track">On Track</option>
                <option value="at-risk">At Risk</option>
                <option value="needs-attention">Needs Attention</option>
              </select>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse bg-white">
                <thead className="bg-[#1a2332] text-white">
                  <tr>
                    <th className="p-4 text-left">Student Name</th>
                    <th className="p-4 text-left">Current Week</th>
                    <th className="p-4 text-left">Progress</th>
                    <th className="p-4 text-left">Quiz Avg</th>
                    <th className="p-4 text-left">Last Activity</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e8eaed] hover:bg-[#e8eaed]">
                    <td className="p-4"><strong>Dr. Sarah Chen</strong></td>
                    <td className="p-4">Week 12</td>
                    <td className="p-4">
                      <div className="bg-[#e8eaed] h-6 rounded-xl overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#28a745] to-[#d4af37] rounded-xl flex items-center justify-center text-white font-semibold text-[0.85rem]" style={{ width: '100%' }}>100%</div>
                      </div>
                    </td>
                    <td className="p-4">92%</td>
                    <td className="p-4">2 hours ago</td>
                    <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#28a745] text-white">On Track</span></td>
                    <td className="p-4"><button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">View</button></td>
                  </tr>
                  <tr className="border-b border-[#e8eaed] hover:bg-[#e8eaed]">
                    <td className="p-4"><strong>Dr. Michael Johnson</strong></td>
                    <td className="p-4">Week 5</td>
                    <td className="p-4">
                      <div className="bg-[#e8eaed] h-6 rounded-xl overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#28a745] to-[#d4af37] rounded-xl flex items-center justify-center text-white font-semibold text-[0.85rem]" style={{ width: '42%' }}>42%</div>
                      </div>
                    </td>
                    <td className="p-4">88%</td>
                    <td className="p-4">5 hours ago</td>
                    <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#ffc107] text-[#1a2332]">At Risk</span></td>
                    <td className="p-4"><button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">View</button></td>
                  </tr>
                  <tr className="border-b border-[#e8eaed] hover:bg-[#e8eaed]">
                    <td className="p-4"><strong>Dr. Lisa Martinez</strong></td>
                    <td className="p-4">Week 8</td>
                    <td className="p-4">
                      <div className="bg-[#e8eaed] h-6 rounded-xl overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#28a745] to-[#d4af37] rounded-xl flex items-center justify-center text-white font-semibold text-[0.85rem]" style={{ width: '67%' }}>67%</div>
                      </div>
                    </td>
                    <td className="p-4">94%</td>
                    <td className="p-4">1 day ago</td>
                    <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#28a745] text-white">On Track</span></td>
                    <td className="p-4"><button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">View</button></td>
                  </tr>
                  <tr className="border-b border-[#e8eaed] hover:bg-[#e8eaed]">
                    <td className="p-4"><strong>Dr. James Williams</strong></td>
                    <td className="p-4">Week 3</td>
                    <td className="p-4">
                      <div className="bg-[#e8eaed] h-6 rounded-xl overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#28a745] to-[#d4af37] rounded-xl flex items-center justify-center text-white font-semibold text-[0.85rem]" style={{ width: '18%' }}>18%</div>
                      </div>
                    </td>
                    <td className="p-4">76%</td>
                    <td className="p-4">3 days ago</td>
                    <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#dc3545] text-white">Needs Attention</span></td>
                    <td className="p-4"><button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* User Management & Administration */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">👥 User Management & Administration</h2>
            <div className="bg-white rounded-lg overflow-hidden mt-6">
              <div className="flex flex-wrap border-b-2 border-[#e8eaed] bg-[#e8eaed]">
                <button 
                  className={`flex-1 p-4 bg-transparent border-none cursor-pointer font-semibold transition-all ${activeUserTab === 'users' ? 'bg-white text-[#1a2332] border-b-[3px] border-[#d4af37]' : 'text-[#8b95a5] hover:text-[#1a2332]'}`}
                  onClick={() => setActiveUserTab('users')}
                >
                  Users
                </button>
                <button 
                  className={`flex-1 p-4 bg-transparent border-none cursor-pointer font-semibold transition-all ${activeUserTab === 'instructors' ? 'bg-white text-[#1a2332] border-b-[3px] border-[#d4af37]' : 'text-[#8b95a5] hover:text-[#1a2332]'}`}
                  onClick={() => setActiveUserTab('instructors')}
                >
                  Instructors
                </button>
                <button 
                  className={`flex-1 p-4 bg-transparent border-none cursor-pointer font-semibold transition-all ${activeUserTab === 'permissions' ? 'bg-white text-[#1a2332] border-b-[3px] border-[#d4af37]' : 'text-[#8b95a5] hover:text-[#1a2332]'}`}
                  onClick={() => setActiveUserTab('permissions')}
                >
                  Permissions
                </button>
              </div>

              {activeUserTab === 'users' && (
                <div className="p-6">
                  <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                    <span className="font-semibold text-[#1a2332]">Total Users:</span>
                    <span className="text-[#4a90e2] font-bold">336</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                    <span className="font-semibold text-[#1a2332]">Active This Month:</span>
                    <span className="text-[#4a90e2] font-bold">312</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                    <span className="font-semibold text-[#1a2332]">New Registrations (30 days):</span>
                    <span className="text-[#4a90e2] font-bold">47</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                    <span className="font-semibold text-[#1a2332]">Suspended Accounts:</span>
                    <span className="text-[#4a90e2] font-bold">3</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Add New User</button>
                    <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Bulk Import Users</button>
                    <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Export User Data</button>
                    <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Manage Suspensions</button>
                  </div>
                </div>
              )}

              {activeUserTab === 'instructors' && (
                <div className="p-6">
                  <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                    <span className="font-semibold text-[#1a2332]">Total Instructors:</span>
                    <span className="text-[#4a90e2] font-bold">15</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                    <span className="font-semibold text-[#1a2332]">Active This Week:</span>
                    <span className="text-[#4a90e2] font-bold">12</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                    <span className="font-semibold text-[#1a2332]">Average Response Time:</span>
                    <span className="text-[#4a90e2] font-bold">2.3 hours</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                    <span className="font-semibold text-[#1a2332]">Student Satisfaction:</span>
                    <span className="text-[#4a90e2] font-bold">4.8/5.0</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Add Instructor</button>
                    <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">View Performance Reports</button>
                    <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Assign Students</button>
                    <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Manage Schedules</button>
                  </div>
                </div>
              )}

              {activeUserTab === 'permissions' && (
                <div className="p-6">
                  <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                    <span className="font-semibold text-[#1a2332]">Admin Roles:</span>
                    <span className="text-[#4a90e2] font-bold">5 roles configured</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                    <span className="font-semibold text-[#1a2332]">Instructor Permissions:</span>
                    <span className="text-[#4a90e2] font-bold">8 permissions active</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                    <span className="font-semibold text-[#1a2332]">Student Access Levels:</span>
                    <span className="text-[#4a90e2] font-bold">3 levels</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Configure Roles</button>
                    <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Audit Permissions</button>
                    <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Access Logs</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Certification Management */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">🏆 Certification Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-[#e8eaed] p-6 rounded-lg">
                <h4 className="text-[#1a2332] font-semibold">Pending Certifications (12)</h4>
                <div className="bg-white border-l-4 border-[#4a90e2] p-4 mb-4 rounded shadow-sm mt-4">
                  <strong className="text-[#1a2332]">Dr. Sarah Chen</strong> - Week 12 Complete
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Review & Approve</button>
                    <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">View Details</button>
                  </div>
                </div>
                <div className="bg-white border-l-4 border-[#4a90e2] p-4 rounded shadow-sm">
                  <strong className="text-[#1a2332]">Dr. Emily Rodriguez</strong> - Week 12 Complete
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Review & Approve</button>
                    <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">View Details</button>
                  </div>
                </div>
              </div>
              <div className="bg-[#e8eaed] p-6 rounded-lg">
                <h4 className="text-[#1a2332] font-semibold">Certification Statistics</h4>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">Total Certified:</span>
                  <span className="text-[#4a90e2] font-bold">89</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">This Month:</span>
                  <span className="text-[#4a90e2] font-bold">14</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">Certification Rate:</span>
                  <span className="text-[#4a90e2] font-bold">72%</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">Avg. Completion Time:</span>
                  <span className="text-[#4a90e2] font-bold">14.2 weeks</span>
                </div>
                <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all mt-6">Generate Certificates</button>
              </div>
            </div>
          </div>

          {/* Compliance & System Monitoring */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">✅ Compliance Checks & System Monitoring</h2>
            <div className="p-4 my-2 rounded-md border-l-4 bg-[#e8f5e9] border-[#28a745]">
              <strong>✓ All Systems Operational</strong><br />
              Platform uptime: 99.97% this month | Last backup: 2 hours ago
            </div>
            <div className="p-4 my-2 rounded-md border-l-4 bg-[#fff3e0] border-[#ffc107]">
              <strong>⚠️ Compliance Alert</strong><br />
              3 students have incomplete mandatory assessments - automated reminders sent
            </div>
            <div className="p-4 my-2 rounded-md border-l-4 bg-[#e8f5e9] border-[#28a745]">
              <strong>✓ Data Privacy Compliance</strong><br />
              GDPR & CCPA compliant | Last audit: January 15, 2025
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">View Full Compliance Report</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">System Health Check</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Security Audit</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Generate Compliance Certificate</button>
            </div>
          </div>

          {/* Module Integration & Content Management */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">📚 Module Integration & Content Management</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse bg-white">
                <thead className="bg-[#1a2332] text-white">
                  <tr>
                    <th className="p-4 text-left">Module</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Enrolled Students</th>
                    <th className="p-4 text-left">Completion Rate</th>
                    <th className="p-4 text-left">Last Updated</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e8eaed] hover:bg-[#e8eaed]">
                    <td className="p-4"><strong>Entity Structuring & S-Corp Benefits</strong></td>
                    <td className="p-4"><span className="inline-block py-1 px-3 rounded-full text-[0.85rem] font-semibold bg-[#28a745] text-white">Active</span></td>
                    <td className="p-4">247</td>
                    <td className="p-4">94%</td>
                    <td className="p-4">Jan 10, 2025</td>
                    <td className="p-4 flex gap-2">
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit</button>
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Stats</button>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e8eaed] hover:bg-[#e8eaed]">
                    <td className="p-4"><strong>IRC §7702 - Private Banking Strategy</strong></td>
                    <td className="p-4"><span className="inline-block py-1 px-3 rounded-full text-[0.85rem] font-semibold bg-[#28a745] text-white">Active</span></td>
                    <td className="p-4">178</td>
                    <td className="p-4">87%</td>
                    <td className="p-4">Jan 12, 2025</td>
                    <td className="p-4 flex gap-2">
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit</button>
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Stats</button>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e8eaed] hover:bg-[#e8eaed]">
                    <td className="p-4"><strong>Estate Planning & Wealth Transfer</strong></td>
                    <td className="p-4"><span className="inline-block py-1 px-3 rounded-full text-[0.85rem] font-semibold bg-[#28a745] text-white">Active</span></td>
                    <td className="p-4">89</td>
                    <td className="p-4">91%</td>
                    <td className="p-4">Jan 15, 2025</td>
                    <td className="p-4 flex gap-2">
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit</button>
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Stats</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Add New Module</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Bulk Update Content</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Schedule Content Release</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Module Analytics</button>
            </div>
          </div>

          {/* Analytics & Reporting */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">📈 Platform Analytics & Revenue</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-[#1a2332] font-semibold">Platform Statistics</h4>
                <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                  <span className="font-semibold text-[#1a2332]">Completion Rate:</span>
                  <span className="text-[#4a90e2] font-bold">76%</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                  <span className="font-semibold text-[#1a2332]">Average Quiz Score:</span>
                  <span className="text-[#4a90e2] font-bold">88%</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                  <span className="font-semibold text-[#1a2332]">Active Sessions Today:</span>
                  <span className="text-[#4a90e2] font-bold">142</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                  <span className="font-semibold text-[#1a2332]">Total Video Views:</span>
                  <span className="text-[#4a90e2] font-bold">12,847</span>
                </div>
              </div>
              <div>
                <h4 className="text-[#1a2332] font-semibold">Revenue Metrics</h4>
                <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                  <span className="font-semibold text-[#1a2332]">Monthly Revenue:</span>
                  <span className="text-[#4a90e2] font-bold">$247,000</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                  <span className="font-semibold text-[#1a2332]">Annual Projection:</span>
                  <span className="text-[#4a90e2] font-bold">$2.96M</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                  <span className="font-semibold text-[#1a2332]">Student LTV:</span>
                  <span className="text-[#4a90e2] font-bold">$12,500</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#e8eaed]">
                  <span className="font-semibold text-[#1a2332]">NPS Score:</span>
                  <span className="text-[#4a90e2] font-bold">87</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Download Full Report</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Revenue Dashboard</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Custom Analytics</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Export Data</button>
            </div>
          </div>

          {/* Curriculum & Video Management */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">📚 Curriculum & Video Management</h2>
            <p className="text-[#8b95a5] text-base mt-2">Manage course content, upload video lessons, and organize weekly curriculum</p>
            <div className="py-4 px-6 rounded-md mb-6 border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460] mt-6">
              <strong>📊 Content Status:</strong> 11 active courses • 8 video lessons uploaded • 4 pending review
            </div>

            <div className="flex flex-wrap border-b-2 border-[#e8eaed] bg-[#e8eaed] mt-6">
              <button 
                className={`flex-1 p-4 bg-transparent border-none cursor-pointer font-semibold transition-all ${activeCurriculumTab === 'courses' ? 'bg-white text-[#1a2332] border-b-[3px] border-[#d4af37]' : 'text-[#8b95a5] hover:text-[#1a2332]'}`}
                onClick={() => setActiveCurriculumTab('courses')}
              >
                Courses
              </button>
              <button 
                className={`flex-1 p-4 bg-transparent border-none cursor-pointer font-semibold transition-all ${activeCurriculumTab === 'videos' ? 'bg-white text-[#1a2332] border-b-[3px] border-[#d4af37]' : 'text-[#8b95a5] hover:text-[#1a2332]'}`}
                onClick={() => setActiveCurriculumTab('videos')}
              >
                Video Lessons
              </button>
              <button 
                className={`flex-1 p-4 bg-transparent border-none cursor-pointer font-semibold transition-all ${activeCurriculumTab === 'weekly' ? 'bg-white text-[#1a2332] border-b-[3px] border-[#d4af37]' : 'text-[#8b95a5] hover:text-[#1a2332]'}`}
                onClick={() => setActiveCurriculumTab('weekly')}
              >
                Weekly Content
              </button>
              <button 
                className={`flex-1 p-4 bg-transparent border-none cursor-pointer font-semibold transition-all ${activeCurriculumTab === 'pillars' ? 'bg-white text-[#1a2332] border-b-[3px] border-[#d4af37]' : 'text-[#8b95a5] hover:text-[#1a2332]'}`}
                onClick={() => setActiveCurriculumTab('pillars')}
              >
                Manage Pillars
              </button>
            </div>

            {/* Courses Tab */}
            {activeCurriculumTab === 'courses' && (
              <div className="mt-6">
                <div className="mt-6 flex flex-wrap gap-2">
                  <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all" onClick={() => setShowAddCourseModal(true)}>+ Add New Course</button>
                  <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Import Courses</button>
                  <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Bulk Edit</button>
                </div>
                <div className="overflow-x-auto mt-6">
                  <table className="w-full border-collapse bg-white">
                    <thead className="bg-[#1a2332] text-white">
                      <tr>
                        <th className="p-4 text-left">Course Title</th>
                        <th className="p-4 text-left">Pillar</th>
                        <th className="p-4 text-left">Video Status</th>
                        <th className="p-4 text-left">Active Students</th>
                        <th className="p-4 text-left">Completion Rate</th>
                        <th className="p-4 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#e8eaed] hover:bg-[#e8eaed]">
                        <td className="p-4"><strong>Entity Structuring & S-Corp Benefits</strong></td>
                        <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#4a90e2] text-white">Pillar 1</span></td>
                        <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#28a745] text-white">Video Uploaded</span></td>
                        <td className="p-4">147</td>
                        <td className="p-4">78%</td>
                        <td className="p-4 flex gap-2">
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit</button>
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Preview</button>
                        </td>
                      </tr>
                      <tr className="border-b border-[#e8eaed] hover:bg-[#e8eaed]">
                        <td className="p-4"><strong>Asset Protection Strategies</strong></td>
                        <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#4a90e2] text-white">Pillar 1</span></td>
                        <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#ffc107] text-[#1a2332]">Pending</span></td>
                        <td className="p-4">32</td>
                        <td className="p-4">45%</td>
                        <td className="p-4 flex gap-2">
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit</button>
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Preview</button>
                        </td>
                      </tr>
                      <tr className="border-b border-[#e8eaed] hover:bg-[#e8eaed]">
                        <td className="p-4"><strong>IRC §469 - Passive Loss Planning</strong></td>
                        <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#d4af37] text-white">Pillar 2</span></td>
                        <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#28a745] text-white">Video Uploaded</span></td>
                        <td className="p-4">89</td>
                        <td className="p-4">82%</td>
                        <td className="p-4 flex gap-2">
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit</button>
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Preview</button>
                        </td>
                      </tr>
                      <tr className="border-b border-[#e8eaed] hover:bg-[#e8eaed]">
                        <td className="p-4"><strong>EXIT & SALE OF PRACTICE - The R.O.B.S. Roth 401(k) Strategy</strong></td>
                        <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#764ba2] text-white">Pillar 4</span></td>
                        <td className="p-4"><span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#ffc107] text-[#1a2332]">Pending</span></td>
                        <td className="p-4">15</td>
                        <td className="p-4">23%</td>
                        <td className="p-4 flex gap-2">
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit</button>
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Preview</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Videos Tab */}
            {activeCurriculumTab === 'videos' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Upload Video Section */}
                <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md">
                  <h3 className="text-[#1a2332] font-semibold">📹 Upload New Video Lesson</h3>
                  <form className="mt-6">
                    <div className="mb-6">
                      <label className="block mb-2 text-[#1a2332] font-semibold">Course Title</label>
                      <select className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base bg-white">
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
                    <div className="mb-6">
                      <label className="block mb-2 text-[#1a2332] font-semibold">Lesson Type</label>
                      <select className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base bg-white">
                        <option value="main">Main Lesson</option>
                        <option value="case-study">Case Study</option>
                        <option value="implementation">Implementation Guide</option>
                        <option value="bonus">Bonus Content</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 text-[#1a2332] font-semibold">Video File</label>
                      <input type="file" className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base bg-white" accept="video/*" />
                      <small className="text-[#8b95a5]">Accepted formats: MP4, MOV, AVI (Max: 500MB)</small>
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 text-[#1a2332] font-semibold">Video URL (Alternative)</label>
                      <input type="url" className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base bg-white" placeholder="https://vimeo.com/... or YouTube link" />
                      <small className="text-[#8b95a5]">Use Vimeo, YouTube, or direct video URL</small>
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 text-[#1a2332] font-semibold">Duration</label>
                      <input type="text" className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base bg-white" placeholder="e.g., 45 minutes" />
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 text-[#1a2332] font-semibold">Thumbnail</label>
                      <input type="file" className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base bg-white" accept="image/*" />
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 text-[#1a2332] font-semibold">Description</label>
                      <textarea className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base bg-white min-h-[100px] resize-y" rows="3" placeholder="Brief description of the video lesson"></textarea>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <button type="submit" className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Upload Video</button>
                      <button type="button" className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Save as Draft</button>
                    </div>
                  </form>
                </div>
                {/* Video Library */}
                <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md">
                  <h3 className="text-[#1a2332] font-semibold">🎬 Video Library</h3>
                  <div className="mt-6">
                    <div className="bg-white border-l-4 border-[#4a90e2] p-4 mb-4 rounded shadow-sm">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div>
                          <strong className="text-[#1a2332]">Entity Structuring - Main Lesson</strong>
                          <p className="mt-2 text-[0.9rem] text-[#8b95a5]">
                            Duration: 42:15 • Uploaded: Jan 15, 2025<br />
                            Views: 1,247 • Avg. Completion: 87%
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit</button>
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Preview</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-l-4 border-[#4a90e2] p-4 mb-4 rounded shadow-sm">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div>
                          <strong className="text-[#1a2332]">IRC §469 - Passive Loss Planning</strong>
                          <p className="mt-2 text-[0.9rem] text-[#8b95a5]">
                            Duration: 38:20 • Uploaded: Jan 12, 2025<br />
                            Views: 892 • Avg. Completion: 92%
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit</button>
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Preview</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-l-4 border-[#4a90e2] p-4 mb-4 rounded shadow-sm">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div>
                          <strong className="text-[#1a2332]">Private Banking Strategy - Case Study</strong>
                          <p className="mt-2 text-[0.9rem] text-[#8b95a5]">
                            Duration: 28:45 • Uploaded: Jan 10, 2025<br />
                            Views: 673 • Avg. Completion: 78%
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit</button>
                          <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Preview</button>
                        </div>
                      </div>
                    </div>
                    <button className="w-full py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all mt-4">View All Videos (24)</button>
                  </div>
                </div>
              </div>
            )}

            {/* Weekly Content Tab */}
            {activeCurriculumTab === 'weekly' && (
              <div className="mt-6">
                <div className="mt-6 flex flex-wrap gap-2">
                  <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">+ Add Weekly Content</button>
                  <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Schedule Release</button>
                  <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Clone Week</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[#1a2332]">Week 1 [DEPRECATED]</h3>
                      <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#dc3545] text-white">Inactive</span>
                    </div>
                    <p className="mt-4"><strong>R.O.B.S. Strategy</strong></p>
                    <p className="text-[0.9rem] text-[#8b95a5]">Removed for compliance</p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">View Archive</button>
                    </div>
                  </div>
                  <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[#1a2332]">Week 2</h3>
                      <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#28a745] text-white">Active</span>
                    </div>
                    <p className="mt-4"><strong>Entity Structuring & S-Corp Benefits</strong></p>
                    <p className="text-[0.9rem] text-[#8b95a5]">
                      📹 Video: ✓ Uploaded<br />
                      📝 Quiz: 10 questions<br />
                      📄 Resources: 3 PDFs
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit Week</button>
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Preview</button>
                    </div>
                  </div>
                  <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[#1a2332]">Week 3</h3>
                      <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#ffc107] text-[#1a2332]">Draft</span>
                    </div>
                    <p className="mt-4"><strong>Asset Protection Strategies</strong></p>
                    <p className="text-[0.9rem] text-[#8b95a5]">
                      📹 Video: ⏳ Pending<br />
                      📝 Quiz: Not created<br />
                      📄 Resources: 1 PDF
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit Week</button>
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Add Content</button>
                    </div>
                  </div>
                  <div className="bg-[#e8eaed] rounded-lg p-8 shadow-md">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[#1a2332]">Week 7</h3>
                      <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#ffc107] text-[#1a2332]">Draft</span>
                    </div>
                    <p className="mt-4"><strong>EXIT & SALE OF PRACTICE - R.O.B.S. Roth 401(k)</strong></p>
                    <p className="text-[0.9rem] text-[#8b95a5]">
                      📹 Video: ⏳ Pending<br />
                      📝 Quiz: Not created<br />
                      📄 Resources: 0 files
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Edit Week</button>
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Add Content</button>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">View All 12 Weeks →</button>
                </div>
              </div>
            )}

            {/* Pillars Tab */}
            {activeCurriculumTab === 'pillars' && (
              <div className="mt-6">
                <div className="mt-6 flex flex-wrap gap-2">
                  <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">+ Add New Pillar</button>
                  <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Reorder Pillars</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gradient-to-br from-[#4a90e2] to-[#357ABD] text-white rounded-lg p-8 shadow-md">
                    <h3>📘 Pillar 1: Business Foundation</h3>
                    <p className="mt-4">2 active courses • 147 enrolled students</p>
                    <p className="text-[0.9rem] opacity-90 mt-2">
                      • Entity Structuring & S-Corp Benefits<br />
                      • Asset Protection Strategies
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-white text-[#1a2332] hover:bg-[#e8eaed] transition-all">Edit Pillar</button>
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-transparent border border-white text-white hover:bg-white/10 transition-all">Manage Courses</button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#d4af37] to-[#C49A2E] text-white rounded-lg p-8 shadow-md">
                    <h3>💰 Pillar 2: Personal Tax Optimization</h3>
                    <p className="mt-4">3 active courses • 234 enrolled students</p>
                    <p className="text-[0.9rem] opacity-90 mt-2">
                      • IRC §469 - Passive Loss Planning<br />
                      • IRC §7702 - Private Banking Strategy<br />
                      • Augusta Rule (IRC §280A)
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-white text-[#1a2332] hover:bg-[#e8eaed] transition-all">Edit Pillar</button>
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-transparent border border-white text-white hover:bg-white/10 transition-all">Manage Courses</button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#2ECC71] to-[#27AE60] text-white rounded-lg p-8 shadow-md">
                    <h3>🏦 Pillar 3: Retirement & Investment</h3>
                    <p className="mt-4">2 active courses • 189 enrolled students</p>
                    <p className="text-[0.9rem] opacity-90 mt-2">
                      • Defined Benefit & Cash Balance Plans<br />
                      • IRC §1031 Exchanges
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-white text-[#1a2332] hover:bg-[#e8eaed] transition-all">Edit Pillar</button>
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-transparent border border-white text-white hover:bg-white/10 transition-all">Manage Courses</button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#764ba2] to-[#667eea] text-white rounded-lg p-8 shadow-md">
                    <h3>🏛️ Pillar 4: Legacy & Advanced Strategies</h3>
                    <p className="mt-4">4 active courses • 156 enrolled students</p>
                    <p className="text-[0.9rem] opacity-90 mt-2">
                      • Captive Insurance (IRC §831(b))<br />
                      • Estate Planning & Wealth Transfer<br />
                      • EXIT & SALE OF PRACTICE<br />
                      • Tax Plan Integration & Implementation
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-white text-[#1a2332] hover:bg-[#e8eaed] transition-all">Edit Pillar</button>
                      <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-transparent border border-white text-white hover:bg-white/10 transition-all">Manage Courses</button>
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
        <div className="animate-[fadeIn_0.5s_ease-in]">
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
            <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">Instructor Dashboard</h1>
            <p className="text-[#8b95a5] text-base mt-2">Student Mentoring & Progress Management</p>
          </div>

          {/* Instructor Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 animate-[fadeIn_0.5s_ease-in]">
            <div className="bg-gradient-to-br from-[#4A90E2] to-[#357ABD] text-white p-6 rounded-lg text-center shadow-md">
              <h3 className="text-[2.5rem] m-0">247</h3>
              <p className="mt-2 opacity-90">Active Students</p>
            </div>
            <div className="bg-gradient-to-br from-[#2ECC71] to-[#27AE60] text-white p-6 rounded-lg text-center shadow-md">
              <h3 className="text-[2.5rem] m-0">89</h3>
              <p className="mt-2 opacity-90">Certified Graduates</p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#C49A2E] text-white p-6 rounded-lg text-center shadow-md">
              <h3 className="text-[2.5rem] m-0">$42M+</h3>
              <p className="mt-2 opacity-90">Total Student Savings</p>
            </div>
            <div className="bg-gradient-to-br from-[#E74C3C] to-[#C0392B] text-white p-6 rounded-lg text-center shadow-md">
              <h3 className="text-[2.5rem] m-0">18</h3>
              <p className="mt-2 opacity-90">Students Need Attention</p>
            </div>
          </div>

          {/* Student Progress Overview */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">📊 Student Progress Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-[#e8eaed] p-6 rounded-lg">
                <h4 className="text-[#1a2332] font-semibold">Current Week Distribution</h4>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">Week 1-3:</span>
                  <span className="text-[#4a90e2] font-bold">89 students</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">Week 4-6:</span>
                  <span className="text-[#4a90e2] font-bold">67 students</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">Week 7-9:</span>
                  <span className="text-[#4a90e2] font-bold">54 students</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">Week 10-12:</span>
                  <span className="text-[#4a90e2] font-bold">37 students</span>
                </div>
              </div>
              <div className="bg-[#e8eaed] p-6 rounded-lg">
                <h4 className="text-[#1a2332] font-semibold">Completion Rates</h4>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">Average Quiz Score:</span>
                  <span className="text-[#4a90e2] font-bold">88%</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">Course Completion:</span>
                  <span className="text-[#4a90e2] font-bold">76%</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">Implementation Rate:</span>
                  <span className="text-[#4a90e2] font-bold">84%</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#c0c5ce]">
                  <span className="font-semibold text-[#1a2332]">Certification Rate:</span>
                  <span className="text-[#4a90e2] font-bold">72%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Students Requiring Attention */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">⚠️ Students Requiring Attention</h2>
            <div className="bg-white border-l-4 border-[#4a90e2] p-4 mb-4 rounded shadow-sm mt-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <h4 className="m-0 text-[#1a2332] font-semibold">Dr. James Williams</h4>
                  <p className="my-2 text-[#8b95a5]">Week 3 - No activity in 3 days</p>
                  <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#dc3545] text-white">Needs Attention</span>
                </div>
                <div className="flex gap-2">
                  <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Send Message</button>
                  <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Schedule Call</button>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-[#e8eaed] h-6 rounded-xl overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#28a745] to-[#d4af37] rounded-xl flex items-center justify-center text-white font-semibold text-[0.85rem]" style={{ width: '18%' }}>18% Complete</div>
                </div>
                <p className="mt-2 text-[0.9rem] text-[#2c3e50]">Last quiz score: 76% | 2 modules incomplete</p>
              </div>
            </div>
            <div className="bg-white border-l-4 border-[#4a90e2] p-4 mb-4 rounded shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <h4 className="m-0 text-[#1a2332] font-semibold">Dr. Michael Johnson</h4>
                  <p className="my-2 text-[#8b95a5]">Week 5 - Behind schedule</p>
                  <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#ffc107] text-[#1a2332]">At Risk</span>
                </div>
                <div className="flex gap-2">
                  <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Send Message</button>
                  <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Schedule Call</button>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-[#e8eaed] h-6 rounded-xl overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#28a745] to-[#d4af37] rounded-xl flex items-center justify-center text-white font-semibold text-[0.85rem]" style={{ width: '42%' }}>42% Complete</div>
                </div>
                <p className="mt-2 text-[0.9rem] text-[#2c3e50]">Last quiz score: 88% | Has questions pending</p>
              </div>
            </div>
          </div>

          {/* Student Questions */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">💬 Recent Student Questions</h2>
            <div className="bg-white border-l-4 border-[#4a90e2] p-4 mb-4 rounded shadow-sm mt-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <strong className="text-[#1a2332]">Dr. Michael Johnson</strong> (Week 5)
                  <p className="my-2 text-[#2c3e50]">"Can you explain the difference between §7702 and §831(b) for practice structure?"</p>
                  <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#4a90e2] text-white">2 hours ago</span>
                </div>
                <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Respond</button>
              </div>
            </div>
            <div className="bg-white border-l-4 border-[#4a90e2] p-4 mb-4 rounded shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <strong className="text-[#1a2332]">Dr. Lisa Martinez</strong> (Week 8)
                  <p className="my-2 text-[#2c3e50]">"What's the typical timeline for completing a cost segregation study?"</p>
                  <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#4a90e2] text-white">5 hours ago</span>
                </div>
                <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Respond</button>
              </div>
            </div>
            <div className="bg-white border-l-4 border-[#4a90e2] p-4 mb-4 rounded shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <strong className="text-[#1a2332]">Dr. Emily Rodriguez</strong> (Week 10)
                  <p className="my-2 text-[#2c3e50]">"Need guidance on structuring my first 1031 exchange for real estate investment."</p>
                  <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#4a90e2] text-white">1 day ago</span>
                </div>
                <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Respond</button>
              </div>
            </div>
            <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all mt-6">View All Questions (47)</button>
          </div>

          {/* Live Sessions */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">🎥 Upcoming Live Sessions</h2>
            <div className="bg-[#e8eaed] p-6 rounded-lg mt-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="m-0 text-[#1a2332] font-semibold">Monthly "Architect's Q&A" Session</h4>
                  <p className="my-2 text-[#2c3e50]">First Thursday of Month, 7:00 PM EST</p>
                  <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#28a745] text-white">67 students registered</span>
                </div>
                <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Join Session</button>
              </div>
            </div>
            <div className="bg-[#e8eaed] p-6 rounded-lg mt-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="m-0 text-[#1a2332] font-semibold">Advanced Tax Strategies Workshop</h4>
                  <p className="my-2 text-[#2c3e50]">Saturday, 2:00 PM EST</p>
                  <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#28a745] text-white">143 students registered</span>
                </div>
                <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Prepare Session</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Schedule New Session</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">View Session History</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Upload Recording</button>
            </div>
          </div>

          {/* Quarterly Consultations */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">📅 Quarterly Consultations</h2>
            <div className="bg-[#e8eaed] p-6 rounded-lg mt-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="m-0 text-[#1a2332] font-semibold">Scheduled Q1 2025 Consultations</h4>
                  <p className="my-2 text-[#2c3e50]">Direct one-on-one strategy review sessions</p>
                  <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#4a90e2] text-white">34 consultations scheduled</span>
                </div>
                <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">View Schedule</button>
              </div>
            </div>
            <div className="bg-[#e8eaed] p-6 rounded-lg mt-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="m-0 text-[#1a2332] font-semibold">Pending Consultation Requests</h4>
                  <p className="my-2 text-[#2c3e50]">Students requesting quarterly review</p>
                  <span className="inline-block py-1 px-3 rounded-xl text-[0.85rem] font-semibold bg-[#ffc107] text-[#1a2332]">12 pending requests</span>
                </div>
                <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Review Requests</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Manage Consultation Calendar</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Send Consultation Invites</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">View Past Consultations</button>
            </div>
          </div>

          {/* Certification Review */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">🏆 Certification Review Queue</h2>
            <div className="bg-white border-l-4 border-[#4a90e2] p-4 mb-4 rounded shadow-sm mt-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <h4 className="m-0 text-[#1a2332] font-semibold">Dr. Sarah Chen</h4>
                  <p className="my-2 text-[#2c3e50]">Completed all 12 weeks | Quiz average: 92%</p>
                  <p className="my-2 text-[0.9rem] text-[#8b95a5]">
                    ✓ All modules complete | ✓ Final assessment passed | ✓ Implementation case study submitted
                  </p>
                </div>
                <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Review & Certify</button>
              </div>
            </div>
            <div className="bg-white border-l-4 border-[#4a90e2] p-4 mb-4 rounded shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <h4 className="m-0 text-[#1a2332] font-semibold">Dr. Emily Rodriguez</h4>
                  <p className="my-2 text-[#2c3e50]">Completed all 12 weeks | Quiz average: 91%</p>
                  <p className="my-2 text-[0.9rem] text-[#8b95a5]">
                    ✓ All modules complete | ✓ Final assessment passed | ✓ Implementation case study submitted
                  </p>
                </div>
                <button className="py-2 px-4 rounded-md text-[0.875rem] font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Review & Certify</button>
              </div>
            </div>
            <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all mt-6">View All Pending (12)</button>
          </div>

          {/* Success Stories */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">⭐ Recent Success Stories</h2>
            <ul className="list-none p-0 mt-6">
              <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold"><strong>Dr. Sarah Chen</strong> - Achieved $127K in annual tax savings through Defined Benefit Plan implementation</li>
              <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold"><strong>Dr. James Williams</strong> - Successfully structured §831(b) captive insurance for asset protection</li>
              <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold"><strong>Dr. Emily Rodriguez</strong> - Completed first 1031 exchange, deferring $85K in capital gains</li>
              <li className="py-3 pl-6 relative border-b-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold"><strong>Dr. Michael Thompson</strong> - Implemented cost segregation study, accelerating $340K in depreciation</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Share Success Story</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Request Testimonial</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">View All Stories</button>
            </div>
          </div>

          {/* Instructor Actions */}
          <div className="bg-white rounded-lg p-8 mb-6 shadow-md transition-all duration-300 mt-8">
            <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">⚙️ Instructor Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <button className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Send Announcement to All Students</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Schedule New Live Session</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Update Course Content</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">View Student Analytics</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Message Students at Risk</button>
              <button className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all">Generate Progress Reports</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Course Modal */}
      {showAddCourseModal && (
        <div className="fixed z-[10000] left-0 top-0 w-full h-full overflow-auto bg-black/60 flex items-start justify-center p-8" onClick={() => setShowAddCourseModal(false)}>
          <div className="bg-white rounded-lg w-full max-w-[700px] shadow-xl max-h-[90vh] overflow-y-auto animate-[slideDown_0.3s_ease]" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center py-6 px-8 border-b-2 border-[#e8eaed] bg-gradient-to-br from-[#1a2332] to-[#2d3e50] text-white rounded-t-lg">
              <h2 className="m-0 text-[1.5rem] font-semibold">➕ Add New Course</h2>
              <button className="text-white text-[2rem] font-bold cursor-pointer leading-none bg-transparent border-none hover:text-[#d4af37] hover:scale-110 transition-all" onClick={() => setShowAddCourseModal(false)}>&times;</button>
            </div>
            <form onSubmit={handleAddCourse}>
              <div className="p-8">
                <div className="mb-6">
                  <label className="block mb-2 text-[#1a2332] font-semibold">Course Title *</label>
                  <input type="text" className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base focus:outline-none focus:border-[#4a90e2] transition-colors" placeholder="e.g., Advanced Tax Planning Strategies" required />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-[#1a2332] font-semibold">Course Code</label>
                  <input type="text" className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base focus:outline-none focus:border-[#4a90e2] transition-colors" placeholder="e.g., TAX-401" />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-[#1a2332] font-semibold">Select Pillar *</label>
                  <select className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base focus:outline-none focus:border-[#4a90e2] transition-colors" required>
                    <option value="">Choose a pillar...</option>
                    <option value="1">📘 Pillar 1: Business Foundation</option>
                    <option value="2">💰 Pillar 2: Personal Tax Optimization</option>
                    <option value="3">🏦 Pillar 3: Retirement & Investment</option>
                    <option value="4">🏛️ Pillar 4: Legacy & Advanced Strategies</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-[#1a2332] font-semibold">Week Number</label>
                  <select className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base focus:outline-none focus:border-[#4a90e2] transition-colors">
                    <option value="">Select week...</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>Week {i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-[#1a2332] font-semibold">Course Description *</label>
                  <textarea className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base min-h-[100px] resize-y focus:outline-none focus:border-[#4a90e2] transition-colors" rows="4" placeholder="Describe what students will learn..." required></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-6">
                    <label className="block mb-2 text-[#1a2332] font-semibold">Potential Savings</label>
                    <input type="text" className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base focus:outline-none focus:border-[#4a90e2] transition-colors" placeholder="e.g., $30K-$100K annually" />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-[#1a2332] font-semibold">Duration (minutes)</label>
                    <input type="number" className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base focus:outline-none focus:border-[#4a90e2] transition-colors" placeholder="e.g., 45" min="1" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-[#1a2332] font-semibold">Course Status *</label>
                  <select className="w-full py-3 px-4 border-2 border-[#e8eaed] rounded-md text-base focus:outline-none focus:border-[#4a90e2] transition-colors" required>
                    <option value="draft">Draft - Not visible to students</option>
                    <option value="active">Active - Available to students</option>
                    <option value="locked">Locked - Visible but not accessible</option>
                  </select>
                </div>
              </div>
              <div className="py-4 px-8 border-t-2 border-[#e8eaed] flex flex-col sm:flex-row justify-end gap-4 bg-[#e8eaed] rounded-b-lg">
                <button type="button" className="py-3 px-6 rounded-md font-semibold bg-[#c0c5ce] text-[#1a2332] hover:bg-[#8b95a5] transition-all" onClick={() => setShowAddCourseModal(false)}>Cancel</button>
                <button type="submit" className="py-3 px-6 rounded-md font-semibold bg-[#1a2332] text-white hover:bg-[#2d3e50] transition-all">Create Course</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin
