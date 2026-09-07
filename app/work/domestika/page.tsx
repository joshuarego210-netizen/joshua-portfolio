/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import styles from './case-study.module.css';

const canvaViewUrl = 'https://www.canva.com/design/DAGs3KCrHvg/TBL8d9392eL-sWO05Sv2sA/view?utm_content=DAGs3KCrHvg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd4ac21d2a1';
const canvaEmbedUrl = 'https://www.canva.com/design/DAGs3KCrHvg/TBL8d9392eL-sWO05Sv2sA/view?embed';
const lovableUrl = 'https://creative-assistant-inky-by-joshua-rego.lovable.app/';
const metricsUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRPfau9BkKytAH12agLDpExCo7_ggJH_cb9DJtlceo-zYAUqFJZavgKfePLbfRjf82WFuuwWrrizzrj/pubhtml';

export const metadata: Metadata = {
  title: 'Domestika Creative Assistant — Joshua Rego',
  description: 'A timed AI product assignment that moved from product strategy to Joshua Rego’s first interactive prototype build.',
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

const learnerJobs = [
  ['Guided Learning', 'Help learners choose the next step based on skills and goals.'],
  ['Constructive Practice', 'Give useful feedback on work-in-progress, not just vanity metrics.'],
  ['Community Support', 'Surface the right peer or mentor when the learner gets stuck.'],
];

const capabilities = [
  ['Course Guidance', 'Recommend relevant courses and help compare options.'],
  ['Project Feedback', 'Give contextual feedback on learner work and allow follow-up questions.'],
  ['Learning Continuity', 'Use progress and learning context to guide next steps over time.'],
];

const prototypeFlows = [
  ['Find a course with INKY', 'User opens the assistant, enters a creative interest, receives course recommendations, and can compare options side by side.'],
  ['Get feedback on your work', 'User asks for feedback, uploads work or writing, receives mocked contextual guidance, and can continue the conversation.'],
];

export default function DomestikaProject() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#more-work">← More Product Work</a>
          <div className={styles.heroMeta}>
            <span>Domestika</span>
            <span>AI Product Assignment · First Prototype Build</span>
            <span>2025</span>
          </div>
          <div className={styles.heroGrid}>
            <div><h1>Domestika</h1><p className={styles.heroSubtitle}>Creative Assistant</p></div>
            <div className={styles.heroCopy}>
              <p>The brief asked for a conceptual solution.</p>
              <p>I used it as an excuse to go one step further — define the product logic, map the system, think through rollout and metrics, then build my first interactive prototype.</p>
            </div>
          </div>
        </header>

        <section className={`${styles.problemSection} shell`}>
          <div className={styles.sectionMarker}>01 / The product problem</div>
          <div className={styles.textGrid}>
            <h2>Creative learners don’t just need more content.<br />They need help knowing what to do next.</h2>
            <p>The assignment explored friction across Domestika’s learning loop: choosing the right course, practicing alone, getting useful feedback, understanding progress, and finding the right people to learn with.</p>
          </div>
          <p className={styles.loop}>Discover <span>→</span> Learn <span>→</span> Practice <span>→</span> Get feedback <span>→</span> Progress</p>
          <div className={styles.compactGrid}>
            {learnerJobs.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </section>

        <section className={styles.conceptSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>02 / The concept</div>
            <div className={styles.textGrid}>
              <h2>INKY was the layer connecting guidance, practice and feedback.</h2>
              <p>The Creative Assistant was designed as an AI companion embedded inside Domestika rather than a separate destination.</p>
            </div>
            <div className={styles.compactGrid}>
              {capabilities.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.prototypeSection} shell`}>
          <div className={styles.sectionMarker}>03 / From concept to prototype</div>
          <div className={styles.textGrid}>
            <h2>This was the first time I stopped at neither strategy nor wireframes.</h2>
            <p>I wanted to make the idea tangible enough that someone could actually walk through the experience.</p>
          </div>
          <div className={styles.flowList}>
            {prototypeFlows.map(([title, description], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div></article>
            ))}
          </div>
          <p className={styles.scopeNote}><strong>Prototype scope:</strong> frontend narrative only · mocked responses · no live model · no backend · no real course data</p>
        </section>

        <section className={styles.originalSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>04 / Original work</div>
            <h2>Strategy first.<br />Then make it tangible.</h2>
            <div className={styles.artifactGrid}>
              <div>
                <div className={styles.embedWrap}>
                  <iframe src={canvaEmbedUrl} title="Domestika Creative Assistant strategy and roadmap deck" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
                </div>
                <a className={styles.deckLink} href={canvaViewUrl} target="_blank" rel="noopener noreferrer">Open strategy &amp; roadmap deck ↗</a>
              </div>
              <div className={styles.artifactLinks}>
                <a className={styles.primaryArtifact} href={lovableUrl} target="_blank" rel="noopener noreferrer"><span>Interactive artifact</span><strong>Open Lovable prototype ↗</strong><p>Walk through the two mocked frontend flows.</p></a>
                <a href={metricsUrl} target="_blank" rel="noopener noreferrer"><span>Supporting artifact</span><strong>View metrics &amp; ops sheet ↗</strong></a>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.disciplineSection} shell`}>
          <div className={styles.sectionMarker}>05 / MVP discipline</div>
          <div className={styles.textGrid}>
            <h2>The prototype was supposed to communicate value, not fake completeness.</h2>
            <div>
              <p>The build intentionally excluded real course data, live model responses, multimodal input and backend logic.</p>
              <p>The point was to align on the experience, tone and value before investing in the system behind it.</p>
              <p className={styles.nextStep}><strong>Next:</strong> usability testing → pilot in 1–2 courses → measure helpfulness, usage and completion signals</p>
            </div>
          </div>
        </section>

        <section className={styles.closingSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>06 / Looking back</div>
            <h2>My first prototype taught me<br />that product ideas get better<br /><span>when people can touch them.</span></h2>
            <div className={styles.closingCopy}>
              <p>The assignment started as strategy.</p>
              <p>Building even a lightweight version exposed interaction decisions, edge cases and product questions that would have stayed invisible in a deck.</p>
            </div>
            <nav className={styles.caseActions} aria-label="Project navigation"><a href="/#more-work">← Back to More Product Work</a><a href="/work/spotify">Previous: Spotify →</a></nav>
          </div>
        </section>
      </article>
      <footer className={styles.caseFooter}><div className="shell"><span>Domestika · AI product assignment</span><a href="/">Joshua Rego</a><a href="/#more-work">More Product Work ↑</a></div></footer>
    </main>
  );
}
