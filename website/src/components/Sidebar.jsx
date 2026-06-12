import { NavLink } from 'react-router-dom'

const phases = [
  { path: '/', label: 'Overview', icon: '🏠' },
  { path: '/phase-1', label: '1. Discovery', icon: '🔍' },
  { path: '/phase-2', label: '2. Configuration', icon: '⚙️' },
  { path: '/phase-3', label: '3. Pilot', icon: '🧪' },
  { path: '/phase-4', label: '4. Customization', icon: '🎨' },
  { path: '/phase-5', label: '5. Rollout', icon: '🚀' },
  { path: '/phase-6', label: '6. Governance', icon: '📊' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>GitHub Copilot</h2>
        <p>Enterprise Enablement</p>
      </div>
      <nav className="sidebar-nav">
        {phases.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">{icon}</span>
            <span className="nav-label">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
