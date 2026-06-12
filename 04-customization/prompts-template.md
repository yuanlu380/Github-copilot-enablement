# Prompt Files Template

Prompt files (`.prompt.md`) are reusable saved prompts that appear in Copilot Chat's `/` menu.

## Location

Place in: `.github/prompts/` at the repo root (or user-level in VS Code settings).

## Example Prompt Files

### `.github/prompts/create-api-endpoint.prompt.md`

```markdown
---
description: "Generate a new REST API endpoint with validation and error handling"
---

Create a new API endpoint with the following:
- Route: {{route}}
- HTTP method: {{method}}
- Request body schema (if POST/PUT): {{schema}}
- Follow our repository's error handling patterns (see existing controllers)
- Include input validation using our validation library
- Add OpenAPI/Swagger annotations
- Include a unit test file
```

### `.github/prompts/write-unit-tests.prompt.md`

```markdown
---
description: "Generate unit tests for the selected code following team conventions"
---

Write unit tests for the selected code:
- Use our test framework and assertion library
- Follow the naming pattern: MethodName_Scenario_ExpectedResult
- Include happy path, edge cases, and error cases
- Mock external dependencies
- Aim for >80% branch coverage of the selected code
```

### `.github/prompts/code-review.prompt.md`

```markdown
---
description: "Review selected code for common issues"
---

Review this code for:
1. Security vulnerabilities (injection, auth bypass, data exposure)
2. Performance issues (N+1 queries, unnecessary allocations, missing indexes)
3. Error handling gaps (unhandled exceptions, missing null checks)
4. Naming and readability
5. Missing tests

Format: bullet list with severity (Critical/Warning/Info) and specific line references.
```

### `.github/prompts/document-function.prompt.md`

```markdown
---
description: "Generate documentation for the selected function"
---

Generate documentation for this function:
- Add a docstring/JSDoc/XML comment with description, params, returns, throws
- Add inline comments for complex logic
- If this is a public API, generate an example usage snippet
```

## Rollout Steps

- [ ] Identify 3–5 common tasks developers repeat (tests, endpoints, docs, reviews)
- [ ] Draft prompt files for each
- [ ] Test with pilot team — iterate on wording
- [ ] Commit to `.github/prompts/` in relevant repos
- [ ] Announce in dev channel with usage instructions

## References

- [Adding custom prompt files](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-prompt-files)
- [Using prompt files in VS Code](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompts)
- [Prompt engineering guide (GitHub Blog)](https://github.blog/developer-skills/github/how-to-write-better-prompts-for-github-copilot/)
