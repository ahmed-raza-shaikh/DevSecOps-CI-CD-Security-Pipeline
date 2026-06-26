# Quickstart

Use this guide to verify the repository locally before opening a pull request.

## Prerequisites

- Docker
- Node.js 20 or newer for local dependency checks
- GitHub CLI for repository operations
- Optional local scanner CLIs: Trivy, tfsec, Snyk

## Local Application Smoke Test

```bash
npm ci
npm start
```

Then open:

```text
http://127.0.0.1:8080/health
```

The expected response is:

```json
{"status":"ok"}
```

## Container Smoke Test

```bash
docker build -t devsecops-security-pipeline-demo:local .
docker run --rm -p 8080:8080 devsecops-security-pipeline-demo:local
```

The container exists so GitHub Actions can run OWASP ZAP against a live target.

## Expected Security Result

This repository intentionally contains vulnerable fixtures. Local security scanners should report findings. That behavior is part of the portfolio demonstration and proves that the PR security gates are wired to fail closed.
