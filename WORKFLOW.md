This exercise demonstrates a two-round AI-assisted feature implementation and a practical verification loop.

Summary
Round 1: I asked a single-sentence prompt: "Create a settings form with a display name input and save button." The output is a minimal uncontrolled HTML form (`branch-round1/src/SettingsV1.jsx`) that relies on the browser's `required` attribute and no programmatic validation or tests.

Round 2: I authored a precise prompt (kept in the commit message) and implemented `branch-round2/src/SettingsV2.jsx`. It uses `react-hook-form` + `zod`, exposes accessible error messages (`role=alert`), and includes automated tests (`branch-round2/tests/settingsV2.test.jsx`). The round-two work followed a verification loop: implement → write tests → run tests (intended to run locally via `npm test`) → fix until green.

Concrete diffs that mattered
- Validation library: Round 1 has no runtime validation; Round 2 adds `zod` schema and `zodResolver` integration.
- Accessibility: Round 2 renders errors with `role="alert"` and uses explicit `aria-label`s; Round 1 has no ARIA roles.
- Test coverage: Round 2 includes a unit test that asserts both error presentation and successful submission. Round 1 includes only a trivial presence test for `required`.

One AI mistake caught
The initial vague output omitted runtime validation and accessible error presentation — a correctness and accessibility regression. I caught this by writing tests in round two that asserted presence of error UI and submission behavior.

Costs and review effort
Round 1 was faster to generate but required more manual review to spot correctness and accessibility gaps. Round 2 took longer to author and set up, but required less ambiguity-driven review because tests and concrete constraints reduced guesswork.

Edge cases considered
- Empty or too-short display name (validated in round two)
- Invalid email formats
- Optional boolean toggles handled explicitly

Recommendation
Use the precise prompt + verification loop as the standard: require an interface contract (props, shapes), accessibility expectations, and at least one automated test. That yields clearer code and smaller review surface.
