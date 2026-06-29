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

## Billing Configuration

| Setting | Decision | Notes |
|---------|----------|-------|
| Billing manager | [ ] Org owner [ ] Dedicated billing manager | Billing managers can view/manage payment without code access |
| Billing email | ___ | Invoices and payment alerts sent here |
| Payment method | [ ] Credit card [ ] Azure subscription [ ] Invoice (Enterprise Agreement) | |
| Spending limit (Actions/Packages) | $___/month | Prevents runaway CI costs |
| Copilot budget cap | [ ] Unlimited [ ] Fixed: $___/month | See premium-requests-budget.md |

### Billing Manager Setup

Billing managers can:
- View and edit payment information
- View billing history and receipts
- Download invoices
- View seat usage and Copilot costs

Billing managers **cannot:**
- Access repositories or code
- Manage org members or teams
- Change org settings

Assign at: `https://github.com/organizations/{ORG}/settings/billing/managers`

## Org-Level Settings Checklist

- [ ] SSO enforced for org
- [ ] SCIM provisioning active
- [ ] Default repository permissions set (read, not write)
- [ ] Base permissions reviewed
- [ ] IP allow list configured (if applicable)
- [ ] Billing manager assigned
- [ ] Billing email configured
- [ ] Spending limits set for Actions/Packages

## Admin Automation Scripts

Common scripts for org-wide administration:

```bash
# List all repos with metadata
gh repo list {org} --limit 500 --json name,visibility,updatedAt

# Find repos not updated in 6 months (candidates for archiving)
gh api /orgs/{org}/repos --paginate -q \
  '.[] | select(.pushed_at < "2025-01-01") | {name: .name, last_push: .pushed_at}'

# Audit all org members and their roles
gh api /orgs/{org}/members --paginate -q '.[] | {login: .login, role: .role_name}'

# Bulk set branch protection on all repos
for repo in $(gh repo list {org} --json name -q '.[].name'); do
  gh api /repos/{org}/$repo/branches/main/protection \
    -X PUT -f required_pull_request_reviews.required_approving_review_count=1
done

# List all outside collaborators across org
gh api /orgs/{org}/outside_collaborators --paginate -q '.[] | .login'

# Export org settings for documentation/backup
gh api /orgs/{org} -q '{name, billing_email, default_repository_permission, 
  members_can_create_repositories, two_factor_requirement_enabled}'

# Apply org-wide topic/label migration
for repo in $(gh repo list {org} --json name -q '.[].name'); do
  gh repo edit {org}/$repo --add-topic "copilot-enabled"
done
```

## References

- [Managing policies for Copilot in your organization](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization)
- [GitHub Enterprise audit log streaming](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/streaming-the-audit-log-for-your-enterprise)
- [GitHub Copilot features by plan](https://docs.github.com/en/copilot/about-github-copilot/subscription-plans-for-github-copilot)
- [Copilot Extensions marketplace](https://github.com/marketplace?type=apps&copilot_app=true)
