# Training Materials

## Training Plan

| Session | Audience | Duration | Format | When |
|---------|----------|:--------:|--------|------|
| Copilot 101 — Getting Started | All pilot developers | 60 min | Live demo + hands-on | Day 1 |
| Copilot for Testing | Developers writing tests | 45 min | Workshop | Week 1 |
| Copilot Chat Deep Dive | All pilot developers | 45 min | Live demo | Week 1 |
| Prompt Engineering for Code | Interested developers | 30 min | Lunch & learn | Week 2 |
| Copilot for Code Review | Tech leads / reviewers | 30 min | Demo | Week 2 |
| Office Hours | Anyone | 30 min | Drop-in Q&A | Weekly |

## Session 1: Copilot 101 — Getting Started

### Agenda
1. What is Copilot (and what it isn't) — 5 min
2. Install & authenticate in VS Code — 5 min
3. Live demo: autocomplete suggestions — 10 min
4. Live demo: Copilot Chat (inline + panel) — 10 min
5. Live demo: slash commands (/explain, /fix, /tests, /doc) — 10 min
6. Hands-on exercise — 15 min
7. Q&A — 5 min

### Key Messages
- Copilot is a **pair programmer**, not a replacement — you always review and accept/reject
- Works best when you write clear comments and function signatures first
- Context matters: open relevant files, use `@workspace` in chat
- Code review process is unchanged — treat Copilot suggestions like any code

### Hands-On Exercise Ideas
- [ ] Write a function with a comment, let Copilot generate implementation
- [ ] Use `/tests` to generate unit tests for an existing function
- [ ] Use `/explain` on unfamiliar code in the codebase
- [ ] Use `/fix` on a known bug
- [ ] Use inline chat to refactor a method

## Tips & Tricks Sheet (Handout)

| Tip | How |
|-----|-----|
| Better suggestions | Write a descriptive comment above the function |
| Multiple suggestions | `Alt+]` / `Alt+[` to cycle through alternatives |
| Inline chat | `Ctrl+I` for quick edits without leaving the editor |
| Explain code | Select code → `/explain` in chat |
| Generate tests | Select function → `/tests` in chat |
| Fix errors | Select error → `/fix` in chat |
| Workspace context | Use `@workspace` in chat for project-wide questions |
| Reference files | Use `#file:filename.ts` in chat to point at specific files |
| Terminal help | `Ctrl+I` in terminal for CLI command suggestions |

## Resources to Share

- [GitHub Copilot documentation](https://docs.github.com/en/copilot)
- [GitHub Copilot Trust Center](https://resources.github.com/copilot-trust-center/)
- [Prompt engineering guide](https://github.blog/developer-skills/github/how-to-write-better-prompts-for-github-copilot/)
- Internal Slack/Teams channel: #copilot-pilot

## References

- [GitHub Copilot documentation](https://docs.github.com/en/copilot)
- [GitHub Copilot Chat documentation](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)
- [Prompt engineering guide (GitHub Blog)](https://github.blog/developer-skills/github/how-to-write-better-prompts-for-github-copilot/)
- [GitHub Copilot keyboard shortcuts](https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot#keyboard-shortcuts)
- [GitHub Copilot Trust Center](https://resources.github.com/copilot-trust-center/)
