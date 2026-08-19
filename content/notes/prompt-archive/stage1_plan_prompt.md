# Define Stage 1 content focus

> Looking at the [docs](docs/) , [adoption-stages.md](docs/adoption-stages.md) and [content-map.md](docs/content-map.md) , what are the main topics we should focus on in Stage 1: Personal Leverage?
>
> Also look into [content-map.md](docs/content-map.md) for the stage 2 outline. Seems like we skipped stage 1! Let's focus on defining and mapping out this stage like stage 2.
>
> No need to write any changes yet. Let's discuss together. Work collaboratively. Present ideas, options, and we can debate together.

<details><summary>2 previous messages</summary>

> I’m going to use the project-planning guidance because we’re shaping the adoption-stage content architecture, then I’ll compare the Stage 1 source material against the more-developed Stage 2 map. I’ll keep this exploratory—no files will be changed.
>
> The gap is real: Stage 2 already has a coherent three-part progression—make a practice shareable, calibrate it, then decide whether it merits operational investment—while Stage 1 is only a heading. I’m checking the existing source notes now so the Stage 1 proposal grows from the project’s own material rather than becoming generic “prompting tips.”
</details>

# Agent Response

Yes—Stage 1 was skipped in the content map. It currently has only a placeholder, while Stage 2 has a clear three-note arc and concrete artifacts. The canonical stage definition is strong, though: Stage 1 is the move from occasional AI chats to a repeatable, personally operated way of working. [Stage 1 definition](<./docs/adoption-stages.md:95>) · [current gap](<./docs/content-map.md:35>)

The central claim should be:

> Personal leverage is not “having better prompts.” It is being able to repeat a bounded AI-assisted task, check the result, and remain accountable for every consequential decision or action.

That keeps Stage 1 out of generic prompt-engineering territory and sets up Stage 2 cleanly.

## The topics Stage 1 should own

| Personal-leverage problem | What we should teach |
| --- | --- |
| Useful work lives in one-off chats and hidden context | Turn a recurring task into a private, repeatable personal practice: clear input, context, expected output, method, and “do not use when” boundary. |
| A polished output is mistaken for a trustworthy one | Design the human review into the work: evidence checks, task-appropriate quality criteria, known failure signals, and a stop/escalate rule. |
| Skills, MCPs, extensions, and computer actions add power faster than judgment | Use deliberate access choices: approved tools, minimum permissions, safe data boundaries, and explicit confirmation before consequential action. |
| Prompt, skill, and example collections become an unmaintained personal junk drawer | Maintain a small personal working library—context packs, reusable methods, good examples, and retired practices—not a prompt hoard. |
| Every personal win is either kept private forever or prematurely sold as “automation” | Recognize a bounded workflow candidate and offer it to Stage 2 without forcing disclosure of private methods or implying it is production-ready. |

The project’s earlier planning note already named three of these: a personal AI working system, safe skills/MCP/computer actions, and identifying workflow candidates. I would keep that core, but make verification an explicit fourth note rather than burying it inside “prompting.” It is the defining human responsibility at this stage. [Earlier outline](<./content/notes/project_refactor_prompt.md:152>)

## A proposed Stage 1 map

**Landing-page preamble, in essence:**
People now have permission and enough confidence to use AI, but their good results are fragile: a useful chat cannot be repeated, the context is invisible, and powerful connected tools make it easy to overreach. The goal is not to turn every person into an automation engineer. It is to help each person build a small, reliable, human-operated working system for recurring work.

Then four field notes:

1. **A Prompt Is a Moment. A Personal Practice Is a Method.**
   Teach the personal AI working system: task, trigger, trusted context, desired output, method, example, verification, known limits.
   Takeaway: a lightweight, private-by-default **Personal Practice Canvas**.

2. **The Review Is Part of the Work.**
   Teach that verification must match the failure mode: check sources for factual work, completeness for summaries, reasoning for analysis, policy/data boundaries for business work, and deliberate confirmation for actions.
   Takeaway: a compact **personal verification loop**—what to check, what evidence is sufficient, and when to stop.

3. **Connect AI With Intent: Skills, Integrations, and Computer Actions.**
   Treat access as a design decision, not a convenience feature. Explain least privilege, untrusted extensions, data boundaries, read-versus-write access, and supervised computer actions.
   Takeaway: a **personal access decision**: purpose, data allowed, permissions granted, action boundary, confirmation point, and review date.

4. **A Personal Win Is a Candidate, Not an Automation Proposal.**
   Help people distinguish a useful private method from something that could help colleagues. Capture the task, value signal, repeatability, limitations, required context, and sharing question—without requiring the personal prompt history.
   Takeaway: a small **candidate note** that can become Stage 2’s optional Practice Seed.

This gives Stage 2 a natural handoff:

```text
Private, repeatable personal practice
        ↓ voluntary sharing
Practice Seed / Team Practice Card
        ↓ peer calibration
Shared team practice
```

One boundary needs deliberate wording. Stage 1 can include computer actions and connected tools, as the canonical definition says, but it should remain **supervised personal assistance**: the individual watches, interprets, and confirms consequential actions. I would avoid calling this “pseudo-automation,” because it blurs into the Stage 3 territory of managed, bounded action. The authority model says Stage 1 normally stays Advisory. [Authority continuum](<./docs/adoption-stages.md:335>)

My recommendation is the four-note version above. The key question to settle next: do you want supervised personal computer actions to be a central, distinctive part of Stage 1, or a carefully bounded example within the access note? I lean toward making it central enough to be memorable, but not its own field note.


---

# My Response

The overall stage plan is absolutely perfect. I agree with the four-note structure and stage challenges to what we teach table mapping. Well crafted.

I like the central claim:
> Personal leverage is not “having better prompts.” It is being able to repeat a bounded AI-assisted task, check the result, and remain accountable for every consequential decision or action.

Let's make sure we present it exactly as-is written in the section preamble. Also present the table (as-is or sharpened) in the preamble. Be sure to add the paragraph summary of the challenges (similar to phase 2 in adoption-stages.md).

## Field Notes Comments

The four field notes are well defined. I like the titles and the takeaways. 

I think we should make sure to include examples whenever possible to help people understand what it looks like and how to use it.

In the "The Review Is Part of the Work" note, what do you think about introducing of the concept of light-weight context-layer and memory here?


## Implementation Guides

This is an idea that I like us to discuss and plan...

I can see a series of Implementation Guides that are referenced in the field notes at this stage being very useful. Seek information on "Implementation Guide" in the glossary.md. These guides would be a separate technical reference for people to use as they implement the practices taught in the field notes. The guides would not be a separate field note, but rather a reference that is linked to from the field notes.

Let's plan these. Debate the ones that I list below AND revise or propose any others you think would be useful. We can debate and decide which ones to include.

Provide your candid, unvarnished, and expert opinion/suggestion here.

LIST:

--

Light-weight automation where agentic workflows are triggered by external events (e.g., email, calendar, file changes, etc.) and the final agentic workflow and actions are supervised by a human.

A tactical guide with suggested tools and a simple example.

--

Creating a personal library of reusable prompts, and prompt spans, skills, and examples that are maintained and curated over time. A Personal Library/Playbook.

A tactical guide (with suggested tools) for how to create/maintain a personal library.

--

Creating a personal light-weight context-layer and memory via Notion (or similar services) that is used to store and retrieve context for personal practices — and to keep a journal of actions, state, and decisions in an agentic session.

--

Creating a personal verification loop that is appropriate for the type of work being done (e.g., factual, analytical, policy, etc.) and that is lightweight and easy to use. Perhaps a personal Compact (or Contract) where the user creates a user-agreement for themselves that defines the "what to do", "what to check", and "what not to do" for each personal practice.

Perhaps this is best fit as a paragraph or a point in the field notes (the Review Is Part of the Work) rather than a separate Implementation Guide.

--


## Questions to open items

I think the personal computer actions should be part of stage 1 but best fit as a separate in-depth technical guide. Seek information on "Implementation Guide" in the glossary.md. We can reference it the field notes (4 field notes planned here), but not make it a separate field note.

## ASK

Let's discuss together and resolve the open items and ideas above before proceeding to write the content-map. Ask me any questions needed. Challenge requirements where needed. 

After this, we can proceed to write the content-map for stage 1.