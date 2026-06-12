# Onboarding Guide

A template for the developer-facing onboarding document. Customize per customer and distribute via internal wiki/Confluence/Notion.

---

# Welcome to GitHub Copilot! 🚀

## Getting Started (5 minutes)

### 1. Check Your Access
- Confirm you have a Copilot seat: Go to [github.com/settings/copilot](https://github.com/settings/copilot)
- You should see "Copilot is active for your account"
- If not, contact: [IT Admin name / email]

### 2. Install the Extension
| IDE | Install Link |
|-----|-------------|
| VS Code | Extensions → search "GitHub Copilot" → Install (includes Chat) |
| Visual Studio | Extensions → Manage Extensions → search "GitHub Copilot" |
| JetBrains | Settings → Plugins → search "GitHub Copilot" |

### 3. Sign In
- Click the Copilot icon in the status bar → Sign in with your GitHub account
- Authorize the extension when prompted

### 4. Verify It Works
- Open any code file
- Start typing a function → you should see gray "ghost text" suggestions
- Press `Tab` to accept, `Esc` to dismiss

## Key Features

| Feature | How to Access | Best For |
|---------|---------------|----------|
| Inline suggestions | Just type — they appear automatically | Writing new code, boilerplate |
| Copilot Chat (panel) | `Ctrl+Shift+I` | Asking questions, explaining code |
| Inline Chat | `Ctrl+I` | Quick edits, refactoring in place |
| Slash commands | `/explain`, `/fix`, `/tests`, `/doc` in chat | Common tasks |
| `@workspace` | Type in chat | Questions about the whole project |
| Terminal help | `Ctrl+I` in terminal | CLI commands you can't remember |

## What Copilot CAN and CANNOT Access

| ✅ Can Access | ❌ Cannot Access |
|--------------|-----------------|
| Open files in your editor | Files you haven't opened |
| Files in your workspace (with @workspace) | Other repos you haven't cloned |
| Public documentation | Internal wikis (unless via Knowledge Bases) |
| Your conversation history (this session) | Other developers' conversations |

**Content Exclusions:** Some repositories/files are excluded from Copilot by org policy. You'll see a notification in the IDE if you open an excluded file.

## Our Team Conventions

- Custom instructions are configured in `.github/copilot-instructions.md` — Copilot follows these automatically
- Reusable prompts are in `.github/prompts/` — access them via `/` in chat
- Always review Copilot suggestions like you would a colleague's code

## Getting Help

| Need | Where |
|------|-------|
| Technical issues (extension, auth) | [#copilot-support channel] |
| Tips & tricks, sharing wins | [#copilot-tips channel] |
| Feedback & feature requests | [#copilot-feedback channel] |
| Office hours (live Q&A) | [Day/time] |
| Copilot Champion for your team | [Name] |

## FAQ

**Q: Does Copilot send my code to the internet?**
A: Code context is sent to GitHub's Copilot service (Azure-hosted) for suggestion generation. With Copilot Business/Enterprise, your code is NOT used to train models and is not stored.

**Q: Can I use Copilot for all my repos?**
A: Most repos, yes. Some sensitive repos are excluded by org policy. Check with your team lead if unsure.

**Q: What if Copilot gives a bad suggestion?**
A: Press `Esc` to dismiss. It's a suggestion, not a command. You're always in control.

## References

- [Getting started with GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot)
- [GitHub Copilot Chat in your IDE](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)
- [GitHub Copilot Trust Center](https://resources.github.com/copilot-trust-center/)
- [VS Code Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [JetBrains Copilot plugin](https://plugins.jetbrains.com/plugin/17718-github-copilot)
