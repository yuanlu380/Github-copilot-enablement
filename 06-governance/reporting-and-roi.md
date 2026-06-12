# Reporting & ROI

## Metrics Dashboard Sources

| Metric | Source | Access |
|--------|--------|--------|
| Seat utilization (active vs assigned) | Copilot Admin Dashboard | Org admin |
| Acceptance rate | Copilot Admin Dashboard | Org admin |
| Lines suggested / accepted | Copilot Admin Dashboard | Org admin |
| Chat interactions | Copilot Admin Dashboard | Org admin |
| Languages used | Copilot Admin Dashboard | Org admin |
| PR metrics (cycle time, throughput) | GitHub Insights / API | Org admin |
| Developer satisfaction | Survey (manual) | Enablement team |

## Monthly Report Template

### Executive Summary — [Month Year]

| KPI | This Month | Last Month | Trend |
|-----|:----------:|:----------:|:-----:|
| Active seats / Total seats | / | / | |
| Acceptance rate | % | % | |
| Avg chat interactions/user/day | | | |
| Developer satisfaction (1–10) | | | |
| Estimated hours saved (org-wide) | | | |

### Adoption

- Total seats allocated: ___
- Active users (used in last 30 days): ___
- Inactive users (seat assigned, no usage): ___
- Teams onboarded this month: ___

### Productivity Impact

- Average PR cycle time: ___ days (was: ___ before Copilot)
- PRs merged per dev per week: ___ (was: ___  before Copilot)
- Test coverage trend: ___%

### Qualitative Feedback

Top wins this month:
1.
2.
3.

Top complaints / friction:
1.
2.
3.

### Recommendations

- [ ] Action item 1
- [ ] Action item 2
- [ ] Action item 3

---

## ROI Model

### Cost

```
Seats: ___ × $[19/39]/month × 12 = $___/year
Enablement effort (one-time): ___ hours × $___/hr = $___
Champion time: ___ champions × 1 hr/wk × 52 × $___/hr = $___/year
────────────────────────────────────────────────────────
Total annual cost: $___
```

### Value

```
Developer time saved: ___ hrs/dev/week × ___ devs × 52 weeks = ___ hours/year
× Fully loaded hourly rate: $___
= Time savings value: $___/year

Reduced onboarding time: ___ new hires × ___ days saved × 8 hrs × $___/hr = $___
Reduced bugs (from better tests): ___ fewer prod incidents × $___/incident = $___
────────────────────────────────────────────────────────
Total annual value: $___
```

### Net ROI

```
ROI = (Total Value - Total Cost) / Total Cost × 100
    = ($___  - $___) / $___ × 100
    = ___%
```

## Reporting Cadence

| Report | Audience | Frequency |
|--------|----------|:---------:|
| Usage dashboard (self-serve) | Engineering managers | Real-time |
| Monthly summary | Director / VP Engineering | Monthly |
| ROI / business case update | Executive sponsor / CFO | Quarterly |
| Seat utilization (reclamation) | IT Admin | Monthly |

## References

- [Reviewing Copilot usage data in your organization](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization)
- [Copilot usage API](https://docs.github.com/en/rest/copilot/copilot-usage)
- [Copilot metrics API](https://docs.github.com/en/rest/copilot/copilot-metrics)
- [GitHub blog — Research: quantifying Copilot's impact](https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/)
- [DORA metrics](https://dora.dev/guides/dora-metrics-four-keys/)
