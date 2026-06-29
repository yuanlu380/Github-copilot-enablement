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
        <h2>💡 Try This Prompt</h2>
        <div className="prompt-example">
          <p className="prompt-label">Ask the agent:</p>
          <pre className="code-block">{`Our org has these sensitive repos that need content exclusions:
- [repo names or patterns for ITAR/SOX/PCI]
- [repos with partner credentials or PII]

We use [Entra ID / Okta] for SSO with SCIM provisioning.
We want [3 rollout waves / org-wide day 1].

Generate the content exclusion config, SCIM group mappings,
and a seat allocation plan with budget.`}</pre>
        </div>
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
          <li>Team structure plan with IdP group mappings</li>
          <li>Repository permission matrix (team → repo → access level)</li>
          <li>Outside collaborator policy (for contractors/vendors)</li>
          <li>Branch protection rulesets (enterprise + PCI-scoped)</li>
          <li>Network/proxy allowlist configured and tested</li>
          <li>Premium request budget caps set</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Additional Configuration (GitHub Admin Setup)</h2>

        <div className="step">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3>Plan Team Structure</h3>
            <p>Design your GitHub team hierarchy before assigning seats:</p>
            <pre className="code-block">{`@org/all-engineering          (parent — announcements)
├── @org/platform-team        (infra, DevOps)
├── @org/backend-team         (API, services)
│   └── @org/payments-team    (PCI-scoped — restricted)
├── @org/frontend-team        (web, mobile)
├── @org/security-team        (AppSec, reviews)
└── @org/contractors          (external — limited repos)`}</pre>
            <div className="callout callout-warning">
              <strong>Single org recommended:</strong> GitHub recommends one organization. Multi-org means configs can't be shared, apps cost extra per org, and management is significantly harder.
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-number">7</div>
          <div className="step-content">
            <h3>Set Repository Permissions</h3>
            <table className="content-table">
              <thead>
                <tr><th>Team</th><th>Repos</th><th>Permission</th></tr>
              </thead>
              <tbody>
                <tr><td>@org/platform-team</td><td>org/platform-*</td><td>Admin</td></tr>
                <tr><td>@org/backend-devs</td><td>org/api-*, org/services-*</td><td>Write</td></tr>
                <tr><td>@org/security-team</td><td>All repositories</td><td>Read</td></tr>
                <tr><td>@org/contractors</td><td>Assigned repos only</td><td>Write (limited)</td></tr>
              </tbody>
            </table>
            <p>Set base org permission to <strong>None</strong> — access only through team membership.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-number">8</div>
          <div className="step-content">
            <h3>Configure Branch Protection & Rulesets</h3>
            <p>Enterprise-level rulesets enforce code quality across all repos:</p>
            <table className="content-table">
              <thead>
                <tr><th>Rule</th><th>Setting</th><th>PCI-DSS Relevance</th></tr>
              </thead>
              <tbody>
                <tr><td>Require pull request</td><td>Yes (2 approvals)</td><td>Req 6.3.2: Code review</td></tr>
                <tr><td>Require CODEOWNERS review</td><td>Yes</td><td>Req 7: Authorized reviewers</td></tr>
                <tr><td>Require status checks</td><td>Yes (CI + CodeQL)</td><td>Req 6.3.1: Automated testing</td></tr>
                <tr><td>Block force pushes</td><td>Yes</td><td>Audit trail integrity</td></tr>
                <tr><td>Signed commits (PCI repos)</td><td>Yes</td><td>Req 8: Identity verification</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="step">
          <div className="step-number">9</div>
          <div className="step-content">
            <h3>Outside Collaborator Policy</h3>
            <p>For contractors and external vendors:</p>
            <ul>
              <li>Only org owners can invite outside collaborators</li>
              <li>Default permission: <strong>Read</strong> (elevated per-repo as needed)</li>
              <li>Access expires after 90 days (review and renew)</li>
              <li>No Copilot seat assigned to outside collaborators by default</li>
              <li>Quarterly access review by GitHub admin</li>
            </ul>
          </div>
        </div>

        <div className="step">
          <div className="step-number">10</div>
          <div className="step-content">
            <h3>Network & Proxy Configuration</h3>
            <p>Ensure developer machines can reach Copilot services. Request these domains through your network team:</p>
            <pre className="code-block">{`# Required domains (HTTPS/443)
github.com
api.github.com
*.githubusercontent.com
*.githubcopilot.com
default.exp-tas.com

# If SSL inspection is active:
# Set NODE_EXTRA_CA_CERTS=/path/to/corporate-ca.pem
# Or bypass inspection for Copilot domains`}</pre>
            <div className="callout callout-warning">
              <strong>#1 support issue:</strong> Copilot fails silently when blocked by proxy/firewall. Test connectivity before pilot starts.
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>References</h2>
        <ul>
          <li><a href="https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization" target="_blank" rel="noopener">Managing Policies for Copilot</a></li>
          <li><a href="https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot" target="_blank" rel="noopener">Configuring Content Exclusions</a></li>
          <li><a href="https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users" target="_blank" rel="noopener">SCIM Provisioning for EMU</a></li>
          <li><a href="https://docs.github.com/en/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot" target="_blank" rel="noopener">GitHub Copilot Billing</a></li>
          <li><a href="https://docs.github.com/en/copilot/about-github-copilot/subscription-plans-for-github-copilot" target="_blank" rel="noopener">Copilot Features by Plan</a></li>
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
