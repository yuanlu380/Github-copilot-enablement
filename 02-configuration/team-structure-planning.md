# Team Structure Planning

## GitHub Organizational Hierarchy

```
Enterprise Account
  └── Organization(s)
        └── Teams (with optional parent/child hierarchy)
              └── Members (with roles)
                    └── Repository access (via team membership)
```

## Enterprise Structure Decision

| Question | Options | Customer Decision |
|----------|---------|-------------------|
| How many organizations? | Single org vs. multi-org | [ ] Single [ ] Multiple |
| Org separation logic | By business unit / by product / by compliance boundary | |
| Enterprise account needed? | Required for unified billing + policy | [ ] Yes [ ] No |

### Recommendation: Single Organization

> **GitHub recommends setting up only one organization for your users and repositories.** Only create multiple organizations if specific constraints require it.

### Multi-Org Trade-offs

| Concern | Impact |
|---------|--------|
| Configuration sharing | ❌ **Not possible** — you must configure everything from scratch per org (SSO, policies, rulesets, Copilot settings). Increases risk of config drift and errors. |
| GitHub Apps & integrations | ❌ **Extra cost** — many apps/integrations must be installed and licensed separately per org |
| Management overhead | ❌ **Significantly harder** — separate admin teams, separate audit logs, no unified view |
| Billing | ❌ Split invoices unless using Enterprise account to unify |
| Cross-org collaboration | ❌ Users can't easily reference issues/PRs across orgs |
| Team sync (SCIM/EMU) | ❌ Must configure IdP provisioning per org separately |

### When Multi-Org Is Justified

| Scenario | When to Use | Justification |
|----------|-------------|---------------|
| Single org | <500 devs, one business unit, simple compliance | **Default — start here** |
| Org per compliance boundary | PCI vs. non-PCI, ITAR-classified vs. unclassified | Regulatory mandate requires hard separation |
| Org per business unit | Large enterprise (>1000 devs), separate billing | Business units operate independently with different policies |
| Org per product | Separate open-source vs. internal | Open-source repos need different visibility/contributor model |
| Org per acquisition | Recently acquired company not yet integrated | Temporary until identity/policy integration complete |

## Team Hierarchy Design

### Recommended Structure

```
@org/all-engineering              (parent — all devs, used for org-wide announcements)
├── @org/platform-team            (infra, DevOps, SRE)
├── @org/backend-team             (API, services)
│   ├── @org/payments-team        (PCI-scoped — restricted)
│   └── @org/data-team            (data pipeline devs)
├── @org/frontend-team            (web, mobile)
│   ├── @org/web-team
│   └── @org/mobile-team
├── @org/security-team            (AppSec, compliance)
├── @org/qa-team                  (testing, QA automation)
└── @org/contractors              (external — limited repos)
```

### Naming Conventions

| Convention | Example | Customer Decision |
|-----------|---------|-------------------|
| Flat (function-based) | `backend-devs`, `frontend-devs` | [ ] |
| Hierarchical (dept-team) | `eng-backend`, `eng-frontend` | [ ] |
| Product-based | `product-alpha-devs`, `product-beta-devs` | [ ] |
| Hybrid | `eng-backend-payments` | [ ] |

## Team Roles

| Role | Permissions | Who Gets It |
|------|------------|-------------|
| **Member** | Access repos assigned to the team | All team members |
| **Maintainer** | Member + manage team settings, add/remove members | Tech leads |

## Team Configuration Checklist

For each team, configure:

- [ ] Team name and description
- [ ] Parent team (if applicable)
- [ ] Team visibility (visible / secret)
- [ ] Team discussions (enabled / disabled)
- [ ] Notification preferences
- [ ] Code review assignment method (round-robin / load-balance)
- [ ] IdP group mapping (for SCIM sync)

## Code Review Assignment

| Setting | Options | Recommended |
|---------|---------|-------------|
| Auto-assignment enabled | Yes/No | Yes |
| Assignment method | Round-robin / Load balance | Load balance |
| Team members to assign | Number | 2 |
| Skip if already requested | Yes/No | Yes |
| Count existing PR reviews | Yes/No | Yes |

### Per-Team Review Settings

| Team | Method | Reviewers Assigned | Include Maintainers? |
|------|:------:|:------------------:|:--------------------:|
| @org/backend-team | Load balance | 2 | [ ] Yes [ ] No |
| @org/frontend-team | Load balance | 2 | [ ] Yes [ ] No |
| @org/security-team | Round-robin | 1 | [ ] Yes [ ] No |
| @org/payments-team | All members | All | [ ] Yes [ ] No |

## IdP Group → GitHub Team Mapping

| IdP Group (Entra ID / Okta) | GitHub Team | Copilot Seat? | Notes |
|-----------------------------|-------------|:-------------:|-------|
| `SG-GitHub-All-Devs` | @org/all-engineering | Yes | All developers |
| `SG-GitHub-Platform` | @org/platform-team | Yes | Infra team |
| `SG-GitHub-Backend` | @org/backend-team | Yes | Backend devs |
| `SG-GitHub-Frontend` | @org/frontend-team | Yes | Frontend devs |
| `SG-GitHub-Security` | @org/security-team | Yes | Security reviewers |
| `SG-GitHub-Contractors` | @org/contractors | No | External — no Copilot |
| `SG-GitHub-PCI` | @org/payments-team | Conditional | Copilot excluded from PCI repos |

## Team Visibility Matrix

| Team | Visibility | Reason |
|------|:----------:|--------|
| @org/all-engineering | Visible | Everyone should see org-wide team |
| @org/security-team | Visible | Devs need to tag security for reviews |
| @org/payments-team | Secret | PCI scope — minimize exposure |
| @org/contractors | Secret | External users — restricted visibility |

## Customer-Specific Team Plan

| Team Name | Parent | Members (approx) | Key Repos | IdP Group |
|-----------|--------|:----------------:|-----------|-----------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |

## Implementation Script

```bash
# Create teams via GitHub CLI
gh api /orgs/{org}/teams -f name="platform-team" -f description="Platform & Infrastructure" -f privacy="closed"
gh api /orgs/{org}/teams -f name="backend-team" -f description="Backend Services" -f privacy="closed"
gh api /orgs/{org}/teams -f name="payments-team" -f description="PCI-scoped payments team" -f privacy="secret" -f parent_team_id={backend_team_id}

# Add repo access to team
gh api /orgs/{org}/teams/platform-team/repos/{org}/{repo} -f permission="admin"
```

## References

- [About teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams)
- [Creating a team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team)
- [Managing code review settings for your team](https://docs.github.com/en/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)
- [Synchronizing a team with an IdP group](https://docs.github.com/en/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)
- [Team visibility](https://docs.github.com/en/organizations/organizing-members-into-teams/changing-team-visibility)
