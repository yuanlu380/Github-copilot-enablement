# Phase 1: Discovery & Compliance — Action Items

**Timeline:** Weeks 1–3  
**Customer:** Manufacturing Supplier (~250 devs, SOX/SOC 2/ITAR, Java/TS/Python/SQL)

## Stakeholder Alignment

- [ ] Identify CISO / Security lead → get meeting scheduled (Week 1)
- [ ] Identify VP Engineering / Engineering Director → schedule kickoff (Week 1)
- [ ] Identify Legal/Procurement contact → schedule IP & compliance review (Week 1)
- [ ] Identify DevEx/Platform lead → will own implementation (Week 1)
- [ ] Identify External Vendor PM → point of contact for contractor scoping (Week 2)
- [ ] Complete RACI matrix and get sign-off from all stakeholders (Week 2)

## Compliance Gates

- [ ] **SOX:** Confirm with compliance team that AI-generated code going through existing PR review + merge controls satisfies SOX change management
- [ ] **SOC 2:** Review GitHub Copilot Business data processing — confirm no prompt/code retention satisfies data handling obligations for partner data
- [ ] **ITAR:** Get Legal to confirm which repositories (if any) contain export-controlled technical data
- [ ] **ITAR:** If applicable, get written Legal approval that those repos will be fully excluded from Copilot
- [ ] Document all compliance decisions in a decision log with dates and approvers

## External Contractor Decision

- [ ] Ask Legal: "If contractors use Copilot on our code, who owns the AI-assisted output?"
- [ ] Review existing contractor agreements for AI/ML tool clauses
- [ ] Decision (document in writing): Enable Copilot for contractors now / defer / exclude permanently
- [ ] If deferring: set target date for re-evaluation (recommend Phase 5, ~Week 14)

## Tooling Audit

- [ ] Inventory IDEs in use across teams (VS Code, IntelliJ, Neovim, etc.)
- [ ] Confirm GitHub Enterprise Cloud plan supports Copilot Business
- [ ] Verify SCIM/SSO is configured between Entra ID ↔ GitHub Enterprise
- [ ] Confirm IdP groups exist (or can be created) for phased seat assignment
- [ ] Document primary languages: Java (Spring Boot), TypeScript (React), Python (data/ML), SQL (PostgreSQL/Oracle)

## Deliverable

- [ ] Produce signed decision document: "We approve GitHub Copilot for internal developers with repos [X, Y, Z] excluded. Contractor access deferred pending IP review."

## References

- Template: [compliance-checklist.md](./compliance-checklist.md)
- Template: [stakeholder-raci.md](./stakeholder-raci.md)
- Template: [tooling-profile.md](./tooling-profile.md)
- [GitHub Copilot Trust Center](https://resources.github.com/copilot-trust-center/)
- [GitHub Copilot Business data handling](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-business)
- [ITAR compliance overview (State Dept)](https://www.pmddtc.state.gov/ddtc_public)
