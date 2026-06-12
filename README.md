# Enterprise GitHub Copilot Enablement Plan

A repeatable framework for rolling out GitHub Copilot to enterprise customers.

## Phases

| Phase | Duration | Key Activities |
|-------|----------|----------------|
| 1. Discovery & Assessment | Week 1–2 | Stakeholders, toolchain audit, compliance review |
| 2. Configuration | Week 2–3 | Org policies, content exclusions, seat allocation |
| 3. Pilot | Week 3–6 | Selected teams, metrics baseline, training |
| 4. Customization | Week 4–7 | Custom instructions, prompt files, agent modes |
| 5. Rollout | Week 6–10 | Broad enablement, onboarding, champion network |
| 6. Governance | Ongoing | Reporting, ROI, policy reviews |

## Decision Matrix

| Question | If Yes → | If No → |
|----------|----------|---------|
| Do they have GitHub Enterprise Cloud? | Proceed to Phase 2 | Discuss licensing / migration from Server/GHEC |
| Is SSO/SCIM configured? | Proceed with seat assignment | Set up SSO/SCIM first |
| Are there regulated repos (HIPAA, SOX, PCI)? | Configure content exclusions early | Standard rollout |
| Do they have existing AI policies? | Align Copilot policy with them | Help draft AI acceptable use policy |
| More than 500 developers? | Phased rollout with champions | Can do org-wide in one pass |

## How to Use This Repo

1. Clone/fork this repo for each customer engagement
2. Fill in templates in each phase folder
3. Use checklists to track progress
4. Customize based on customer's maturity level

## Prerequisites

- [ ] GitHub Enterprise Cloud or Enterprise Server 3.8+
- [ ] GitHub Copilot Business or Enterprise license agreement
- [ ] Customer stakeholder alignment (Engineering, Security, Legal, IT)
- [ ] Access to customer's GitHub org (admin or observer)
