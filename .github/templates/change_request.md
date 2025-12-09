---
name: "Change Request"
about: "Propose a change that will be delivered via PR with security/compliance controls."
assignees: []
---

> **Note:** Fill out all required sections. This issue should be closed by a PR that includes **`Closes #<this_issue_number>`**.

## Summary

<!-- What is changing and why? Keep it brief and actionable. -->

---

## Change Type

- [ ] Business logic (features/bug fixes)
- [ ] Logging/Compliance
- [ ] Security-hardening
- [ ] Rollback-only change

**Affected Areas (check all that apply):**

- [ ] Business logic
- [ ] Logging/Compliance
- [ ] Security/Access control
- [ ] Other: **\_\_\_\_**

**Risk Level (choose one):**

- [ ] Low
- [ ] Medium
- [ ] High

---

## Testing Plan

<!-- What tests will be added/updated? Unit, integration, E2E, smoke. -->

- Unit:
- Integration:
- E2E/Smoke:
- Test data/fixtures:
- Other:

---

## Security & Compliance

Confirm the following (as applicable):

- [ ] No PHI/PII introduced or exposed
- [ ] **Secrets hygiene** respected (no secrets in code; approved secrets store, e.g., AWS Secrets Manager)
- [ ] Access control changes documented (who/what/why)
- [ ] Logging/monitoring updated if needed
- [ ] OWASP Top 10 risks considered for this change

Notes (optional):

<!-- Threats, mitigations, data classification, IAM changes, etc. -->

---

## Rollback / Recovery Plan

<!-- How to revert safely (previous artifact/tag, feature flag, DB strategy). -->

- Application rollback:
- Verification steps post-rollback:

---

## Ownership & Reviewers

- **Owner:** @**\_\_\_\_**
- **Suggested reviewers:** @neuropacman
