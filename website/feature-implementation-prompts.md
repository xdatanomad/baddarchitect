# Website Feature Implementation Prompts

These prompts apply to the Astro website in this directory.

Before implementing any feature:
- Inspect the relevant existing files first, especially `src/pages/index.astro`, `src/lib/site.ts`, `src/components/SiteHeader.astro`, `src/components/SiteFooter.astro`, `src/components/TopicCard.astro`, `src/components/ArticleCard.astro`, and `src/styles/global.css`.
- Preserve the project voice: direct, practical, calm, credible, and not hype-driven.
- Challenge requirements if they conflict with accessibility, routing, maintainability, SEO, or the existing information architecture.
- Ask the user to resolve any ambiguity before making changes.
- Keep edits scoped and reuse existing patterns before introducing new abstractions.
- Verify with `npm run build` from `website/` after implementation.

## Feature: Update Header Brand Name And Logo Mark

Context:
The website currently uses `AI Adoption Blueprint` as the site name and an `AAB` text mark in the top navigation. The requested brand is `Badd Architect`.

Requirements:
- Change the visible website name in the top menu bar to `Badd Architect`.
- Update shared site metadata where appropriate, likely `src/lib/site.ts`, so title templates, Open Graph site name, header, and footer stay consistent.
- Replace the black logo box text from `AAB` or `ABB` to a mark that reads visually like `B|A` with the `B` reversed.
- Implement the reversed `B` using accessible text plus CSS mirroring rather than relying on an obscure Unicode glyph.
- Make the `A` slightly larger if it improves visual balance.
- Preserve accessibility: the decorative mark should remain `aria-hidden` if the adjacent brand text communicates the name.

Desired output:
- Header brand reads `Badd Architect`.
- Logo mark appears as reversed-B, vertical bar, larger A inside the existing dark mark box.
- Site metadata uses the new brand consistently unless there is a deliberate reason not to.

Clarify or challenge:
- If changing the domain/canonical URL is implied, ask the user first. Do not change `site.url` without confirmation.

## Feature: Update Hero And Footer Copy

Context:
The homepage hero currently says `Production AI is an operating model, not a demo.` The subtitle is already approved. Footer copy should reflect the new brand and positioning.

Requirements:
- Change the homepage hero headline to:
  `A blueprint for building Production-grade AI Applications`
- Keep the subtitle exactly:
  `Practical guidance for architects and leaders moving from scattered AI experiments to measurable, governed, production-grade systems.`
- Review footer brand/copy and update it so it aligns with `Badd Architect` and the production-grade AI applications positioning.
- Keep the tone direct, professional, and not promotional.
- Avoid broad rewrites beyond the hero and footer unless shared metadata requires it.

Desired output:
- Homepage hero headline is updated.
- Hero subtitle is unchanged.
- Footer no longer feels tied to the old `AI Adoption Blueprint` brand name.

Clarify or challenge:
- If the exact capitalization of `Production-grade AI Applications` looks inconsistent with the site's style, ask whether to preserve it exactly or normalize it.

## Feature: Replace Homepage Decision Rule Card

Context:
The homepage hero includes a `Decision rule` card after or beside the hero. The about page contains useful copy describing who the site is for, what it is, and what it is not.

Requirements:
- Remove the current `Decision rule` card from the homepage hero area.
- Add a larger subsection after the hero that covers:
  - Who this site is for.
  - What this site is.
  - What this site is not.
- Use and lightly adapt content from `src/pages/about.astro`.
- Keep copy concise and actionable.
- Do not duplicate the about page verbatim if a tighter homepage version works better.
- Maintain responsive layout and accessible heading structure.

Desired output:
- The homepage immediately explains audience and positioning after the hero.
- The old decision rule card no longer appears.
- The new section strengthens clarity without making the homepage feel like a long about page.

Clarify or challenge:
- If the about page will later change to author/contributor-focused content, avoid coupling this section too tightly to current about page structure.

## Feature: Add Reusable Vertical Card Layout

Context:
The existing pillar cards are displayed in a horizontal responsive grid. A new reusable card layout is needed where cards take the full width of the content shell and stack vertically, one card per row.

Requirements:
- Create or adapt a reusable card layout/module for full-width stacked cards.
- Do not change the content of the existing pillar cards.
- Preserve the existing `TopicCard` behavior unless a small variant prop or wrapper class is the cleanest implementation.
- The vertical card layout should fit the current centered site width, not the full browser width.
- Ensure the layout is responsive, readable, and reusable for other homepage sections.
- Prefer simple CSS classes/components over over-engineering.

Desired output:
- A reusable stacked-card layout exists.
- Each card spans the parent content width and cards stack vertically.
- Existing card styling remains visually related to the current site.

Clarify or challenge:
- If the cleanest solution requires changing `TopicCard` API, keep the change minimal and document the new usage.

## Feature: Convert Four Pillars Homepage Section To Start Here

Context:
The homepage section currently titled `Four practical pillars for serious adoption.` uses the existing horizontal card grid.

Requirements:
- Change the section title to `Start here`.
- Keep the four existing pillar cards and their content.
- Render the four pillar cards using the new vertical full-width stacked card layout.
- Keep the section's purpose clear: these are the main entry points into the site.

Desired output:
- Homepage shows a `Start here` section.
- The four pillar cards are stacked vertically.
- Card content and pillar links remain intact.

## Feature: Redesign Recent Articles Section

Context:
Recent articles currently render as a vertical list using `ArticleCard`. The requested layout should resemble the old horizontal pillar card section.

Requirements:
- Replace the homepage recent articles layout with card-style article tiles arranged horizontally.
- Show up to 8 recent published articles when available.
- On desktop, aim for two rows of four cards.
- On smaller screens, collapse responsively to fewer columns.
- Include a clear link to more articles, pointing to `/articles`.
- Reuse existing article data from `getPublishedArticles()`.
- If fewer than 8 articles exist, render only available published articles.
- Do not break the existing `/articles` page layout unless intentionally shared.

Desired output:
- Homepage recent articles use a horizontal card grid.
- The section includes a `More articles` link.
- Current article metadata, titles, summaries, and links remain correct.

## Feature: Add Pillar Navigation Journey Section

Context:
Before the new `Start here` section, add a section explaining how to navigate the site through the four pillars.

Requirements:
- Add a homepage section before `Start here`.
- Explain how to navigate the site through the four pillars.
- For each pillar, include:
  - Small description.
  - Who it is for.
  - What it helps accomplish.
  - A visual/text arrow or progression cue to the next pillar.
- Use existing pillar information from `src/lib/site.ts` as the source of truth where possible.
- Keep copy concise and practical.
- Ensure the final pillar does not imply an unnecessary next step unless a loop-back cue is intentional.

Desired output:
- Homepage gives readers a clear path through the site.
- The section connects the four pillars as a practical adoption journey.
- The section appears before `Start here`.

Clarify or challenge:
- If adding detailed pillar metadata to `site.ts` is cleaner than hardcoding homepage copy, do that with a minimal typed structure.

## Feature: Update Top Navigation And Pillar Submenu

Context:
The top menu should be `Articles`, `Lessons`, `Topics`, `About`. Pillars currently live under `/topics`.

Requirements:
- Keep top-level menu labels as:
  `Articles`, `Lessons`, `Topics`, `About`
- Keep `Lessons` as-is; placeholders are acceptable if no lesson content exists.
- Keep `About`, but treat it as author/contributors-oriented in future copy changes.
- Make `Topics` function as the pillar navigation entry.
- Add a submenu or accessible dropdown under `Topics` that links to each pillar page.
- Preserve existing `/topics` and `/topics/[topic]` routes unless the user explicitly approves route changes.
- Ensure keyboard accessibility for the submenu.
- Ensure mobile behavior is usable and does not overlap or trap focus.

Desired output:
- Header top nav shows exactly `Articles`, `Lessons`, `Topics`, `About`.
- Users can reach each pillar from the `Topics` submenu.
- Existing topic pages still work.

Clarify or challenge:
- If implementing a hover-only submenu would hurt accessibility, use a click/focus-friendly pattern instead.

## Feature: Review CSS Globals And Variables

Context:
The site has a small global stylesheet with color tokens, typography, shell sizing, grid utilities, buttons, and prose styles. The requested work is a best-practices cleanup, not a visual redesign.

Requirements:
- Review `src/styles/global.css` and component-level styles.
- Consolidate repeated font stacks, spacing, colors, and layout primitives into sensible CSS custom properties where useful.
- Keep typography styles limited and consistent across hero, section headings, cards, article lists, and prose.
- Preserve the site's calm, credible visual direction.
- Avoid a large redesign, CSS framework migration, or broad component rewrite.
- Ensure new homepage layouts use shared utilities where appropriate.
- Check responsive behavior for header, cards, article grids, and footer.
- Maintain accessibility: focus states, contrast, readable font sizes, and no text overlap.

Desired output:
- CSS is more consistent and maintainable.
- New sections use globals/variables instead of one-off duplicated styling where practical.
- The visual appearance remains recognizably the same site.

Clarify or challenge:
- If a requested visual change would make the site less accessible or less maintainable, explain the issue and propose a better alternative before editing.

## Test Plan

- From `website/`, run `npm run build`.
- Verify homepage renders:
  - New brand name and logo mark.
  - Updated hero headline and unchanged subtitle.
  - No decision rule card.
  - Audience / what it is / what it is not section.
  - Pillar journey section before `Start here`.
  - `Start here` vertical pillar cards.
  - Recent articles grid with up to 8 cards and `/articles` link.
- Verify header navigation:
  - Top-level labels are `Articles`, `Lessons`, `Topics`, `About`.
  - `Topics` submenu is keyboard and mobile usable.
  - Pillar links route correctly.
- Verify footer uses new brand positioning.
- Check responsive layouts at mobile, tablet, and desktop widths.
- Confirm no existing content files are deleted or rewritten unnecessarily.

## Assumptions

- Use `Topics` as the top-nav label, with pillar links in its submenu.
- Implement the reversed `B` mark through CSS mirroring.
- Show up to 8 recent articles on the homepage, falling back to however many published articles exist.
- Do not change canonical domain or production URL without explicit user approval.
- Create only the prompt document unless the user later asks to implement the website changes.
