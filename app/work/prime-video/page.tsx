/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'Amazon Prime Video — Joshua Rego',
  description: 'An Upraised product management fellowship case study spanning research, opportunity selection, wireframes, requirements and measurement.',
};

const signals = [
  'Discovery often became prolonged browsing.',
  'Recommendations influenced what users watched.',
  'Users compared Prime Video with other streaming services.',
  'Search friction was a recurring complaint.',
  'Availability and add-on payments affected perceived value.',
  'Viewing clustered around weekends, post-work and binge sessions.',
] as const;

const annotations = [
  ['01', 'Preference setup', 'Language and genre preferences establish an initial signal.'],
  ['02', 'For You', 'Personalised recommendations become a dedicated discovery surface.'],
  ['03', 'Feedback', 'Like, dislike and watch behaviour refine future suggestions.'],
  ['04', 'Preference control', 'Users can review and change preferences, alerts and favourites.'],
] as const;

const events = [
  'for_you_page_viewed',
  'for_you_page_swiped',
  'recommendations_clicked',
  'recommendation_played',
  'feedback_submitted',
  'session_started',
  'session_ended',
  'user_returned',
] as const;

const projectLinks = [
  ['01', 'Product & Funnel', 'https://drive.google.com/file/d/13PWDaMJsqo-xsMuX0VF3pbC4-zQRAxll/view'],
  ['02', 'Metrics Decomposition', 'https://drive.google.com/file/d/1KqSOr_nLRZz1uZozYoeaben0VAh3ERoS/view'],
  ['03', 'Competitive Research', 'https://drive.google.com/file/d/1RVlR53rrdY_BjQ_O4V7_78KmVBG-lO6x/view'],
  ['04', 'User Research', 'https://drive.google.com/file/d/1EFUOJdPregD-ScTalKF1YzYeD3VdBNYB/view'],
  ['05', 'Opportunity Mapping', 'https://drive.google.com/file/d/1pY6YIkpSWW4JrOLio6o9f74OesEuNnZu/view'],
  ['06', 'Solutions & Wireframes', 'https://drive.google.com/file/d/1XTL9Y9GlGi0phBgUQ0OjgZGOxYhKqY1Z/view'],
  ['07', 'Concept Note', 'https://drive.google.com/file/d/194dZuRE9Lw4xLa0MwkVbv6KzJNdODFCG/view'],
  ['08', 'Final PRD', 'https://drive.google.com/file/d/1qj1ZTo0PLWMWkeq58VCotketJUosv2tt/view'],
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

function Figure({ src, alt, width, height, portrait = false, caption }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  portrait?: boolean;
  caption?: string;
}) {
  return (
    <figure className={`${styles.figure} ${portrait ? styles.portraitFigure : ''}`}>
      <div className={styles.figureFrame}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={portrait ? '(max-width: 700px) calc(100vw - 36px), 900px' : '(max-width: 700px) calc(100vw - 36px), (max-width: 1440px) calc(100vw - 64px), 1400px'}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export default function PrimeVideoCaseStudy() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#work">← Selected Work</a>
          <div className={styles.heroMeta}>
            <span>05 / Amazon Prime Video</span>
            <span>Product management fellowship case study · Upraised</span>
            <span>August–November 2024</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>Personalised<br />Discovery</h1>
              <p className={styles.heroLabel}>Amazon Prime Video</p>
            </div>
            <div className={styles.heroCopy}>
              <p>This was my first major end-to-end product management project.</p>
              <p>I started broad: understand how Prime Video creates engagement, define the right metric, study competition, talk to users, map the opportunity space, explore solutions, and only then turn the selected direction into a product specification.</p>
            </div>
          </div>
          <dl className={styles.heroFacts}>
            <div><dt>Research</dt><dd>7 user interviews</dd></div>
            <div><dt>Scope</dt><dd>8 assignments</dd></div>
            <div><dt>Primary target</dt><dd>+15% weekly watch time <small>Target, not achieved</small></dd></div>
            <div><dt>Output</dt><dd>Flows, wireframes &amp; PRD</dd></div>
          </dl>
        </header>

        <section className={`${styles.section} shell`}>
          <div className={styles.sectionMarker}>01 / Understand the system</div>
          <div className={styles.splitHeading}>
            <h2>Before designing anything, I had to understand the system.</h2>
            <div>
              <p>The work began with Prime as a broader ecosystem before narrowing into Prime Video.</p>
              <p>I mapped acquisition, activation, engagement, retention, monetisation, resurrection, key actions and supporting metrics to understand which user behaviours could plausibly connect back to watch-time and retention.</p>
            </div>
          </div>
          <Figure src="/prime-video/prime-metrics.jpg" alt="Metrics decomposition mapping acquisition, retention and monetisation across Amazon Prime and Prime Video" width={8000} height={4409} caption="Original fellowship artifact — product and metrics decomposition." />
          <blockquote className={styles.callout}><span>Feature ideas came later.</span><span>First, I needed a model of how the product creates value.</span></blockquote>
        </section>

        <section className={`${styles.section} ${styles.researchSection}`}>
          <div className="shell">
            <div className={styles.sectionMarker}>02 / Find the friction</div>
            <div className={styles.splitHeading}>
              <h2>Then I went looking for the friction behind the metric.</h2>
              <div>
                <p>I interviewed seven Prime Video users through Zoom and phone calls, using open-ended discussions rather than a rigid questionnaire.</p>
                <p>The conversations were recorded with consent, highlighted and tagged, then grouped into themes using Dovetail. AI assisted the synthesis after the highlights were compiled.</p>
              </div>
            </div>
            <Figure src="/prime-video/prime-research.jpg" alt="Dovetail synthesis board clustering seven Prime Video interviews into themes" width={3509} height={2230} caption="Interview synthesis — highlights grouped into recurring themes." />
            <div className={styles.signalGrid}>
              {signals.map((signal, index) => <p key={signal}><span>{String(index + 1).padStart(2, '0')}</span>{signal}</p>)}
            </div>
            <p className={styles.processLine}>Interview <span>→</span> highlight <span>→</span> tag <span>→</span> cluster <span>→</span> synthesize</p>
          </div>
        </section>

        <section className={`${styles.section} shell`}>
          <div className={styles.sectionMarker}>03 / Choose the opportunity</div>
          <div className={styles.splitHeading}>
            <h2>Research gave me problems. The opportunity tree forced me to choose.</h2>
            <p>I mapped the current user experience, grouped research-backed opportunities, and connected them to the goal of increasing weekly watch time.</p>
          </div>
          <Figure src="/prime-video/prime-opportunity.jpg" alt="Prime Video user experience map and opportunity tree leading to a target opportunity" width={2480} height={3508} portrait caption="Current journey, opportunity tree and target opportunity." />
          <div className={styles.decisionBand}>
            <span>Target opportunity</span>
            <p>Improve content discovery through more relevant, personalised recommendations and timely feedback loops.</p>
          </div>
          <aside className={styles.caveat}><strong>Evidence boundary</strong><p>I did not have access to Prime Video’s internal analytics. Prioritisation was directional and based on user interviews, competitive research and observable product behaviour.</p></aside>
        </section>

        <section className={`${styles.solutionSection}`}>
          <div className="shell">
            <div className={styles.sectionMarker}>04 / Shape the intervention</div>
            <div className={styles.solutionGrid}>
              <div>
                <h2>The solution was not “more recommendations.”</h2>
                <p className={styles.solutionSubhead}>It was a better feedback loop.</p>
              </div>
              <ul>
                <li>Language and genre preferences</li>
                <li>Explicit like / dislike feedback</li>
                <li>Viewing behaviour</li>
                <li>Recommendation refinement</li>
                <li>Personalised alerts</li>
                <li>Cast favourites through X-Ray</li>
                <li>Swipeable discovery previews</li>
              </ul>
            </div>
            <blockquote className={styles.solutionPrinciple}>Let users teach the system what relevance means to them.</blockquote>
          </div>
        </section>

        <section className={`${styles.section} shell`}>
          <div className={styles.sectionMarker}>05 / Map the journey</div>
          <div className={styles.splitHeading}>
            <h2>I mapped how the experience should work end to end.</h2>
            <p>The final journey connected preference collection, profile setup, explicit feedback and the “For You” experience into one loop.</p>
          </div>
          <Figure src="/prime-video/prime-solution-journey.png" alt="Complete user journey for preference collection, For You discovery and explicit feedback" width={1977} height={2799} portrait caption="Proposed end-to-end journey — shown in full." />
          <p className={styles.loop}>Preference collection <span>→</span> content discovery <span>→</span> watch <span>→</span> explicit feedback <span>→</span> refined recommendations <span>→</span> repeat</p>
        </section>

        <section className={`${styles.section} ${styles.wireframeSection}`}>
          <div className="shell">
            <div className={styles.sectionMarker}>06 / Make it concrete</div>
            <div className={styles.splitHeading}>
              <h2>Then I turned the idea into something concrete.</h2>
              <p>The wireframes explored the experience across onboarding, the “For You” hub, feedback, saved preferences, alerts and X-Ray-based actor favourites.</p>
            </div>
            <Figure src="/prime-video/prime-wireframes.png" alt="Complete Prime Video concept wireframes for onboarding, For You, feedback and X-Ray favourites" width={6912} height={4893} caption="Complete wireframe artifact — no screens cropped." />
            <div className={styles.annotationGrid}>
              {annotations.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} shell`}>
          <div className={styles.sectionMarker}>07 / Define the product</div>
          <h2 className={styles.sectionTitle}>The PRD had to define more than screens.</h2>
          <div className={styles.prdGrid}>
            <article><span>01</span><h3>Requirements</h3><p>Onboarding logic, profile-specific preferences, feedback behaviour and recommendation interactions.</p></article>
            <article><span>02</span><h3>Edge cases</h3><ul><li>Multiple users on one account</li><li>Insufficient feedback</li><li>Skipped onboarding preferences</li><li>Limited content availability</li></ul></article>
            <article><span>03</span><h3>Rollout</h3><p>Internal testing <b>→</b> 5–10% beta <b>→</b> 30–40% expanded rollout <b>→</b> full rollout.</p></article>
            <article className={styles.instrumentation}><span>04</span><h3>Instrumentation</h3><div>{events.map((event) => <code key={event}>{event}</code>)}</div></article>
          </div>
          <p className={styles.instrumentationNote}>Instrumentation was part of the product definition, not an afterthought.</p>
        </section>

        <section className={`${styles.measureSection}`}>
          <div className="shell">
            <div className={styles.sectionMarker}>08 / Proposed measurement</div>
            <h2>How I would measure whether it worked</h2>
            <div className={styles.primaryTarget}>
              <span>Primary target</span>
              <strong>+15%</strong>
              <p>Average weekly watch time per user</p>
              <small>Proposed exercise target · not an achieved result</small>
            </div>
            <div className={styles.measureGrid}>
              <article><h3>Supporting measures</h3><p>Recommendation CTR · user satisfaction · feedback participation · viewing sessions per user · sessions per week · churn · retention</p></article>
              <article><h3>Additional proposed targets</h3><p>25% weekly feedback participation · churn to 6% · +10% retention over six months</p><small>Targets from the exercise · not achieved results</small></article>
            </div>
          </div>
        </section>

        <section className={`${styles.linksSection} shell`}>
          <div className={styles.sectionMarker}>Original work</div>
          <h2>Explore the full project</h2>
          <div className={styles.linkGrid}>
            {projectLinks.map(([number, title, href]) => (
              <a key={number} href={href} target="_blank" rel="noopener noreferrer">
                <span>{number}</span>
                <strong>{title}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </div>
        </section>

        <section className={`${styles.learningSection} shell`}>
          <div className={styles.sectionMarker}>09 / Reflection</div>
          <div className={styles.learningGrid}>
            <h2>What this project taught me</h2>
            <div>
              <p>This was the project where product management stopped feeling like a collection of frameworks.</p>
              <p>The strongest lesson was sequencing:</p>
              <ol><li>Understand the system</li><li>Talk to users</li><li>Choose the opportunity</li><li>Design the intervention</li><li>Define how it will be measured</li></ol>
              <p>The wireframes were only one part of the work.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.closingSection} shell`}>
          <p>This was my first end-to-end PM project.</p>
          <p>What began as “improve Prime Video engagement” became a structured journey from system understanding to user research, opportunity selection, solution design, requirements and measurement.</p>
          <nav className={styles.caseActions} aria-label="Project navigation">
            <a href="/#work">← Back to Selected Work</a>
            <a href="/#work">View all work →</a>
          </nav>
        </section>
      </article>
      <footer className={styles.caseFooter}><div className="shell"><span>Joshua Rego</span><a href="/#work">Selected Work</a><a href="/#contact">Contact</a></div></footer>
    </main>
  );
}
