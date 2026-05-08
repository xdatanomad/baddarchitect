

# Develop

Small 1-person squads

Prolonged R\&D: build figma, architecture, project AGENTS.md

Company and project AGENTS.md

Build in prototype and services – Build contracts for AGENTS to must follow when using other squad assets

Do NOT modify list for other squads \-\> create issues in Linear

Evals

Core product updates with Claude requires:

* Detailed prompt  
* Style guides, architecture, quality assurance code  
* Monitor live

Identify early adopters to identify best areas to use agents, create custom slash commands, create CLAUDE.md files with best practices, gotchyas, identifies workflows for agents

Start off by hackathon with early adopters as mentors \<- I don’t agree, I think we should start with skeptics and anti-AI folks on the team OR start with squads of mix of AI-forward and anti-AI team members in the same squads, do NOT task them with specific areas, task them to pick anything to improve, friday sessions, show and tell after 1-month. Then do not do anything for another month. Let individuals discover how to use AI on their own, almost a fear of falling behind if they don’t after seeing what’s possible, with Fridays optional show and tell you new AI workflow as small encouragement for slackers. Then rollout plan with concrete changes for the tools, workflows, and team dynamic. 

Start with low-hanging fruit projects: migration of old code-base.   
Do NOT fall into the “do everything with AI” loop. Do NOT let “AI wild wild west” without intensive test-driven design.  
Only work small features one at the time. Have Claude write one feature and implement one test at the time -- **How to plan then?**
Document the path in miro. Have AI build and change the Miro path just like updating docs as it goes. Add a update docs, update miro skills.  
Specify precise expected vs. actual behavior. Copy paste screenshots, logs.

Build custom slash commands: save tokens  
Get Claude to talk thru every step, then let it commit each step. Core tasks. Develop this prompt.   
Build post commit hooks (if possible) to update documentation   
Test driven design???  
Notion knowledgebase 

Learn to distinguish between tasks that work well asynchronously  
(peripheral features, prototyping) versus those needing synchronous  
(peripheral features, prototyping) versus those needing synchronous  
super vision (core business logic, critical fixes). Abstract tasks on the  
supervision (core business logic, critical fixes). Abstract tasks on the  
product’s edges can be handled with `auto accept mode`   
Build custom slash commands: save tokens

Stages and challenges of AI adoption:
https://x.com/Alfred_Lin/status/2051660439667527715?utm_source=tldrfounders

- Adoption: The first bottleneck is getting people to actually use AI tools, not just sign up for them. Leadership has to shape behavior so usage is effective and not just “token-maxing.”

- Engineering velocity: After adoption, the constraint becomes how much real engineering output improves across the whole team. The challenge is spreading top-performer gains to the median developer, not just celebrating a small elite.

- Product velocity and quality: Once engineers can ship faster, decision-making and product taste become the new limit. Companies stall when they accelerate output without improving what they choose to build or the user experience quality.

- Internal development operating system: The next bottleneck is building custom AI-enabled workflows and agents (evals, routing, code review, security, incident triage) that remove recurring friction. These systems must be continuously rebuilt because tools and patterns age quickly.

- Team design and organizational model: The final bottleneck is how work is divided and coordinated in an AI era where smaller teams can move much faster. Existing operating models (waterfall, classic agile) are no longer enough, so organizations must redesign how teams collaborate end-to-end.


AI generated::
1. Education and awareness: workshops, training, office hours, show and tells, … (EDUCATION.md). Identify low hanging fruit projects and what AI show _NOT_ do.
2. Making data ready for AI use. APIs, MCP, slash commands, documentation (AGENTS.md). Piloting automation of internal processes.
3. Scaling AI across the organization. Building infrastructure, governance, and culture to support widespread AI adoption.


# Security

Create a set of approved MCP servers. Lock MCP servers down.

MCP server logging and audit trail. MCP sandbox, monitor their calls, before putting in prod.

Don’t over restrict; instead provide easy approval process.

Create a slash command (/security-review) for security scans and reviews of code.

Build a library of approved security patterns and anti-patterns (sql-injection); instead of having Claude guess.

Github action for security and scale review

# Adoption

Show a scale… in any organization there are front-runners and slackers. In the middle is right. What to do with the middle. Identify the middle and promote them and include them in the design of the AI adoption process in your organization. Many companies choose the front-runners, this is a mistake. It’ll create more fear for the rest.

Address the fear with slackers. Small well laid out exercises. Chip away little by little. Like building trust with a partner.

State the fears: it’s not good. Idk what it does. It’ll make mistakes. I feel far behind. I’m good at what I do, I don’t want it in my space. I fear it’s too good. It’ll dull my skills. Big one, it’ll take my job. 

More likely scenario: you don’t use it, you’re replaced by a younger person who does. AI lacks experience. You have that. You already have the advantage vs a young person, don’t lose your advantage for being stubborn. The pain is on the younger/junior people, not you. Their strength is using AI, win the War by not losing the battle against yourself.

The front-runners… Need structure. Show them the mistakes others have made. The results of the wild-wild-west. The quality drops.

MIT 4 steps to AI adoption: https://mitsloan.mit.edu/ideas-made-to-matter/whats-your-companys-ai-maturity-level
- Step 1: building strategy, awareness, culture. Workshops, training, office hours, show and tells, … (EDUCATION.md). Identify low hanging fruit projects and what AI show _NOT_ do.
    - build the coach-communicate culture now. shift from command and control absolutely.
- Step 2: making data ready for AI use. APIs, MCP, slash commands, documentation (AGENTS.md). Piloting automation of internal processes.

Biggest challenge in step 2 ( MIT) going from _"command-and-control culture to a coach-and-communicate culture"_. What this means is that: leaders need to shift from giving orders to guiding and supporting their teams, fostering collaboration, and encouraging open communication.

# Team

Project linear page with mcp on personal

Daily project and personal goals refresh from linear, notion, …

Show and tell the team \- workflows, skills, …

# Tools

Notion \> knowledgebase

Linear \> pm

Miro \> design, R\&D

# Excels At \_\_\_

Cross referencing many data (dashboards), over human ability, or time consuming 

# Assets

Example of how Claude code can be used:

[https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf](https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf)

Great to read at the beginning of class:

[https://www.elenaverna.com/p/confessions-of-a-millennial-in-tech](https://www.elenaverna.com/p/confessions-of-a-millennial-in-tech)

What can Agentic do well? Chapter 1 \- Page 5  
[https://resources.anthropic.com/hubfs/Scaling%20agentic%20coding%20across%20your%20organization.pdf?hsLang=en](https://resources.anthropic.com/hubfs/Scaling%20agentic%20coding%20across%20your%20organization.pdf?hsLang=en)

# Articles

## Giants Would Fall

Large tech companies that have outdated software and culture would fall. 

Claude code shrinks the barrier for people to make better versions of their services. 

People would form small software anarchist groups. You got laid off, well then.

Cost of innovation is going down.

Compare to big companies in the industrial area, gas, rail, …

What these companies would do, lay off people, force small groups to innovate, while innovation has long left their company.

They’ll hire experts to fix it, endless cycles, money, same results everytime

Until realize their best power is to invest into the small companies that are going to replace them

Compare current BOA site to Citi, wealthfront

Some would stay forever, cause they’ve always changed. Like google, apple, …

## Software Anarchy

Left behind, form small projects to do something small of the big giant, the internet will find now with ai

Free the world from capitalism– even though they’ll just invest in everything you do, that’s your wish.

## Run Local-first

Local models are the most sacred commodity and IP of every company to come.

Train small open source models. Build (coding) agents with them. Test features with them first.

Inference hijacking– use flagship models outputs to train your local models. Keep retraining with 10% of work.

Build your own datacenter– BYODC recipe


# IDEAS 


## Target audience: 
mid-large enterprises, large code base, dev team. Not startups. They benefit from fast dev of wild-wild-west and quick iterations. But some apply for setting good foundation like TDD

## Project Pattern
Design, architecture, proof audit architecture with ai, presentation
Next
Components and Phases: Phased approach. Clear milestones, proto > mvp > map (acceptable) > mmp (marketable) > cp (consumable) — let’s define exactly what qualifies movement into the next stage. What’s added in each step
Next
Instrumentation: build docs, agents.md, tools, mcp, slash commands 
Next
Team: form squads, write contracts, mock or abstract classes, docs
Next
TDD from design docs and contracts 
Next
Fast-dev: 1-2 wks, spec driven design, code
Next
Human Test, unit tests, retest, evals

In Ai evolution this ^^^ good phase to engage a consultant like us. Guide the first 3 projects. Implement well, customize for your flow/team 

Write with examples before the chapter, like Igor Poltzar. Creative or researched 

Small graphic novels for the most important concepts. Or stories!


## Website Ideas
The site, gives you articles and guides. All is there. Read to it yourself. The consultant gives you the instrumentations. Actual tools to build. Actual recipes and exercises to build skills familiarity with tools and adapt for you. 


## Future Ideas
The final build (to prod) state, all about build with voice and video vs text. What’s possible not what was 

