'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Total Contacts', value: '2,847', change: '+12.5%', positive: true },
    { label: 'Active Deals', value: '89', change: '+8.2%', positive: true },
    { label: 'Revenue', value: '$124.5K', change: '+23.1%', positive: true },
    { label: 'Conversion Rate', value: '3.2%', change: '-0.4%', positive: false },
  ]

  const recentContacts = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@company.com', company: 'Tech Corp', status: 'Active', value: '$12.5K' },
    { id: 2, name: 'Mike Chen', email: 'mike.c@startup.io', company: 'StartupXYZ', status: 'New', value: '$8.2K' },
    { id: 3, name: 'Emily Rodriguez', email: 'emily.r@business.com', company: 'Business Inc', status: 'Active', value: '$25.3K' },
    { id: 4, name: 'James Wilson', email: 'james.w@enterprise.net', company: 'Enterprise Co', status: 'Pending', value: '$45.8K' },
    { id: 5, name: 'Lisa Anderson', email: 'lisa.a@solutions.com', company: 'Solutions Ltd', status: 'Active', value: '$18.9K' },
  ]

  const activities = [
    { icon: '📧', text: 'New email from Sarah Johnson', time: '5 minutes ago', color: 'blue' },
    { icon: '✅', text: 'Deal closed with Tech Corp', time: '2 hours ago', color: 'green' },
    { icon: '👤', text: 'New contact added: Mike Chen', time: '4 hours ago', color: 'purple' },
    { icon: '📞', text: 'Call scheduled with Emily Rodriguez', time: '1 day ago', color: 'blue' },
    { icon: '💰', text: 'Payment received from Business Inc', time: '2 days ago', color: 'green' },
  ]

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, string> = {
      'Active': 'badge-success',
      'New': 'badge-info',
      'Pending': 'badge-warning',
      'Closed': 'badge-danger',
    }
    return statusMap[status] || 'badge-info'
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">CRM</div>
        <nav>
          <div
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span>📊</span> Overview
          </div>
          <div
            className={`nav-item ${activeTab === 'contacts' ? 'active' : ''}`}
            onClick={() => setActiveTab('contacts')}
          >
            <span>👥</span> Contacts
          </div>
          <div
            className={`nav-item ${activeTab === 'deals' ? 'active' : ''}`}
            onClick={() => setActiveTab('deals')}
          >
            <span>💼</span> Deals
          </div>
          <div
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <span>📈</span> Analytics
          </div>
          <div
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <span>⚙️</span> Settings
          </div>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <button className="btn btn-primary">+ Add Contact</button>
        </header>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.change} from last month
              </div>
            </div>
          ))}
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2 className="section-title">Recent Contacts</h2>
            <button className="btn btn-primary">View All</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Contact</th>
                <th>Company</th>
                <th>Status</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {recentContacts.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div className="avatar">{getInitials(contact.name)}</div>
                      <div>
                        <div style={{ fontWeight: 600, color: '#1e293b' }}>{contact.name}</div>
                        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{contact.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{contact.company}</td>
                  <td>
                    <span className={`badge ${getStatusBadge(contact.status)}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{contact.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2 className="section-title">Recent Activity</h2>
          </div>
          <div>
            {activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-icon ${activity.color}`}>
                  {activity.icon}
                </div>
                <div className="activity-content">
                  <div className="activity-text">{activity.text}</div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
