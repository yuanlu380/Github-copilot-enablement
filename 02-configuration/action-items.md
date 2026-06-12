# Phase 2: Configuration — Action Items

**Timeline:** Weeks 3–5  
**Customer:** Manufacturing Supplier (~250 devs, SOX/SOC 2/ITAR, Java/TS/Python/SQL)

## Org Policy Settings

- [ ] Enable Copilot Business for internal org only (exclude external org)
- [ ] Set "Suggestions matching public code" → **Block**
- [ ] Enable Copilot Chat in IDE → **Yes**
- [ ] Set Copilot in CLI → **Disabled** (reduce attack surface during pilot)
- [ ] Set Copilot in github.com → Enabled for internal org
- [ ] Set premium request budget: org-level cap + per-member default limit
- [ ] Document all policy settings with rationale

## Content Exclusions (Critical for SOX/ITAR)

- [ ] Identify all ITAR-classified repositories → add to exclusion list
- [ ] Identify SOX-scoped repos (procurement, inventory ledger, financial close) → add to exclusion list
- [ ] Exclude partner data pipeline repos containing PII/credentials
- [ ] Exclude EDI connector config files (partner endpoints, credentials)
- [ ] Exclude Oracle/PostgreSQL schema files in financial reporting repos
- [ ] Test exclusions: open an excluded file in IDE → confirm Copilot shows "not available for this file"
- [ ] Document exclusion list with owner and review date for each entry

## Seat Allocation & SCIM Setup

- [ ] Create IdP groups in Entra ID:
  - `SG-Copilot-Pilot` (20 members)
  - `SG-Copilot-Wave1` (60 members)
  - `SG-Copilot-Wave2` (70 members)
  - `SG-Copilot-Internal-All` (150 members, future)
- [ ] Map IdP groups → GitHub Teams via SCIM provisioning
- [ ] Configure team-based seat assignment in GitHub Copilot settings
- [ ] Test: add one user to `SG-Copilot-Pilot` → confirm they receive a Copilot seat automatically
- [ ] Test: remove user → confirm seat is reclaimed
- [ ] Set per-member premium request limits:
  - Champions/DevEx: higher or unlimited
  - Standard internal devs: org default
  - External contractors: disabled (for now)

## Budget Approval

- [ ] Calculate total cost: Pilot (20 × $19/mo) + projected full rollout (150 × $19/mo × 12 = $34,200/yr)
- [ ] Get budget sign-off from finance/procurement
- [ ] Set up billing alerts at 80% and 100% of budget

## Deliverable

- [ ] Copilot enabled on internal org with all policies configured
- [ ] Content exclusions active and tested
- [ ] SCIM groups created and seat automation verified
- [ ] Budget approved and billing configured

## References

- Template: [org-policy-settings.md](./org-policy-settings.md)
- Template: [content-exclusions.md](./content-exclusions.md)
- Template: [seat-allocation-plan.md](./seat-allocation-plan.md)
- [GitHub Copilot content exclusions docs](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot)
- [SCIM provisioning for GitHub](https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users)
- [GitHub Copilot policies](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization)
