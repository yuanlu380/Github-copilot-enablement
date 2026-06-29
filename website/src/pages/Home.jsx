import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <div className="hero">
        <h1>GitHub Copilot Enterprise Enablement</h1>
        <p className="hero-subtitle">
          A step-by-step guide to deploying GitHub Copilot across your organization — 
          from discovery through governance.
        </p>
        <button className="nav-btn nav-btn-next hero-cta" onClick={() => navigate('/phase-1')}>
          Get Started →
        </button>
      </div>

      <section className="overview-section">
        <h2>What This Guide Covers</h2>
        <p>
          This agent guides enterprise customers through the full lifecycle of adopting GitHub Copilot.
          It provides templates, checklists, and action items for each phase of deployment.
        </p>
      </section>

      <section className="overview-section">
        <h2>The 6 Phases</h2>
        <div className="phase-cards">
          <PhaseCard number={1} title="Discovery & Compliance" description="Identify stakeholders, assess compliance requirements, audit tooling" path="/phase-1" />
          <PhaseCard number={2} title="Configuration" description="Org policies, content exclusions, team structure, branch protection, network/proxy, permissions, budgets" path="/phase-2" />
          <PhaseCard number={3} title="Pilot" description="Select teams, capture baselines, deliver training, run 4-week trial" path="/phase-3" />
          <PhaseCard number={4} title="Customization" description="Create custom instructions, prompt files, and agent definitions" path="/phase-4" />
          <PhaseCard number={5} title="Rollout" description="Champion network, phased waves, contractor enablement, troubleshooting" path="/phase-5" />
          <PhaseCard number={6} title="Governance" description="ROI reporting, policy reviews, continuous improvement" path="/phase-6" />
        </div>
      </section>

      <section className="overview-section">
        <h2>Who Should Use This</h2>
        <ul>
          <li><strong>CSAs / Customer Success Architects</strong> — guiding enterprise customers through deployment</li>
          <li><strong>DevEx / Platform teams</strong> — implementing Copilot org-wide</li>
          <li><strong>Engineering leaders</strong> — planning rollout strategy and measuring ROI</li>
          <li><strong>Security / Compliance teams</strong> — ensuring AI tools meet regulatory requirements</li>
        </ul>
      </section>
    </div>
  )
}

function PhaseCard({ number, title, description, path }) {
  const navigate = useNavigate()
  return (
    <div className="phase-card" onClick={() => navigate(path)}>
      <div className="phase-card-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
