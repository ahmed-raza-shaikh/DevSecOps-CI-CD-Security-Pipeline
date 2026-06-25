# Security Control Matrix

This matrix maps each CI/CD gate to the risk it mitigates, the policy decision it enforces, and the evidence it leaves behind for reviewers, clients, and auditors.

| Control Domain | Tool | Primary Risk Reduced | Policy Decision | Blocking Signal | Evidence |
| --- | --- | --- | --- | --- | --- |
| Container vulnerability management | Trivy image scan | Critical OS and application package vulnerabilities shipped in container images | Images with critical vulnerabilities cannot pass PR validation | `exit-code: "1"` with `severity: CRITICAL` | GitHub Actions job log with vulnerable package and CVE details |
| Container and configuration hardening | Trivy config scan | Insecure Dockerfile or repository configuration patterns | Critical misconfigurations block merge | `exit-code: "1"` with `severity: CRITICAL` | GitHub Actions job log showing failed Trivy config checks |
| Infrastructure as Code security | tfsec | Publicly exposed cloud resources and Terraform security anti-patterns | Critical IaC findings block merge before deployment | `--minimum-severity CRITICAL` | tfsec output tied to the Terraform file and line |
| Dependency governance | Snyk | Critical known vulnerabilities in open-source packages | Critical SCA findings block merge until dependency risk is remediated or accepted | `--severity-threshold=critical --fail-on=all` | Snyk CLI output tied to vulnerable package paths |
| Dynamic application testing | OWASP ZAP | Runtime HTTP security weaknesses that static checks can miss | Configured high-risk baseline findings fail the pipeline | `zap-baseline.py` with `zap/rules.tsv` fail policy | Uploaded ZAP HTML and Markdown reports |
| Merge governance | GitHub branch protection | Security checks bypassed through direct merge | `main` requires the PR security gate before merge | Required status check: `PR Security Gates` | Branch protection configuration and check history |

## Control Design Rationale

The pipeline intentionally combines static, dependency, container, infrastructure, and dynamic testing because no single scanner gives complete coverage. Each tool owns a different security layer, and GitHub Actions turns those layers into one enforceable pull request decision.

The most important design choice is that findings are not treated as advisory-only output. Critical issues return non-zero exit codes, which turns the security policy into an automated merge gate.

## Client Onboarding Narrative

This repository can be reused during client onboarding to show how security controls are introduced without forcing developers to leave their normal workflow. The implementation gives teams:

- Fast feedback in the pull request.
- Clear ownership because findings point to files, packages, or runtime endpoints.
- Audit evidence through GitHub Actions logs and uploaded reports.
- A repeatable policy model that can be tuned by severity, rule, branch, or application tier.
