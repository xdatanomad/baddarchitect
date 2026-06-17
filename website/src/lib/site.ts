export const site = {
  name: "AI Adoption Blueprint",
  url: "https://aiadoptionblueprint.com",
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
    title: "A Blueprint for building Production AI Systems and Agents with ROI",
    slug: "production-ai-systems",
    description:
      "Architecture guidance for agents, evals, observability, workflow orchestration, and unit economics."
  },
  {
    title: "AI Security Best Practices",
    slug: "ai-security",
    description:
      "Security reviews, permission boundaries, audit trails, and controls for AI systems and agent tools."
  }
] as const;

export function getPillarSlug(title: string) {
  return pillars.find((pillar) => pillar.title === title)?.slug ?? "topics";
}

