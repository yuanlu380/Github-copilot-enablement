# Custom Agents Template

Custom agents (chat participants) extend Copilot Chat with domain-specific expertise. Available in VS Code via `.github/agents/` or as Copilot Extensions.

## Location

Place in: `.github/agents/` at the repo root.

## Example Agent File

### `.github/agents/AGENTS.md`

```markdown
---
name: "backend-expert"
description: "Expert in our backend architecture, API patterns, and database conventions"
tools: ["semantic_search", "read_file", "run_in_terminal"]
---

You are an expert in our backend services built with [.NET 8 / Node.js / Python].

## Architecture Knowledge
- We use Clean Architecture with CQRS pattern
- API layer → Application layer → Domain layer → Infrastructure layer
- All commands go through MediatR pipeline
- Queries use read-only DbContext for performance

## Database Conventions
- Entity Framework Core with SQL Server
- Migrations managed via `dotnet ef`
- Naming: tables are PascalCase plural, columns are PascalCase
- All entities inherit from `BaseEntity` (Id, CreatedAt, UpdatedAt)

## API Conventions
- All endpoints return `ApiResponse<T>` wrapper
- Use `[Authorize]` attribute with policy-based auth
- Validation via FluentValidation in the pipeline
- Pagination uses `PagedRequest` / `PagedResponse<T>`

## When helping developers:
- Always suggest dependency injection over static methods
- Recommend creating a command/query handler for new features
- Point to existing similar implementations as examples
- Warn about N+1 queries in EF Core
```

## Types of Custom Agents to Consider

| Agent | Purpose | Who Maintains |
|-------|---------|---------------|
| Backend Expert | API patterns, DB conventions, architecture | Backend tech lead |
| Frontend Expert | Component patterns, state management, styling | Frontend tech lead |
| DevOps Helper | CI/CD pipelines, deployment, infrastructure | Platform team |
| Security Reviewer | Security patterns, threat modeling, compliance | Security team |
| Onboarding Guide | Repo structure, getting started, common tasks | Engineering manager |

## Rollout Steps

- [ ] Identify top 2–3 domains where developers need most help
- [ ] Draft agent definitions with domain knowledge
- [ ] Test with pilot team
- [ ] Iterate based on quality of responses
- [ ] Commit to repos and document usage (`@agent-name` in chat)

## References

- [Creating custom chat agents (VS Code)](https://code.visualstudio.com/docs/copilot/copilot-customization#_chat-agents)
- [GitHub Copilot Extensions](https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions)
- [VS Code agent mode documentation](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
