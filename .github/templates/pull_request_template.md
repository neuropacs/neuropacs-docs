# Pull Request Template

## Summary

**Linked Issue (required):** Closes #\_\_\_\_

<!-- Use "Closes #123" (or "Fixes #123"). PRs without an issue link will not be merged. -->
<!-- What does this change do? Why? -->

## Change Type

- [ ] Business logic (features/bug fixes)
- [ ] Infrastructure (AWS CDK)
- [ ] Database schema
- [ ] Logging/Compliance
- [ ] Security-hardening
- [ ] Rollback-only change

Notes:

<!-- Optional details -->

---

## Security & Compliance

- [ ] No PHI/PII introduced/exposed
- [ ] **Secrets hygiene:** no secrets in code; uses approved secrets store (e.g., AWS Secrets Manager)
- [ ] Access control changes documented (who/what/why)
- [ ] Logging/monitoring updated if needed
- [ ] OWASP Top 10 risks considered for this change

Notes:

<!-- Any extra security/compliance context -->

---

## CI / Automated Checks (must be green on this PR)

- [ ] **CodeQL** (code scanning) — passing
- [ ] **Dependency review** — no new high/critical vulns or forbidden licenses
- [ ] **Secret scanning** (e.g., GitHub/Gitleaks) — no leaks detected
- [ ] Tests passing (unit/integration as applicable)

Links (optional):

- Code scanning run: …
- Dependency review: …

---

## Testing & Validation

- [ ] Unit tests: [ ] Added / [ ] Updated / [ ] N/A
- [ ] Integration tests: [ ] Added / [ ] Updated / [ ] N/A
- Evidence (logs/screenshots/outputs): …

Notes:

<!-- Any test setup/fixtures, edge cases verified -->

---

## Rollback / Recovery Plan

- Rollback method:
  - [ ] Redeploy previous artifact (tag/version)
  - [ ] Feature flag / config toggle
  - [ ] Other: **\_\_**

---

## Evidence for Audit

- [ ] PR linked to GitHub issue (**required**)
- [ ] CI scan results retained (CodeQL, deps, secrets)
- [ ] Test evidence captured
- [ ] Artifact hash/signature recorded (above)

---

## Approvals

- [ ] Dev Lead
- [ ] Security
- [ ] QA/Testing

Reviewer Notes:

<!-- Confirm checks above; add any conditions for merge -->
