# Branch Protection & Rulesets

## Overview

Branch protection rules and rulesets enforce code quality and security gates before code is merged. Enterprise rulesets apply across all repos — critical for PCI-DSS Requirement 6 (secure development lifecycle).

## Enterprise-Level Rulesets (Apply to ALL Repos)

Configure at: `https://github.com/enterprises/{ENTERPRISE}/settings/rules`

| Rule | Recommended | Customer Decision | PCI-DSS Relevance |
|------|:-----------:|:-----------------:|-------------------|
| Require pull request before merge | Yes | [ ] Yes [ ] No | Req 6.3.2: Code review |
| Required approvals (minimum) | 2 | [ ] 1 [ ] 2 [ ] 3 | Req 6.3.2: Peer review |
| Dismiss stale reviews on new push | Yes | [ ] Yes [ ] No | Ensures review of final code |
| Require review from code owners | Yes | [ ] Yes [ ] No | Req 7: Authorized reviewers |
| Require status checks to pass | Yes | [ ] Yes [ ] No | Req 6.3.1: Automated testing |
| Require signed commits | Optional | [ ] Yes [ ] No | Req 8: Identity verification |
| Require linear history | Optional | [ ] Yes [ ] No | Clean audit trail |
| Block force pushes | Yes | [ ] Yes [ ] No | Prevent history rewriting |
| Block deletions | Yes | [ ] Yes [ ] No | Prevent branch removal |
| Restrict who can push | Yes (team-based) | [ ] Yes [ ] No | Req 7: Least privilege |

## Required Status Checks

| Check Name | Tool | Purpose | Required? |
|------------|------|---------|:---------:|
| `ci/build` | GitHub Actions | Code compiles | [ ] Yes [ ] No |
| `ci/test` | GitHub Actions | Unit tests pass | [ ] Yes [ ] No |
| `security/codeql` | CodeQL | No security vulnerabilities | [ ] Yes [ ] No |
| `security/secret-scan` | Secret scanning | No exposed secrets | [ ] Yes [ ] No |
| `security/dependency-review` | Dependabot | No vulnerable dependencies | [ ] Yes [ ] No |
| `lint/format` | ESLint/Black/etc. | Code quality standards | [ ] Yes [ ] No |
| `coverage/threshold` | Coverage tool | Minimum test coverage | [ ] Yes [ ] No |

## Branch Strategy

| Branch | Protection Level | Who Can Push | Who Can Merge |
|--------|:----------------:|:------------:|:-------------:|
| `main` / `master` | Maximum | Nobody (PR only) | Team leads + 2 approvals |
| `release/*` | High | Nobody (PR only) | Release managers |
| `develop` | Medium | Nobody (PR only) | Any team member + 1 approval |
| `feature/*` | Low/None | Feature owner | Feature owner (to develop) |
| `hotfix/*` | Medium | Nobody (PR only) | On-call + 1 approval |

## CODEOWNERS Configuration

Create `.github/CODEOWNERS` in each repo to enforce review by domain experts:

```
# Global owners (fallback)
*                       @org/engineering-leads

# Frontend
/src/web/**             @org/frontend-devs
/src/mobile/**          @org/mobile-devs

# Backend
/src/api/**             @org/backend-devs
/src/services/**        @org/platform-team

# Security-sensitive (PCI-DSS scoped)
/src/billing/**         @org/pci-team @org/security-team
/src/payments/**        @org/pci-team @org/security-team
/config/production/**   @org/platform-team @org/security-team

# Infrastructure
/terraform/**           @org/platform-team
/.github/**             @org/devops-team
```

## Ruleset Targeting

| Ruleset Name | Applies To | Target |
|-------------|-----------|--------|
| Enterprise baseline | All repos, `main` branch | `refs/heads/main` |
| Release protection | All repos, release branches | `refs/heads/release/*` |
| PCI-DSS strict | Payment repos only | `org/payment-*`, `org/billing-*` |
| Open-source relaxed | Public repos | Lower bar (1 approval) |

## PCI-DSS Specific Rules (Payment Repos)

| Additional Rule | Setting |
|----------------|---------|
| Required reviewers from @org/security-team | Yes |
| Minimum 2 approvals (one must be security) | Yes |
| All status checks must pass (no bypass) | Yes |
| No admin bypass allowed | Yes |
| Signed commits required | Yes |
| Deployment protection (manual approval for prod) | Yes |

## Auto-Merge Policy

| Condition | Allow Auto-Merge? |
|-----------|:-----------------:|
| All required checks pass + required approvals met | [ ] Yes [ ] No |
| PCI-scoped repos | No (always manual merge) |
| Non-sensitive repos with 2+ approvals | [ ] Yes [ ] No |

## Deployment Environments (GitHub Environments)

| Environment | Protection Rules | Reviewers |
|-------------|-----------------|-----------|
| `development` | None | — |
| `staging` | Wait timer: 5 min | @org/qa-team |
| `production` | Required reviewers | @org/release-managers + @org/security-team |

## Validation Checklist

- [ ] Enterprise rulesets created and targeting correct branches
- [ ] CODEOWNERS file in all critical repos
- [ ] Required status checks configured and passing
- [ ] PCI-scoped repos have stricter rules (no bypass)
- [ ] Deployment environments configured with protection rules
- [ ] Test: attempt force push to `main` → blocked
- [ ] Test: attempt merge without approvals → blocked
- [ ] Test: attempt merge with failing checks → blocked

## References

- [About rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
- [Managing rulesets for an enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/managing-rulesets-for-repositories-in-your-enterprise)
- [About CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [Required status checks](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging)
- [Deployment protection rules](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment)
- [PCI-DSS Requirement 6: Develop and maintain secure systems](https://www.pcisecuritystandards.org/document_library/)
