# Remediation Playbook

This playbook explains how teams should respond when the pipeline blocks a pull request.

## Trivy Container Findings

1. Review the vulnerable package, CVE, installed version, and fixed version.
2. Update the base image or package source.
3. Rebuild the image locally.
4. Re-run the pull request workflow.

## tfsec Terraform Findings

1. Identify the Terraform resource and line number.
2. Replace public exposure with least-privilege CIDR ranges or managed access paths.
3. Add security group descriptions that explain the business need.
4. Re-run the pull request workflow.

## Snyk Dependency Findings

1. Review the vulnerable dependency path.
2. Upgrade the direct dependency where possible.
3. If the issue is transitive, upgrade the parent dependency or apply an approved override.
4. Rebuild the lockfile and re-run the workflow.

## OWASP ZAP Findings

1. Review the uploaded ZAP Markdown or HTML report.
2. Confirm whether the finding is exploitable in the application context.
3. Add missing headers, cookie flags, or route-level mitigations.
4. Re-run the workflow against the updated container.

## Exception Handling

Exceptions should be time-bound, documented, approved by the security owner, and tracked as backlog work. Permanent exceptions should be rare and tied to a clear compensating control.
