/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'Monopoly GO — Joshua Rego',
  description: 'A compact player-experience analysis of agency, friction and progression in Monopoly GO.',
};

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

const frictions = [
  ['Interruptions', 'Frequent pop-ups and prompts can disrupt the roll-and-reward rhythm.'],
  ['Low perceived agency', 'Players can feel outcomes depend more on luck than meaningful tactical decisions.'],
  ['Weak emotional consequence', 'Shutdowns create interaction, but the effect can feel temporary or cosmetic.'],
  ['Unclear progression', 'Board advancement can make distance-to-goal and momentum difficult to read.'],
];

export default function MonopolyGoProject() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#more-work">← More Product Work</a>
          <div className={styles.heroMeta}>
            <span>Monopoly GO</span>
            <span>Game analysis</span>
            <span>2025</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>Monopoly<br />GO</h1>
              <p className={styles.heroSubtitle}>Player Experience Analysis</p>
            </div>
            <div className={styles.heroCopy}>
              <p>I played Monopoly GO and analysed its core and meta loops, then reviewed 100+ App Store reviews, Reddit discussions and community feedback.</p>
              <p>The recurring tension was not simply that players wanted more rewards. Invested players described repetitive events, burnout and progression that increasingly felt governed by luck rather than meaningful decisions.</p>
            </div>
          </div>
        </header>

        <section className={`${styles.problemSection} shell`}>
          <div className={styles.sectionMarker}>01 / Player tension</div>
          <div className={styles.textGrid}>
            <h2>The problem wasn’t luck.<br />It was how little agency players felt around it.</h2>
            <div>
              <p>Luck is fundamental to Monopoly GO’s appeal. The roll is fast, understandable and emotionally legible.</p>
              <p>The friction appears when advanced players feel that their decisions matter less than the outcome of the roll — especially across repeated events, shutdowns and long progression loops.</p>
              <p>So the goal was not to make the game more strategic at the expense of simplicity. It was to create more meaningful choices around the existing randomness.</p>
            </div>
          </div>
        </section>

        <section className={styles.mapSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>02 / Loop analysis</div>
            <div className={styles.mapIntro}>
              <h2>I mapped where the loop starts losing momentum.</h2>
              <p>I mapped the existing core and meta loops, identified recurring friction points, then connected each one to a focused design response and an expected player/business effect.</p>
            </div>
            <figure className={styles.analysisFigure}>
              <Image
                src="/monopoly-go/monopoly-go.jpg"
                alt="Full Monopoly GO player-experience analysis showing core and meta loops, pain points, design responses and expected implications"
                width={2861}
                height={5569}
                sizes="(max-width: 700px) calc(100vw - 36px), 72vw"
                priority
              />
            </figure>
          </div>
        </section>

        <section className={`${styles.frictionsSection} shell`}>
          <div className={styles.sectionMarker}>03 / Recurring frictions</div>
          <h2>Four frictions stood out.</h2>
          <ol className={styles.frictionList}>
            {frictions.map(([title, description], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.principleSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>04 / The redesign principle</div>
            <h2><span>Don’t remove the luck.</span><span>Give players meaningful decisions around it.</span></h2>
            <div className={styles.principleCopy}>
              <p>The design responses focused on preserving the fast roll-reward loop while adding moments of agency: clearer progression, selective strategic choices, better timing cues and more meaningful player-to-player consequences.</p>
              <p>The intent was to make advanced play feel less passive without turning Monopoly GO into a strategy game.</p>
              <p className={styles.implicationNote}><strong>Expected implications, not measured outcomes.</strong> The analysis considered both sides of the system: stronger player motivation and clearer progression, alongside possible effects on retention, session depth and monetisation opportunities.</p>
            </div>
            <nav className={styles.caseActions} aria-label="Project navigation">
              <a href="/#more-work">← Back to More Product Work</a>
              <a href="/work/ragaai-catalyst">Previous: RagaAI Catalyst →</a>
            </nav>
          </div>
        </section>
      </article>
      <footer className={styles.caseFooter}>
        <div className="shell"><span>Monopoly GO · Game analysis</span><a href="/">Joshua Rego</a><a href="/#more-work">More Product Work ↑</a></div>
      </footer>
    </main>
  );
}
