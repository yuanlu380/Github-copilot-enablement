# Organization Policy Settings

## GitHub Org-Level Copilot Settings

Configure at: `https://github.com/organizations/{ORG}/settings/copilot`

### Policies

| Setting | Recommended (Enterprise) | Customer Decision | Notes |
|---------|:---:|:---:|-------|
| Copilot access | Enabled for selected teams | [ ] All [ ] Selected | Start with pilot teams |
| Suggestions matching public code | Block | [ ] Allow [ ] Block | Block = filters out verbatim public code matches |
| Copilot Chat in IDE | Enabled | [ ] Enabled [ ] Disabled | |
| Copilot Chat in GitHub.com | Enabled | [ ] Enabled [ ] Disabled | |
| Copilot in CLI | Enabled | [ ] Enabled [ ] Disabled | |
| Copilot pull request summaries | Enabled | [ ] Enabled [ ] Disabled | Enterprise only |
| Copilot knowledge bases | Enabled | [ ] Enabled [ ] Disabled | Enterprise only |
| Copilot Extensions (3rd party) | Disabled initially | [ ] Enabled [ ] Disabled | Review extensions individually |

### Editor/IDE Policy

| Setting | Decision |
|---------|----------|
| Allow Copilot in VS Code | [ ] Yes [ ] No |
| Allow Copilot in Visual Studio | [ ] Yes [ ] No |
| Allow Copilot in JetBrains | [ ] Yes [ ] No |
| Allow Copilot in Vim/Neovim | [ ] Yes [ ] No |

## Audit Log Configuration

- [ ] Audit log streaming configured (to SIEM, Splunk, Datadog, etc.)
- [ ] Copilot-specific audit events monitored:
  - `copilot.seat_assignment_created`
  - `copilot.seat_assignment_removed`
  - `copilot.content_exclusion_changed`

## Org-Level Settings Checklist

- [ ] SSO enforced for org
- [ ] SCIM provisioning active
- [ ] Default repository permissions set (read, not write)
- [ ] Base permissions reviewed
- [ ] IP allow list configured (if applicable)

## References

- [Managing policies for Copilot in your organization](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization)
- [GitHub Enterprise audit log streaming](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/streaming-the-audit-log-for-your-enterprise)
- [GitHub Copilot features by plan](https://docs.github.com/en/copilot/about-github-copilot/subscription-plans-for-github-copilot)
- [Copilot Extensions marketplace](https://github.com/marketplace?type=apps&copilot_app=true)
