# Phase 3: Pilot — Action Items

**Timeline:** Weeks 5–9  
**Customer:** Manufacturing Supplier (~250 devs, SOX/SOC 2/ITAR, Java/TS/Python/SQL)

## Team Selection

- [ ] Select 2–3 pilot teams (recommend: Platform/DevEx, Demand Forecasting ML, API Connectors non-ITAR)
- [ ] Confirm pilot teams do NOT work on ITAR or SOX-critical repos
- [ ] Identify 1 champion per team (enthusiastic senior dev)
- [ ] Get team lead buy-in for 4-week pilot commitment
- [ ] Add pilot team members to `SG-Copilot-Pilot` IdP group (triggers seat assignment)

## Baseline Metrics (Capture BEFORE enabling)

- [ ] Measure PR cycle time (open → merge) for pilot teams — record baseline
- [ ] Measure PRs per developer per week — record baseline
- [ ] Measure code review turnaround time — record baseline
- [ ] Run developer satisfaction survey (1–10 scale) — record baseline
- [ ] Ask devs to estimate hours/week on boilerplate/tests — record baseline

## Training Delivery

- [ ] Schedule & deliver: **Copilot 101** (60 min, Day 1) — install, authenticate, live demo
- [ ] Schedule & deliver: **Copilot for Testing** (45 min, Week 1) — /tests, TDD workflow
- [ ] Schedule & deliver: **Copilot Chat Deep Dive** (45 min, Week 1) — @workspace, #file, slash commands
- [ ] Schedule & deliver: **Prompt Engineering** (30 min, Week 2) — comments-first, context management
- [ ] Set up weekly **Office Hours** (30 min drop-in Q&A) — run every week of pilot
- [ ] Create internal Slack/Teams channel: `#copilot-pilot`
- [ ] Distribute Tips & Tricks handout to all pilot participants

## Pilot Execution

- [ ] **Week 1:** Monitor activation — are all 20 users showing as "active" in Copilot admin?
- [ ] **Week 2:** Run check-in survey — target >60% active usage, collect initial feedback
- [ ] **Week 2:** Review Copilot admin dashboard — check acceptance rate (target >25%)
- [ ] **Week 3:** Address any blockers, adjust training if needed
- [ ] **Week 4:** Run full satisfaction survey (7 questions + open-ended)
- [ ] **Week 4:** Pull metrics — compare to baseline (PR cycle time, velocity, etc.)
- [ ] **Week 4:** Calculate pilot ROI: hours saved × hourly cost × pilot team size

## Go / No-Go Decision

- [ ] Present pilot results to VP Engineering + CISO
- [ ] Decision: proceed to Wave 1 / extend pilot / stop
- [ ] Document lessons learned for Wave 1 onboarding improvements

## Deliverable

- [ ] Pilot results report with metrics vs. baseline
- [ ] Developer satisfaction scores
- [ ] Go/no-go recommendation with supporting data

## References

- Template: [pilot-team-selection.md](./pilot-team-selection.md)
- Template: [success-metrics.md](./success-metrics.md)
- Template: [training-materials.md](./training-materials.md)
- [GitHub Copilot usage metrics API](https://docs.github.com/en/rest/copilot/copilot-usage)
- [GitHub Copilot admin dashboard](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization)
