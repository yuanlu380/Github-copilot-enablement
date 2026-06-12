import PhaseHeader from '../components/PhaseHeader'
import PhaseNavigation from '../components/PhaseNavigation'

export default function Phase2() {
  return (
    <div className="page">
      <PhaseHeader
        number={2}
        title="Configuration"
        timeline="Weeks 3–5"
        description="Set up org policies, content exclusions, SCIM-based seat assignment, and budget controls."
      />

      <section className="content-section">
        <h2>What You'll Do</h2>
        <p>
          With compliance sign-off in hand, configure GitHub Copilot at the organization level.
          This includes policy settings, content exclusions for sensitive repos, and automated seat management via SCIM.
        </p>
      </section>

      <section className="content-section">
        <h2>Step-by-Step Process</h2>

        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Set Org Policies</h3>
            <p>Navigate to <code>GitHub.com → Organization → Settings → Copilot → Policies</code></p>
            <table className="content-table">
              <thead>
                <tr><th>Setting</th><th>Recommended Value</th><th>Rationale</th></tr>
              </thead>
              <tbody>
                <tr><td>Copilot access</td><td>Selected teams only</td><td>Phased rollout control</td></tr>
                <tr><td>Public code filter</td><td>Block</td><td>Reduces IP/license risk</td></tr>
                <tr><td>Copilot Chat in IDE</td><td>Enabled</td><td>Core value driver</td></tr>
                <tr><td>Copilot in CLI</td><td>Disabled (initially)</td><td>Reduce attack surface</td></tr>
                <tr><td>Copilot Extensions</td><td>Disabled (initially)</td><td>Review individually before enabling</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Configure Content Exclusions</h3>
            <p>Block Copilot from accessing sensitive files and repositories:</p>
            <pre className="code-block">{`# Organization Settings → Copilot → Content Exclusions

# Exclude entire repos
- repository: "org/itar-classified-*"
- repository: "org/sox-financial-*"

# Exclude sensitive paths
- paths:
    - "**/*.env"
    - "**/*.pem"  
    - "**/secrets/**"
    - "**/credentials/**"

# Exclude paths in specific repos
- repository: "org/payment-service"
  paths:
    - "src/pci/**"
    - "config/production/**"`}</pre>
            <div className="callout callout-warning">
              <strong>Verify exclusions work:</strong> Open an excluded file in VS Code — Copilot should show "Content excluded" in the status bar.
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Set Up SCIM Seat Assignment</h3>
            <p>Automate seat management by mapping IdP groups to GitHub Teams:</p>
            <pre className="code-block">{`IdP Group (Entra ID)        → GitHub Team           → Copilot Seat
────────────────────────      ──────────────────       ─────────────
"SG-Copilot-Pilot"         → @org/copilot-pilot    → Auto-assigned
"SG-Copilot-Wave1"         → @org/copilot-wave1    → Auto-assigned
"SG-Copilot-Wave2"         → @org/copilot-wave2    → Auto-assigned`}</pre>
            <p>Test: Add one user to the pilot group → verify they receive a seat within minutes.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Set Premium Request Limits</h3>
            <p>Control token/cost usage per member:</p>
            <table className="content-table">
              <thead>
                <tr><th>Group</th><th>Limit</th><th>Rationale</th></tr>
              </thead>
              <tbody>
                <tr><td>Champions / DevEx</td><td>Unlimited or high</td><td>Need full access to drive adoption</td></tr>
                <tr><td>Internal developers</td><td>Org default</td><td>Standard allocation</td></tr>
                <tr><td>External contractors</td><td>Lower cap or disabled</td><td>Cost control + reduced risk</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Get Budget Approval</h3>
            <p>Present licensing costs to finance:</p>
            <table className="content-table">
              <thead>
                <tr><th>Phase</th><th>Seats</th><th>Monthly</th><th>Annual</th></tr>
              </thead>
              <tbody>
                <tr><td>Pilot</td><td>20</td><td>$380</td><td>$4,560</td></tr>
                <tr><td>Wave 1 + 2</td><td>150</td><td>$2,850</td><td>$34,200</td></tr>
                <tr><td>Full (with contractors)</td><td>250</td><td>$4,750</td><td>$57,000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Key Artifacts</h2>
        <ul>
          <li>Org policy settings documented with rationale</li>
          <li>Content exclusion list with owners and review dates</li>
          <li>SCIM group mappings configured and tested</li>
          <li>Budget approval from finance</li>
        </ul>
      </section>

      <PhaseNavigation
        prevPath="/phase-1"
        prevLabel="Phase 1: Discovery"
        nextPath="/phase-3"
        nextLabel="Phase 3: Pilot"
      />
    </div>
  )
}
