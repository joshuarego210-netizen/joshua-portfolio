/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'From Production Pipeline to Player Retention — Joshua Rego',
  description:
    'An APM hiring assignment spanning art-production planning, player analysis and a practical LiveOps strategy.',
};

const proof = [
  ['1,087', 'assets planned'],
  ['15-month', 'production model'],
  ['6-month', 'LiveOps strategy'],
  ['2', 'very different game problems'],
];

const assetCategories = [
  ['Characters', 216, 'Heroes · zombie types · character variants'],
  ['Environments', 165, 'Maps · modular rooms · environment pieces'],
  ['Weapons', 212, 'Starting · wall · mystery-box · wonder · melee · upgrades'],
  ['UI / UX', 129, 'HUD · menus · prompts · progression and interaction states'],
  ['VFX', 68, 'Weapon · zombie · environment and gameplay effects'],
  ['Audio', 262, 'Weapons · creatures · environments · UI and gameplay feedback'],
  ['Pickups & Power-ups', 35, 'Ammo · points · perks and power-up items'],
] as const;

const productionPhases = [
  ['01–02', 'Pre-production', 'Small team · validate style, concepts and technical pipeline'],
  ['03–05', 'Production ramp', 'Core characters, zombies, maps and weapons come online · highest coordination risk'],
  ['06–09', 'Integrate + optimize', 'Systems integration, mobile optimization and content completion · prepare soft launch'],
  ['10–15', 'Live + expand', 'Player feedback, LiveOps content and expansion · move toward sustainable production'],
] as const;

const dependencies = [
  ['Character pipeline', 'Validate early', 'If it is not functioning by roughly Month 3, character and zombie production and testing cascade.'],
  ['Mobile optimization', 'Before soft launch', 'Performance constraints cannot be treated as final polish.'],
  ['Soft-launch build', 'Months 08–09', 'Prioritize stability rather than an endless stream of new features.'],
  ['Player reception', 'After launch', 'Execution alone is not enough; player response determines whether expansion makes sense.'],
] as const;

const liveOpsMoments = [
  ['Oct', 'Diwali', 'Cultural resonance + generosity', 'Progressive rewards and relationship escalation'],
  ['Nov', 'Mystery', 'Meaningful investigation', 'Reward attention and replay'],
  ['Dec', 'Christmas', 'Stronger choice consequences', 'Make gifts and relationship decisions matter'],
  ['Feb', 'Valentine’s', 'Emotional payoff', 'Higher-stakes relationship choices'],
  ['Mar', 'Holi', 'Playfulness + community', 'A bridge toward social features'],
] as const;

const metrics = [
  'D1 / D7 retention',
  'Event participation',
  'Paid-choice conversion',
  'ARPDAU',
  'Choice completion / progression behavior',
];

const deliverables = [
  ['Art production model', 'Asset quantities · staffing · 15-month timeline · dependencies', 'https://docs.google.com/spreadsheets/d/1rXSwa1Sb7hm51G1Z9C5wF9EA6k61J3pcX3Modxiz5ds/edit'],
  ['LiveOps + KPI plan', 'Event calendar · monetisation · metrics · execution considerations', 'https://docs.google.com/spreadsheets/d/12oKLnx2dxZ5UAXRjsv6q82vSMbbYsgdzsR-f0cRhGAg/edit'],
  ['Detailed rationale', 'Research · assumptions · decisions · AI disclosure', 'https://docs.google.com/document/d/1C1ze_qC9NVRL9z1WBaoqnnyso-63AwA7VsUt-JLSjpc/edit'],
] as const;

function SiteHeader() {
  return (
    <header className="site-header shell">
      <a className="wordmark" href="/" aria-label="Joshua Rego, home">Joshua Rego</a>
      <nav aria-label="Primary navigation">
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

function BoardFigure({
  src,
  alt,
  caption,
  width,
  height,
  eager = false,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  eager?: boolean;
}) {
  return (
    <figure className={styles.boardFigure}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1440px) calc(100vw - 64px), 1400px"
        priority={eager}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function LilaArtLiveOpsCaseStudy() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#work">← Selected Work</a>
          <div className={styles.heroLabel}>02 / APM hiring assignment · LILA Games</div>
          <div className={styles.heroGrid}>
            <div>
              <h1>From Production Pipeline<br />to Player Retention</h1>
              <p className={styles.heroSubtitle}>Art Production &amp; LiveOps Strategy</p>
            </div>
            <dl className={styles.projectMeta}>
              <div><dt>Context</dt><dd>APM hiring assignment · LILA Games</dd></div>
              <div><dt>Date</dt><dd>September 2025</dd></div>
            </dl>
          </div>
          <div className={styles.heroIntro}>
            <p>One assignment. Two very different product problems.</p>
            <p>First: turn the creative ambition of a COD Zombies-style mobile game into something a production team could actually plan around.</p>
            <p>Then: step inside an existing dating-sim experience, understand where the player loop was breaking, and design a LiveOps strategy around retention, monetisation and emotional investment.</p>
            <p>The common challenge was turning a lot of possibility into something executable.</p>
          </div>
          <dl className={styles.proofStrip} aria-label="Assignment planning scope">
            {proof.map(([value, label]) => <div key={label}><dd>{value}</dd><dt>{label}</dt></div>)}
          </dl>
          <p className={styles.proofQualifier}>Assignment outputs and planning scope · not shipped outcomes</p>
        </header>

        <section className={`${styles.statementSection} shell`}>
          <div className={styles.sectionMarker}>01 / Production</div>
          <div className={styles.statementCopy}>
            <h2>Creative ambition is easy.<br />Production has dependencies.</h2>
            <div>
              <p>I started by taking apart the content requirements of a COD Zombies-style mobile game: characters, zombies, environments, weapons, UI, VFX, audio, pickups and the systems connecting them.</p>
              <p>Before turning that into a spreadsheet, I used a Figma board as a working notebook — mapping the game loop, references, asset families, mobile considerations, production questions and assumptions.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.boardSection} shell`}>
          <div className={styles.boardLead}><span>Research board / Production</span><span>Play → decompose → question → model</span></div>
          <BoardFigure
            src="/lila-art-liveops/cod-research-board.jpeg"
            alt="Complete COD Zombies production research board mapping the game loop, asset families, team roles, mobile considerations and production pipeline"
            caption="My working Figma board — research, decomposition and production questions before the final model."
            width={5000}
            height={3069}
            eager
          />
        </section>

        <section className={`${styles.assetSection} shell`}>
          <div className={styles.sectionMarker}>02 / Production model</div>
          <div className={styles.assetHeading}>
            <h2>1,087 assets.<br />15 months.<br />One production system.</h2>
            <p>The challenge wasn’t counting assets. It was understanding what had to exist, what could be reused, what depended on something else, and when the team should scale.</p>
          </div>
          <div className={styles.assetVisualization}>
            <div className={styles.assetAnchor}><strong>1,087</strong><span>assets included in the complete planning model</span></div>
            <div className={styles.assetRows}>
              {assetCategories.map(([label, value, detail]) => (
                <div className={styles.assetRow} key={label}>
                  <div><span>{label}</span><strong>{value}</strong></div>
                  <p>{detail}</p>
                  <i style={{ width: `${(value / 262) * 100}%` }} />
                </div>
              ))}
              <p>Together, these seven decompositions total 1,087. The scope came from mapping what the game would actually require.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.timelineSection} shell`}>
          <div className={styles.sectionMarker}>03 / From asset list to execution</div>
          <blockquote>Scale the team after the pipeline works — not before.</blockquote>
          <div className={styles.productionTimeline}>
            {productionPhases.map(([months, phase, detail]) => (
              <article key={months}>
                <span>Months {months}</span>
                <h3>{phase}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
          <p className={styles.timelineNote}>The model begins with a smaller team, then scales after concepts, style and technical pipelines are validated rather than burning budget early.</p>
        </section>

        <section className={`${styles.dependenciesSection} shell`}>
          <div className={styles.sectionMarker}>04 / Critical path</div>
          <h2>A schedule is only useful if it shows what can break it.</h2>
          <div className={styles.dependencies}>
            {dependencies.map(([title, timing, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <strong>{timing}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.transitionSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>05 / Player</div>
            <h2>Then the problem changed completely.</h2>
            <div className={styles.transitionCopy}>
              <p>The second half moved away from production planning and into an existing game: Heart’s Desire.</p>
              <p>Instead of asking “what has to be made?”, I was now asking:</p>
              <ul>
                <li>What is the player feeling?</li>
                <li>Where does momentum break?</li>
                <li>What deserves monetisation?</li>
                <li>What gives someone a reason to return?</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`${styles.boardSection} ${styles.playerBoardSection} shell`}>
          <div className={styles.boardLead}><span>Research board / Player</span><span>Play → observe → map → diagnose</span></div>
          <BoardFigure
            src="/lila-art-liveops/hearts-desire-research-board.jpg"
            alt="Complete Heart's Desire research board mapping the core loop, player journey, monetisation friction and story progression"
            caption="My working map of the core loop, player psychology, monetisation friction and story progression. Gameplay analysis, review inputs and product reasoning — not quantitative user research."
            width={5000}
            height={3709}
          />
        </section>

        <section className={`${styles.insightSection} shell`}>
          <div className={styles.sectionMarker}>06 / Core player insight</div>
          <blockquote>The best moment to monetise<br />isn’t automatically the moment<br />a player cares most.</blockquote>
          <div className={styles.insightCopy}>
            <p>While playing, I noticed premium gates appearing around emotionally charged choices and progression moments.</p>
            <p>The issue wasn’t simply that the game monetised. It was whether payment felt like investment in the relationship — or an interruption to it.</p>
          </div>
        </section>

        <section className={`${styles.liveOpsSection} shell`}>
          <div className={styles.sectionMarker}>07 / Six-month direction</div>
          <div className={styles.liveOpsHeading}>
            <h2>LiveOps shouldn’t feel pasted onto the game.</h2>
            <p>Heart’s Desire already had an Indian setting and relationship-driven premise. I used that identity as the starting point for a six-month LiveOps direction rather than layering generic events over it.</p>
          </div>
          <div className={styles.seasonalTimeline}>
            {liveOpsMoments.map(([month, event, idea, detail]) => (
              <article key={month}>
                <span>{month}</span>
                <h3>{event}</h3>
                <strong>{idea}</strong>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.practicalitySection} shell`}>
          <div className={styles.sectionMarker}>08 / Practicality</div>
          <h2>Strategy without capacity is fiction.</h2>
          <p className={styles.practicalityIntro}>I deliberately separated ideas that could plausibly ship with the existing product and team from more ambitious systems requiring new content production, actors, backend work or community infrastructure. Actual staffing, technical constraints and budget were unknown.</p>
          <div className={styles.capacitySplit}>
            <article>
              <span>Ship now</span>
              <ul>
                <li>Progressive gem rewards</li>
                <li>Affinity rewards</li>
                <li>Lightweight seasonal events</li>
                <li>Changes using existing content and mechanics</li>
              </ul>
            </article>
            <article>
              <span>Aspirational</span>
              <ul>
                <li>Substantial new filmed story content</li>
                <li>Deeper consequence systems</li>
                <li>Social and community infrastructure</li>
                <li>Larger relationship-system changes</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={`${styles.systemSection} shell`}>
          <div className={styles.systemCopy}>
            <div className={styles.sectionMarker}>09 / One product system</div>
            <h2>Emotional investment, made tangible.</h2>
            <p>Heart Tokens were a proposed progression layer: earned through meaningful engagement and usable for high-value emotional choices, reducing the feeling that every important moment was simply blocked by payment.</p>
            <span>Proposed system · requires validation, economy balancing and implementation work</span>
          </div>
          <ol className={styles.systemDiagram} aria-label="Proposed Heart Token system">
            {['Play / engage', 'Earn Heart Tokens', 'Invest in high-stakes choices', 'Relationship consequences', 'Replay / return'].map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>

        <section className={`${styles.measurementSection} shell`}>
          <div className={styles.measurementCopy}>
            <div className={styles.sectionMarker}>10 / Measurement discipline</div>
            <h2>No baselines.<br />No fake uplift numbers.</h2>
            <p>I didn’t have access to Heart’s Desire’s underlying analytics, so inventing percentage improvements would have created false precision.</p>
            <p>Instead, the plan defined what I would measure once implemented.</p>
          </div>
          <ul className={styles.metricList}>
            {metrics.map((metric, index) => <li key={metric}><span>{String(index + 1).padStart(2, '0')}</span>{metric}</li>)}
          </ul>
        </section>

        <section className={`${styles.depthSection} shell`}>
          <aside className={styles.aiCallout}>
            <div className={styles.sectionMarker}>AI use / disclosed</div>
            <h2>AI accelerated the work.<br />It didn’t make the decisions.</h2>
            <p>The assignment explicitly permitted and requested AI-assisted work and disclosure. I used ChatGPT for brainstorming, Perplexity for research support and Claude for refinement, then challenged outputs against the game context, production assumptions and my own analysis.</p>
            <p>The working boards above show the intermediate reasoning behind the polished deliverables.</p>
          </aside>
          <div className={styles.deliverables}>
            <div className={styles.sectionMarker}>Original deliverables</div>
            <h2>Don’t take the summary’s word for it.<br />Open the actual work.</h2>
            {deliverables.map(([title, description, href]) => (
              <a href={href} target="_blank" rel="noopener noreferrer" key={title}>
                <strong>{title} ↗</strong>
                <span>{description}</span>
              </a>
            ))}
          </div>
        </section>

        <section className={`${styles.closingSection} shell`}>
          <div className={styles.closingCopy}>
            <p>The assignment started with two very different questions.</p>
            <p>How do you turn a game’s creative scope into something a team can actually produce?</p>
            <p>And once players arrive, how do you give them a reason to stay?</p>
            <p className={styles.closingEmphasis}>I liked having to solve both.</p>
          </div>
          <div className={styles.caseActions}>
            <a href="/#work">← Back to Selected Work</a>
            <a href="/work/lila-battlepass-ua">Next: Steal the Principle, Not the Feature →</a>
          </div>
        </section>
      </article>

      <footer className={styles.caseFooter}>
        <div className="shell">
          <span>From Production Pipeline to Player Retention</span>
          <a href="/">Joshua Rego</a>
          <a href="/#work">Selected Work ↑</a>
        </div>
      </footer>
    </main>
  );
}
