export interface Lesson {
  id: string
  title: string
  duration: string
  content: string
}

export interface Module {
  id: string
  number: number
  title: string
  icon: string
  color: string
  lessons: Lesson[]
}

export const MODULES: Module[] = [
  {
    id: 'module-1',
    number: 1,
    title: 'The AiMpact Model',
    icon: '🧭',
    color: 'blue',
    lessons: [
      {
        id: 'what-aimpact-builds',
        title: 'What AiMpact Actually Builds',
        duration: '5 min',
        content: `## What AiMpact Actually Builds

AiMpact Technology builds **custom AI-powered software and automation** for growing businesses — not templates, not generic chatbots.

**What we build for clients (and ourselves):**

| Service | What it does |
|---|---|
| AI Front Desk | Answers inquiries via SMS/voice 24/7, qualifies leads, books appointments |
| Custom AI Agents | Branded AI assistants trained on a business's products and processes |
| Business Automations | Connects existing tools (CRM, forms, email, calendars) and removes manual data entry |
| Custom Applications | Full web apps — intake forms, dashboards, portals, internal tools |
| AiMpact OS | A complete operations platform (CRM, AI front desk, dashboards, automations) — custom-configured per business |

**The key idea:** these aren't five separate products you have to learn to sell. They're five doors into the same conversation — *"this business is running on disconnected tools and manual work, and AiMpact can fix that."*

As a partner, you don't need to know which of these a prospect needs before you talk to them. You just need to recognize the pain. AiMpact figures out the right scope during discovery.`,
      },
      {
        id: 'who-youre-selling-for',
        title: "Who You're Selling For",
        duration: '5 min',
        content: `## Who You're Selling For

You are not reselling a single SKU. You're introducing AiMpact into a relationship — and AiMpact figures out what that relationship needs.

**Two broad prospect types:**

**1. Operators drowning in tool sprawl**
Any business owner running their company across 4–5 disconnected tools (a CRM they half-use, a scheduling app, spreadsheets, a shared inbox). They know it's costing them time and deals, but they don't have a tech team to fix it.

**2. Agencies, consultants, and freelancers who can't build**
Marketing agencies, consultants, brokers, and freelance operators who *want* to offer their clients a "platform" or "automated system" but don't have development capacity. AiMpact becomes their dev team — they keep the client relationship, AiMpact builds what they promise.

**Green flag phrases:**
- "We're juggling like five different apps and none of them talk to each other"
- "I keep meaning to set up better systems but never have time"
- "My team spends half the day on stuff that should just happen automatically"
- "I'd love to offer my clients something like that, but we're not developers"

**Where to find them:**
- Your existing professional network — anyone who runs or advises a business
- Marketing/web/branding agencies (they sell "growth," AiMpact builds the engine)
- Business consultants and fractional operators
- Local business groups, chambers of commerce, BNI-style networks
- LinkedIn — operators and agency owners posting about growth, hiring, or "wearing too many hats"`,
      },
      {
        id: 'your-role-as-partner',
        title: 'Your Role as a Partner',
        duration: '4 min',
        content: `## Your Role as a Partner

Your job has three parts. AiMpact handles everything else.

**1. Open the conversation**
You introduce AiMpact to someone in your network who's a fit. That's it — you don't need to scope, price, or pitch the technical details.

**2. Register the deal**
Before you pitch anything specific, register the prospect in your portal. This locks in your commission and protects the relationship for 90 days.

**3. Hand off to AiMpact**
AiMpact runs discovery, scopes the build, prices it, and delivers. You stay in the loop, but you're not responsible for the technical conversation unless you want to be.

**What you're NOT responsible for:**
- Knowing pricing details beyond general ranges
- Scoping the technical solution
- Delivery, support, or maintenance

**What makes a great partner:**
Partners who do well aren't necessarily "tech people" — they're people whose network trusts them. A warm introduction from someone trusted is worth more than any cold pitch. Your network + AiMpact's delivery = the whole offer.`,
      },
    ],
  },
  {
    id: 'module-2',
    number: 2,
    title: 'What Is Platform-as-a-Service',
    icon: '💡',
    color: 'indigo',
    lessons: [
      {
        id: 'paas-plain-english',
        title: 'PaaS in Plain English',
        duration: '5 min',
        content: `## PaaS in Plain English

You'll hear "Platform-as-a-Service" (PaaS) thrown around a lot. Here's what it actually means — and why it matters to your pitch.

**The three layers most businesses deal with:**

- **Software they buy off the shelf** (SaaS) — a CRM, a scheduling tool, an accounting app. Generic, built for everyone, configured for no one.
- **Software they'd have to build from scratch** — expensive, slow, requires a dev team most small businesses don't have.
- **A platform built FOR them, that they then run their business on** — this is the PaaS model AiMpact operates in.

**The difference that matters:**
A generic SaaS tool gives a business a piece of software and says "make it work for you." AiMpact builds the platform *around how the business already works*, then hands them the keys.

**Why this is a big deal:**
Most small businesses can't afford a custom dev team, and off-the-shelf tools never quite fit — so they end up duct-taping together 4–5 subscriptions that don't talk to each other. AiMpact's PaaS model gives them the "custom build" experience at a price and timeline that's actually accessible.

**Your one-line explanation to a prospect:**
> "Instead of buying five different tools and hoping they work together, AiMpact builds you one platform — configured to how your business actually runs — and you own it from day one."`,
      },
      {
        id: 'custom-beats-generic',
        title: 'Why Custom Beats Generic',
        duration: '6 min',
        content: `## Why Custom Beats Generic

When a prospect says "we already have a CRM" or "we just need a better tool," this is the lesson that reframes the conversation.

**Generic SaaS tools optimize for the vendor, not the customer:**
- Built for the widest possible audience, so nothing fits perfectly
- Pricing scales with seats/usage forever — it's a permanent rent
- You're locked into their roadmap, their outages, their price increases
- Switching later means migrating everything again

**A custom-built platform flips all of that:**
- Configured around THIS business's exact workflow, team structure, and customers
- AiMpact builds it once — the client owns the result (not a perpetual SaaS seat)
- Data lives in the client's own database (Supabase) — no vendor lock-in
- It grows with the business — new modules, integrations, and automations get added as needed, because AiMpact is already inside the codebase

**The "five tools into one" math:**
Most small businesses are paying for a CRM, a scheduling tool, a forms tool, an email tool, and a reporting spreadsheet — often $300–$800/month combined, and none of it is connected. A single custom platform frequently costs less than that stack over time, and it actually fits.

**Your framing:**
> "You're not choosing between 'cheap SaaS' and 'expensive custom software.' You're choosing between five disconnected subscriptions you'll be paying forever, or one platform built around your business that you actually own."`,
      },
      {
        id: 'aimpact-os-proof',
        title: 'AiMpact OS — The Proof of Concept',
        duration: '5 min',
        content: `## AiMpact OS — The Proof of Concept

Every prospect will eventually ask: "Has anyone actually done this, or is this just a sales pitch?" AiMpact OS is the answer.

**AiMpact OS is the platform AiMpact runs its own business on.** It includes:

- AI Front Desk that answers and qualifies every inbound inquiry
- A full lead pipeline and CRM, tracked from first contact to close
- Client management — project status, health scores, follow-ups
- An operations dashboard built around AiMpact's own KPIs
- Workflow automation for the repetitive parts of running the business

AiMpact didn't buy this from a vendor. They built it because they needed it — and they've been running their own consulting business on it for over a year.

**Why this matters in your pitch:**
You're not asking a prospect to be the guinea pig for an unproven idea. You're showing them a platform that's already running a real business, and offering to build *their version* of it.

**The line that lands:**
> "The company that would build your platform runs their entire business on the same kind of platform. This isn't theoretical — it's proof that it works."

You'll learn more about how partners can run their own business on AiMpact OS (at a partner rate) in Module 4.`,
      },
    ],
  },
  {
    id: 'module-3',
    number: 3,
    title: 'The Partner Pitch',
    icon: '🎤',
    color: 'purple',
    lessons: [
      {
        id: 'starting-conversations',
        title: 'Starting Conversations',
        duration: '5 min',
        content: `## Starting Conversations

You don't need a polished pitch. You need an opener that earns 60 seconds of attention.

**The conversation opener (in person or on a call):**
> "I've started working with a company that builds custom software and automation for businesses — basically replacing the pile of disconnected tools most companies run on with one platform built around how they actually work. It made me think of you / your business. Worth a quick conversation?"

**Email intro:**
> Subject: Quick thought on your operations
>
> Hi [Name],
>
> I've been working with a company called AiMpact Technology that builds custom platforms for businesses — combining the CRM, scheduling, automation, and reporting tools most companies juggle separately into one system built around how the business actually runs.
>
> It made me think of [Company] — would a short conversation be worth your time?

**LinkedIn DM:**
> Hi [Name] — I've been connected with a firm that builds custom operational platforms for growing businesses (think: one system instead of five disconnected tools). Given what I know about [Company], thought it might be worth a quick chat. Open to it?

**Referral intro (warmest version — from a mutual contact):**
> "[Your name] works with a company that builds custom software platforms for businesses — kind of like a dev team you can hire without hiring one. Given where you're at with [specific pain], I thought it'd be worth connecting you two."

**The goal of every opener is the same:** get to a short discovery call. AiMpact runs the actual sales conversation from there.`,
      },
      {
        id: 'qualifying-and-handoff',
        title: 'Qualifying & The Discovery Handoff',
        duration: '5 min',
        content: `## Qualifying & The Discovery Handoff

You don't need to fully qualify a prospect before registering them — but a little context makes the handoff smoother and helps AiMpact prep for the call.

**Quick signals worth noting (not required, but helpful):**
- Roughly how many tools/subscriptions are they juggling?
- Do they have any internal technical/dev capacity, or none at all?
- Is there an obvious "this is eating our time" pain point they mentioned?
- Are they an end business (will use the platform themselves) or an agency/consultant (wants to offer it to *their* clients)?

**The diagnostic question that opens almost any conversation:**
> "If you had to describe your day-to-day operations in one word, would it be 'smooth' or 'chaos'?"

Whatever they say next is your opening. Let them describe the chaos — don't jump in with solutions. The more specific their complaint, the easier AiMpact's discovery call will be.

**The handoff:**
Once someone agrees to a conversation, register the deal in your portal with whatever details you have (even just a name and company is enough to start). Then either:
- Introduce them directly to AiMpact via email, or
- Send them AiMpact's booking link with your referral code attached

From there, AiMpact runs discovery, scopes the build, and prices it. You'll see the deal move through your portal as it progresses.`,
      },
    ],
  },
  {
    id: 'module-4',
    number: 4,
    title: 'Run AiMpact OS Yourself',
    icon: '⚙️',
    color: 'cyan',
    lessons: [
      {
        id: 'partner-rate-subscription',
        title: 'Your Partner-Rate AiMpact OS Subscription',
        duration: '5 min',
        content: `## Your Partner-Rate AiMpact OS Subscription

As an active partner, you can run your own referral business on AiMpact OS at a discounted partner rate — the same platform AiMpact runs its own company on (see Module 2).

**What this gets you:**
- A CRM and pipeline to track your own referrals and conversations
- An operations dashboard for your partner activity
- A live, working example of AiMpact OS you can show prospects firsthand

**How it works:**
Partner-rate AiMpact OS access is arranged individually — register your interest as a deal with service interest "AiMpact OS / Partner Platform" (or message your AiMpact contact directly), and you'll be set up with a discounted instance configured for your own partner business.

This isn't required to start referring — your portal works on its own. But it's available to any active partner who wants their own instance, either to run their referral business on or to use as a demo.`,
      },
      {
        id: 'using-it-as-demo',
        title: 'Using It As Your Demo',
        duration: '4 min',
        content: `## Using It As Your Demo

The single most persuasive thing you can do in a conversation is show, not tell.

**Instead of describing AiMpact OS abstractly, show your own instance:**
> "Let me show you something — this is the platform I run my own referral business on. AiMpact built it, and they can build the equivalent for your business, configured around how you work."

This does two things at once:
1. It proves the platform is real and currently running a real (small) business — yours.
2. It lets the prospect immediately picture their own version: "okay, but with my CRM stages, my team, my workflow."

**What to walk through in a 2-minute demo:**
- Your dashboard / home view — "this is the single place I check every day"
- Your pipeline — "every referral I make moves through these stages automatically"
- Anything automated — a notification, a status update, a follow-up reminder

**You don't need to be technical to do this.** You're not demoing features — you're demoing "a business person uses this every day and it just works."`,
      },
    ],
  },
  {
    id: 'module-5',
    number: 5,
    title: 'Objection Handling',
    icon: '🛡️',
    color: 'amber',
    lessons: [
      {
        id: 'objections',
        title: 'The 6 Objections and How to Handle Them',
        duration: '8 min',
        content: `## The 6 Objections and How to Handle Them

**1. "We already have a CRM / tools."**
> "Most of the businesses AiMpact works with do too — usually 4–5 different ones that don't talk to each other. AiMpact doesn't necessarily rip those out; sometimes they connect them, sometimes they replace the whole stack with one platform. Either way, the goal is fewer tools and less manual work, not more software to learn."

---

**2. "How much does this cost?"**
> "It depends on scope — smaller builds start in the low thousands, larger custom platforms run higher, and there are ongoing support options too. The best next step is a free discovery call where AiMpact maps your specific setup and gives you an actual number — no obligation."

---

**3. "We don't have anyone technical on our team."**
> "That's actually the point — you don't need to. AiMpact builds and maintains everything. Your team just uses the platform day to day, the same way you'd use any software, except this one is built around how you already work."

---

**4. "We're not ready for something this big right now."**
> "It doesn't have to start big. Most engagements start with one specific pain point — like a slow lead response process or a manual reporting task — and grow from there once the value is obvious. The free discovery call is just about figuring out what that first piece would be, if any."

---

**5. "AI/automation feels like a fad — I'm skeptical."**
> "Totally fair. The way to think about it isn't 'AI' — it's 'fewer manual steps and fewer disconnected tools.' AiMpact uses AI and automation as tools to build that faster, but what you end up with is a system that runs your business more predictably. That's not a trend, that's just better operations."

---

**6. "Can you guarantee results / timelines?"** *(as a partner, never answer this yourself)*
> "I'm not the right person to give you specifics on scope, pricing, or timelines — that's exactly what the discovery call is for, and AiMpact will walk you through real examples of what they've built for businesses like yours. I can get that set up for you."

**The pattern across all of these:** acknowledge, reframe away from "more software," and route to the discovery call. You're never the one promising scope, price, or timeline.`,
      },
    ],
  },
  {
    id: 'module-6',
    number: 6,
    title: 'Deal Registration & Commission Tiers',
    icon: '🔐',
    color: 'green',
    lessons: [
      {
        id: 'registering-a-deal',
        title: 'Registering a Deal',
        duration: '5 min',
        content: `## Registering a Deal

Deal registration is the single most important habit as a partner. It protects your commission for 90 days and applies to **every** service type — AI agents, automations, custom apps, AiMpact OS, or general consulting.

**The rule: register BEFORE you pitch anything specific.**

If a prospect contacts AiMpact directly without you having registered them first, you may not receive a commission. First-to-register wins — no exceptions.

**What you need to register (minimum):**
- Prospect first name
- Company name
- Email or phone (one is enough)
- A best guess at service interest — this can be updated later

**What happens after you register:**
1. Status starts as **Submitted**
2. AiMpact reviews within 1–2 business days → **Approved**, and the 90-day protection window begins
3. If the deal closes → **Won**, commission calculated and recorded
4. If 90 days pass without a close → **Expired** (you can re-register if the conversation is still active)

**Your commission rate is locked at registration time** — even if you move up a tier before the deal closes, you keep the rate you had when you registered. This protects you if you're close to a tier change.

**Extensions:** if a deal is close but needs more time, you can request an extension by reaching out directly with context before the 90 days run out.`,
      },
      {
        id: 'commission-tiers-math',
        title: 'Commission Tiers & The Math',
        duration: '5 min',
        content: `## Commission Tiers & The Math

**Tier system:**

| Tier | Closed Deals | New Client Commission |
|------|-------------|------------------------|
| Associate | 0–2 | 12% |
| Partner | 3–9 | 15% |
| Executive Partner | 10+ | 18% |

**Additional commission types:**
- **Retainer commission:** 10% of any monthly retainer/support value for 12 months after it begins
- **Renewal commission:** 5% on renewals or upsells from clients you originally introduced, for as long as you're active
- **Sub-rep override (Partner tier+):** +2% on deals closed by reps you recruit

**Payment terms:** commissions are paid **net-30** after the client's payment clears. No commission is earned until AiMpact is actually paid.

**Worked example (Associate tier):**
A $15,000 platform build closes → you earn **$1,800** (12%).
If that client also starts a $1,500/month support retainer → you earn **$150/month for 12 months** (10%) = an additional **$1,800**.
Total from one deal: **$3,600**.

**Worked example (Partner tier):**
Same $15,000 deal at 15% = **$2,250**, plus the same retainer math at 10% = **$1,800**. Total: **$4,050**.

The math scales the same way regardless of *which* AiMpact service the deal involves — a custom app, an AI front desk, an automation project, or an AiMpact OS build are all commissionable under the same structure.`,
      },
    ],
  },
  {
    id: 'module-7',
    number: 7,
    title: 'Growing Your Practice',
    icon: '🚀',
    color: 'rose',
    lessons: [
      {
        id: 'referral-sources',
        title: 'Referral Sources for Dev Partners',
        duration: '6 min',
        content: `## Referral Sources for Dev Partners

The highest-performing partners don't cold-pitch — they build a small number of repeatable referral relationships.

**1. Marketing & branding agencies**
Agencies sell growth and visibility, but rarely have development capacity. They're often looking for a "tech partner" they can quietly plug in behind the scenes when a client needs a platform, automation, or custom app — while the agency keeps the relationship.

*Intro line:* "I work with a company that does custom software and automation builds — basically a dev team your agency can plug in when a client needs something built, without you having to hire developers."

**2. Business consultants & fractional operators**
Consultants who advise on operations, growth, or efficiency constantly run into "we need a system for this" moments. AiMpact is the system they can point to.

*Intro line:* "A lot of the operational gaps you're probably identifying for clients end up needing some kind of custom tool or automation — I work with a firm that builds exactly that, and would be a good resource to have in your back pocket."

**3. Freelance developers & small dev shops who can't fulfill**
Counterintuitively, individual developers and small shops are a great source — when a project is bigger than they can take on, or outside their specialty, they need somewhere to send it (and a reason to stay involved via referral commission).

**4. Your existing network**
Don't overlook this — anyone who owns or runs a business, or advises people who do, is a potential first conversation. The Module 3 openers work for warm relationships just as well as new ones.

**The math:**
One solid referral relationship that sends 1–2 qualified conversations a month, converting at a reasonable rate, can produce a steady stream of deal registrations — and each one compounds toward your next tier.`,
      },
      {
        id: 'sub-rep-recruiting',
        title: 'Sub-Rep Recruiting & Scaling',
        duration: '4 min',
        content: `## Sub-Rep Recruiting & Scaling

**Reaching Partner tier (3 closed deals) unlocks sub-rep recruiting.**

Once you're at Partner tier, you can introduce other people to the partner program. When someone you recruited closes a deal, you earn a **2% override** on top of their commission — without reducing what they're paid. AiMpact absorbs the override.

*Example: your recruit closes a $20,000 deal at their 12% rate ($2,400 commission). You earn an additional 2% = $400 override — on top of any deals you close yourself.*

**Why this is legitimate, not a pyramid:**
The override is based entirely on *closed deals*, never on recruiting itself. You earn nothing for signing someone up — only when they actually close business. This keeps the incentive aligned with real outcomes.

**Who makes a good sub-rep recruit:**
- People in your network who already talk to business owners, agencies, or consultants regularly
- Anyone who'd benefit from having "a dev team in their back pocket" as a value-add for their own relationships

**Scaling your practice over time:**
1. Start with your own warm network (Module 1/3)
2. Build 1–2 repeatable referral relationships (this lesson)
3. Reach Partner tier and start recruiting sub-reps
4. Layer in your own AiMpact OS instance (Module 4) as both your operating system and your best demo

Each step compounds — more relationships, more deals registered, higher tier, more override income.`,
      },
    ],
  },
]

export const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    question: "What does AiMpact actually build for clients?",
    options: [
      { id: 'a', text: 'Generic off-the-shelf chatbots' },
      { id: 'b', text: 'Custom AI agents, automations, custom apps, and AiMpact OS — configured per business' },
      { id: 'c', text: 'IT support and hardware repair' },
      { id: 'd', text: 'Only AiMpact OS subscriptions' },
    ],
    correct: 'b',
  },
  {
    id: 'q2',
    question: 'What is Platform-as-a-Service (PaaS), as AiMpact uses the term?',
    options: [
      { id: 'a', text: 'A generic SaaS tool every customer configures themselves' },
      { id: 'b', text: 'A platform built around how a specific business operates, which they then own and run on' },
      { id: 'c', text: 'A one-time software license with no support' },
      { id: 'd', text: 'A marketplace of third-party apps' },
    ],
    correct: 'b',
  },
  {
    id: 'q3',
    question: 'Why does AiMpact OS matter in a partner pitch?',
    options: [
      { id: 'a', text: "It's just a marketing name with no real product" },
      { id: 'b', text: "It's proof — AiMpact runs its own business on it, showing the model works" },
      { id: 'c', text: "It's a free tool prospects can download" },
      { id: 'd', text: 'It replaces the need for a discovery call' },
    ],
    correct: 'b',
  },
  {
    id: 'q4',
    question: 'A prospect says "we already have a CRM." What\'s the best response?',
    options: [
      { id: 'a', text: '"Then this probably isn\'t for you."' },
      { id: 'b', text: '"Most clients have several tools that don\'t talk to each other — AiMpact can connect or replace that stack, the goal is less manual work."' },
      { id: 'c', text: '"You\'ll need to cancel that first."' },
      { id: 'd', text: '"Our tool is better, just switch."' },
    ],
    correct: 'b',
  },
  {
    id: 'q5',
    question: 'When should you register a deal?',
    options: [
      { id: 'a', text: 'After the prospect signs a contract' },
      { id: 'b', text: 'Only if you\'re sure it will close' },
      { id: 'c', text: 'Before you pitch anything specific — as soon as you have basic contact info' },
      { id: 'd', text: 'After AiMpact has already talked to them' },
    ],
    correct: 'c',
  },
  {
    id: 'q6',
    question: 'How long does an approved deal registration protect your commission?',
    options: [
      { id: 'a', text: '30 days' },
      { id: 'b', text: '60 days' },
      { id: 'c', text: '90 days from approval' },
      { id: 'd', text: '1 year' },
    ],
    correct: 'c',
  },
  {
    id: 'q7',
    question: 'What is the commission rate for an Associate partner (0–2 closed deals)?',
    options: [
      { id: 'a', text: '8%' },
      { id: 'b', text: '10%' },
      { id: 'c', text: '12%' },
      { id: 'd', text: '15%' },
    ],
    correct: 'c',
  },
  {
    id: 'q8',
    question: 'What can an active partner do with a partner-rate AiMpact OS subscription?',
    options: [
      { id: 'a', text: 'Nothing — it\'s for AiMpact staff only' },
      { id: 'b', text: 'Run their own referral business on it and use it as a live demo for prospects' },
      { id: 'c', text: 'Resell it under their own brand with no involvement from AiMpact' },
      { id: 'd', text: 'Use it only during the onboarding period' },
    ],
    correct: 'b',
  },
  {
    id: 'q9',
    question: 'A prospect asks for pricing, scope, or timeline guarantees. What should you, as a partner, do?',
    options: [
      { id: 'a', text: 'Give your best estimate based on similar deals' },
      { id: 'b', text: 'Promise a discount to close faster' },
      { id: 'c', text: 'Route it to a discovery call with AiMpact rather than answering yourself' },
      { id: 'd', text: 'Tell them it\'s always the same flat rate' },
    ],
    correct: 'c',
  },
  {
    id: 'q10',
    question: 'What does reaching Partner tier (3 closed deals) unlock?',
    options: [
      { id: 'a', text: 'A higher base salary' },
      { id: 'b', text: 'Sub-rep recruiting with a 2% override on recruited reps\' closed deals' },
      { id: 'c', text: 'Unlimited free AiMpact OS instances' },
      { id: 'd', text: 'Automatic deal approval with no review' },
    ],
    correct: 'b',
  },
]

export const PASSING_SCORE = 8

export function getTierInfo(wonDeals: number) {
  if (wonDeals >= 10) return { name: 'Executive Partner', rate: 0.18, color: 'purple', next: null }
  if (wonDeals >= 3) return { name: 'Partner', rate: 0.15, color: 'indigo', next: { name: 'Executive Partner', dealsNeeded: 10 - wonDeals } }
  return { name: 'Associate', rate: 0.12, color: 'blue', next: { name: 'Partner', dealsNeeded: 3 - wonDeals } }
}
