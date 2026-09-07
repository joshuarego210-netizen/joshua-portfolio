/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'FlowJar — Joshua Rego',
  description: 'A visual-first budgeting prototype exploring spatial allocation, visible money movement and optional numerical precision.',
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

function Figure({ src, alt, width, height, caption }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}) {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureFrame}>
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1440px) calc(100vw - 64px), 1400px" />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function FlowJarProject() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#more-work">← More Product Work</a>
          <div className={styles.heroMeta}>
            <span>FlowJar</span>
            <span>Product design prototype</span>
            <span>November 2025</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>FlowJar</h1>
              <p className={styles.heroSubtitle}>Visual Budgeting for People with Dyscalculia</p>
            </div>
            <div className={styles.heroCopy}>
              <p>Most budgeting tools assume that numbers, percentages and charts are the clearest way to understand money.</p>
              <p>FlowJar explored the opposite approach: make money spatial and tangible first, and keep numbers available only when precision is needed.</p>
            </div>
          </div>
          <div className={styles.productQuestion}>
            <span>The product question</span>
            <p>How might budgeting work if users did not have to interpret money primarily through numbers, percentages and spreadsheets?</p>
          </div>
        </header>

        <section className={`${styles.section} shell`}>
          <div className={styles.sectionMarker}>01 / Visual allocation</div>
          <div className={styles.sectionIntro}>
            <h2>Make the budget visible before making it numerical.</h2>
            <div>
              <p>Users can divide monthly income visually rather than typing category percentages.</p>
              <p>In Manual Setup, a draggable pie chart lets users reshape the budget across categories such as Food, Bills, Health, Transport, Fun and Savings while FlowJar calculates the underlying values.</p>
              <strong>The interaction does the arithmetic for the user.</strong>
            </div>
          </div>
          <Figure src="/flowjar/flowjar-allocation.jpg" alt="FlowJar manual budget allocation with a draggable pie chart alongside six proportional category jars" width={2343} height={1410} caption="Manual allocation and the resulting visual category balances." />
        </section>

        <section className={styles.movementSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>02 / Visible movement</div>
            <div className={styles.sectionIntro}>
              <h2>The strongest interaction happens when money moves.</h2>
              <div>
                <p>Category jars act as both balances and visual state.</p>
                <p>Users can drag one jar onto another to reallocate money. As the transfer amount changes, one jar drains while the receiving jar fills by the corresponding amount.</p>
                <p>The same visual logic continues when an expense is logged: the jar visibly drops to reflect the new balance.</p>
              </div>
            </div>
            <Figure src="/flowjar/flowjar-interactions.jpg" alt="FlowJar expense logging and jar-to-jar budget reallocation interactions" width={1793} height={1344} caption="Expense logging and proportional reallocation in the working prototype." />
            <blockquote><span>Don’t explain the calculation.</span><span>Make the consequence visible.</span></blockquote>
          </div>
        </section>

        <section className={`${styles.precisionSection} shell`}>
          <div className={styles.sectionMarker}>03 / Optional precision</div>
          <div className={styles.precisionGrid}>
            <h2>Numbers are still there — they just stop being the interface.</h2>
            <div>
              <p>FlowJar does not remove precision.</p>
              <p>Users can toggle numerical values on or off, view transaction history, create savings or goal jars, and move unallocated income between categories.</p>
              <p>The design choice was to make numerical information optional rather than dominant.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.builtSection} shell`}>
          <div className={styles.sectionMarker}>04 / What I built</div>
          <p>A working mobile budgeting prototype covering setup, allocation, visual balances, expenses, transaction history, reallocation and custom savings goals.</p>
          <div className={styles.scopeRow} aria-label="Prototype scope"><span>Allocation</span><span>Expenses</span><span>Reallocation</span><span>Savings goals</span></div>
        </section>

        <section className={`${styles.linksSection} shell`}>
          <div className={styles.sectionMarker}>Explore the work</div>
          <div className={styles.linkRows}>
            <a href="https://www.loom.com/share/104efdffbbc84432ac9a1a53beeb062e" target="_blank" rel="noopener noreferrer">
              <span>Watch prototype demo</span><i aria-hidden="true">↗</i>
            </a>
            <a className={styles.primaryLink} href="https://flow-calm-budget.lovable.app" target="_blank" rel="noopener noreferrer">
              <span>Open interactive prototype</span><i aria-hidden="true">↗</i>
            </a>
          </div>
        </section>

        <section className={styles.decisionSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>05 / The product decision</div>
            <h2>Tangibility Drives Clarity.</h2>
            <div className={styles.decisionCopy}>
              <p>For users who find numerical reasoning cognitively expensive, the better interface may not be a simpler spreadsheet.</p>
              <p>It may be an interaction where the system carries the arithmetic and the user understands the result through movement and proportion.</p>
            </div>
            <nav className={styles.caseActions} aria-label="Project navigation"><a href="/#more-work">← Back to More Product Work</a><a href="/#work">View Selected Work →</a></nav>
          </div>
        </section>
      </article>
      <footer className={styles.caseFooter}><div className="shell"><span>FlowJar · Product design prototype</span><a href="/">Joshua Rego</a><a href="/#more-work">More Product Work ↑</a></div></footer>
    </main>
  );
}
