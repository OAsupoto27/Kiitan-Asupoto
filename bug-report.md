# Bug 1

Issue:
2 vulnerabilities (1 moderate, 1 high)

# Hydration Warning in Development

Issue:
React hydration mismatch warning appears in browser console.

Possible Cause:
Browser extensions injecting HTML attributes.

Fix:
Test in Incognito mode or different browser.

# Environment Warning

Issue:
Multiple lockfiles detected in project.

Possible Impact:
May cause dependency inconsistencies between environments.

Recommendation:
Use one package manager consistently across the team.