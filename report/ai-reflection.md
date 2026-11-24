# AI-use reflection

I used OpenAI Codex Desktop with the GPT-5 model family and runtime bundle 26.1119.11507 on November 24, 2026. I supplied the Practice 12 brief, relevant Lecture 12 security material, my earlier Smart Campus checker, student information and the requirement for a public GitHub repository.

Codex helped separate the shared contract from both implementations, generate the identical test harness and organize the comparison evidence. Its most useful contribution was the declarative low-code model: the rule order is visible in JSON and the local interpreter limits execution to named operators. I checked that this model produced the same reason codes as the code-based engine for all eight required cases.

I did not treat the simulation as a real Appsmith project. A generated export can look convincing while omitting vendor permissions, connector behavior and platform limits. I therefore labeled it on the live page, README, matrix and report. This disclosure changed the recommendation: the code-based solution is preferred for the current checker, while a real low-code trial remains future work.

I personally verified the source structure, ran the twelve automated tests, built the static site and exercised valid, overlap, blocked and invalid scenarios in the browser. I also checked the console, static output handling, absence of dependencies and the public GitHub links. AI accelerated implementation, but reproducible commands and visible evidence determined every reported result.
