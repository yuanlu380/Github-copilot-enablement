import PhaseHeader from '../components/PhaseHeader'
import PhaseNavigation from '../components/PhaseNavigation'

export default function Phase3() {
  return (
    <div className="page">
      <PhaseHeader
        number={3}
        title="Pilot Program"
        timeline="Weeks 5–9"
        description="Run a controlled 4-week trial with 2–3 teams, capture metrics, and make a data-driven go/no-go decision."
      />

      <section className="content-section">
        <h2>What You'll Do</h2>
        <p>
          Test Copilot with a small, enthusiastic group of developers. Capture baseline metrics before enabling,
          deliver training, monitor adoption, and build the business case for broader rollout.
        </p>
      </section>

      <section className="content-section">
        <h2>💡 Try This Prompt</h2>
        <div className="prompt-example">
          <p className="prompt-label">Ask the agent:</p>
          <pre className="code-block">{`We're selecting pilot teams from these options:
- [Team A]: [size] devs, [languages], [greenfield/legacy]
- [Team B]: [size] devs, [languages], [greenfield/legacy]
- [Team C]: [size] devs, [languages], [greenfield/legacy]

Our pilot will run [4 weeks]. We need:
- Team selection recommendations
- Baseline metrics to capture before starting
- A training schedule for the pilot
- Success criteria for the go/no-go decision`}</pre>
        </div>
      </section>

      <section className="content-section">
        <h2>Step-by-Step Process</h2>

        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Select Pilot Teams</h3>
            <p>Choose 2–3 teams that maximize learning while minimizing risk:</p>
            <table className="content-table">
              <thead>
                <tr><th>Criteria</th><th>Weight</th><th>Why</th></tr>
              </thead>
              <tbody>
                <tr><td>Team enthusiasm</td><td>High</td><td>Champions drive adoption</td></tr>
                <tr><td>Language diversity</td><td>Medium</td><td>Validates across tech stack</td></tr>
                <tr><td>Mix of greenfield + legacy</td><td>Medium</td><td>Tests creation and maintenance</td></tr>
                <tr><td>Low regulatory risk</td><td>High</td><td>Avoid ITAR/SOX repos in pilot</td></tr>
                <tr><td>Team size (5–15)</td><td>Low</td><td>Enough data, manageable support</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Capture Baseline Metrics</h3>
            <p>Measure <strong>before</strong> enabling Copilot (you can't prove impact without a baseline):</p>
            <table className="content-table">
              <thead>
                <tr><th>Metric</th><th>How to Measure</th><th>Target Improvement</th></tr>
              </thead>
              <tbody>
                <tr><td>PR cycle time (open → merge)</td><td>GitHub API / Insights</td><td>-20%</td></tr>
                <tr><td>PRs per developer per week</td><td>GitHub API</td><td>+15%</td></tr>
                <tr><td>Code review turnaround</td><td>GitHub API</td><td>-25%</td></tr>
                <tr><td>Developer satisfaction</td><td>Survey (1–10)</td><td>≥7</td></tr>
                <tr><td>Time on boilerplate/tests</td><td>Survey estimate</td><td>-30%</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Deliver Training</h3>
            <table className="content-table">
              <thead>
                <tr><th>Session</th><th>Duration</th><th>When</th></tr>
              </thead>
              <tbody>
                <tr><td>Copilot 101 — Getting Started</td><td>60 min</td><td>Day 1</td></tr>
                <tr><td>Copilot for Testing</td><td>45 min</td><td>Week 1</td></tr>
                <tr><td>Copilot Chat Deep Dive</td><td>45 min</td><td>Week 1</td></tr>
                <tr><td>Prompt Engineering for Code</td><td>30 min</td><td>Week 2</td></tr>
                <tr><td>Office Hours (recurring)</td><td>30 min</td><td>Weekly</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Monitor & Check In</h3>
            <ul>
              <li><strong>Week 1:</strong> Confirm all seats active in admin dashboard</li>
              <li><strong>Week 2:</strong> Check-in survey — target &gt;60% active, initial feedback</li>
              <li><strong>Week 3:</strong> Address blockers, adjust training as needed</li>
              <li><strong>Week 4:</strong> Full satisfaction survey + metrics comparison vs. baseline</li>
            </ul>
          </div>
        </div>

        <div className="step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Go / No-Go Decision</h3>
            <p>Present results to leadership with data:</p>
            <ul>
              <li>Acceptance rate (target: &gt;25%)</li>
              <li>Active usage (target: &gt;80% of seats)</li>
              <li>Developer satisfaction (target: ≥7/10)</li>
              <li>Estimated ROI calculation</li>
            </ul>
            <div className="callout">
              Decision: Proceed to Wave 1 / Extend pilot / Stop
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Key Artifacts</h2>
        <ul>
          <li>Pilot results report with metrics vs. baseline</li>
          <li>Developer satisfaction survey scores</li>
          <li>Lessons learned for Wave 1 improvements</li>
          <li>Go/no-go recommendation document</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>References</h2>
        <ul>
          <li><a href="https://docs.github.com/en/copilot/rolling-out-github-copilot-at-scale/rolling-out-github-copilot-at-scale" target="_blank" rel="noopener">Rolling Out GitHub Copilot at Scale</a></li>
          <li><a href="https://docs.github.com/en/copilot/rolling-out-github-copilot-at-scale/measuring-the-impact-of-copilot" target="_blank" rel="noopener">Measuring Copilot Impact</a></li>
          <li><a href="https://docs.github.com/en/rest/copilot/copilot-usage" target="_blank" rel="noopener">Copilot Usage API</a></li>
          <li><a href="https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization" target="_blank" rel="noopener">Copilot Admin Dashboard</a></li>
          <li><a href="https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/" target="_blank" rel="noopener">Research: Copilot Productivity Impact</a></li>
        </ul>
      </section>

      <PhaseNavigation
        prevPath="/phase-2"
        prevLabel="Phase 2: Configuration"
        nextPath="/phase-4"
        nextLabel="Phase 4: Customization"
      />
    </div>
  )
}
