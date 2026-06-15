import PhaseHeader from '../components/PhaseHeader'
import PhaseNavigation from '../components/PhaseNavigation'

export default function Phase6() {
  return (
    <div className="page">
      <PhaseHeader
        number={6}
        title="Governance & ROI"
        timeline="Ongoing from Week 12+"
        description="Establish ongoing reporting, policy reviews, and continuous improvement to sustain long-term value."
      />

      <section className="content-section">
        <h2>What You'll Do</h2>
        <p>
          Copilot deployment isn't "set and forget." This phase establishes the cadence for measuring ROI,
          reviewing policies, reclaiming unused seats, and adapting to new Copilot features as they ship.
        </p>
      </section>

      <section className="content-section">
        <h2>💡 Try This Prompt</h2>
        <div className="prompt-example">
          <p className="prompt-label">Ask the agent:</p>
          <pre className="code-block">{`We have [X] Copilot seats deployed.
Our developer fully-loaded cost is ~$[Y]/year.
Pilot survey showed [Z] hours saved per dev per week.

Generate:
1. An ROI calculation to present to leadership
2. A monthly reporting template with key metrics
3. A quarterly policy review schedule with owners
4. A seat reclamation process for inactive users`}</pre>
        </div>
      </section>

      <section className="content-section">
        <h2>Step-by-Step Process</h2>

        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Calculate & Present ROI</h3>
            <pre className="code-block">{`Developers with seats:                 150
Average fully-loaded annual cost:      $175,000
Productivity improvement:              20% (from survey data)
Annual value:  150 × $175,000 × 0.20 = $5,250,000

Annual Copilot cost:  150 × $19/mo × 12 = $34,200

Net annual ROI:                        $5,215,800
ROI multiple:                          ~153x`}</pre>
            <p>Present this to VP Engineering + Finance with supporting survey data.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Set Up Monthly Reporting</h3>
            <table className="content-table">
              <thead>
                <tr><th>Metric</th><th>Source</th><th>Target</th></tr>
              </thead>
              <tbody>
                <tr><td>Active seats / total seats</td><td>Copilot Admin Dashboard</td><td>&gt;80%</td></tr>
                <tr><td>Acceptance rate</td><td>Copilot Admin Dashboard</td><td>&gt;25%</td></tr>
                <tr><td>Chat interactions / user / day</td><td>Copilot Admin Dashboard</td><td>&gt;3</td></tr>
                <tr><td>Premium request consumption</td><td>Billing dashboard</td><td>Within budget</td></tr>
                <tr><td>Developer satisfaction</td><td>Quarterly survey</td><td>≥7/10</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Establish Policy Review Cadence</h3>
            <table className="content-table">
              <thead>
                <tr><th>Review</th><th>Frequency</th><th>Owner</th></tr>
              </thead>
              <tbody>
                <tr><td>Usage & adoption metrics</td><td>Monthly</td><td>DevEx lead</td></tr>
                <tr><td>Content exclusion audit</td><td>Quarterly</td><td>Security + Legal</td></tr>
                <tr><td>Org policy settings</td><td>Quarterly</td><td>CISO + VP Eng</td></tr>
                <tr><td>SOX compliance check</td><td>Semi-annual</td><td>Compliance</td></tr>
                <tr><td>Contractor IP/access review</td><td>Annual</td><td>Legal</td></tr>
                <tr><td>Premium request budgets</td><td>Quarterly</td><td>Finance + DevEx</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Seat Reclamation</h3>
            <ul>
              <li>Define "inactive" threshold (e.g., 30 days no usage)</li>
              <li>Run monthly inactive seat report</li>
              <li>Process: notify user → 7-day grace period → reclaim seat</li>
              <li>Reassign to waitlisted developers</li>
            </ul>
          </div>
        </div>

        <div className="step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Continuous Improvement</h3>
            <ul>
              <li>Quarterly champion feedback → update custom instructions</li>
              <li>Review new Copilot features as released → decide enable/disable</li>
              <li>Annual renewal: adjust seat count, evaluate Business → Enterprise upgrade</li>
              <li>Track industry benchmarks (DORA metrics) for long-term trends</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Key Artifacts</h2>
      <section className="content-section">
        <h2>Key Artifacts</h2>
        <ul>
          <li>Monthly usage report template</li>
          <li>Quarterly ROI update for leadership</li>
          <li>Policy review calendar with owners</li>
          <li>Exception/change request process</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>References</h2>
        <ul>
          <li><a href="https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization" target="_blank" rel="noopener">Reviewing Copilot Usage Data</a></li>
          <li><a href="https://docs.github.com/en/rest/copilot/copilot-usage" target="_blank" rel="noopener">Copilot Usage API</a></li>
          <li><a href="https://docs.github.com/en/rest/copilot/copilot-metrics" target="_blank" rel="noopener">Copilot Metrics API</a></li>
          <li><a href="https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise" target="_blank" rel="noopener">GitHub Audit Log</a></li>
          <li><a href="https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/" target="_blank" rel="noopener">Research: Copilot Productivity Impact</a></li>
          <li><a href="https://dora.dev/guides/dora-metrics-four-keys/" target="_blank" rel="noopener">DORA Metrics</a></li>
        </ul>
      </section>

      <section className="content-section complete-section">
        <h2>🎉 Deployment Complete</h2>
        <p>
          You've successfully deployed GitHub Copilot from discovery through governance.
          Continue monitoring metrics, iterating on customizations, and adapting policies
          as your organization's needs evolve.
        </p>
      </section>

      <PhaseNavigation
        prevPath="/phase-5"
        prevLabel="Phase 5: Rollout"
        nextPath="/"
        nextLabel="Back to Overview"
      />
    </div>
  )
}
