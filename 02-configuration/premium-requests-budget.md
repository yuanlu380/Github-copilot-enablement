# Premium Requests & Budget Management

## Overview

GitHub Copilot Enterprise and Business include a base allocation of premium requests per user. Premium requests are consumed by advanced features like agent mode, multi-model selection, and coding agent. Organizations must plan and monitor budgets to avoid overages or unexpected costs.

## What Consumes Premium Requests

| Feature | Consumes Premium Requests? | Multiplier | Notes |
|---------|:--------------------------:|:----------:|-------|
| Inline code suggestions (tab complete) | No | — | Included in base plan |
| Copilot Chat (standard model) | No | — | Included in base plan |
| Copilot Chat (premium models: Claude, GPT-4o) | **Yes** | 1x per message | Model-dependent |
| Agent mode (multi-step tasks) | **Yes** | 1x per agent turn | Can be many turns per task |
| Copilot Coding Agent (autonomous PRs) | **Yes** | Variable | Depends on task complexity |
| Copilot for PRs (summaries, reviews) | **Yes** | 1x per operation | Per PR |
| Copilot in GitHub.com (chat) | **Yes** | 1x per message | Premium models |
| Copilot Extensions (3rd party) | **Yes** | Varies | Extension-dependent |
| Copilot Knowledge Bases queries | **Yes** | 1x per query | Enterprise only |

## Budget Allocation

### Included Allowances (per user/month)

| Plan | Included Premium Requests | Overage Cost |
|------|:-------------------------:|:------------:|
| Copilot Business | 300/user/month | Additional requests blocked (or pooled) |
| Copilot Enterprise | 1000/user/month | Additional requests from org pool |

*Note: GitHub adjusts these numbers. Verify current limits at https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-copilot-policies*

### Organization-Level Budget

| Setting | Options | Customer Decision |
|---------|---------|-------------------|
| Budget cap (org-wide) | Unlimited / Fixed amount | [ ] Unlimited [ ] Fixed: $___ |
| Per-user limit | Use plan default / Custom | [ ] Default [ ] Custom: ___ |
| Overage behavior | Block / Allow + alert | [ ] Block [ ] Allow |
| Budget reset cycle | Monthly (auto) | — |

### Budget Planning Formula

```
Monthly budget needed = Users × Avg premium requests/user/month

Conservative estimate:
  120 users × 150 requests/user/month = 18,000 requests/month

Heavy usage (agent mode active):
  120 users × 500 requests/user/month = 60,000 requests/month

With Copilot Enterprise (1000 included/user):
  120 users × 1000 = 120,000 included → likely sufficient
```

## Budget Allocation by Team

| Team | Users | Priority | Monthly Allocation | Rationale |
|------|:-----:|:--------:|:------------------:|-----------|
| Platform/DevOps | 15 | High | Unlimited | Heavy agent mode users |
| Backend | 40 | Medium | Default (300/user) | Standard usage |
| Frontend | 30 | Medium | Default (300/user) | Standard usage |
| QA/Testing | 15 | Medium | Default (300/user) | Test generation |
| Contractors | 20 | Low | 100/user | Limited scope |
| | | | | |

## Monitoring & Alerts

### Where to Check Usage

- **Org dashboard:** `https://github.com/organizations/{ORG}/settings/copilot/usage`
- **API:** `GET /orgs/{org}/copilot/metrics`
- **Billing:** `https://github.com/organizations/{ORG}/settings/billing`

### Alert Thresholds

| Threshold | Action |
|:---------:|--------|
| 50% consumed (mid-month) | Info — on track |
| 75% consumed (before day 20) | Warning — notify DevEx lead |
| 90% consumed | Alert — consider increasing budget or throttling |
| 100% consumed | Block or overage — immediate review |

### Monitoring Script

```bash
# Check org-level premium request consumption
gh api /orgs/{org}/copilot/billing -q '.premium_requests_consumed, .premium_requests_limit'

# Check per-user consumption (top users)
gh api /orgs/{org}/copilot/billing/seats --paginate \
  -q '.seats[] | select(.premium_requests_consumed > 500) | {login: .assignee.login, used: .premium_requests_consumed}'
```

## Cost Optimization Strategies

| Strategy | Impact | Effort |
|----------|:------:|:------:|
| Use standard chat model for simple questions | High | Low |
| Reserve agent mode for complex multi-file tasks | High | Low |
| Set per-user caps for low-priority teams | Medium | Low |
| Train devs on when to use premium vs. standard | Medium | Medium |
| Reclaim seats from inactive users (frees budget) | Medium | Low |
| Batch coding agent tasks (fewer but larger) | Low | Low |

## Coding Agent Governance

The Copilot Coding Agent can autonomously create PRs. Budget and governance considerations:

| Setting | Recommended | Customer Decision |
|---------|-------------|-------------------|
| Enable coding agent | Selected repos only | [ ] All repos [ ] Selected [ ] Disabled |
| Allowed repos | Non-regulated repos only | List: ___ |
| Require PR review before merge | Always | [ ] Yes [ ] No |
| Max premium requests per agent task | 50 | [ ] 50 [ ] 100 [ ] Unlimited |
| Who can trigger coding agent | Team maintainers+ | [ ] All members [ ] Maintainers [ ] Admins |

### Repos to EXCLUDE from Coding Agent (PCI-DSS)

| Repository | Reason |
|------------|--------|
| `org/payment-service` | PCI-scoped — no autonomous code changes |
| `org/card-tokenization` | PCI-scoped |
| `org/production-infra` | High-risk infrastructure |
| | |

## Monthly Budget Review Template

### Month: ___

| Metric | Value | vs. Budget | Action Needed? |
|--------|:-----:|:----------:|:--------------:|
| Total premium requests consumed | | /___  | [ ] Yes [ ] No |
| Highest-consuming team | | | |
| Highest-consuming user | | | |
| Coding agent requests | | | |
| Agent mode requests | | | |
| Requests blocked (over limit) | | | |

### Optimization Actions This Month:
- [ ] 
- [ ] 
- [ ] 

## Configuration Checklist

- [ ] Org-level budget cap set
- [ ] Per-user limits configured (if different from default)
- [ ] Coding agent enabled for appropriate repos only
- [ ] PCI-scoped repos excluded from coding agent
- [ ] Alert thresholds configured
- [ ] Monthly review cadence established (owner: ___)
- [ ] Developers informed of premium request limits
- [ ] Usage dashboard shared with finance team

## References

- [Managing Copilot policies — premium requests](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-copilot-policies)
- [About billing for GitHub Copilot](https://docs.github.com/en/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)
- [Copilot usage API](https://docs.github.com/en/rest/copilot/copilot-usage)
- [GitHub Copilot Coding Agent](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent)
