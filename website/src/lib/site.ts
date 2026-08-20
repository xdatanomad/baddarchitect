export const site = {
  name: "Badd Architect",
  url: "https://baddarchitect.io",
  description:
    "A practical blueprint for AI architects and leaders moving from scattered experimentation to governed, production-grade AI adoption, organized around the stage-led adoption journey.",
  nav: [
    { href: "/blog/", label: "Blog" },
    { href: "/about/", label: "About" }
  ]
} as const;

export const authorityLevels = [
  {
    id: "advisory",
    label: "Advisory",
    meaning: "AI analyzes, explains, or drafts; a person decides and performs the action.",
    minimumExpectation: "Verification by the person using the result."
  },
  {
    id: "human-approved",
    label: "Human-approved",
    meaning:
      "AI prepares a recommendation or proposed change; a named person reviews and authorizes consequential action.",
    minimumExpectation: "Clear review point and accountability for the approver."
  },
  {
    id: "bounded-action",
    label: "Bounded action",
    meaning:
      "AI performs narrowly scoped internal actions with limited permissions, known constraints, and a way to detect or reverse failures.",
    minimumExpectation: "Defined action boundary, logs, exception handling, and proportionate checks."
  },
  {
    id: "delegated-action",
    label: "Delegated action",
    meaning:
      "AI acts in an externally visible or materially consequential workflow within an approved policy and ongoing oversight.",
    minimumExpectation: "Strong evaluation, permissions, monitoring, escalation, auditability, and review."
  }
] as const;
