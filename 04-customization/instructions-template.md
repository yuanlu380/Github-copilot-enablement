# Custom Instructions Template

Custom instructions tell Copilot about your codebase conventions so suggestions match your style.

## File: `.github/copilot-instructions.md`

Place this in the root of your repository:

```markdown
# Copilot Instructions

## Language & Framework
- This project uses [TypeScript/Python/C#/Java] with [framework]
- Target runtime: [Node 20 / .NET 8 / Python 3.12 / etc.]

## Code Style
- Use [naming convention: camelCase / PascalCase / snake_case] for [variables/functions/classes]
- Max line length: [80/100/120] characters
- Prefer [async/await over callbacks / promises]
- Use [specific patterns: repository pattern, CQRS, etc.]

## Architecture
- This is a [monolith / microservices / serverless] application
- API style: [REST / GraphQL / gRPC]
- Database: [PostgreSQL / Cosmos DB / SQL Server] using [ORM: EF Core / Prisma / SQLAlchemy]

## Testing
- Test framework: [Jest / pytest / xUnit / NUnit]
- Naming convention for tests: [MethodName_Scenario_ExpectedResult]
- Minimum coverage target: [80%]
- Prefer [unit tests with mocks / integration tests / both]

## Security
- Never suggest hardcoded secrets or connection strings
- Always use [managed identity / Key Vault / environment variables] for credentials
- Input validation required on all public API endpoints

## Documentation
- Use [JSDoc / XML docs / Google-style docstrings] for public APIs
- Every public function needs a description, params, and return type documented

## Dos and Don'ts
- DO use dependency injection
- DO handle errors with [specific pattern]
- DON'T use [deprecated API / pattern to avoid]
- DON'T use console.log in production code — use [structured logging library]
```

## Per-Team Customization Checklist

- [ ] Identify team's top 3–5 coding conventions that Copilot often gets wrong
- [ ] Draft `.github/copilot-instructions.md` with specific guidance
- [ ] Have tech lead review and approve
- [ ] Commit to repository default branch
- [ ] Validate: ask Copilot to generate code and verify it follows instructions

## References

- [Adding repository custom instructions for GitHub Copilot](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
- [Managing Copilot policies for your organization](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization)
- [GitHub blog — Custom instructions](https://github.blog/changelog/2024-02-13-custom-instructions-for-github-copilot-in-vs-code/)
