/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'Lumenci Assistant — Joshua Rego',
  description:
    'A 24-hour APM product-design exercise exploring human-in-the-loop AI for patent claim-chart refinement.',
};

const workflow = [
  'Upload claim chart and evidence',
  'Choose a refinement strategy',
  'Ask for stronger evidence',
  'Review the AI suggestion',
  'Accept, reject or iterate',
  'Inspect versions and export',
] as const;

const edgeCases = [
  ['Wrong evidence', 'Analyst flags it · AI regenerates'],
  ['Change of mind', 'Version history · previous state restored'],
  ['Missing evidence', 'AI asks for a document or URL · analyst supplies it · retry'],
] as const;

const prototypeActions = [
  'Attach files to the demo workspace',
  'Choose a predefined strategy',
  'Request stronger evidence for Element 3',
  'Receive a simulated AI suggestion',
  'Accept or reject the suggestion',
  'See the claim chart update',
  'Inspect or revert versions',
  'Export the current chart',
] as const;

const metrics = [
  ['Suggestion acceptance rate', 'Target: >70%', 'Proposed MVP target'],
  ['Refinement velocity', 'Target: 50% reduction', 'From upload to court-ready export'],
  ['Strategy adoption', 'Measure usage', 'Predefined strategies vs manual prompting'],
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

function Figure({
  src,
  alt,
  width,
  height,
  caption,
  className = '',
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`${styles.figure} ${className}`}>
      <div className={styles.figureFrame}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1440px) calc(100vw - 64px), 1400px"
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export default function LumenciAssistantCaseStudy() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#work">← Selected Work</a>
          <div className={styles.heroMeta}>
            <span>06 / Lumenci Assistant</span>
            <span>APM hiring assignment · Lumenci</span>
            <span>February 2026 · 24-hour challenge</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>Lumenci<br />Assistant</h1>
              <p className={styles.heroSubtitle}>Designing AI That Doesn’t Override the Expert</p>
            </div>
            <div className={styles.heroCopy}>
              <p>Patent analysts use claim charts to connect patent claims with evidence from an accused product.</p>
              <p>The challenge wasn’t simply to add chat. It was to let AI help strengthen evidence and reasoning without making the analyst surrender control of legally sensitive work.</p>
            </div>
          </div>
          <div className={styles.assignmentNote}>
            <strong>24-hour Associate Product Manager assignment</strong>
            <span>Product thinking over polish · conversational workflow · LLM limitations · human-in-the-loop patterns · incomplete information</span>
          </div>
        </header>

        <section className={`${styles.questionSection} shell`}>
          <div className={styles.sectionMarker}>01 / The product question</div>
          <div className={styles.questionGrid}>
            <h2>What should the AI be allowed to change?</h2>
            <div>
              <p>The experience needed to carry uploaded claim charts and technical evidence through conversational refinement, analyst review, iteration, version history and final export.</p>
              <ol className={styles.workflow} aria-label="Lumenci Assistant refinement workflow">
                {workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}
              </ol>
            </div>
          </div>
          <blockquote className={styles.principle}>
            <span>AI proposes.</span>
            <span>Evidence stays visible.</span>
            <span>The analyst decides.</span>
          </blockquote>
        </section>

        <section className={`${styles.decisionsSection} shell`}>
          <div className={styles.sectionMarker}>02 / Product decisions</div>
          <h2>Three decisions shaped the experience.</h2>

          <article className={styles.decisionText}>
            <header><span>01</span><h3>Strategy chips over a blank prompt</h3></header>
            <div>
              <p>Patent analysts are domain experts, not prompt engineers. Instead of opening with an empty chat box, the analyst chooses the intent and the product structures the interaction.</p>
              <div className={styles.strategies} aria-label="Predefined refinement strategies">
                <span>Targeted Infringement</span>
                <span>Defensive Analysis</span>
                <span>Technical Deep-Dive</span>
              </div>
            </div>
          </article>

          <article className={styles.decisionVisual}>
            <header><span>02</span><h3>Explicit accept / reject</h3></header>
            <p>AI suggestions should not silently modify the claim chart. Proposed evidence and reasoning stay visible until the analyst explicitly decides whether they enter the chart.</p>
            <Figure
              src="/lumenci/lumenci-suggestion.jpeg"
              alt="Lumenci Assistant claim chart beside a simulated AI refinement suggestion with explicit Accept and Reject controls"
              width={2768}
              height={1706}
            />
          </article>

          <article className={styles.decisionVersion}>
            <div>
              <header><span>03</span><h3>Version snapshots, not just undo</h3></header>
              <p>Legal analysis benefits from traceability. Accepted changes create versions so the analyst can inspect or return to an earlier state instead of only reversing the most recent action.</p>
            </div>
            <Figure
              src="/lumenci/lumenci-versioncontrol.png"
              alt="Lumenci Assistant version history showing an initial claim chart and a second version that can be reverted"
              width={824}
              height={948}
            />
          </article>
        </section>

        <section className={`${styles.flowSection} shell`}>
          <div className={styles.sectionMarker}>03 / User flow</div>
          <div className={styles.flowIntro}>
            <h2>I designed the failure paths alongside the happy path.</h2>
            <p>The assignment specifically required three edge cases. I treated them as part of the core workflow rather than exceptions to design later.</p>
          </div>
          <Figure
            src="/lumenci/lumenci-userflow.jpg"
            alt="Complete annotated Lumenci Assistant user-flow diagram, including wrong evidence, version reversion and missing evidence branches"
            width={5000}
            height={5429}
            className={styles.userFlowFigure}
            caption="Original assignment artifact — the orange and red paths distinguish analyst actions, system actions and edge cases."
          />
          <div className={styles.edgeCases}>
            {edgeCases.map(([title, response]) => <article key={title}><h3>{title}</h3><p>{response}</p></article>)}
          </div>
        </section>

        <section className={`${styles.prototypeSection} shell`}>
          <div className={styles.sectionMarker}>04 / From flow to prototype</div>
          <div className={styles.prototypeGrid}>
            <Figure
              src="/lumenci/lumenci-cover.png"
              alt="Lumenci Assistant Claude Artifact showing claim-chart and evidence upload plus predefined refinement strategies"
              width={1284}
              height={1386}
              className={styles.prototypeFigure}
            />
            <div className={styles.prototypeCopy}>
              <h2>Then I made one refinement loop interactive.</h2>
              <p>The Claude Artifact demonstrated one representative scenario using mock claim-chart data.</p>
              <ol className={styles.prototypeSequence}>
                {prototypeActions.map((action, index) => <li key={action}><span>{String(index + 1).padStart(2, '0')}</span><p>{action}</p></li>)}
              </ol>
              <aside className={styles.boundary}>
                <span>Prototype boundary</span>
                <h3>A UX prototype, not a production AI system.</h3>
                <p>AI responses were simulated and pre-scripted. Files were attached but not parsed. There was no LLM API, RAG pipeline or document-retrieval backend.</p>
                <p>The interactive artifact demonstrated one refinement scenario; the broader failure states were designed in the user flow.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className={`${styles.metricsSection} shell`}>
          <div className={styles.sectionMarker}>05 / If this moved beyond prototype</div>
          <h2>Proposed MVP measures.</h2>
          <div className={styles.metricsGrid}>
            {metrics.map(([metric, target, detail]) => (
              <article key={metric}><span>{metric}</span><strong>{target}</strong><p>{detail}</p></article>
            ))}
          </div>
          <p className={styles.metricQualifier}>Targets from the assignment PRD — not achieved results.</p>
        </section>

        <section className={`${styles.linksSection} shell`}>
          <div className={styles.sectionMarker}>Original work</div>
          <h2>Explore the Work</h2>
          <a
            className={styles.workLink}
            href="https://claude.ai/public/artifacts/ff603526-3b55-4c98-b09d-880c28643b46"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Interactive Prototype ↗</strong>
          </a>
        </section>

        <section className={`${styles.closingSection} shell`}>
          <div className={styles.closingCopy}>
            <p>The prototype was intentionally narrow.</p>
            <p>The more important design question was broader: when AI assists expert work, where should the system stop and ask the human to decide?</p>
          </div>
          <div className={styles.caseActions}>
            <a href="/#work">← Back to Selected Work</a>
            <a href="/#work">View all work →</a>
          </div>
        </section>
      </article>

      <footer className={styles.caseFooter}>
        <div className="shell">
          <span>Lumenci Assistant · Human-in-the-loop AI</span>
          <a href="/">Joshua Rego</a>
          <a href="/#work">Selected Work ↑</a>
        </div>
      </footer>
    </main>
  );
}
