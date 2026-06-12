# Phase 6: Governance & ROI — Action Items

**Timeline:** Ongoing from Week 12+  
**Customer:** Manufacturing Supplier (~250 devs, SOX/SOC 2/ITAR, Java/TS/Python/SQL)

## ROI Reporting

- [ ] Calculate ROI at Week 12 (post-Wave 1):
  ```
  150 devs × $175,000 annual cost × 20% productivity = $5,250,000 value
  150 seats × $19/mo × 12 = $34,200 cost
  Net ROI = $5,215,800 / year
  ```
- [ ] Validate productivity % with actual survey data (hours saved per dev per week)
- [ ] Present ROI report to VP Engineering + Finance
- [ ] Set up monthly automated usage report from Copilot admin API

## Ongoing Metrics Dashboard

- [ ] Track monthly: acceptance rate, active users, chat interactions, premium request consumption
- [ ] Track quarterly: PR cycle time trend, developer satisfaction survey
- [ ] Set up alerts: seat utilization drops below 70%, budget exceeds 80%
- [ ] Report unused seats quarterly — reclaim or reassign

## Policy Review Cadence

| Review | Frequency | Owner | Action |
|--------|-----------|-------|--------|
| Usage & adoption | Monthly | DevEx lead | Dashboard review, identify low-adoption teams |
| Content exclusion audit | Quarterly | Security + Legal | Verify ITAR/SOX repos still excluded, add new repos |
| Org policy settings | Quarterly | CISO + VP Eng | Review new Copilot features, adjust settings |
| SOX compliance check | Semi-annual | Compliance + Audit | Confirm AI code goes through change management |
| Contractor IP/access review | Annual | Legal | Review agreements, GitHub ToS changes |
| Premium request budgets | Quarterly | Finance + DevEx | Adjust limits based on actual usage patterns |

## Governance Setup

- [ ] Schedule recurring calendar invites for all review cadences above
- [ ] Assign owners for each review type
- [ ] Create governance runbook: what to check, where to find data, escalation path
- [ ] Set up Copilot usage API integration for automated reporting (optional)
- [ ] Document exception process: how teams request content exclusion changes or seat increases

## Continuous Improvement

- [ ] Collect quarterly feedback from champions → feed into custom instructions updates
- [ ] Review and update `.github/copilot-instructions.md` quarterly based on code review patterns
- [ ] Evaluate new Copilot features as released (e.g., code review, workspace agents) → decide enable/disable
- [ ] Annual renewal review: adjust seat count, plan tier (Business vs Enterprise), budget

## Deliverable

- [ ] Monthly usage reports running
- [ ] All governance reviews scheduled with owners
- [ ] ROI report presented to leadership
- [ ] Exception/change process documented

## References

- Template: [reporting-and-roi.md](./reporting-and-roi.md)
- Template: [policy-review-schedule.md](./policy-review-schedule.md)
- [Copilot usage API](https://docs.github.com/en/rest/copilot/copilot-usage)
- [Copilot metrics API](https://docs.github.com/en/rest/copilot/copilot-metrics)
- [GitHub audit log for Copilot](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)
