/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'Product Space — Joshua Rego',
  description: 'A full-journey teardown of the Product Space PM Fellowship landing page, benchmarked against two competitors.',
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

const taxonomy = [
  ['Black', 'Neutral observations', 'neutral'],
  ['Red', 'UX issues / friction', 'issue'],
  ['Green', 'Recommendations', 'recommendation'],
  ['Blue', 'User perspective', 'perspective'],
];

const comparisons = [
  ['Upraised', 'Strong narrative sequencing across benefits, outcomes, testimonials and FAQs created a more persuasive progression through the page.'],
  ['Pragmatic Leaders', 'Strong placement outcomes and upfront pain-point framing, but less transparency around the detailed learning journey.'],
  ['Product Space', 'Strong curriculum detail and placement information, but weaker communication of user outcomes, community value and emotionally credible social proof.'],
];

const recommendations = [
  'Make feature-to-outcome relationships more explicit rather than simply listing curriculum and tools.',
  'Strengthen social proof through richer alumni stories or video testimonials.',
  'Surface community and alumni-network value.',
  'Show what a typical week looks like to reduce uncertainty around workload and participation.',
];

export default function ProductSpaceProject() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#more-work">← More Product Work</a>
          <div className={styles.heroMeta}>
            <span>Product Space</span>
            <span>Product teardown</span>
            <span>May 2025</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>Product<br />Space</h1>
              <p className={styles.heroSubtitle}>PM Fellowship Landing Page Teardown</p>
            </div>
            <div className={styles.heroCopy}>
              <p>Most landing-page teardowns isolate individual screens.</p>
              <p>I wanted to understand something broader: how does the entire page sequence move a prospective student from interest to trust to enrolment?</p>
              <p className={styles.contextLine}>I analysed Product Space’s full PM Fellowship landing page and benchmarked its structure against Upraised and Pragmatic Leaders.</p>
            </div>
          </div>
        </header>

        <section className={`${styles.journeySection} shell`}>
          <div className={styles.sectionMarker}>01 / Method</div>
          <div className={styles.textGrid}>
            <h2>I compared the journey, not just the screens.</h2>
            <div>
              <p>Instead of treating each section as an isolated UI element, I captured the complete landing pages and classified sections by their role in the decision journey.</p>
              <p>Using the same visual taxonomy across Product Space, Upraised and Pragmatic Leaders made differences in hierarchy, sequencing and emphasis visible at a glance.</p>
            </div>
          </div>
          <div className={styles.legend} aria-label="Analysis colour taxonomy">
            {taxonomy.map(([label, description, tone]) => (
              <div key={label} className={styles[tone]}>
                <span>{label}</span>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.comparisonSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>02 / Competitive comparison</div>
            <h2>The comparison changed what stood out.</h2>
            <div className={styles.comparisonGrid}>
              {comparisons.map(([title, description], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.recommendationsSection} shell`}>
          <div className={styles.sectionMarker}>03 / Recommendations</div>
          <div className={styles.recommendationsGrid}>
            <h2>Then I turned comparison into recommendations.</h2>
            <ol>
              {recommendations.map((recommendation, index) => (
                <li key={recommendation}><span>{String(index + 1).padStart(2, '0')}</span><p>{recommendation}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.teardownSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>04 / Full analysis</div>
            <h2>The full teardown</h2>
            <figure className={styles.analysisFigure}>
              <Image
                src="/product-space/product-space.jpg"
                alt="Full Product Space PM Fellowship landing-page teardown with annotated comparison against Upraised and Pragmatic Leaders"
                width={5000}
                height={7409}
                sizes="(max-width: 700px) calc(100vw - 36px), 80vw"
                priority
              />
            </figure>
          </div>
        </section>

        <section className={`${styles.limitationSection} shell`}>
          <div className={styles.sectionMarker}>05 / Methodological boundary</div>
          <div className={styles.limitationGrid}>
            <h2>One limitation mattered.</h2>
            <p>I originally wanted to use Microsoft Clarity to evaluate actual scroll depth, heatmaps and click behaviour. Without backend analytics access, the scroll-depth layer used public benchmarks as a directional reference rather than observed Product Space behaviour.</p>
          </div>
        </section>

        <section className={styles.decisionSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>06 / The product decision</div>
            <h2><span>Benchmark the journey,</span><span>not just the interface.</span></h2>
            <div className={styles.decisionCopy}>
              <p>Looking at complete pages side by side changed the analysis from “which UI elements are better?” to “how does each product construct the decision?”</p>
              <p>That made gaps in trust, differentiation, social proof and conversion sequencing much easier to see.</p>
              <div className={styles.outcome}><span>Outcome</span><strong>Selected for an interview following the submission.</strong></div>
            </div>
            <nav className={styles.caseActions} aria-label="Project navigation">
              <a href="/#more-work">← Back to More Product Work</a>
              <a href="/work/farmville-3">Previous: FarmVille 3 →</a>
            </nav>
          </div>
        </section>
      </article>
      <footer className={styles.caseFooter}>
        <div className="shell"><span>Product Space · Product teardown</span><a href="/">Joshua Rego</a><a href="/#more-work">More Product Work ↑</a></div>
      </footer>
    </main>
  );
}
