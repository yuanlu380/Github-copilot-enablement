# Repository Permission Matrix

## Permission Levels

| Level | What They Can Do |
|-------|-----------------|
| **Read** | Clone, view code, open issues, comment |
| **Triage** | Read + manage issues/PRs (no code push) |
| **Write** | Push code, merge PRs, manage issues |
| **Maintain** | Write + manage repo settings (no destructive actions) |
| **Admin** | Full control including delete, manage access, settings |

## Team → Repository Mapping

### Template

| Team | Repository Pattern | Permission | Justification |
|------|-------------------|:----------:|---------------|
| @org/platform-team | `org/platform-*` | Admin | Owns platform services |
| @org/backend-devs | `org/api-*`, `org/services-*` | Write | Active contributors |
| @org/frontend-devs | `org/web-*`, `org/mobile-*` | Write | Active contributors |
| @org/security-team | All repositories | Read | Security review access |
| @org/qa-team | All repositories | Triage | Bug triage, test management |
| @org/contractors | Assigned repos only | Write | Limited scope |
| @org/read-only-audit | Regulated repos | Read | Compliance audit access |

### Customer-Specific Mapping

| Team | Repositories | Permission | Owner | Notes |
|------|-------------|:----------:|-------|-------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |

## Default Permissions

| Setting | Recommended | Customer Decision |
|---------|-------------|-------------------|
| Base permission for org members | **None** (must be added to a team) | [ ] None [ ] Read [ ] Write |
| Repository creation | Restricted to admins | [ ] All members [ ] Admins only |
| Repository forking (internal) | Allowed | [ ] Allowed [ ] Disabled |
| Repository visibility | Private by default | [ ] Public [ ] Private [ ] Internal |

## Sensitive Repository Access (PCI-DSS Scoped)

| Repository | Contains | Access Restricted To | Copilot Excluded? |
|------------|----------|---------------------|:-----------------:|
| `org/payment-service` | Card processing logic | @org/pci-team only | Yes |
| `org/card-tokenization` | Tokenization service | @org/pci-team only | Yes |
| `org/billing-api` | Billing integration | @org/billing-team | Yes |
| | | | |

## Least Privilege Audit

Run quarterly to ensure no over-provisioning:

```bash
# List all teams and their repo access
gh api /orgs/{org}/teams --paginate | jq '.[].slug' | while read team; do
  echo "=== $team ==="
  gh api /orgs/{org}/teams/$team/repos --paginate | jq '.[] | {name: .name, permission: .role_name}'
done
```

## Permission Review Schedule

| Review | Frequency | Owner | Action |
|--------|:---------:|-------|--------|
| Team membership audit | Monthly | IT Admin | Remove stale members |
| Repo access review | Quarterly | Team leads | Confirm need-to-know |
| Admin access audit | Quarterly | Security | Validate admin count |
| Outside collaborator review | Monthly | IT Admin | Check expiration dates |
| Sensitive repo access | Monthly | Security | PCI-DSS compliance |

## Escalation Path for Access Requests

```
Developer → Team Lead (approve) → GitHub Admin (execute)
                                 ↓ (if sensitive repo)
                            Security Team (approve) → GitHub Admin (execute)
```

## References

- [Repository permission levels](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
- [Managing team access to repos](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)
- [PCI-DSS Requirement 7 — Least Privilege](https://www.pcisecuritystandards.org/document_library/)
- [GitHub audit log events](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)
