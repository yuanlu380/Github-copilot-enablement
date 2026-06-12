# Compliance & Security Checklist

## Data & Privacy

- [ ] Where does Copilot process code? (Azure-hosted, no training on business code for Copilot Business/Enterprise)
- [ ] Data residency requirements? (EU, US, specific region)
- [ ] Does customer require code suggestions to exclude public code matches? (filter available)
- [ ] Customer's data classification policy reviewed — which repos contain restricted/confidential code?

## IP & Legal

- [ ] Who owns code suggestions? (Developer — same as any tool-assisted code)
- [ ] Open source license concerns? (Public code filter mitigates — document decision)
- [ ] Customer's acceptable use policy for AI tools reviewed/drafted?
- [ ] Indemnification coverage confirmed? (GitHub Copilot Enterprise includes IP indemnity)

## Regulatory

| Regulation | Applicable? | Impact on Copilot Setup |
|------------|:-----------:|------------------------|
| HIPAA | [ ] Yes [ ] No | Content exclusions for PHI repos |
| SOX | [ ] Yes [ ] No | Audit trail for code changes (Git history sufficient) |
| PCI-DSS | [ ] Yes [ ] No | Exclude cardholder data processing repos |
| FedRAMP | [ ] Yes [ ] No | Check Copilot FedRAMP authorization status |
| GDPR | [ ] Yes [ ] No | Data processing agreement, residency |
| SOC 2 | [ ] Yes [ ] No | Review GitHub's SOC 2 report |
| Industry-specific: ___ | [ ] Yes [ ] No | |

## Security Controls

- [ ] Content exclusions defined for sensitive repos
- [ ] Copilot Chat in IDE — allowed or restricted?
- [ ] Copilot Chat in GitHub.com — allowed or restricted?
- [ ] Copilot in CLI — allowed or restricted?
- [ ] Copilot pull request summaries — allowed or restricted?
- [ ] Audit log forwarding configured (SIEM integration)?
- [ ] Telemetry/snippet collection opt-out confirmed?

## Sign-Off

| Reviewer | Approved? | Date | Notes |
|----------|:---------:|------|-------|
| Security | [ ] | | |
| Legal | [ ] | | |
| Privacy/DPO | [ ] | | |
| Engineering | [ ] | | |

## References

- [GitHub Copilot Trust Center](https://resources.github.com/copilot-trust-center/)
- [GitHub Copilot Business — Privacy & Data](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-business)
- [GitHub Copilot IP Indemnity](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-individual#ip-indemnity)
- [GitHub SOC 2 Report](https://github.com/security)
- [Content exclusions documentation](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot)
- [GitHub Copilot audit log events](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)
