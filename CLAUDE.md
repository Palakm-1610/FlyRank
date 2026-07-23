Project rules learned (testable and specific):

1) Forms must use `react-hook-form` + `zod` for structured validation. Reject PRs that add uncontrolled inputs without a schema.
2) All validation error UI must provide an accessible role (`role="alert"`) and inputs must have explicit labels or `aria-label` attributes.
3) Every new UI feature requires at least one automated test that verifies both an error condition and a successful submission path.

These rules are narrowly scoped and checkable during code review.
