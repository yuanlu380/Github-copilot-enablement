# Network & Proxy Configuration

## Overview

GitHub Copilot requires network connectivity to GitHub's servers. Enterprise environments with proxies, firewalls, SSL inspection, or VPNs commonly block Copilot without explicit allowlisting. This is the **#1 cause of "Copilot not working"** in enterprise deployments.

## Required Network Access

### Domains to Allow

| Domain | Port | Protocol | Purpose |
|--------|:----:|:--------:|---------|
| `github.com` | 443 | HTTPS | Authentication, seat verification |
| `api.github.com` | 443 | HTTPS | API calls, seat status |
| `copilot-proxy.githubusercontent.com` | 443 | HTTPS | Copilot suggestions (primary) |
| `copilot-telemetry.githubusercontent.com` | 443 | HTTPS | Telemetry (optional but recommended) |
| `default.exp-tas.com` | 443 | HTTPS | Feature flags / experimentation |
| `*.githubcopilot.com` | 443 | HTTPS | Copilot service endpoints |
| `github.copilot.com` | 443 | HTTPS | Copilot Chat |
| `api.githubcopilot.com` | 443 | HTTPS | Copilot API |
| `vscode.dev` | 443 | HTTPS | VS Code web features |
| `*.vscode-cdn.net` | 443 | HTTPS | VS Code extension downloads |
| `marketplace.visualstudio.com` | 443 | HTTPS | Extension marketplace |
| `update.code.visualstudio.com` | 443 | HTTPS | VS Code updates |

### For GitHub Enterprise Server (GHES)

| Additional Domain | Purpose |
|-------------------|---------|
| `GHES_HOSTNAME` | Your Enterprise Server instance |
| `uploads.github.com` | If using GHEC alongside GHES |

## Proxy Configuration

### VS Code Proxy Settings

```json
// settings.json
{
  "http.proxy": "http://proxy.company.com:8080",
  "http.proxyStrictSSL": true,
  "http.proxyAuthorization": null,
  "github.copilot.advanced": {
    "debug.overrideProxyUrl": "http://proxy.company.com:8080"
  }
}
```

### Environment Variables (All IDEs)

```bash
# Linux/macOS
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080
export NO_PROXY=localhost,127.0.0.1,.company.com

# Windows (PowerShell)
$env:HTTP_PROXY = "http://proxy.company.com:8080"
$env:HTTPS_PROXY = "http://proxy.company.com:8080"
$env:NO_PROXY = "localhost,127.0.0.1,.company.com"
```

### JetBrains Proxy Settings

Settings → Appearance & Behavior → System Settings → HTTP Proxy:
- Manual proxy configuration
- Host: `proxy.company.com`
- Port: `8080`
- Check: "Proxy authentication" if required

## SSL Inspection / Custom Certificates

Many enterprises use SSL inspection (MITM proxy) that breaks TLS connections. Copilot will fail with certificate errors.

### Symptoms
- "Unable to connect to Copilot"
- `UNABLE_GET_ISSUER_CERT_LOCALLY` error
- `SELF_SIGNED_CERT_IN_CHAIN` error
- Suggestions never appear, no error shown

### Fix: Trust Corporate Root CA

```bash
# VS Code — set custom CA bundle
# settings.json
{
  "http.proxyStrictSSL": true,
  "http.systemCertificates": true
}

# Node.js (used by VS Code extensions)
# Set environment variable:
NODE_EXTRA_CA_CERTS=/path/to/corporate-root-ca.pem

# Windows: Import cert to system trust store
certutil -addstore -f "ROOT" corporate-root-ca.cer

# macOS: Import to system keychain
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain corporate-root-ca.cer

# Linux: Copy and update
sudo cp corporate-root-ca.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### VS Code Setting for Custom CA

```json
{
  "github.copilot.advanced": {
    "debug.overrideCAPIUrl": "",
    "debug.overrideProxyUrl": ""
  }
}
```

## Firewall Rules

### Minimum Required (Allow Outbound)

```
ALLOW TCP 443 → github.com
ALLOW TCP 443 → *.githubusercontent.com
ALLOW TCP 443 → *.githubcopilot.com
ALLOW TCP 443 → default.exp-tas.com
```

### If Using IP-Based Rules

GitHub's IP ranges change frequently. Use:
- `https://api.github.com/meta` — returns current IP ranges
- Key section: `copilot` (Copilot-specific IPs)

```bash
# Fetch current Copilot IP ranges
curl -s https://api.github.com/meta | jq '.copilot'
```

## VPN Split Tunneling

| Recommendation | Reason |
|---------------|--------|
| Route Copilot traffic through VPN | If proxy/firewall is VPN-only |
| Split-tunnel Copilot domains | Better latency for suggestions |

Check with network team: Does VPN route all traffic, or only corporate? If split-tunnel, ensure Copilot domains are routed correctly.

## Testing Connectivity

### Quick Diagnostic

```bash
# Test basic connectivity
curl -v https://copilot-proxy.githubusercontent.com

# Test through proxy
curl -v --proxy http://proxy.company.com:8080 https://copilot-proxy.githubusercontent.com

# Test DNS resolution
nslookup copilot-proxy.githubusercontent.com
nslookup api.githubcopilot.com

# Test with GitHub CLI
gh auth status
gh copilot suggest "hello world in python"
```

### VS Code Diagnostic

1. Open Command Palette → "GitHub Copilot: Diagnostics"
2. Check Output panel → select "GitHub Copilot" from dropdown
3. Look for connection errors, auth failures, proxy issues

### Expected Successful Response

```
HTTP/2 200
server: GitHub.com
x-github-request-id: XXXX
```

## Common Issues & Solutions

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| No suggestions, no error | Proxy blocking silently | Add domains to allowlist |
| "Certificate error" | SSL inspection | Trust corporate CA (NODE_EXTRA_CA_CERTS) |
| "Unable to authenticate" | SSO token not passing through proxy | Ensure auth headers forwarded |
| Slow suggestions (>5 sec) | High-latency proxy route | Consider split-tunnel or direct route |
| Works on VPN, fails off VPN | Domains only resolvable on corporate DNS | Add DNS conditional forwarding |
| Works in browser, not IDE | IDE not using system proxy | Set proxy in IDE settings + env vars |
| Intermittent failures | Proxy connection limits | Increase concurrent connection limit |

## Configuration Checklist

- [ ] All required domains added to firewall/proxy allowlist
- [ ] Corporate root CA trusted in developer machines (if SSL inspection)
- [ ] `NODE_EXTRA_CA_CERTS` set in developer environment (if custom CA)
- [ ] Proxy settings configured in IDE (VS Code, JetBrains, etc.)
- [ ] VPN routing confirmed for Copilot domains
- [ ] Tested connectivity from developer workstation
- [ ] Tested connectivity from CI/CD runners (if using Copilot in Actions)
- [ ] Documented proxy/network config in developer onboarding guide
- [ ] Network team aware of Copilot domains (for change management)

## Network Team Request Template

Use this to request firewall/proxy changes from your network team:

```
Subject: Allow GitHub Copilot network access

We are deploying GitHub Copilot to [X] developers. Please allow outbound 
HTTPS (TCP 443) traffic to the following domains:

- github.com
- api.github.com
- *.githubusercontent.com
- *.githubcopilot.com
- github.copilot.com
- default.exp-tas.com

These are GitHub-owned endpoints used for AI code assistance.
Traffic is TLS 1.2+ encrypted.

If SSL inspection is in use, please either:
a) Bypass inspection for these domains, OR
b) Ensure our corporate root CA is distributed to all developer machines

Contact: [Your name]
Timeline: [Date needed by]
```

## References

- [GitHub Copilot network requirements](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-network-errors-for-github-copilot)
- [GitHub IP ranges (meta API)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)
- [Configuring proxy for VS Code](https://code.visualstudio.com/docs/setup/network)
- [GitHub Copilot troubleshooting](https://docs.github.com/en/copilot/troubleshooting-github-copilot)
