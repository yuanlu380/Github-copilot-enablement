# Phase 4: Customization — Action Items

**Timeline:** Weeks 8–10 (overlaps with late pilot)  
**Customer:** Manufacturing Supplier (~250 devs, SOX/SOC 2/ITAR, Java/TS/Python/SQL)

## Custom Instructions

- [ ] Create `.github/copilot-instructions.md` in the internal org's main repos with:
  - Java/Spring Boot conventions (constructor injection, naming standards)
  - TypeScript/React conventions (strict mode, functional components)
  - Python conventions (type hints, pydantic models)
  - SQL conventions (parameterized queries only, no string concatenation)
  - Security rules (no hardcoded credentials, input validation)
  - Domain terminology (PO, ASN, EDI, eaches, etc.)
- [ ] Review instructions with tech leads from each language stack
- [ ] Test: open a repo with instructions → verify Copilot follows conventions in suggestions

## Prompt Files

- [ ] Create `.github/prompts/` directory in key repos
- [ ] Write `generate-edi-parser.prompt.md` — scaffold EDI 850/856 message parsers
- [ ] Write `spring-boot-service.prompt.md` — new microservice from domain model
- [ ] Write `demand-forecast-pipeline.prompt.md` — Python pipeline with standard error handling
- [ ] Write `api-connector-test.prompt.md` — integration test template for partner APIs
- [ ] Test each prompt file with pilot team champions — iterate based on output quality

## Agent Definitions (Optional, Advanced)

- [ ] Evaluate whether custom agents would help (e.g., a "supply-chain-reviewer" agent)
- [ ] If yes: create `.github/agents/<name>.agent.md` with description, tools, and system prompt
- [ ] Test agent with champion developers before broad rollout

## Validation

- [ ] Pilot champions confirm: custom instructions improve suggestion relevance
- [ ] Pilot champions confirm: prompt files save time on common tasks
- [ ] Iterate on instructions/prompts based on Week 8–9 feedback
- [ ] Finalize for Wave 1 rollout

## Deliverable

- [ ] `.github/copilot-instructions.md` committed and active in key repos
- [ ] 3–5 reusable prompt files committed to `.github/prompts/`
- [ ] Documentation for developers on how to use prompt files

## References

- Template: [instructions-template.md](./instructions-template.md)
- Template: [prompts-template.md](./prompts-template.md)
- Template: [agents-template.md](./agents-template.md)
- [Custom instructions docs](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
- [Prompt files docs](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-prompt-files)
