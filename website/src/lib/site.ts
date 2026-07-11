export const site = {
  name: "Badd Architect",
  url: "https://baddarchitect.io",
  description:
    "Practical AI adoption guidance for architects and leaders moving from experiments to governed, production-grade AI systems.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/articles", label: "Articles" },
    { href: "/lessons", label: "Lessons" },
    { href: "/topics", label: "Topics" },
    { href: "/about", label: "About" }
  ]
} as const;

export const pillars = [
  {
    title: "AI Adoption Stages & Challenges",
    slug: "adoption-stages",
    description:
      "How teams move from fear and demos to trustworthy, measurable production workflows."
  },
  {
    title: "AI Adoption Operating Manual",
    slug: "operating-manual",
    description:
      "Operating models, roles, governance, and decision habits for serious AI adoption."
  },
  {
    title: "Production AI Engineering Blueprint",
    slug: "production-ai-systems",
    description:
      "Design patterns, reference architectures, and implementation guides for production AI systems, agents, internal automation, evals, observability, and ROI."
  },
  {
    title: "AI Security & Governance",
    slug: "ai-security",
    description:
      "Security reviews, governance gates, permission boundaries, audit trails, and controls for AI systems and agent tools."
  }
] as const;

export function getPillarSlug(title: string) {
  return pillars.find((pillar) => pillar.title === title)?.slug ?? "topics";
}
