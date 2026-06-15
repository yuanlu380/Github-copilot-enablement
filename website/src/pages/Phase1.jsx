import PhaseHeader from '../components/PhaseHeader'
import PhaseNavigation from '../components/PhaseNavigation'

export default function Phase1() {
  return (
    <div className="page">
      <PhaseHeader
        number={1}
        title="Discovery & Compliance"
        timeline="Weeks 1–3"
        description="Identify stakeholders, assess compliance requirements, and get organizational sign-off before enabling Copilot."
      />

      <section className="content-section">
        <h2>What You'll Do</h2>
        <p>
          Before enabling any AI coding tools, you need buy-in from Security, Legal, and Engineering leadership.
          This phase ensures all compliance concerns are addressed upfront and prevents costly rollbacks later.
        </p>
      </section>

      <section className="content-section">
        <h2>💡 Try This Prompt</h2>
        <div className="prompt-example">
          <p className="prompt-label">Ask the agent:</p>
          <pre className="code-block">{`We're deploying GitHub Copilot for a [industry] company with:
- Developer headcount: [X internal, Y contractors]
- Compliance frameworks: [SOX, HIPAA, ITAR, PCI-DSS, etc.]
- Primary languages: [Java, Python, TypeScript, etc.]
- Code hosting: [GitHub Enterprise Cloud/Server]
- External users: [describe contractor/partner access]

Generate a compliance assessment, stakeholder RACI matrix,
and identify which repos need content exclusions.`}</pre>
        </div>
      </section>

      <section className="content-section">
        <h2>Step-by-Step Process</h2>

        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Identify Stakeholders</h3>
            <p>Map out who needs to be involved in the decision:</p>
            <ul>
              <li><strong>CISO / Security</strong> — approves AI usage policy, reviews data handling</li>
              <li><strong>VP Engineering</strong> — accountable for rollout success</li>
              <li><strong>Legal / Procurement</strong> — IP ownership, contractor agreements</li>
              <li><strong>DevEx / Platform Lead</strong> — responsible for implementation</li>
              <li><strong>External Vendor PM</strong> — if contractors will use Copilot</li>
            </ul>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Complete RACI Matrix</h3>
            <p>Assign Responsible, Accountable, Consulted, and Informed roles for each activity:</p>
            <table className="content-table">
              <thead>
                <tr><th>Activity</th><th>Eng Lead</th><th>Security</th><th>Legal</th><th>IT Admin</th></tr>
              </thead>
              <tbody>
                <tr><td>License procurement</td><td>I</td><td>I</td><td>C</td><td>I</td></tr>
                <tr><td>AI usage policy approval</td><td>I</td><td>R</td><td>R</td><td>I</td></tr>
                <tr><td>Content exclusion rules</td><td>R</td><td>A</td><td>C</td><td>I</td></tr>
                <tr><td>Pilot team selection</td><td>R</td><td>I</td><td>—</td><td>I</td></tr>
                <tr><td>Seat assignment</td><td>C</td><td>I</td><td>—</td><td>R</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Compliance Assessment</h3>
            <p>Evaluate which regulatory frameworks apply and their impact on Copilot configuration:</p>
            <table className="content-table">
              <thead>
                <tr><th>Framework</th><th>Key Concern</th><th>Action Required</th></tr>
              </thead>
              <tbody>
                <tr><td>SOX</td><td>Change management for AI-generated code</td><td>Confirm PR review satisfies audit controls</td></tr>
                <tr><td>SOC 2</td><td>Data handling for partner data</td><td>Verify Copilot Business doesn't retain prompts</td></tr>
                <tr><td>HIPAA</td><td>PHI in code repositories</td><td>Content exclusions on PHI repos</td></tr>
                <tr><td>ITAR</td><td>Export-controlled technical data</td><td>Block Copilot entirely on ITAR repos</td></tr>
                <tr><td>PCI-DSS</td><td>Cardholder data environments</td><td>Exclude payment processing repos</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Tooling Audit</h3>
            <p>Document your current development environment to confirm Copilot compatibility:</p>
            <ul>
              <li>Primary IDEs (VS Code, IntelliJ, Visual Studio, Neovim)</li>
              <li>GitHub plan (Enterprise Cloud required for org-level Copilot)</li>
              <li>SSO/SCIM configuration status</li>
              <li>Existing AI tools in use (for migration/consolidation)</li>
              <li>Primary languages and frameworks</li>
            </ul>
          </div>
        </div>

        <div className="step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Get Sign-Off</h3>
            <p>Produce a signed decision document stating:</p>
            <div className="callout">
              "We approve GitHub Copilot for internal developers with repositories [X, Y, Z] excluded.
              Contractor access deferred pending IP review."
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Key Artifacts</h2>
        <ul>
          <li>Compliance checklist (signed by Security + Legal)</li>
          <li>Stakeholder RACI matrix</li>
          <li>Tooling profile document</li>
          <li>Decision document with exclusions listed</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>References</h2>
        <ul>
          <li><a href="https://resources.github.com/copilot-trust-center/" target="_blank" rel="noopener">GitHub Copilot Trust Center</a></li>
          <li><a href="https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-business" target="_blank" rel="noopener">GitHub Copilot Business — Privacy & Data</a></li>
          <li><a href="https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot" target="_blank" rel="noopener">Content Exclusions Documentation</a></li>
          <li><a href="https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise" target="_blank" rel="noopener">GitHub Copilot Audit Log Events</a></li>
          <li><a href="https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise" target="_blank" rel="noopener">GitHub Enterprise Roles & Permissions</a></li>
        </ul>
      </section>

      <PhaseNavigation
        prevPath="/"
        prevLabel="Overview"
        nextPath="/phase-2"
        nextLabel="Phase 2: Configuration"
      />
    </div>
  )
}
