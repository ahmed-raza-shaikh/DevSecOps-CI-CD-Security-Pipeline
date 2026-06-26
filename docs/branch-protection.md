# Branch Protection Model

The repository is designed around a protected `main` branch. Security enforcement happens before merge through the `PR Security Gates` GitHub Actions job.

## Recommended Rules

- Require a pull request before merging.
- Require status checks to pass before merging.
- Require branches to be up to date before merging.
- Require the `PR Security Gates` status check.
- Disable force pushes.
- Disable branch deletion.
- Enforce protections for administrators.

## Why This Matters

Scanner output alone does not reduce risk if teams can ignore it. Branch protection turns security findings into an enforceable workflow rule. Critical findings must be fixed, accepted through an explicit exception process, or the pull request remains blocked.

## Operational Notes

The demo fixtures intentionally trigger security findings. In a real rollout, teams would tune severity thresholds, approved exceptions, and scanner rule packs by application tier and risk appetite.
