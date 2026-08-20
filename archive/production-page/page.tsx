import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  ArrowRight,
  Check,
  X,
  Clapperboard,
  HardDrive,
  FileText,
  Tag,
  Search,
  Layers,
  Fingerprint,
  Eye,
  Compass,
  Wrench,
  TrendingUp,
  ShieldCheck,
  Clock,
  ListChecks,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Production & Post Operations — AiMpact Technology',
  description:
    'Operational Architecture for documentary, unscripted, and long-form production companies. We study where post-production hours actually go — logging, retrieval, story assembly — before recommending or building anything.',
  openGraph: {
    title: 'The Bottleneck Isn’t the Edit. It’s Finding the Moment.',
    description:
      'Operational Architecture for production companies. We map where the hours actually go in post, then design the system that gives them back — with your editors still making every creative call.',
    url: 'https://aimpacttechnology.com/production',
    siteName: 'AiMpact Technology',
    type: 'website',
  },
}

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const recognitionQuestions = [
  'Does a producer scrub through hours of footage to find a moment they already remember?',
  'Is the same interview transcribed, logged, and tagged more than once?',
  'Do good moments get shot and never make air because nobody could find them again?',
  'Does a note that says “find me something better” cost days instead of hours?',
  'Is your fastest path to more output still hiring more assistant editors?',
]

const pipeline = [
  { label: 'Field production', note: 'Months of shooting', hot: false },
  { label: 'Ingest', note: 'Hundreds of hours', hot: false },
  { label: 'Logging & transcription', note: 'Manual, repeated', hot: true },
  { label: 'Story & paper cut', note: 'Reading, searching', hot: true },
  { label: 'Selects & stringouts', note: 'Assembly by hand', hot: true },
  { label: 'Edit', note: 'Creative judgment', hot: false },
  { label: 'Notes & delivery', note: 'Repeat cycles', hot: false },
]

const capabilities = [
  {
    icon: HardDrive,
    title: 'Ingest & Organization',
    description:
      'Footage arrives and is immediately accounted for — named, placed, and associated with the shoot it came from. No card sits unlogged waiting for someone to get to it.',
  },
  {
    icon: FileText,
    title: 'Transcription at Ingest',
    description:
      'Every interview and scene is transcribed as it lands, with timecode intact — so the written record exists before anyone needs it, not after they go looking.',
  },
  {
    icon: Tag,
    title: 'Structured Logging',
    description:
      'People, locations, subjects, and recurring beats are tagged consistently across a season — the same way, every time, without depending on who happened to log that day.',
  },
  {
    icon: Search,
    title: 'Story Retrieval',
    description:
      'A producer asks for what they actually want in plain language — a moment, a turn, a reaction — and gets timecoded candidates back instead of a keyword list.',
  },
  {
    icon: Layers,
    title: 'Candidate Assembly',
    description:
      'Retrieved moments come back already ordered into a first-pass sequence in your show’s shape — so your story producer starts from a draft and edits it down, rather than starting from nothing.',
  },
  {
    icon: Fingerprint,
    title: 'Source Traceability',
    description:
      'Every surfaced moment stays linked to its original clip and timecode. You can always answer where something came from and what surrounded it.',
  },
]

const willNot = [
  'Replace your editors, story producers, or their judgment',
  'Compete with your NLE — nothing here tries to be Avid, Premiere, or Resolve',
  'Publish, deliver, or lock anything without a human approving it',
  'Alter the meaning of what someone actually said',
  'Score moments as guaranteed performance — recommendations stay editorial',
  'Get built at all if observation shows the problem is somewhere else',
]

const phases = [
  { icon: Eye, title: 'Observe', description: 'We sit with your post team and follow one real episode from last shoot day to delivery.' },
  { icon: ListChecks, title: 'Map', description: 'Where the hours actually go, stage by stage — measured, not estimated.' },
  { icon: Compass, title: 'Architect', description: 'Design what should change, including the parts that shouldn’t.' },
  { icon: Wrench, title: 'Build', description: 'Only what the architecture requires. Integrate first, build last.' },
  { icon: TrendingUp, title: 'Improve', description: 'Measure hours per deliverable before and after. The number either moved or it didn’t.' },
]

export default function ProductionPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#09090B]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: 'url(/blueprint-hero.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/70 via-[#09090B]/85 to-[#09090B]" />
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090B] to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Operational Architecture for Production
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
              The Bottleneck
              <br />
              <span className="text-gradient">Isn&apos;t the Edit.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed">
              Hundreds of hours of footage stand behind every finished episode. Cutting it was
              never the hard part. Finding the moment was.
            </p>

            <p className="text-base text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              We study how your post operation actually runs before recommending any technology —
              then design the system that gives those hours back, with your editors still making
              every creative call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#proof"
                className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
              >
                How We&apos;d Prove It
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              {[
                { icon: ShieldCheck, label: 'Observe before we build' },
                { icon: Clock, label: 'Bounded test before any platform' },
                { icon: Clapperboard, label: 'Editors keep every creative call' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-zinc-400">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Recognition ──────────────────────────────────────────────── */}
        <section className="relative py-24 bg-[#09090B] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-right opacity-20"
            style={{ backgroundImage: 'url(/blueprint-texture.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/80 to-[#09090B]/40" />

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-6">
                The Pattern
              </p>

              <div className="space-y-2 mb-8">
                {recognitionQuestions.map((q) => (
                  <p key={q} className="text-xl md:text-2xl text-zinc-300 font-medium">
                    {q}
                  </p>
                ))}
              </div>

              <p className="text-zinc-500 mb-10">
                None of that is a talent problem. It&apos;s an architecture problem — and it has a
                name.
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
                Your Post Pipeline
                <br />
                <span className="text-gradient">Was Never Designed. It Accumulated.</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Every production company has people, processes, information, technology, and
                decisions. In post, those five things were assembled show by show, deadline by
                deadline, under pressure.{' '}
                <strong className="text-white font-semibold">
                  Operational Architecture designs them on purpose.
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* ── Where the hours go ───────────────────────────────────────── */}
        <section className="py-28 bg-[#0D0D10]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Where the Hours Go
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Three Stages Carry the Labor.
                <br />
                <span className="text-gradient">None of Them Are the Craft.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Somebody scrubs and transcribes so somebody else can find. The work is real,
                expensive, and almost entirely mechanical — which is exactly what makes it worth
                designing around.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
              {pipeline.map((stage, i) => (
                <div
                  key={stage.label}
                  className={`rounded-2xl border p-5 transition-colors ${
                    stage.hot
                      ? 'border-indigo-500/40 bg-indigo-500/5'
                      : 'border-zinc-800 bg-zinc-900/20'
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono font-bold tracking-widest mb-2 block ${
                      stage.hot ? 'text-indigo-400' : 'text-zinc-600'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className={`text-sm font-semibold mb-1.5 leading-tight ${
                      stage.hot ? 'text-white' : 'text-zinc-400'
                    }`}
                  >
                    {stage.label}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{stage.note}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-6 border-t border-zinc-800">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span className="w-3 h-3 rounded border border-indigo-500/40 bg-indigo-500/10" />
                Mechanical work — the labor concentration
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span className="w-3 h-3 rounded border border-zinc-800 bg-zinc-900/40" />
                Creative judgment — stays with your team
              </div>
            </div>
          </div>
        </section>

        {/* ── What we'd design ─────────────────────────────────────────── */}
        <section className="py-28 bg-[#09090B]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                What We&apos;d Design
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Six Functions.
                <br />
                <span className="text-gradient">One Operating System.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Not six products to buy. Six things your post operation already does by hand,
                designed to work together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {capabilities.map((c) => {
                const Icon = c.icon
                return (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-700 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1.5">{c.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{c.description}</p>
                  </div>
                )
              })}
            </div>

            {/* The distinction */}
            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 md:p-10">
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-5">
                The Distinction That Matters
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-tight">
                Finding the moment is half the job.
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-3xl">
                Plenty of tools will hand a producer a list of search results. Then the producer
                still opens an empty timeline and builds the sequence by hand — which is where the
                days actually went. The value isn&apos;t in the search. It&apos;s in what arrives
                after it.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                {['Raw footage', 'Relevant moments', 'Candidate selects', 'Ordered stringout'].map(
                  (step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="px-4 py-2 rounded-xl border border-zinc-700 bg-[#0D0D10] text-zinc-300 font-medium">
                        {step}
                      </span>
                      {i < 3 && <ArrowRight className="w-4 h-4 text-indigo-400 flex-shrink-0" />}
                    </div>
                  )
                )}
                <ArrowRight className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span className="px-4 py-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 text-white font-semibold">
                  Human creative decision
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── What we won't do ─────────────────────────────────────────── */}
        <section className="py-28 bg-[#0D0D10]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Boundaries
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                What This Will Never Do.
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                Worth saying plainly, because in post the question behind the question is usually
                whose job this is really about.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {willNot.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/20 p-4"
                >
                  <div className="w-6 h-6 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-zinc-500" />
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <p className="text-zinc-300 leading-relaxed">
                Your editors and story producers are the product. The goal is to give them back the
                hours spent on work that needs an experienced person but not their creative
                judgment —{' '}
                <strong className="text-white font-semibold">
                  so the people who know the story spend their time on the story.
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* ── How we'd prove it ────────────────────────────────────────── */}
        <section id="proof" className="py-28 bg-[#09090B]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                How We&apos;d Prove It
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                One Shoot Day.
                <br />
                <span className="text-gradient">Measured Against Your Own Team.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                We don&apos;t open with a platform, a license, or a migration. We open with a test
                small enough to say yes to and specific enough to fail.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  n: '01',
                  title: 'You pick the material',
                  desc: 'One shoot day, or one completed episode’s transcripts — whatever your agreements and participant releases actually allow. We sign whatever you put in front of us.',
                },
                {
                  n: '02',
                  title: 'We run it',
                  desc: 'Transcription, structured detection, and a ranked set of candidate moments with timecodes and plain-language reasons for each one.',
                },
                {
                  n: '03',
                  title: 'You grade it',
                  desc: 'Compare our candidates against what your story producer actually chose from that same material. Your team’s judgment is the answer key.',
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-700 transition-colors"
                >
                  <span className="text-indigo-400/60 text-[10px] font-mono font-bold tracking-widest mb-3 block">
                    {step.n}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8">
              <h3 className="text-lg font-semibold text-white mb-2">
                If it doesn&apos;t hold up, you&apos;ll know in a week — and it cost you nothing.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
                We say that plainly because it&apos;s the honest shape of this work. Whether
                detection is good enough to be worth building around is a real question, and the
                only way to answer it is against your footage and your team&apos;s judgment — not
                in a demo built on someone else&apos;s content. No interface, no platform, and no
                further investment gets proposed until that test passes.
              </p>
            </div>
          </div>
        </section>

        {/* ── Method ───────────────────────────────────────────────────── */}
        <section className="py-28 bg-[#0D0D10]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                How We Work
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Observation First.
                <br />
                <span className="text-gradient">Technology Last.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                The same discipline we apply everywhere, pointed at post. Nothing gets built until
                the architecture calls for it.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
              {phases.map((phase, i) => {
                const Icon = phase.icon
                return (
                  <div
                    key={phase.title}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-indigo-400" />
                      </div>
                      <span className="text-indigo-400/60 text-xs font-mono font-bold tracking-widest">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">{phase.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{phase.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="text-center">
              <a
                href="/#methodology"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                See the full seven-phase methodology
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── Close ────────────────────────────────────────────────────── */}
        <section className="py-28 bg-[#09090B]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Worth Asking
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-[1.15]">
              How Many Hours Stand Between
              <br />
              <span className="text-gradient">Locked Footage and a First Cut?</span>
            </h2>

            <div className="space-y-2 mb-10 text-left max-w-xl mx-auto">
              {[
                'If one part of post could be reliably handed off, which part would you choose?',
                'What work needs experienced people but not their creative judgment?',
                'If episode orders doubled next season, what breaks first?',
              ].map((q) => (
                <div key={q} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-1.5" />
                  <p className="text-lg text-zinc-300">{q}</p>
                </div>
              ))}
            </div>

            <p className="text-zinc-500 mb-10 leading-relaxed">
              If those are interesting questions in your operation, the conversation is worth
              having. We don&apos;t sell packages — no two production companies run the same way.
            </p>

            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
