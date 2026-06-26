# Security Policy

## Supported Scope

This repository is a portfolio artifact that demonstrates CI/CD security enforcement patterns. It contains intentionally vulnerable fixtures for scanner validation.

## Reporting a Security Issue

If you find a security concern in the pipeline implementation itself, open a private advisory or contact the repository owner directly. Do not open a public issue for sensitive findings.

## Intentional Demo Findings

The following are expected and intentionally present:

- Outdated container base image in `Dockerfile`.
- Public SSH ingress in `terraform/main.tf`.
- Vulnerable dependency pins in `package.json`.

These fixtures are included to prove that the security gates block unsafe changes.

## Secret Handling

Never commit scanner tokens, cloud credentials, or service account keys. The Snyk token must be stored as a GitHub Actions secret named `SNYK_TOKEN`.
