## Summary

Describe the change and the security control or portfolio outcome it supports.

## Security Impact

- [ ] Container risk reviewed
- [ ] Terraform/IaC risk reviewed
- [ ] Dependency risk reviewed
- [ ] Runtime web risk reviewed
- [ ] No secrets or sensitive data committed

## Validation

List the checks run locally or in CI.

```text
node --check app/server.js
ruby -e 'require "yaml"; YAML.load_file(".github/workflows/devsecops-pipeline.yml")'
```

## Notes for Reviewers

Call out any intentional vulnerable fixtures, expected scanner failures, or documentation-only changes.
