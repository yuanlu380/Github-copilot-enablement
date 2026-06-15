import PhaseHeader from '../components/PhaseHeader'
import PhaseNavigation from '../components/PhaseNavigation'

export default function Phase4() {
  return (
    <div className="page">
      <PhaseHeader
        number={4}
        title="Customization"
        timeline="Weeks 8–10"
        description="Tailor Copilot to your codebase with custom instructions, reusable prompts, and agent definitions."
      />

      <section className="content-section">
        <h2>What You'll Do</h2>
        <p>
          Out-of-the-box Copilot is good. Customized Copilot is <em>great</em>. 
          This phase teaches Copilot your team's conventions, domain terminology, and common patterns
          so suggestions match your coding standards from day one.
        </p>
      </section>

      <section className="content-section">
        <h2>Step-by-Step Process</h2>

        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Create Custom Instructions</h3>
            <p>Add a <code>.github/copilot-instructions.md</code> file to your repos:</p>
            <pre className="code-block">{`# Copilot Instructions

## Language & Framework
- Java: Spring Boot, constructor injection, no field injection
- TypeScript: strict mode, functional components with hooks
- Python: type hints required, pydantic for data models

## Security
- Never hardcode credentials or API keys
- All API endpoints must validate input
- Use parameterized SQL queries only

## Domain Context
- "PO" = Purchase Order, "ASN" = Advance Shipping Notice
- "EDI" = Electronic Data Interchange
- Inventory quantities are in "eaches" unless noted`}</pre>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Create Reusable Prompt Files</h3>
            <p>Save common tasks as <code>.github/prompts/*.prompt.md</code>:</p>
            <table className="content-table">
              <thead>
                <tr><th>Prompt File</th><th>Purpose</th></tr>
              </thead>
              <tbody>
                <tr><td><code>create-api-endpoint.prompt.md</code></td><td>Scaffold REST endpoint with validation</td></tr>
                <tr><td><code>write-unit-tests.prompt.md</code></td><td>Generate tests following team conventions</td></tr>
                <tr><td><code>code-review.prompt.md</code></td><td>Review for security, performance, readability</td></tr>
                <tr><td><code>document-function.prompt.md</code></td><td>Generate docs with examples</td></tr>
              </tbody>
            </table>
            <p>Developers access these via the <code>/</code> menu in Copilot Chat.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Define Custom Agents (Optional)</h3>
            <p>For teams with complex domain knowledge, create <code>.github/agents/*.agent.md</code>:</p>
            <pre className="code-block">{`---
description: "Expert in backend API patterns and database conventions"
tools:
  - codebase
  - githubRepo
---

You are an expert in our Spring Boot microservices architecture.
- We use Clean Architecture with CQRS pattern
- All entities inherit from BaseEntity
- API responses use ApiResponse<T> wrapper
- Pagination uses PagedRequest / PagedResponse<T>`}</pre>
          </div>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Validate with Champions</h3>
            <ul>
              <li>Have pilot champions test custom instructions — do suggestions improve?</li>
              <li>Test each prompt file — does output match team standards?</li>
              <li>Iterate based on feedback before Wave 1 rollout</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Key Artifacts</h2>
        <ul>
          <li><code>.github/copilot-instructions.md</code> committed to key repos</li>
          <li>3–5 reusable prompt files in <code>.github/prompts/</code></li>
          <li>Agent definitions (if applicable)</li>
          <li>Developer guide on using prompt files</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>References</h2>
        <ul>
          <li><a href="https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot" target="_blank" rel="noopener">Adding Custom Instructions</a></li>
          <li><a href="https://docs.github.com/en/copilot/customizing-copilot/adding-custom-prompt-files" target="_blank" rel="noopener">Adding Custom Prompt Files</a></li>
          <li><a href="https://code.visualstudio.com/docs/copilot/copilot-customization" target="_blank" rel="noopener">VS Code Copilot Customization</a></li>
          <li><a href="https://github.blog/developer-skills/github/how-to-write-better-prompts-for-github-copilot/" target="_blank" rel="noopener">Prompt Engineering Guide (GitHub Blog)</a></li>
        </ul>
      </section>

      <PhaseNavigation
        prevPath="/phase-3"
        prevLabel="Phase 3: Pilot"
        nextPath="/phase-5"
        nextLabel="Phase 5: Rollout"
      />
    </div>
  )
}
