import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const authorityLevel = z.enum([
  "advisory",
  "human-approved",
  "bounded-action",
  "delegated-action"
]);

const stages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stages" }),
  schema: z.object({
    order: z.number(),
    slug: z.string(),
    title: z.string(),
    shortLabel: z.string(),
    situation: z.string(),
    whatChanges: z.string(),
    hasDetailedOrientation: z.boolean().default(false),
    preamble: z.array(z.string()).default([]),
    pullQuote: z.string().optional(),
    challengeMap: z
      .array(
        z.object({
          challenge: z.string(),
          whyItMatters: z.string(),
          response: z.string()
        })
      )
      .default([]),
    challengesAndLimits: z.array(z.string()),
    whatWeTeach: z.array(z.string()),
    signalsLabel: z.string(),
    signals: z.string(),
    nextBottleneck: z.string().optional(),
    authorityLevels: z.array(authorityLevel),
    authorityNote: z.string()
  })
});

const outlineBaseSchema = z.object({
  title: z.string(),
  routeSlug: z.string(),
  status: z.enum(["planned", "published"]).default("planned"),
  readerJob: z.string(),
  goal: z.string(),
  coreArgument: z.string().optional(),
  decisionRule: z.string().optional(),
  practicalTakeaway: z.string().optional()
});

const fieldNotes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/field-notes" }),
  schema: outlineBaseSchema.extend({
    stage: reference("stages"),
    guideLinks: z.array(reference("guides")).default([])
  })
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: outlineBaseSchema.extend({
    primaryStage: reference("stages"),
    crossListedStages: z.array(reference("stages")).default([])
  })
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    routeSlug: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    status: z.enum(["published", "draft"]),
    canonical: z.string().optional(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { stages, fieldNotes, guides, blog };
