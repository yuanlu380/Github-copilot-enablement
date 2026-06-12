# Content Exclusions

Content exclusions prevent Copilot from accessing specific files or repositories. Copilot will not use excluded content for suggestions.

## Configuration Location

**Org-level:** `https://github.com/organizations/{ORG}/settings/copilot/content_exclusion`

**Repo-level:** Not supported — exclusions are org-wide only.

## Exclusion Rules

Add paths below. Copilot will ignore these files/repos entirely.

```yaml
# Example content exclusion configuration (set in org settings UI or API)

# Exclude entire repositories
- repository: "org-name/secrets-repo"
- repository: "org-name/compliance-*"          # wildcard

# Exclude paths across all repos
- paths:
    - "**/*.env"
    - "**/*.pem"
    - "**/*.key"
    - "**/secrets/**"
    - "**/credentials/**"

# Exclude paths in specific repos
- repository: "org-name/payment-service"
  paths:
    - "src/billing/**"
    - "src/pci/**"
    - "config/production/**"
```

## Recommended Exclusions

| Category | Pattern | Reason |
|----------|---------|--------|
| Secrets/Keys | `**/*.pem`, `**/*.key`, `**/.env` | Prevent secret leakage in suggestions |
| Regulated code (PCI) | `org/payment-*` | PCI-DSS compliance |
| Healthcare (PHI) | `org/patient-*`, `**/phi/**` | HIPAA compliance |
| Financial (SOX) | `org/ledger-*` | SOX audit scope |
| Third-party proprietary | `**/vendor/**`, `**/licensed/**` | IP protection |
| Infrastructure secrets | `**/terraform.tfvars`, `**/*.auto.tfvars` | Credential exposure |

## Customer-Specific Exclusions

| Repository / Path | Reason | Approved By | Date |
|-------------------|--------|-------------|------|
| | | | |
| | | | |
| | | | |

## Validation

- [ ] Exclusions configured in org settings
- [ ] Test: open excluded file in IDE → Copilot shows "Content excluded" indicator

## References

- [Configuring content exclusions for GitHub Copilot](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot)
- [Content exclusion behavior](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot#behavior-of-content-exclusions)
- [GitHub Copilot Trust Center — Data handling](https://resources.github.com/copilot-trust-center/)
- [ ] Exclusions documented and communicated to developers
- [ ] Review cadence set (quarterly)
