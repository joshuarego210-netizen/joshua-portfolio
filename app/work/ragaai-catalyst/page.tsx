/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'RagaAI Catalyst — Joshua Rego',
  description: 'An APM product assignment proposing a synthetic dataset generator for early RAG testing and benchmarking.',
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

function Figure({ src, alt, width, height, caption, narrow = false }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  narrow?: boolean;
}) {
  return (
    <figure className={`${styles.figure} ${narrow ? styles.narrowFigure : ''}`}>
      <div className={styles.figureFrame}>
        <Image src={src} alt={alt} width={width} height={height} sizes={narrow ? '(max-width: 700px) calc(100vw - 36px), 980px' : '(max-width: 700px) calc(100vw - 36px), (max-width: 1440px) calc(100vw - 64px), 1400px'} />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function RagaAICatalystProject() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#more-work">← More Product Work</a>
          <div className={styles.heroMeta}>
            <span>RagaAI Catalyst</span>
            <span>APM product assignment</span>
            <span>July 2025</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>RagaAI<br />Catalyst</h1>
              <p className={styles.heroSubtitle}>Synthetic Dataset Generator</p>
            </div>
            <div className={styles.heroCopy}>
              <p>How do you test an AI agent when you don’t have realistic data yet?</p>
              <p>I explored that cold-start problem for RagaAI Catalyst: giving builders test-ready synthetic knowledge bases and ground-truth QA pairs before real project data is available.</p>
            </div>
          </div>
          <p className={styles.assignmentNote}>Proposed product feature and PRD created as an APM candidate assignment · not shipped work</p>
        </header>

        <section className={`${styles.problemSection} shell`}>
          <div className={styles.sectionMarker}>01 / The cold-start problem</div>
          <div className={styles.textGrid}>
            <h2>The problem wasn’t a lack of data. It was a lack of something known to test against.</h2>
            <div>
              <p>A developer can build a RAG pipeline without having production CRM records, policy documents or labelled question-answer pairs.</p>
              <p>But without known inputs and expected answers, vague or incorrect responses are difficult to diagnose.</p>
              <p>The proposed generator creates domain-specific synthetic data specifically for early testing, prototyping and benchmarking — not production use.</p>
            </div>
          </div>
        </section>

        <section className={styles.scopeSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>02 / MVP scope</div>
            <div className={styles.textGrid}>
              <h2>I kept the generator narrow enough to be useful.</h2>
              <div>
                <p>Users choose a supported domain, dataset size and optional PII placeholders. The system creates synthetic knowledge-base content, mapped ground-truth QA pairs and RAG-compatible structured output.</p>
                <p>The dataset can then be injected into the active Catalyst project to test responses, hallucinations and early accuracy.</p>
                <strong>For the MVP, synthetic data was for testing and benchmarking only.</strong>
              </div>
            </div>
            <div className={styles.scopeContrast}>
              <div><span>In scope</span><p>Predefined domains · dataset sizing · QA + KB generation · project injection</p></div>
              <div><span>Out of scope</span><p>Private document generation · fine-tuning · live APIs · production data</p></div>
            </div>
          </div>
        </section>

        <section className={`${styles.evidenceSection} shell`}>
          <div className={styles.systemGrid}>
            <div className={styles.systemCopy}>
              <div className={styles.sectionMarker}>03 / System flow</div>
              <h2>The system had to connect generation to evaluation.</h2>
              <p>I mapped the feature across three layers: the user interface, the generation and validation pipeline, and the final integration into the active project.</p>
              <p>The important part was not stopping at “generate synthetic data.” The output had to flow directly into a test-and-iterate loop.</p>
              <p className={styles.sequence}>Configure <span>→</span> Generate <span>→</span> Validate <span>→</span> Inject <span>→</span> Test</p>
            </div>
            <figure className={styles.systemFigure}>
              <Image
                src="/ragaai/ragaai-system-flow.png"
                alt="End-to-end system flow for the proposed synthetic dataset generator across interface, processing and project integration layers"
                width={2168}
                height={2094}
                sizes="(max-width: 700px) calc(100vw - 36px), 55vw"
              />
            </figure>
          </div>
        </section>

        <section className={styles.productFlowSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>04 / Product flow</div>
            <div className={styles.textGrid}>
              <h2>Then I translated the system into a product flow.</h2>
              <div>
                <p>The proposed entry point sits inside the Catalyst project workspace.</p>
                <p>A single modal handles domain selection, dataset size and PII placeholders, transitions through generation, and ends with two useful next actions: inject the dataset into the current project or download it for review.</p>
                <p>Previous synthetic datasets were considered a future enhancement rather than a requirement for the initial MVP.</p>
              </div>
            </div>
            <Figure src="/ragaai/ragaai-wireframes.jpeg" alt="Complete wireframe flow for configuring, generating and injecting a synthetic dataset inside RagaAI Catalyst" width={3065} height={2035} caption="Proposed entry point, configuration modal and generation outcome." />
          </div>
        </section>

        <section className={styles.decisionSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>05 / The product decision</div>
            <h2><span>The generator’s job wasn’t to create more data.</span><span>It was to give an AI builder something known to test against.</span></h2>
            <p>That framing shaped the scope: generate realistic test inputs, pair them with expected answers, make them easy to inject, and stop before the feature grows into a full dataset-management or model-training product.</p>
            <nav className={styles.caseActions} aria-label="Project navigation"><a href="/#more-work">← Back to More Product Work</a><a href="/work/flowjar">Previous: FlowJar →</a></nav>
          </div>
        </section>
      </article>
      <footer className={styles.caseFooter}><div className="shell"><span>RagaAI Catalyst · APM product assignment</span><a href="/">Joshua Rego</a><a href="/#more-work">More Product Work ↑</a></div></footer>
    </main>
  );
}
