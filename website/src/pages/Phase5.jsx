import PhaseHeader from '../components/PhaseHeader'
import PhaseNavigation from '../components/PhaseNavigation'

export default function Phase5() {
  return (
    <div className="page">
      <PhaseHeader
        number={5}
        title="Broad Rollout"
        timeline="Weeks 10–16"
        description="Scale from pilot to full organization with champion networks, phased waves, and contractor enablement."
      />

      <section className="content-section">
        <h2>What You'll Do</h2>
        <p>
          With a successful pilot and customizations in place, expand Copilot to the entire engineering org
          in controlled waves. Champions drive peer adoption and surface issues before they become widespread.
        </p>
      </section>

      <section className="content-section">
        <h2>Step-by-Step Process</h2>

        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Build Champion Network</h3>
            <p>Recruit 1 champion per 10–15 developers:</p>
            <table className="content-table">
              <thead>
                <tr><th>Wave</th><th>Champions</th><th>Coverage</th></tr>
              </thead>
              <tbody>
                <tr><td>Wave 1 (Backend + Frontend)</td><td>4</td><td>Java & TypeScript teams</td></tr>
                <tr><td>Wave 2 (Data/ML)</td><td>3</td><td>Python & data teams</td></tr>
                <tr><td>Wave 3 (External)</td><td>2</td><td>Vendor liaison + integration lead</td></tr>
              </tbody>
            </table>
            <p><strong>Champion responsibilities:</strong> Weekly tip sharing, office hours, escalate blockers, collect feedback.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Wave 1: Backend + Frontend (Weeks 10–12)</h3>
            <ul>
              <li>Add 60 developers to <code>SG-Copilot-Wave1</code> IdP group</li>
              <li>Deliver training (reuse pilot materials + lessons learned)</li>
              <li>Champions run team-specific onboarding</li>
              <li>Target: &gt;80% active users within 2 weeks</li>
            </ul>
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Wave 2: Data/ML + Remaining (Weeks 12–14)</h3>
            <ul>
              <li>Add 70 developers — total 150 internal seats active</li>
              <li>Python/data-specific training (notebooks, pipelines)</li>
              <li>Org-wide satisfaction survey at Week 13</li>
            </ul>
          </div>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Wave 3: External Contractors (Weeks 14–16)</h3>
            <div className="callout callout-warning">
              <strong>Pre-requisite:</strong> Legal IP review must be complete and approved before enabling for contractors.
            </div>
            <ul>
              <li>Get contractor companies to sign updated AI tool agreements</li>
              <li>Create <code>SG-Copilot-External</code> IdP group with lower premium request limit</li>
              <li>Enable Copilot scoped to permitted repositories only</li>
              <li>Verify content exclusions block access to internal-only repos</li>
              <li>Deliver condensed training to external teams</li>
            </ul>
          </div>
        </div>

        <div className="step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Publish Onboarding Guide</h3>
            <ul>
              <li>Developer-facing "Welcome to Copilot" doc (install → authenticate → first use)</li>
              <li>Add to new-hire documentation</li>
              <li>Add to developer environment bootstrap scripts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Key Artifacts</h2>
        <ul>
          <li>Champion roster with assigned teams</li>
          <li>Rollout schedule with dates and seat counts</li>
          <li>Developer onboarding guide published to internal wiki</li>
          <li>External contractor agreement addendum (if applicable)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>References</h2>
        <ul>
          <li><a href="https://docs.github.com/en/copilot/rolling-out-github-copilot-at-scale/driving-copilot-adoption-in-your-company" target="_blank" rel="noopener">Driving Copilot Adoption</a></li>
          <li><a href="https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-in-your-organization" target="_blank" rel="noopener">Managing Copilot Seat Access</a></li>
          <li><a href="https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot" target="_blank" rel="noopener">Getting Started with Copilot</a></li>
          <li><a href="https://innersourcecommons.org/learn/patterns/" target="_blank" rel="noopener">Inner Source Patterns</a></li>
        </ul>
      </section>

      <PhaseNavigation
        prevPath="/phase-4"
        prevLabel="Phase 4: Customization"
        nextPath="/phase-6"
        nextLabel="Phase 6: Governance"
      />
    </div>
  )
}
