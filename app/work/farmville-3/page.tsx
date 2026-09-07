/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'FarmVille 3 — Joshua Rego',
  description: 'A compact game analysis prioritising the progression bottleneck that affects multiple FarmVille 3 loops.',
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

const frictionAreas = [
  ['01', 'Storage limitations & upgrade friction', 'Prioritised'],
  ['02', 'Slow progression & scarce tools', ''],
  ['03', 'Event & task overload', ''],
];

const concepts = [
  ['Dynamic Storage Overflow', 'Allow temporary overflow capacity under controlled conditions.'],
  ['Separate Upgrade Materials', 'Reduce competition between upgrade materials and everyday inventory.'],
  ['Community Storage Bank', 'Explore shared capacity through co-op and community systems.'],
];

export default function FarmVilleThreeProject() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#more-work">← More Product Work</a>
          <div className={styles.heroMeta}>
            <span>FarmVille 3</span>
            <span>Game analysis</span>
            <span>2025</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>FarmVille<br />3</h1>
              <p className={styles.heroSubtitle}>Progression &amp; Player Friction</p>
            </div>
            <div className={styles.heroCopy}>
              <p>After months of playing FarmVille 3, I mapped its core and meta loops and compared my observations with player sentiment across App Store reviews, Reddit and community discussions.</p>
              <p>Three recurring frictions emerged: storage constraints, slow progression and material scarcity, and event overload.</p>
            </div>
          </div>
        </header>

        <section className={`${styles.prioritySection} shell`}>
          <div className={styles.sectionMarker}>01 / Prioritisation</div>
          <div className={styles.textGrid}>
            <h2>Three problems surfaced.<br />One constrained almost everything else.</h2>
            <div>
              <p>Storage initially looks like one progression mechanic among many.</p>
              <p>But as the farm grows, limited capacity affects harvesting, crafting, selling, event participation, upgrades and expansion.</p>
              <p>That made storage more interesting than an isolated frustration: it behaved like a bottleneck across several connected loops.</p>
            </div>
          </div>
          <ol className={styles.priorityRow}>
            {frictionAreas.map(([number, title, status]) => (
              <li key={number} className={status ? styles.prioritised : undefined}>
                <span>{number}</span>
                <h3>{title}</h3>
                {status && <strong>{status}</strong>}
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.mapSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>02 / Loop analysis</div>
            <div className={styles.mapIntro}>
              <h2>I mapped the loops before proposing the fix.</h2>
              <p>The map connects FarmVille 3’s core production loop with its longer-term progression systems, then traces player pain points through prioritisation, proposed responses and expected player/business implications.</p>
            </div>
            <figure className={styles.analysisFigure}>
              <Image
                src="/farmville-3/farmville3.jpg"
                alt="Full FarmVille 3 analysis mapping core and meta loops, three player frictions, prioritisation, proposed concepts and expected implications"
                width={3026}
                height={8000}
                sizes="(max-width: 700px) calc(100vw - 36px), 64vw"
                priority
              />
            </figure>
          </div>
        </section>

        <section className={`${styles.storageSection} shell`}>
          <div className={styles.sectionMarker}>03 / Why storage</div>
          <div className={styles.textGrid}>
            <h2>Storage won the prioritisation.</h2>
            <div>
              <p>The reason was reach.</p>
              <p>Storage pressure does not affect only inventory management. It can interrupt the production loop, delay upgrades, constrain event participation and slow broader farm progression.</p>
              <p>So I prioritised the friction with the widest downstream effect rather than simply the complaint that appeared most annoying in isolation.</p>
            </div>
          </div>
        </section>

        <section className={styles.solutionsSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>04 / Proposed concepts</div>
            <h2>The solution space</h2>
            <div className={styles.conceptGrid}>
              {concepts.map(([title, description], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <p className={styles.proposalNote}>Proposed concepts, not shipped features.</p>
          </div>
        </section>

        <section className={styles.decisionSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>05 / The product decision</div>
            <h2><span>Fix the bottleneck</span><span>that blocks multiple loops.</span></h2>
            <div className={styles.decisionCopy}>
              <p>When several mechanics create friction, the highest-leverage problem may not be the loudest complaint.</p>
              <p>I prioritised storage because its effects propagated across production, progression and events — making it a stronger intervention point than treating each downstream frustration separately.</p>
              <p className={styles.outcomeNote}>Proposed interventions and expected implications — not measured outcomes.</p>
            </div>
            <nav className={styles.caseActions} aria-label="Project navigation">
              <a href="/#more-work">← Back to More Product Work</a>
              <a href="/work/monopoly-go">Previous: Monopoly GO →</a>
            </nav>
          </div>
        </section>
      </article>
      <footer className={styles.caseFooter}>
        <div className="shell"><span>FarmVille 3 · Game analysis</span><a href="/">Joshua Rego</a><a href="/#more-work">More Product Work ↑</a></div>
      </footer>
    </main>
  );
}
