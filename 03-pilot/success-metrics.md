# Success Metrics

## Baseline (Capture BEFORE Pilot Starts)

| Metric | How to Measure | Baseline Value | Target |
|--------|----------------|:--------------:|:------:|
| PR cycle time (open → merge) | GitHub Insights / API | ___  days | -20% |
| PRs per developer per week | GitHub API | ___ | +15% |
| Code review turnaround | GitHub API | ___ hours | -25% |
| Developer satisfaction (survey) | Survey (1–10) | ___ | ≥7 |
| Time spent on boilerplate/tests | Survey estimate | ___ hrs/wk | -30% |
| Onboarding time (new dev → first PR) | Track manually | ___ days | -25% |

## Copilot-Specific Metrics (Available via API/Admin)

| Metric | Source | Target |
|--------|--------|:------:|
| Acceptance rate (suggestions accepted / shown) | Copilot admin dashboard | >25% |
| Active users / total seats | Copilot admin dashboard | >80% |
| Chat interactions per user per day | Copilot admin dashboard | >3 |
| Lines of code from suggestions | Copilot admin dashboard | Track trend |

## Developer Satisfaction Survey (Run at Week 2, Week 4)

Rate 1–10:

1. Copilot saves me time on repetitive coding tasks
2. Copilot helps me write tests faster
3. Copilot helps me understand unfamiliar code
4. I trust the quality of Copilot's suggestions
5. Copilot helps me stay in flow / reduces context switching
6. I would recommend Copilot to a colleague
7. Copilot helps with documentation/comments

Open-ended:
- What's the best thing Copilot has done for you?
- What's the most frustrating experience you've had?
- What would make Copilot more useful for your daily work?

## ROI Calculation (Simplified)

```
Hours saved per dev per week (from survey): ___ hrs
× Number of pilot developers: ___
× Developer hourly cost (fully loaded): $___
= Weekly value: $___
× 52 weeks = Annual value: $___

Minus: Copilot license cost (___ seats × $19 or $39/mo × 12): $___

Net annual ROI: $___
```

## References

- [Reviewing Copilot usage data in your organization](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization)
- [Copilot metrics API](https://docs.github.com/en/rest/copilot/copilot-metrics)
- [GitHub blog — Copilot research and productivity](https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/)
- [DORA metrics](https://dora.dev/guides/dora-metrics-four-keys/)
