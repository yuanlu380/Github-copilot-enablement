**Summary:** **GitHub Enterprise** provides **built-in identity management** that covers most aspects of user onboarding and account provisioning -- often eliminating the need for a custom agent. For example, **Azure AD/Entra ID** or other IdPs can **automatically invite, provision, and de-provision users via SCIM integration**[^1] [^2]. **Enterprise Managed Users (EMU)**, a GitHub Enterprise Cloud feature, gives organizations **full control over accounts**: user accounts and team memberships are provisioned directly from an IdP, with centralized **SSO** and **no external collaboration**[^3]. **GitHub Enterprise Server** (self-hosted) similarly supports **SAML SSO + SCIM** to manage accounts from your IdP, even behind your firewall[^4] [^5]. These native capabilities handle standard tasks -- inviting new hires, mapping them to teams, enforcing **role-based access**, applying corporate policies, and automatic **offboarding** -- reliably and at scale. Only in **special cases** (like complex cross-system workflows, conditional approval rules, or unsupported identity setups) would you consider building a **custom onboarding agent**. Below we delve into current options and identify any gaps requiring custom development, followed by a comparison of existing solutions vs. a custom-built agent.

[^6] [^7] [^8]

## GitHub Enterprise Cloud: SSO, SCIM & Enterprise Managed Users

**GitHub's cloud platform integrates deeply with enterprise identity providers**, which cover almost all typical onboarding tasks:

- **SAML/OIDC Single Sign-On (SSO):** Organizations can enforce SSO so that every user must authenticate via the corporate IdP (Azure AD/Entra ID, Okta, etc.) to access GitHub content[^9]. SSO ensures that **role-based access** flows from your identity system -- e.g. if an employee leaves, revoking their IdP account immediately blocks GitHub access. SSO is a cornerstone of enterprise GitHub: it provides centralized login security and a point of integration for provisioning.

- **SCIM Provisioning (Standard Enterprise Accounts):** With **SCIM automation**, GitHub Enterprise Cloud (with an Enterprise plan) can **automatically invite and remove users** from organizations based on IdP user/group assignments[^10] [^11]. For example, Azure AD's provisioning service can be configured to **send SCIM calls** to GitHub whenever a user is added to a specific Azure AD group (like "GitHub Developers")[^12]. GitHub's SCIM API then **creates or updates the user's membership** in the Enterprise Cloud **organization** -- sending the person an email invite if they haven't joined yet[^13]. Removal from the group triggers removing the user's org membership, effectively **offboarding** them. This works at the **organization level**: each GitHub organization (or enterprise account) can have SCIM managed membership tied to IdP groups[^14] [^15]. *Key benefit:* **No manual invites or removals** -- identity changes in your IdP immediately reflect in GitHub.

- **Enterprise Managed Users (GitHub Cloud EMU):** EMU is an advanced option for customers needing **strict governance and standardized user accounts**. With EMU, **all user accounts are managed solely by your IdP** -- users **cannot sign up on their own or use personal GitHub accounts**[^16]. Your IdP **creates accounts directly via SCIM** (no email invites needed), controls their usernames and profile details, and manages their **team/organization memberships**[^17] [^18]. EMU requires SSO (SAML or OIDC) and SCIM, so it's a fully integrated lifecycle: **provision, login, manage roles, and deprovision from one place**[^19] [^20]. **Team assignments** can even be automated: GitHub allows mapping IdP groups to GitHub teams, so membership changes in your IdP drive the correct **team and repository access** on GitHub[^21] [^22]. For example, linking an Azure AD group "Project Alpha Devs" to a GitHub team means when someone is added to that AAD group, SCIM adds them to the GitHub team (and thereby any repos the team has access to) -- **no separate step by a GitHub admin**[^23] [^24]. EMU accounts also have **compliance safeguards**: they **cannot create public repos or collaborate outside** your enterprise scope[^25] [^26], which is ideal for regulated industries concerned with data leakage. *Bottom line:* If you have **Enterprise Managed Users enabled (GitHub Cloud)**, the **onboarding is virtually fully automated via your IdP**, and **offboarding** (removing access) is as simple as disabling the user or group in the IdP -- GitHub receives the SCIM call to suspend or remove the account[^27] [^28].

- **Built-in Policy Inheritance:** On GitHub Enterprise Cloud, many **security and compliance policies** automatically apply to new users. For example, if SSO is enforced, **new invites must authenticate via SSO** before accessing any org resources[^29]. Enterprises can also require members to **enable 2FA** (when not using SSO) and can configure **enterprise-level rulesets** that apply to all repositories (ensuring any code new users push meets branch protection, etc.). In short, new users inherit all **organization and enterprise policies by default** -- no extra steps needed for each user beyond adding them to the correct team(s). In EMU scenarios, **Conditional Access Policies** from your IdP can apply as well, adding further conditional checks when users attempt access[^30].

**What's left to do manually?** In standard (non-EMU) Enterprise Cloud setups, an admin might still choose to do **some initial setup for new users** beyond identity provisioning -- e.g. adding them to relevant teams or giving them repository access, if not fully handled through SCIM group assignments. However, even that can often be automated: if your IdP doesn't support fine-grained team mapping (non-EMU mode), you can use **GitHub Actions** or **scripts** to add new org members to default teams when they join (for instance, triggered by a webhook when a new user is added, the script adds them to an "All Developers" team). **Enterprise Managed Users** handle team membership via IdP groups natively[^31] [^32]. **Repository access** is linked to team membership; an admin pre-configures which teams have access to what repos (this is a one-time setup per team/repo, not per user). So as long as an **onboarded user is in the right teams**, they automatically get the correct repo permissions. In summary, the heavy lifting of **account creation, SSO linking, org membership, and team sync** is largely solved by GitHub's native integration **with your IdP**, so little to no custom development is needed for typical onboarding flows.

## GitHub Enterprise Server: On-Premise SSO & Provisioning

For **GitHub Enterprise Server** (self-hosted instances), the story is similar -- albeit fully within your controlled environment:

- **SAML SSO** is supported on GH Enterprise Server, so you can link login to your corporate identity (e.g. via Azure AD, Okta, Ping, etc.). This ensures all **authentication and access** can be centrally managed, with options for fallback accounts for admin access in case the IdP is unavailable[^33].

- **SCIM for GH Enterprise Server:** Modern versions of GitHub Enterprise Server (≥3.14) allow **SCIM user provisioning** by an IdP to manage user accounts and org memberships[^34] [^35]. As on cloud, your IdP (if configured as a SCIM client) can create new user accounts on the GH Server instance, update their attributes, and deactivate accounts automatically[^36]. For example, an IdP like Azure AD or Okta can be configured (via its app gallery template or custom integration) to call the GH Server's SCIM API whenever a user is added/removed from a designated group[^37] [^38]. A bit of setup is required (enabling SCIM in the GH server admin console and providing a special **SCIM admin token** to the IdP)[^39] [^40], but once in place, it **automates creating accounts and adding them to the enterprise on the GH server**. This is essentially the on-prem equivalent of EMU in terms of user lifecycle management: the IdP fully drives the presence of users on the system\*\*[^41] [^42]\*\*. Offboarding (deprovisioning) is also taken care of by SCIM calls from the IdP, which can either disable or delete the user account on the GH server instance, according to corporate policy[^43].

- **Team & Access Setup:** On GH Enterprise Server, **teams** exist within organizations similarly to cloud. Direct IdP-group-to-team sync features may not be as sophisticated out-of-the-box as EMU's (which is cloud-only), but admins can still integrate through creative means. Often, companies will manage team membership by aligning it with **IdP groups** in an indirect way -- for instance, using a scheduled script or a tool like **Terraform** to regularly sync GH teams with LDAP/AD groups. Alternatively, **GitHub's API** and **webhooks** allow building a small internal service that updates team membership when identity changes occur (if SCIM doesn't cover group-to-team mapping natively on server, a minor custom script can fill that gap). In practice, many GH Enterprise Server customers use **SCIM** for core user provisioning and then handle the last step of **fine-grained access assignment** via configuration-as-code or manual processes.

*Overall*, **GitHub Enterprise Server's identity integration** ensures you can still automate most of onboarding and offboarding using your corporate IdP and possibly some scripting if needed. Crucially, this approach **meets strict compliance needs** since everything runs on-premises: user credentials never leave your control, and account data stays within the GH server instance inside your infrastructure.

## Third-Party Tools & Developer Portals for Onboarding

Beyond GitHub's provided features, many organizations leverage **platform engineering tools** to streamline onboarding across multiple systems (not just GitHub). If you already have an **internal developer portal** or use an off-the-shelf one (like **Backstage** by Spotify or similar platforms), you can integrate GitHub account setup into your broader onboarding workflow. For example, one approach uses **Backstage** with plugins and **Crossplane** (Kubernetes-based infrastructure as code) to create GitHub teams and repositories, orchestrated by **GitHub Actions** and **ArgoCD** for continuous reconciliation[^44] [^45]. In such a setup, when a new employee is added in the internal portal (which is connected to HR or identity data), the portal can trigger automated workflows to create the user's GitHub account (or invite them), assign them to appropriate teams, and even **bootstrap "starter" repository resources** for them if needed (for instance, seeding a personal sandbox repo or granting access to a standard "onboarding" project)[^46].

**Identity Provider-driven solutions** (like Azure AD or Okta) are effectively third-party "agents" themselves. They can be configured to handle not only the base user provisioning (via SCIM, as discussed), but also some role assignment if the target app supports it. In GitHub's case, **IdP Group mappings** (especially with **Enterprise Managed Users**) cover roles like team membership thoroughly[^47] [^48]. If additional logic is needed -- for example, choosing different sets of repo accesses based on the user's department or role -- some companies implement a **lightweight custom provisioning service** that sits between the IdP and GitHub. This service might pull extra context (e.g., from an HR database or ticketing system) and then call **GitHub's REST API** or **GraphQL API** to fine-tune permissions (like adding a finance user to an "Accounting" team's repos or setting them as a code owner in specific directories). However, such cases are edge scenarios: often the simpler solution is to leverage **existing tools in combination** (like SCIM plus a one-time manual assignment for special cases, or an infra-as-code approach) rather than a complex, fully custom agent.

**Copilot and AI Agents:** Today, **GitHub Copilot** and its AI "agents" are oriented towards code and project tasks (coding assistance, PR generation, code reviews) and **do not manage user accounts or admin settings out-of-the-box**. GitHub's "Copilot for Business" doesn't provision accounts; it **assumes your identity and org membership are already in place** (then helps with code inside those accounts). GitHub has introduced an **"agent" concept (Copilot Chat, PR AI reviewer)**, but currently these agents run within a repository context, not as general org admin bots. *In short, there's no GitHub-provided AI agent to handle user onboarding tasks specifically.* If needed, one could theoretically script an internal chatbot (e.g., a Slack/Teams bot that calls the GitHub API to add users) -- but again, this amounts to building a custom integration and is rarely necessary given the robust partner solutions.

## Gaps Requiring Custom Solutions

With such comprehensive **IdP integration and automation** in place, when might a custom agent be justified? **One scenario** is if your onboarding process spans multiple systems (beyond GitHub) with conditional logic or manual approvals. For example, consider a regulated enterprise where adding a developer to GitHub also requires approval from their manager, setting up their access in a ticketing system, and sending a hardware token for 2FA. While IdP and GitHub integration covers the technical account creation, orchestrating these **cross-system workflows** might demand a custom "super" agent or a process (via a script, or an internal portal like ServiceNow or Backstage) to tie everything together. Another scenario is if you want a more **interactive onboarding assistant** for new developers -- e.g. a Slack bot that welcomes them and helps set up their first repo, or an AI agent that can answer internal GitHub policy questions. These are valuable, but they go beyond what GitHub natively provides; building them would be a custom effort.

However, these cases are **the exception**. Most enterprises find **existing tools adequate**. For instance, **Entra ID** or **Okta** can handle **95+% of the provisioning and offboarding steps** for GitHub if set up properly[^49] [^50]. GitHub's audit logs also capture SSO logins and SCIM events in detail for compliance tracking, even noting which IdP user triggered a provisioning action[^51] [^52]. Where needed, you can use **small scripts or integrations** (often a one-time effort) to cover any minor gaps (like automatically sending a welcome message or adding a user to a set of default repos). This is usually simpler than developing a full-blown custom agent from scratch.

## Comparison: **Existing Solutions vs. Custom Agent** for GitHub User Onboarding

Here's a side-by-side look at how **built-in/third-party solutions** compare to **building your own agent** in key areas:

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Aspect                          Using Built-In & Third-Party Solutions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Building a Custom Agent
  ------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Capabilities                    **Comprehensive standard support:** Out-of-the-box support for user creation, SSO enforcement, team membership (via IdP groups for EMU or SCIM provisioning), and basic access configurations. Covers mainstream needs for **adding/removing users, syncing profiles, applying policies and 2FA/SSO requirements**[^53] [^54]. Often extended via simple config (e.g. link IdP group to team) or minimal scripts.                                                                                                                                                                                                   **Highly tailored:** You can implement any custom logic beyond standard capabilities (multi-step approvals, conditional assignments, integration with HR, ITSM, etc.). This flexibility can address unique org workflows that off-the-shelf tools don't handle. However, *every capability must be built and maintained by you* -- more effort than adjusting existing tools.

  Extensibility                   **Configuration-driven and some coding via APIs:** GitHub's platform offers integration points (SCIM API, REST API, webhooks) to tweak behavior. Third-party IdPs often allow **role mapping or attribute mapping** (e.g., customizing which GitHub org or team an IdP group corresponds to)[^55] [^56]. Solutions like **Backstage or Terraform** provide frameworks to extend onboarding flows without starting from scratch[^57]. That said, these stay within known boundaries: e.g., SCIM can't prompt a human approval by itself -- you'd need add-ons for that.                                              **Unlimited customization (but from scratch):** A custom agent can implement any extension you need -- it can call multiple APIs (GitHub, HR, IT) and include human-in-the-loop steps. This means you can incorporate unique business rules (like waiting for manager approval, conditionally assigning different repository sets based on role) seamlessly. The trade-off is **complexity**: you'll be writing these extensions as code and ensuring they work reliably.

  Security & Compliance           **Enterprise-grade & audited:** IdP-based provisioning and SSO come with strong security controls. There's **least-privilege** integration (e.g., SCIM tokens with constrained scopes)[^58] and every identity change is captured in **GitHub's audit logs**[^59]. EMU provides a locked-down environment that aligns with high compliance needs (no external sharing, enforced SSO)[^60] [^61]. Since these solutions are vendor-supported, they comply with standards and undergo security reviews, which is a plus for regulated enterprises.                                                                    **Full control but heavy responsibility:** If you build your own, you can host it internally (keeping data on-prem if needed) and embed any security measures required by policy. You're free to enforce additional checks against internal compliance systems or ITSM processes. However, you **must handle all security aspects** (authenticating to GitHub's API securely, protecting tokens, logging actions for audit, etc.) yourself. A bug could inadvertently over-provision or fail to deprovision, so rigorous testing and monitoring are needed.

  Operational Overhead            **Low ongoing maintenance:** Using built-in features means relying on GitHub and IdP services that are maintained and updated by those providers. Once configured, SCIM & SSO typically require minimal upkeep; changes in user status just flow automatically. You will still need periodic reviews (ensuring correct team mappings, etc.), but these tasks are part of normal admin. Third-party portals (like Backstage) also come with their maintenance, but they are widely used and documented. **Support** is available from providers (GitHub, IdP vendor, open-source communities) for troubleshooting.   **Significant maintenance commitment:** A custom agent is effectively a piece of software you must run and support. It will need hosting, error handling (e.g., what if GitHub API calls fail?), updates when GitHub or IdP APIs change, etc. Over time, the cost of this can be non-trivial. It might make sense only if it's part of a larger internal platform where you have dedicated owners. Otherwise, repurposing and configuring known solutions (with only minor custom code) is usually more sustainable.

  Fit for Regulated Enterprises   **Very high fit using EMU or on-prem:** GitHub's solutions are designed to meet strict enterprise requirements. EMU on GitHub Cloud is specifically targeted at **financial, government, and other highly regulated customers**, giving them **complete control of user accounts and data sharing**[^62] [^63]. If data sovereignty is a concern, GitHub Enterprise Server with SSO/SCIM offers a fully self-hosted route. Identity-driven automation ensures that no unauthorized accounts exist and that all access is approved by corporate identity management.                                                 **Customizable for niche needs:** If a regulated org has a unique constraint that even EMU or on-prem doesn't address (for instance, an **air-gapped environment** with no Internet access), a custom solution might be necessary. E.g., if the GH Enterprise Server can't directly reach the IdP due to network isolation, one might build an offline sync agent. Such cases are rare; generally, GitHub's standard enterprise offerings (with IdP integration) are sufficient.
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Conclusion:** In 2026, **the ecosystem for GitHub enterprise user onboarding is mature**. Using **GitHub's built-in features (SSO, SCIM, EMU)** combined with **IdP capabilities** or **platform tools** covers most requirements for inviting, provisioning, and managing users in a compliant way. These solutions minimize manual work and align with enterprise policies by design. A **custom agent** should be a last resort -- consider it only if your environment demands something very specific that **no existing integration or tool can achieve**. By leveraging the robust tooling already available, you can avoid reinventing the wheel and focus development effort on the exceptional cases that truly need custom handling. [^64] [^65]

[^1]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-provisioning-tutorial>

[^2]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-provisioning-tutorial>

[^3]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^4]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^5]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^6]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^7]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^8]: <https://medium.com/@sachin.malanki/onboarding-users-to-github-using-backstage-d690f4448a20>

[^9]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^10]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-provisioning-tutorial>

[^11]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-provisioning-tutorial>

[^12]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-provisioning-tutorial>

[^13]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-provisioning-tutorial>

[^14]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-provisioning-tutorial>

[^15]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-provisioning-tutorial>

[^16]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^17]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^18]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^19]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^20]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^21]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^22]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^23]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^24]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^25]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^26]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^27]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-provisioning-tutorial>

[^28]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-provisioning-tutorial>

[^29]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^30]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^31]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^32]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^33]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^34]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^35]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^36]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^37]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^38]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^39]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^40]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^41]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^42]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^43]: <https://docs.github.com/enterprise-server/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users>

[^44]: <https://medium.com/@sachin.malanki/onboarding-users-to-github-using-backstage-d690f4448a20>

[^45]: <https://medium.com/@sachin.malanki/onboarding-users-to-github-using-backstage-d690f4448a20>

[^46]: <https://medium.com/@sachin.malanki/onboarding-users-to-github-using-backstage-d690f4448a20>

[^47]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^48]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^49]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-provisioning-tutorial>

[^50]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-provisioning-tutorial>

[^51]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^52]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^53]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^54]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-provisioning-tutorial>

[^55]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^56]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^57]: <https://medium.com/@sachin.malanki/onboarding-users-to-github-using-backstage-d690f4448a20>

[^58]: <https://github.blog/changelog/2024-09-26-bring-your-own-identity-provider-to-enterprise-managed-users/>

[^59]: <https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups>

[^60]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^61]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^62]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^63]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^64]: <https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/adding-users-to-your-enterprise>

[^65]: <https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-provisioning-tutorial>
