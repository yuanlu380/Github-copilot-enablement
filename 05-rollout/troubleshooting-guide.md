# Troubleshooting Guide

A developer-facing guide for common Copilot issues. Distribute alongside the onboarding guide.

---

## Quick Diagnostic Flowchart

```
Copilot not working?
│
├─ No suggestions appearing?
│  ├─ Check: Copilot icon in status bar → is it active (not crossed out)?
│  ├─ Check: Is this file in a content-excluded repo/path?
│  ├─ Check: Are you authenticated? (Copilot icon → "Signed in as...")
│  └─ Check: Is the file type supported? (see supported languages below)
│
├─ "Unable to connect" error?
│  ├─ Check: Are you on VPN/corporate network?
│  ├─ Check: Can you reach github.com in browser?
│  ├─ Check: Proxy settings configured in IDE?
│  └─ Check: SSL inspection / certificate errors?
│
├─ Suggestions are slow (>3 seconds)?
│  ├─ Check: Network latency (proxy/VPN routing)
│  ├─ Check: Large files open (>1000 lines = slower context)
│  └─ Check: Many extensions running (resource contention)
│
└─ Suggestions are bad/irrelevant?
   ├─ Check: Are relevant files open? (Copilot uses open tabs as context)
   ├─ Check: Is .github/copilot-instructions.md configured?
   └─ Try: Add a descriptive comment above the function
```

## Issue 1: No Suggestions Appearing

### Symptoms
- Gray ghost text never shows
- Copilot icon shows but no activity
- Chat works, but inline suggestions don't

### Solutions

| Check | How | Fix |
|-------|-----|-----|
| Copilot status | Look at bottom-right status bar icon | If crossed out, click → Enable |
| Authentication | Copilot icon → check "Signed in as..." | Re-authenticate: Command Palette → "GitHub Copilot: Sign Out" → Sign In |
| Extension enabled | Extensions panel → GitHub Copilot | Ensure enabled (not disabled for workspace) |
| File type supported | Check language is in supported list | Copilot works with all common languages |
| Content exclusion | Check if you see "Content excluded" notice | This repo/path is blocked by org policy — contact admin |
| Extension version | Extensions → GitHub Copilot → check for update | Update to latest version |

### VS Code Specific

```json
// Check settings.json — ensure not disabled
{
  "github.copilot.enable": {
    "*": true
  }
}
```

## Issue 2: Authentication Failures

### Symptoms
- "Sign in to use GitHub Copilot"
- "Your session has expired"
- "Unable to verify Copilot access"

### Solutions

1. **Re-authenticate:**
   - Command Palette → "GitHub Copilot: Sign Out"
   - Command Palette → "GitHub Copilot: Sign In"
   - Complete browser auth flow

2. **Check seat assignment:**
   - Go to https://github.com/settings/copilot
   - Should show "Copilot is active"
   - If not: contact IT admin for seat assignment

3. **SSO token expired:**
   - If org requires SSO, re-authorize: https://github.com/settings/connections/applications
   - Find "GitHub Copilot" → Re-authorize with SSO

4. **Multiple GitHub accounts:**
   - Command Palette → "GitHub: Sign Out of All Accounts"
   - Sign in with the correct account (the one with Copilot seat)

## Issue 3: Network / Proxy / Certificate Errors

### Symptoms
- "Unable to connect to Copilot"
- `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`
- `SELF_SIGNED_CERT_IN_CHAIN`
- `ECONNREFUSED` or `ETIMEDOUT`

### Solutions

| Error | Cause | Fix |
|-------|-------|-----|
| `UNABLE_TO_GET_ISSUER_CERT` | Corporate SSL inspection | Set `NODE_EXTRA_CA_CERTS` env var to corporate CA path |
| `ECONNREFUSED` | Proxy blocking connection | Add Copilot domains to proxy allowlist |
| `ETIMEDOUT` | Firewall blocking port 443 | Request firewall rule for `*.githubcopilot.com` |
| Certificate error | Custom CA not trusted | Import corporate root CA to system trust store |

### Quick Network Test

```bash
# Test if you can reach Copilot
curl -v https://copilot-proxy.githubusercontent.com 2>&1 | grep "HTTP/"

# If behind proxy:
curl -v --proxy $HTTP_PROXY https://copilot-proxy.githubusercontent.com

# Check if NODE_EXTRA_CA_CERTS is set (needed for SSL inspection)
echo $env:NODE_EXTRA_CA_CERTS  # PowerShell
echo $NODE_EXTRA_CA_CERTS       # bash
```

See [network-proxy-configuration.md](../02-configuration/network-proxy-configuration.md) for full details.

## Issue 4: Slow Suggestions

### Symptoms
- Suggestions take >3 seconds to appear
- Typing feels laggy when Copilot is active
- Chat responses are slow

### Solutions

| Cause | Check | Fix |
|-------|-------|-----|
| Proxy latency | Time: `curl -w "%{time_total}" https://copilot-proxy.githubusercontent.com` | Request direct route or split-tunnel VPN |
| Large context | Many large files open | Close irrelevant tabs; Copilot uses open files as context |
| Extension conflicts | Disable other AI extensions | Disable Tabnine, Codeium, IntelliCode if present |
| Disk/CPU contention | Check Task Manager / Activity Monitor | Close resource-heavy apps; restart IDE |
| Extension outdated | Check for updates | Update GitHub Copilot extension |

### Performance Targets

| Metric | Expected | Investigate If |
|--------|:--------:|:--------------:|
| Inline suggestion latency | <1 second | >3 seconds |
| Chat response start | <2 seconds | >5 seconds |
| Agent mode step | <10 seconds | >30 seconds |

## Issue 5: Bad / Irrelevant Suggestions

### Symptoms
- Suggestions don't match codebase patterns
- Wrong framework or language conventions
- Ignores project-specific patterns

### Solutions

1. **Open relevant files** — Copilot uses open tabs as context. Open related files before coding.

2. **Use descriptive comments** — Write what you want before the code:
   ```python
   # Create a function that validates a PCI-DSS compliant card number
   # using Luhn algorithm, returning True/False
   def validate_card():
   ```

3. **Check custom instructions** — Ensure `.github/copilot-instructions.md` exists and is accurate:
   ```bash
   cat .github/copilot-instructions.md
   ```

4. **Use `@workspace`** — In chat, use `@workspace` to include full project context.

5. **Use `#file` references** — Point Copilot at specific files:
   ```
   #file:src/models/payment.py — follow this pattern for the new model
   ```

## Issue 6: Content Exclusion Blocking Needed Repos

### Symptoms
- "Content excluded" warning on files you need Copilot for
- Copilot won't generate suggestions for a specific repo

### Solutions

1. **Confirm exclusion is intentional:**
   - Check with your admin — the repo may be excluded for compliance (PCI-DSS, etc.)
   - Org exclusions are at: `https://github.com/organizations/{ORG}/settings/copilot/content_exclusion`

2. **If exclusion is a mistake:**
   - Contact GitHub admin with the repo name and justification for removal
   - Admin reviews against compliance policy and updates exclusion list

3. **Partial exclusion:**
   - Some paths within a repo may be excluded while others work
   - E.g., `src/billing/**` is excluded but `src/api/**` works fine

## Issue 7: Extension Conflicts

### Symptoms
- Duplicate suggestions from multiple AI tools
- IDE becomes slow/unresponsive
- Copilot suggestions interrupted

### Conflicting Extensions

| Extension | Conflict Type | Resolution |
|-----------|:------------:|------------|
| Tabnine | Inline suggestions compete | Disable Tabnine |
| Codeium | Inline suggestions compete | Disable Codeium |
| IntelliCode | Minor overlap | Can coexist but may cause duplicates |
| Amazon CodeWhisperer | Inline suggestions compete | Disable CodeWhisperer |
| Cursor | Fully replaces Copilot | Use one or the other |

**Resolution:** Disable conflicting extensions. Use only one inline suggestion provider.

## Collecting Diagnostic Information

When escalating to IT/admin, collect:

```bash
# 1. Copilot extension version
code --list-extensions --show-versions | grep copilot

# 2. VS Code version
code --version

# 3. Copilot diagnostic output
# Command Palette → "GitHub Copilot: Collect Diagnostics"

# 4. Network test
curl -s -o /dev/null -w "%{http_code} %{time_total}s" https://copilot-proxy.githubusercontent.com

# 5. Auth status
gh auth status
```

### Where to Get Help

| Level | Channel | Response Time |
|-------|---------|:-------------:|
| Self-service | This troubleshooting guide | Immediate |
| Team-level | Ask your Copilot Champion | Same day |
| Org-level | #copilot-support channel | Same day |
| IT/Admin | IT ticket (for network/auth issues) | 1-2 days |
| GitHub Support | https://support.github.com | 1-3 days |

## References

- [GitHub Copilot troubleshooting](https://docs.github.com/en/copilot/troubleshooting-github-copilot)
- [Troubleshooting network errors](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-network-errors-for-github-copilot)
- [Troubleshooting firewall settings](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot)
- [GitHub Copilot logs in VS Code](https://docs.github.com/en/copilot/troubleshooting-github-copilot/viewing-logs-for-github-copilot-in-your-ide)
