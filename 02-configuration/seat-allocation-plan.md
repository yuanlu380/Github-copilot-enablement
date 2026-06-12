# Seat Allocation Plan

## Licensing Model

| Plan | Features | Price (approx) |
|------|----------|----------------|
| Copilot Business | IDE suggestions, Chat, CLI, PR summaries | $19/user/month |
| Copilot Enterprise | + Knowledge bases, + Bing search, + Fine-tuning (future) | $39/user/month |

## Allocation Strategy

### Option A: Team-Based (Recommended for Phased Rollout)

| Phase | Teams | Seat Count | Start Date | End Date |
|-------|-------|:----------:|:----------:|:--------:|
| Pilot | | | | |
| Wave 1 | | | | |
| Wave 2 | | | | |
| Full rollout | All engineering | | | |

### Option B: Org-Wide (Small Orgs < 100 devs)

| Group | Seat Count | Notes |
|-------|:----------:|-------|
| All developers | | Enable for entire org day 1 |

## Seat Management

| Method | How |
|--------|-----|
| Manual assignment | Admin assigns in org settings |
| Team-based | Assign to GitHub Teams — members auto-get seats |
| SCIM group sync | Map IdP group → GitHub Team → auto seat assignment |

### Recommended: SCIM + Team-Based

```
IdP Group (e.g., Entra ID)     →  GitHub Team           →  Copilot Seat
─────────────────────────────      ──────────────────       ─────────────
"SG-Copilot-Pilot"             →  @org/copilot-pilot    →  Auto-assigned
"SG-Copilot-Wave1"             →  @org/copilot-wave1    →  Auto-assigned
"SG-Engineering-All"           →  @org/all-engineers    →  Auto-assigned (full rollout)
```

## Budget

| Item | Count | Monthly | Annual |
|------|:-----:|--------:|-------:|
| Copilot Business seats | | | |
| Copilot Enterprise seats | | | |
| **Total** | | | |

## Seat Reclamation

- [ ] Set up inactive seat report (GitHub provides usage data)
- [ ] Define "inactive" threshold: ___ days with no Copilot usage
- [ ] Process for reclaiming unused seats (notify → 7 day grace → remove)
- [ ] Quarterly seat review cadence established

## References

- [Managing access for Copilot in your organization](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-in-your-organization)
- [SCIM provisioning for Enterprise Managed Users](https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users)
- [GitHub Copilot Business pricing](https://docs.github.com/en/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)
- [Reviewing Copilot usage data](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization)
