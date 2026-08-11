Let's discuss a new direction. No need to modify any files yet. Let's collaborate on a direction and have a debate. 

I like to refactor the pillars to align better with what everyday people feel in their direction for AI adoption. This is a major change in the project. 

I want to align more on pillars like this:

## Personal Use

This is where people learn how to use CodeX or Claude for their personal use. They add MCP servers, add screen actions, and learn better prompting. They download and build their own skills and hook up some MCP servers to their daily tools. They create some workflows, but not fully automated, still manual and with no gates, evals, quality checks, reties, or triggers. They may also start using other tools that have AI feature embedded within.

What are the challenges in this phase? The limitations?
How can they improve this phase? What can we teach them?

## Team Use - limited

This is where some forward deployed engineers arrive and start putting together more structure around AI use. They build a set of team skills, put together a list of approved MCP servers, and start to build some workflows that are more structured and semi-automated. They may have some basic quality checks, but still limited. They may start to use more AI in their team meetings and collaboration tools (like AI notetakers, AI project management tools, and AI code reviewers in git PRs).

This stage still lacks the advanced AI usage patterns like governance, rigorous quality checks and eval gates, company-wide policies, and company-wide governed data context layer, and custom MCPs.

What are the challenges in this phase? The limitations?
How can they improve this phase? What can we teach them?

## Team Use - advanced

This is where the team has fully embraced AI and has built a robust set of skills, workflows, and governance around AI usage. They have advanced quality checks, evaluation gates, and company-wide policies in place. They have a governed data context layer and custom MCPs that are tailored to their specific needs. They are also bringing in conversations like AI ethics, bias mitigation, and responsible AI usage into their team culture. 

They assign an owner to each AI workflow — so that workflows don't become untrusted AI processes and AI slup. Someone runs the workflows, monitors them, and it has human-in-the-loop checks. They have a clear understanding of the limitations of AI and how to mitigate risks associated with its use.

One of the larger differentiation is that they start thinking about the ROI. They measure their workflows metrics and attach them to business outcomes. They might have also for a while monitored the AI metrics before fully going to production. 

What are the challenges in this phase? The limitations?
How can they improve this phase? What can we teach them?

---

Are there additional phases or some phases in between?

---

What do you think about this new direction? 
Let's work collaboratively. 
Ask me any questions needed and absolutely challenge me on this direction when needed. 
Let's think, ideate, debate, and iterate together.

NO need to modify any files yet.


---

2026.08.08

I do agree on everything. I won't go into too much detail, just to say that I agree with everything.

I DO AGREE with EVERYTHING you suggested here.

Some quick appraisals...

You are right, let's call this "stages" — much clearer than pillars. 
I do very much like the modified stages names you suggested. Aligns very well with the journey individuals and teams go through which would server a purpose for both individuals and teams audiences of our site. 
I do very much also like the table with the definition of what we teach and what changes at each step. Very good outline of what we teach in each section. Creates the boudaries and an outline for each step.
I also like the few sharper challenges to the framing. I agree with all. 
You are right. Let's also introduce the idea of how much authority the AI has and mature it with the stages. 

## Thoughts

We can address the concern of introducing security or governanace in late-stages by having them as more cross-cutting lessons that we address at each stage. Each stages introduces some ascpets of these concepts at the appropriate level for that stage. 

I fully agree, let's avoid not becoming a generic prompt-engineering or prompt-and-tool tutorial site. There are many sites like this. But we can teach strong techniques. 

Yes, I also favor the second, let's focus the primary reader on a leader/architect helping people progress through these stages WITH  individual guidance as the entry point or initial stages. 


## Ask

---

2026.08.10 WIP - step-by-step, docs first

I do agree on everything. I won't go into too much detail, just to say that I agree with everything.

I DO AGREE with EVERYTHING you suggested here.

Some quick appraisals...

You are right, let's call this "stages" — much clearer than pillars. 
I do VERY MUCH like the modified stages names you suggested. Aligns very well with the journey individuals and teams go through which would server a purpose for both individuals and teams audiences of our site. 
I do very much also like the table with the definition of what we teach and what changes at each step. Very good outline of what we teach in each section. Creates the boundaries and an outline for each step.
You are right. Let's also introduce the idea of how much authority the AI has and mature it with the stages. 

**## Thoughts**

We can address the concern of introducing security or governance in late-stages by having them as more cross-cutting lessons that we address at each stage. Each stages introduces some aspects of these concepts at the appropriate level for that stage. 

I fully agree, let's avoid not becoming a generic prompt-engineering or prompt-and-tool tutorial site. There are many sites like this. But we can teach strong techniques. 

Yes, I also favor the second, let's focus the primary reader on a leader/architect helping people progress through these stages WITH  individual guidance as the entry point or initial stages. 

I am thinking each Stage will have 3-5 main articles. These will be a series of field notes that mature naturally with the AI adoption narrative through the stages— each focusing on a single point, thought, best practice, or our unique design. 

There will also be much more in-depth technical articles. These guides would go into detail technical implementation details and act as practical guides. They act as the detailed how-to-guides to drill-down into a point introduced in the main articles above. Almost exercises with opinionated tools, techniques, and stacks. The main articles instead of going into too much detail, will link to these articles. They can link into multiple guides. These guides can be shared or linked across different articles at different stages if needed, act as more cross cutting. 

I think a layered library instead: each stage has a concise orientation page; most field notes and articles are concise and answer one decision or practice; deeper implementation guides can be longer when a task genuinely needs depth. Every guide has one primary stage for its narrative home, plus “applies at” stages for discovery—so a guide is cross-listed rather than copied. The current schema cannot express that yet, but the refactor can add it cleanly. Article URLs themselves are stage-independent, so existing published URLs can remain stable. I would not create a rigid parent → sub-article tree.

Existing published work is concentrated in the first pillar. We are completely replacing existing work. But we can archive them somewhere safe and use them in the future as research. Not yet, but as for the published articles on the website, they'll be moved to an unlisted URL.

**## Ask**

This is a major refactor of the project. The new direction is coherent but deliberately substantial.

Let's approach it step-by-step. As the first step, let's redefine the project [docs](docs/) and root-level README and AGENTS. 
Replace the old pillars with the stages defined above.
Refine the details of what we teach and rough stage outline for each stage from the table above. Be sure to document this into the docs.

Let's only introduce the stages outline for now. We will next, one-by-one create an article outline under each stage and shape the  [content-map.md](docs/content-map.md) with details. 

Do NOT modify at the [website](website/) at this point. We will do this later. 

Let's carefully plan this refactor. 
Let's work iteratively together. Challenge any requirements or assumptions where needed and suggest alternative approach or ideas. 
Ask me any questions needed.

---

I recommend defining a complete first collection of 15 core field notes—three for the foundation and three for each of the four stages—before adding a broader library. That gives every entry point enough substance without turning the initial relaunch into an open-ended writing program.

the new field notes become the current, discoverable guidance; the originals remain available by direct link and point readers to their modern replacements. I recommend marking the archive noindex and excluding it from feeds, sitemaps, and normal lists, so it cannot compete with the shorter guidance in search.

--- 

PLAN 2026.08.09

# Stage-Based Content and Website Reset

## Summary

Replace the four legacy pillars with a reader-first adoption journey:

1. **Foundation — Start safely**
2. **Personal leverage**
3. **Shared team practice**
4. **Managed workflows**
5. **Governed organizational capability**

The primary reader remains a leader or architect helping people progress, with practical individual guidance as the entry point. Stages describe scope and operating maturity, not a score for an entire company. A universal AI action-authority ladder—assist, reviewed draft, bounded action, external/autonomous action—appears throughout, with controls scaled to consequence and exposure.

Publish concise **Articles** as the single library. Each targets 5–10 minutes (roughly 1,000–1,500 words; 1,800 maximum excluding code), contains a first-screen takeaway, and has one primary stage plus optional cross-stage discovery links. Avoid a rigid parent/sub-article hierarchy.

## Editorial and Content Model

- Establish a 15-note core collection: three concise articles for each journey area.

| Area | Initial article subjects |
|---|---|
| Start safely | Participation compact; personal AI safety baseline; action-authority ladder |
| Personal leverage | Personal AI working system; safe skills/MCP/computer actions; identifying workflow candidates |
| Shared team practice | Turning individual wins into shared practice; team library of instructions/skills/tools; fast accountable approval paths |
| Managed workflows | Workflow mapping; ownership, human review, and recovery; quality/evaluation/value baseline |
| Governed capability | AI Acceleration Team and workflow portfolio; trusted context layer; organization-scale policy, observability, and assurance |

- Use named tools only as opinionated reference implementations. Each tool-specific article must state the durable principle, safe scope, verification step, limitation, and a visible “reviewed” date.
- Add frontmatter for:
  - `stage` (one primary stage)
  - `appliesTo` (zero or more secondary stages)
  - `format` (`field-note` or `practical-guide`)
  - optional `toolReviewedAt`
  - `archive`
  - optional replacement article links for archived material
- Retain the current four long-form articles as direct-link, `noindex` archival pages. Exclude them from the article index, stage pages, sitemap, and RSS; show an archival notice with links to their newer concise replacements.
- Preserve all existing root notes, ready drafts, research, and legacy placeholders as source material. Do not delete source content during the reset.

## Website and Routing Changes

- Make `/stages/` the journey hub, with:
  - a clear “find your stage” introduction;
  - one card for the Foundation and each of the four stages;
  - “you are here if,” what changes next, core safeguards, and the first relevant article;
  - the shared authority ladder as a semantic ordered progression.
- Add `/stages/start-safely/`, `/stages/personal-leverage/`, `/stages/shared-team-practice/`, `/stages/managed-workflows/`, and `/stages/governed-capability/`.
- Stage pages show primary articles first and cross-stage “also useful here” articles second. Do not add filters at this collection size.
- Keep `/articles/` as the unified public library and label it **Articles** in navigation. Retire the empty Lessons section from primary navigation; redirect `/lessons/` to `/articles/`.
- Preserve current article URLs. Add permanent redirects:
  - `/topics/` → `/stages/`
  - `/topics/adoption-stages/` → `/stages/start-safely/`
  - `/topics/operating-manual/` → `/stages/`
  - `/topics/production-ai-systems/` → `/stages/managed-workflows/`
  - `/topics/ai-security/` → `/stages/governed-capability/`
- Replace the current pillar registry and pillar-only schema with the stage registry and metadata above. Update cards, article metadata, page layouts, sitemap, RSS, header, footer, homepage, and internal links to use stages.
- Keep the existing calm editorial design: native keyboard-accessible stage disclosure in the header, semantic headings and ordered lists, visible focus states, responsive cards, and no decorative interaction that obscures the journey.

## Documentation and Release Sequence

1. Record the stage model, cross-cutting safeguards, authority ladder, article rules, archive policy, and route migration in the vision, roadmap, glossary, content map, README/agent guidance, and a new ADR.
2. Implement the content schema, archive behavior, stage registry, routes, redirects, and shared components.
3. Launch the new navigation only when these five articles are ready:
   - Foundation: safe participation compact
   - Personal leverage: personal AI working system
   - Shared team practice: turn individual wins into shared practice
   - Managed workflows: map the workflow before automating it
   - Governed capability: charter the AI Acceleration Team and workflow portfolio
4. Publish the remaining ten notes progressively. Never expose an empty stage page; show only finished articles.
5. Before publishing each note, refresh time-sensitive tool claims and citations, confirm the practical takeaway, and add relevant stage links.

## Verification

- Run `npm run check` and `npm run build` from `website/`.
- Verify stage routes, legacy redirects, article URLs, canonicals, sitemap, RSS, and archive `noindex` behavior.
- Confirm every current article is either discoverable once as a primary-stage article or intentionally cross-listed; archive articles appear nowhere in normal discovery.
- Test stage navigation and the header using keyboard only; inspect mobile, tablet, and desktop layouts.
- Verify every launch stage contains a completed article, every page has a unique title/description, and all internal links resolve.

## Assumptions

- The Foundation is intentionally visible but is not presented as a maturity grade.
- No company is assigned a single fixed stage; maturity and authority can differ by workflow.
- The existing canonical domain remains unchanged.
- The four original long-form essays remain public only as unlisted archival context, while the new concise articles become the current guidance.

---