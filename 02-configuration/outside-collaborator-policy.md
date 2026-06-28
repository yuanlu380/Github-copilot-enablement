# Outside Collaborator Policy

## Overview

Outside collaborators are people who aren't organization members but have access to specific repositories (e.g., contractors, consultants, temporary employees, vendor partners).

## Access Decision Framework

| User Type | Recommended Approach | Notes |
|-----------|---------------------|-------|
| Full-time employee | Org member via SCIM/EMU | Standard provisioning |
| Long-term contractor (>6 months) | Org member in restricted team | Limited team access |
| Short-term contractor (<6 months) | Outside collaborator | Repo-level access only |
| Vendor/partner (read-only) | Outside collaborator (read) | Minimal access |
| Open-source contributor | Fork + PR workflow | No direct access |

## Outside Collaborator Configuration

### Org-Level Settings

| Setting | Recommended | Customer Decision |
|---------|-------------|-------------------|
| Who can invite outside collaborators? | Org owners only | [ ] Owners only [ ] Members |
| Default permission for outside collaborators | Read | [ ] Read [ ] Write [ ] None |
| Allow forking of private repos | Disabled | [ ] Enabled [ ] Disabled |
| Repository visibility change by collaborators | Disabled | [ ] Enabled [ ] Disabled |

### Invitation Process

```
Request → Approval → Invite → Access → Review → Revoke
```

| Step | Owner | SLA | Tool |
|------|-------|-----|------|
| 1. Request submitted | Developer/PM | — | ServiceNow / Jira / GitHub Issue |
| 2. Manager approval | Requestor's manager | 1 business day | Approval workflow |
| 3. Security review (if regulated repo) | Security team | 2 business days | Manual review |
| 4. Invitation sent | GitHub admin | 1 business day | GitHub UI / API |
| 5. Access granted | Auto (on invite acceptance) | — | GitHub |
| 6. Periodic review | GitHub admin | Quarterly | Audit script |
| 7. Access revoked | GitHub admin | On contract end | SCIM or manual |

## Compliance Controls (PCI-DSS)

| PCI-DSS Requirement | How It's Met |
|---------------------|--------------|
| Req 7: Restrict access on need-to-know | Collaborators get repo-level access only, not org-wide |
| Req 8: Identify and authenticate | SSO enforced; collaborators must use corporate IdP or verified email |
| Req 10: Track and monitor access | Audit log captures all collaborator activity |
| Req 12: Maintain security policy | This policy + quarterly reviews |

## Access Expiration

| Collaborator Type | Max Duration | Review Cadence | Auto-Expire? |
|-------------------|:------------:|:--------------:|:------------:|
| Short-term contractor | 90 days | Monthly | [ ] Yes [ ] No |
| Vendor partner | 180 days | Quarterly | [ ] Yes [ ] No |
| Long-term contractor | 365 days | Quarterly | [ ] Yes [ ] No |

## Restrictions for Outside Collaborators

- [ ] Cannot be added to teams (repo-level access only)
- [ ] Cannot view other org members or teams
- [ ] Cannot create repositories in the org
- [ ] Cannot access internal repositories
- [ ] Cannot use GitHub Copilot (no seat assigned)
- [ ] Cannot access knowledge bases or custom instructions
- [ ] Content exclusions apply to any repos they CAN access

## Offboarding Checklist

- [ ] Remove from all repositories
- [ ] Revoke any personal access tokens issued for integrations
- [ ] Review recent commits/PRs for any policy violations
- [ ] Archive access records for audit trail
- [ ] Confirm removal in audit log

## Customer-Specific Collaborators

| Name / Company | Repos | Permission | Start Date | End Date | Sponsor |
|---------------|-------|:----------:|:----------:|:--------:|---------|
| | | | | | |
| | | | | | |

## References

- [Managing outside collaborators](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators)
- [Setting permissions for outside collaborators](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)
- [Auditing outside collaborators](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/viewing-people-in-your-organization#listing-outside-collaborators)
- [PCI-DSS Requirements](https://www.pcisecuritystandards.org/document_library/)
