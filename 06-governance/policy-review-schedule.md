# Policy Review Schedule

## Review Cadence

| Policy Area | Review Frequency | Owner | Next Review |
|-------------|:----------------:|-------|:-----------:|
| Content exclusions | Quarterly | Security + Engineering | |
| Seat allocation (inactive cleanup) | Monthly | IT Admin | |
| Org-level Copilot settings | Quarterly | Engineering Lead + Security | |
| Custom instructions / prompts | Per sprint or monthly | Tech leads | |
| Copilot Extensions (3rd party) | As released + quarterly | Security | |
| Compliance checklist | Annually | Legal + Security | |
| Champion network effectiveness | Quarterly | Enablement lead | |
| ROI / budget justification | Quarterly | Executive sponsor | |

## Quarterly Policy Review Checklist

### Content Exclusions
- [ ] Any new sensitive repos added since last review?
- [ ] Any repos removed from exclusion (no longer sensitive)?
- [ ] Test exclusions still working (spot check in IDE)

### Copilot Settings
- [ ] Any new Copilot features released that need a policy decision?
- [ ] Public code filter still set to desired state?
- [ ] Chat/CLI/Extensions enabled/disabled per current policy?
- [ ] Audit log events being captured for Copilot actions?

### Seat Management
- [ ] Inactive seats reclaimed (>30 days no usage)
- [ ] New teams/hires have seats assigned
- [ ] License count matches budget

### Security & Compliance
- [ ] Any security incidents related to Copilot suggestions? (Review)
- [ ] GitHub's Trust Center — any changes to data handling?
- [ ] Regulatory changes that impact AI tool usage?

### Effectiveness
- [ ] Acceptance rate trend — improving or declining?
- [ ] Developer satisfaction score — stable or changing?
- [ ] Any teams/languages where Copilot isn't adding value? (investigate)

## Change Log

| Date | Change | Reason | Approved By |
|------|--------|--------|-------------|
| | | | |
| | | | |
| | | | |

## Escalation Path

| Issue | Escalate To | SLA |
|-------|-------------|:---:|
| Security concern with suggestion | Security lead → CISO | 24 hrs |
| Compliance violation | Legal + Security | 48 hrs |
| Widespread outage / service issue | GitHub Support (Enterprise) | Per SLA |
| Budget overrun (seats > approved) | IT Admin → Finance | 1 week |
| Developer refuses to use (team adoption issue) | Engineering manager → Champion | 1 week |

## References

- [Managing policies for Copilot](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization)
- [GitHub Copilot audit log events](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)
- [GitHub Copilot Trust Center — Updates](https://resources.github.com/copilot-trust-center/)
- [Content exclusions documentation](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot)
