/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'BuildCheck AI — Joshua Rego',
  description:
    'A focused architecture-tech case study about turning building-compliance work into an honest, testable hackathon prototype.',
};

const proof = [
  ['25+', 'architects spoken to', 'Discovery conversations, not prototype testing'],
  ['255-page', 'bylaw source', 'Bangalore regulation used for the build'],
  ['CSV-based', 'prototype', 'A practical stand-in for BIM-derived data'],
  ['Hackathon', 'build', 'Scoped interaction, selected rules'],
] as const;

const currentFlow = [
  'Project data',
  'CSV upload',
  'Structured preview',
  'Rule checks',
  'Compliance report',
  'Bylaw questions',
] as const;

const prototypeBehaviours = [
  'Uploaded project data is parsed into readable fields',
  'Rule checks surface compliant and violation states',
  'Clauses can be referenced alongside results',
  'A compliance report can be generated',
  'A bylaw Q&A area demonstrates the intended future interaction',
] as const;

const scope = {
  covered: [
    'Selected project parameters',
    'Selected Bangalore bylaw checks',
    'CSV upload',
    'Compliance states',
    'Clause-oriented reporting',
    'Illustrative Q&A interaction',
  ],
  production: [
    'Far broader regulatory coverage',
    'More robust rule parsing',
    'Better source normalization',
    'Richer project-model ingestion',
    'Handling of exceptions and edge cases',
    'Reliable citation and traceability',
    'City and authority-specific rule sets',
  ],
} as const;

const futureFlow = [
  'Revit / BIM model',
  'Direct parameter access',
  'Rule engine + regulation source',
  'Live compliance feedback',
  'Clause-grounded explanation',
] as const;

const futureAreas = [
  'Direct Revit parameter access',
  'IFC / BIM model ingestion',
  'Live checks while designing',
  'Clause-linked explanations',
  'Multi-city regulation packs',
  'Clearer exception handling',
] as const;

const buildLinks = [
  ['Try prototype', 'Hackathon interaction and compliance flow', 'https://buildcheck-ai.lovable.app/'],
  ['View Devfolio submission', 'Project overview and hackathon submission', 'https://devfolio.co/projects/buildcheck-ai-c338'],
  ['View presentation', 'Problem, approach and prototype narrative', 'https://buildcheck-ai-mu3qn2e.gamma.site/'],
  ['View GitHub', 'Prototype source and implementation', 'https://github.com/joshuarego210-netizen/buildcheck-ai'],
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

function Flow({ steps, label }: { steps: readonly string[]; label: string }) {
  return (
    <ol className={styles.flow} aria-label={label}>
      {steps.map((step, index) => (
        <li key={step}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{step}</strong>
        </li>
      ))}
    </ol>
  );
}

function Figure({
  src,
  alt,
  width,
  height,
  caption,
  tall = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  tall?: boolean;
}) {
  return (
    <figure className={`${styles.figure} ${tall ? styles.tallFigure : ''}`}>
      <div className={styles.figureFrame}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={tall ? '(max-width: 700px) calc(100vw - 36px), 820px' : '(max-width: 700px) calc(100vw - 36px), (max-width: 1440px) calc(100vw - 64px), 1400px'}
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function BuildCheckCaseStudy() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#work">← Selected Work</a>
          <div className={styles.heroMeta}>
            <span>04 / BuildCheck AI</span>
            <span>Mosaic hackathon · Product Folks</span>
            <span>September 2025</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>Building compliance is tedious long before AI enters the picture.</h1>
              <p className={styles.heroSubtitle}>Building Compliance Product</p>
            </div>
            <div className={styles.heroCopy}>
              <p>In architecture, checking a project against local bylaws means moving between drawings, project data and long regulatory documents — often manually.</p>
              <p>For the Mosaic hackathon, I explored what a simpler workflow could look like: upload structured project data, compare it against selected bylaw rules, surface violations and make the source logic easier to inspect.</p>
            </div>
          </div>
          <Figure
            src="/buildcheck-ai/buildcheck-cover.jpeg"
            alt="BuildCheck AI cover with a building annotated for height, floor-area ratio, setback and parking compliance"
            width={2760}
            height={1370}
            caption="Hackathon prototype · scoped workflow, selected rules and illustrative AI interaction"
          />
          <dl className={styles.proofStrip}>
            {proof.map(([value, label, note]) => (
              <div key={label}><dt>{value}</dt><dd>{label}</dd><small>{note}</small></div>
            ))}
          </dl>
        </header>

        <section className={`${styles.problemSection} shell`}>
          <div className={styles.sectionMarker}>01 / The domain problem</div>
          <div className={styles.splitIntro}>
            <h2>The problem came from architecture, not from an AI prompt.</h2>
            <div>
              <p>Compliance checking is a recurring part of architectural work. Building data lives in drawings, BIM models and schedules; regulations live in long textual documents.</p>
              <p>Checks such as height, setbacks, floor-area ratio and parking still require interpretation and manual cross-checking — work that is slow and easy to get wrong.</p>
              <p className={styles.discoveryNote}>The 25+ architect figure reflects discovery conversations around this workflow, not people who tested the final prototype.</p>
            </div>
          </div>
          <Figure
            src="/buildcheck-ai/buildcheck-comparison.jpeg"
            alt="Comparison between manual building-compliance checking and the assisted workflow BuildCheck was designed to explore"
            width={2377}
            height={2205}
            caption="Manual checking versus the workflow the prototype was designed to explore."
          />
        </section>

        <section className={`${styles.flowSection} shell`}>
          <div className={styles.sectionMarker}>02 / Scope the workflow</div>
          <div className={styles.splitIntro}>
            <h2>Reduce the workflow to something testable.</h2>
            <p>For the hackathon, CSV became the practical input format. It let the prototype represent BIM-derived project parameters without first building a direct Revit or IFC integration. That was a scope decision, not the intended end state.</p>
          </div>
          <Flow steps={currentFlow} label="BuildCheck hackathon prototype flow" />
        </section>

        <section className={`${styles.prototypeSection} shell`}>
          <div className={styles.sectionMarker}>03 / The working prototype</div>
          <div className={styles.prototypeGrid}>
            <div className={styles.prototypeCopy}>
              <h2>A thin slice of the full compliance journey.</h2>
              <ul>
                {prototypeBehaviours.map((behaviour) => <li key={behaviour}>{behaviour}</li>)}
              </ul>
              <aside className={styles.disclosure}>
                <span>Hackathon constraint</span>
                <h3>No live inference.</h3>
                <p>To avoid inference cost during a short hackathon build, the deployed prototype used illustrative, predefined answer content rather than live model calls. The product interaction was being tested — not an AI backend.</p>
              </aside>
            </div>
            <Figure
              src="/buildcheck-ai/buildcheck-result.jpeg"
              alt="Tall BuildCheck prototype capture showing CSV upload, parsed project data, compliance results, report generation and bylaw questions"
              width={2268}
              height={5646}
              tall
              caption="Working hackathon prototype — from CSV upload to compliance states and illustrative bylaw Q&A."
            />
          </div>
        </section>

        <section className={styles.hardPartSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>04 / The real constraint</div>
            <div className={styles.hardPartGrid}>
              <h2>The AI wasn’t the hardest part.<br />The document was.</h2>
              <div>
                <p>The harder challenge was turning regulation text and inconsistent project values into something structured enough to evaluate reliably.</p>
                <div className={styles.valueExamples} aria-label="Equivalent floor descriptions">
                  <span>G+2</span><span>Ground + 2</span><span>3 floors</span>
                </div>
                <p>Naive parsing assumptions break quickly. Some values need normalization; others need to preserve their raw meaning rather than be forced into one numeric format.</p>
                <strong>Before a model can reason well, the underlying data and rules need to be represented well.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.scopeSection} shell`}>
          <div className={styles.sectionMarker}>05 / Honest scope</div>
          <h2>A useful demo is not the same as full compliance automation.</h2>
          <div className={styles.scopeGrid}>
            <article>
              <span>Prototype covered</span>
              <ul>{scope.covered.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <span>Production product would need</span>
              <ul>{scope.production.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <aside className={styles.sourceLesson}>
            <span>The source material shaped the product difficulty.</span>
            <p>Cleaner, more structured regulatory sources would make early validation easier, but the messy Bangalore document was also a realistic reminder that compliance products have to survive imperfect source material.</p>
          </aside>
        </section>

        <section className={`${styles.futureSection} shell`}>
          <div className={styles.sectionMarker}>06 / Future direction</div>
          <div className={styles.splitIntro}>
            <h2>V2 should move closer to the model.</h2>
            <div>
              <p>The current prototype asks architects to export BIM or project parameters into CSV. A stronger next version would explore direct integration with software such as Revit.</p>
              <p>A Revit plugin could read relevant model parameters directly and surface compliance feedback closer to the design workflow.</p>
            </div>
          </div>
          <Flow steps={futureFlow} label="Potential BuildCheck V2 workflow" />
          <div className={styles.futureAreas}>
            <span>Potential V2 areas</span>
            <ul>{futureAreas.map((area) => <li key={area}>{area}</li>)}</ul>
            <small>Future exploration — none of these capabilities are implemented in the current prototype.</small>
          </div>
        </section>

        <section className={`${styles.linksSection} shell`}>
          <div className={styles.sectionMarker}>Original work</div>
          <h2>Explore the build.</h2>
          <div className={styles.linkRows}>
            {buildLinks.map(([title, description, href]) => (
              <a href={href} target="_blank" rel="noopener noreferrer" key={title}>
                <strong>{title}</strong>
                <span>{description}</span>
                <small>Open ↗</small>
              </a>
            ))}
          </div>
        </section>

        <section className={`${styles.closingSection} shell`}>
          <div className={styles.closingCopy}>
            <p>BuildCheck is still a prototype.</p>
            <p>The next version I’d want to build is much less about the interface and much more about the plumbing: getting reliable regulation data closer to the BIM model, and checking it while architects are actually designing.</p>
          </div>
          <div className={styles.caseActions}>
            <a href="/#work">← Back to Selected Work</a>
            <a href="/work/prime-video">Next: Amazon Prime Video →</a>
          </div>
        </section>
      </article>

      <footer className={styles.caseFooter}>
        <div className="shell">
          <span>BuildCheck AI · Building Compliance Product</span>
          <a href="/">Joshua Rego</a>
          <a href="/#work">Selected Work ↑</a>
        </div>
      </footer>
    </main>
  );
}
