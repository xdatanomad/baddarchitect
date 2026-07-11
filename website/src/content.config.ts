import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pillarSchema = z.enum([
  "AI Adoption Stages & Challenges",
  "AI Adoption Operating Manual",
  "Production AI Engineering Blueprint",
  "AI Security & Governance"
]);

const baseContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  routeSlug: z.string(),
  publishedDate: z.coerce.date(),
  updatedDate: z.coerce.date(),
  pillar: pillarSchema,
  status: z.enum(["published", "draft"]),
  canonical: z.string().optional(),
  tags: z.array(z.string()).default([]),
  summary: z.string().optional(),
  draft: z.boolean().default(false)
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/articles" }),
  schema: baseContentSchema
});

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/lessons" }),
  schema: baseContentSchema.extend({
    level: z.enum(["intro", "intermediate", "advanced"]).default("intro")
  })
});

export const collections = { articles, lessons };
