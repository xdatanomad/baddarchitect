export const site = {
  name: "Badd Architect",
  url: "https://baddarchitect.io",
  description:
    "Practical AI adoption guidance for architects and leaders moving from experiments to governed, production-grade AI systems.",
  nav: [
    { href: "/lessons", label: "Lessons" },
    { href: "/about", label: "About" }
  ]
} as const;

export const pillars = [
  {
    title: "AI Adoption Stages & Challenges",
    slug: "adoption-stages",
    personas: ["Leaders", "Architects"],
    description:
      "A practical field guide to the first adoption blockers: fear, demos without workflows, unsafe trust assumptions, and weak ROI logic. Start here for hints toward remedies and ways to avoid common pitfalls."
  },
  {
    title: "AI Adoption Operating Manual",
    slug: "operating-manual",
    personas: ["Leaders", "Architects"],
    description:
      "An operating manual for moving from individual AI use to governed company capability. For leaders and architects shaping participation, workflow selection, team structure, and internal automation."
  },
  {
    title: "Production AI Engineering Blueprint",
    slug: "production-ai-systems",
    personas: ["Architects", "Builders"],
    description:
      "A builder's blueprint for turning AI workflows into durable internal systems. For architects and engineers designing context, evals, observability, tool boundaries, and cost controls."
  },
  {
    title: "AI Security & Governance",
    slug: "ai-security",
    personas: ["Architects", "Security"],
    description:
      "Security and governance patterns that let teams move faster without losing control. For architects and security leaders setting practical boundaries around data, tools, permissions, review gates, and auditability."
  }
] as const;

export const plannedArticles = [
  {
    pillarSlug: "operating-manual",
    title: "From Experimentation to an AI-native Operating Model",
    description:
      "A practical maturity path from scattered AI use to governed, measurable workflow change."
  },
  {
    pillarSlug: "operating-manual",
    title: "Make AI Participation Safe Enough to Start",
    description:
      "How leaders create safe experimentation without hype, coercion, or unmanaged risk."
  },
  {
    pillarSlug: "operating-manual",
    title: "Choose the Workflows That Deserve AI Investment",
    description:
      "A portfolio scorecard for deciding which AI opportunities deserve real production effort."
  },
  {
    pillarSlug: "operating-manual",
    title: "Build the AI Acceleration Team",
    description:
      "A charter for the team that turns local AI wins into reusable company capability."
  },
  {
    pillarSlug: "operating-manual",
    title: "Build the Trusted Context Layer",
    description:
      "An executive guide to governed access to company knowledge, systems, and operational memory."
  },
  {
    pillarSlug: "operating-manual",
    title: "Turn Local Wins Into Governed Internal Automation",
    description:
      "A launch gate for moving personal AI workflows into shared, observable automation."
  },
  {
    pillarSlug: "production-ai-systems",
    title: "AI Acceleration Team Starter Kit",
    description:
      "Practical artifacts for raising adoption quality across teams without slowing delivery."
  },
  {
    pillarSlug: "production-ai-systems",
    title: "Internal Agentic Workflow Blueprint",
    description:
      "A reference architecture for durable, governed, human-reviewed internal AI workflows."
  },
  {
    pillarSlug: "production-ai-systems",
    title: "Trusted Context Layer Technical Guide",
    description:
      "Implementation patterns for retrieval, MCP/tool access, permissions, auditability, and freshness."
  },
  {
    pillarSlug: "production-ai-systems",
    title: "Evals, Observability, and Cost Controls for Internal AI Workflows",
    description:
      "The operating layer needed to keep AI workflows trustworthy and economically sane."
  },
  {
    pillarSlug: "ai-security",
    title: "Minimum Viable AI Governance and Security Review",
    description:
      "A practical security review and launch gate for internal AI workflows and agent tools."
  }
] as const;

export function getPillarSlug(title: string) {
  return pillars.find((pillar) => pillar.title === title)?.slug ?? "topics";
}
