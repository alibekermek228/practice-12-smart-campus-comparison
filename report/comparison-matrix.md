# Engineering comparison matrix

Measured times are active AI-assisted tool time from the local work log, rounded to the nearest minute. They exclude report authoring, GitHub upload and waiting for GitHub Pages. The small values reflect reuse of the earlier Smart Campus contract and automated generation.

| Criterion | Code-based | Low-code simulation |
|---|---|---|
| Functional tests | 8/8 | 8/8 |
| Setup time | 1 min | 1 min |
| Implementation time | 1 min | 2 min |
| Debugging time | 0 min; first contract run passed | 0 min; first contract run passed |
| Testing time | Under 1 min, shared Node suite | Under 1 min, shared Node suite |
| Unresolved defects | 0 in the shared contract | 0 in the shared contract; real platform behavior not verified |
| Customization | Full control over rules, UI and tests | Fast declarative rule edits; interpreter supports a fixed operator set |
| Security controls | Safe DOM output, path containment, CSP and no dependencies | No connectors or secrets; restricted operators; clear simulation label |
| Versioning / portability | Plain modules and Git history; easy static hosting | JSON export is versionable, but the schema is Appsmith-style rather than a real platform export |
| Ongoing cost | Free static hosting | Local simulation is free; real platform quotas and pricing may vary |

## Measured evidence and impressions

- **Measured:** both implementations passed the same eight cases; build and browser checks succeeded; zero third-party dependencies; recorded active minutes above.
- **Impression:** the code-based version is easier to reason about and extend for rule-heavy logic.
- **Impression:** the low-code model makes the workflow order visible, but a real platform would add account, permission, export and vendor constraints that this simulation cannot measure.

## Recommendation

Choose the code-based implementation for this project. It has equal functional correctness, clearer automated verification, direct Git review and better portability. Choose a real low-code platform for a future internal tool when managed connectors and rapid screen assembly justify platform dependence.
