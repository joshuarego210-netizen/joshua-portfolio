/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'Autodesk Revit — Joshua Rego',
  description: 'Domain-led product discovery translating lived BIM workflow friction into product hypotheses and a validation approach.',
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

const opportunities = [
  {
    title: 'Collaboration & Versioning',
    problem: 'Teams exchange models across different tools and workflows, making current-file status and coordination difficult to track.',
    opportunity: 'Unified Collaboration Hub',
    concept: 'Surface linked-model status, flag outdated files and bring coordination context closer to the model rather than fragmented email and file exchanges.',
  },
  {
    title: 'Learning Curve',
    problem: 'New Revit users can struggle with families, parameters, worksets and unfamiliar BIM concepts before accomplishing useful project tasks.',
    opportunity: 'Role-Adaptive Onboarding',
    concept: 'Guide architects, engineers and drafters through role-specific project tasks and early wins rather than generic tutorials.',
  },
  {
    title: 'Interoperability',
    problem: 'Cross-platform exchanges between Revit, ArchiCAD, IFC, SketchUp and other workflows can introduce missing information and cleanup work.',
    opportunity: 'Seamless Exchange Engine',
    concept: 'Preview what may be lost or changed during exchange and surface potential fixes before the user commits to the import or export.',
  },
];

export default function AutodeskRevitProject() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#more-work">← More Product Work</a>
          <div className={styles.heroMeta}>
            <span>Autodesk Revit</span>
            <span>Domain-led product discovery</span>
            <span>2025</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>Autodesk<br />Revit</h1>
              <p className={styles.heroSubtitle}>From BIM Workflow Friction<br />to Product Opportunities</p>
            </div>
            <div className={styles.heroCopy}>
              <p>I’d spent years using and teaching BIM before looking at Revit through a product lens.</p>
              <p>That changed where the analysis started: not with a feature wishlist, but with the workflow moments that repeatedly cost architects time.</p>
              <div className={styles.domainContext}>
                <span>Domain context</span>
                <p>Revit user since 2017 · Professional BIM workflows · CAD→BIM transition · Architecture software teaching</p>
                <a href="https://drive.google.com/file/d/1zw4rwovvNpUx0nYytDZZRjFdmBb7woWX/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">View product document ↗</a>
              </div>
            </div>
          </div>
        </header>

        <section className={styles.workflowSection}>
          <div className={`${styles.workflowGrid} shell`}>
            <div className={styles.workflowCopy}>
              <div className={styles.sectionMarker}>01 / Lived workflow</div>
              <h2>The problem was bigger than the Revit interface.</h2>
              <p>On a real project, the architect rarely works inside one clean software ecosystem.</p>
              <p>Structural teams, MEP consultants and external collaborators exchange models and drawings across Revit, BIM 360, Navisworks, DWG, IFC and other tools.</p>
              <p>The result can be a coordination maze: manual transfers, outdated links, sync errors and uncertainty about which model is actually current.</p>
            </div>
            <figure className={styles.mazeFigure}>
              <Image
                src="/autodesk/collaboration-maze.jpg"
                alt="Collaboration Maze showing fragmented model exchanges between architects, structural and MEP teams, external consultants, BIM 360 and Navisworks"
                width={2082}
                height={929}
                sizes="(max-width: 760px) calc(100vw - 36px), 58vw"
                priority
              />
            </figure>
          </div>
        </section>

        <section className={`${styles.opportunitiesSection} shell`}>
          <div className={styles.sectionMarker}>02 / Opportunity areas</div>
          <h2>Three recurring frictions became three product opportunities.</h2>
          <div className={styles.opportunityList}>
            {opportunities.map((item, index) => (
              <article key={item.title}>
                <div className={styles.opportunityHeading}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3></div>
                <div><span>Problem</span><p>{item.problem}</p></div>
                <div><span>Opportunity</span><strong>{item.opportunity}</strong><p>{item.concept}</p></div>
              </article>
            ))}
          </div>
          <p className={styles.proposalNote}>Product hypotheses grounded in workflow experience — not shipped Autodesk features.</p>
        </section>

        <section className={styles.validationSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>03 / Validation</div>
            <div className={styles.validationGrid}>
              <h2>Experience gave me hypotheses.<br />Not answers.</h2>
              <div>
                <p>I had lived many of these problems myself, but one architect’s workflow is not a market.</p>
                <p>The next step would be validating the patterns with architects, engineers and BIM managers, then combining qualitative evidence with product signals such as feature usage, error patterns and re-sync behaviour.</p>
              </div>
            </div>
            <p className={styles.validationSequence}>Lived experience <span>→</span> User interviews <span>→</span> Community signals <span>→</span> Product data <span>→</span> Prioritisation</p>
          </div>
        </section>

        <section className={styles.decisionSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>04 / The product decision</div>
            <h2><span>Domain expertise finds<br />the problem faster.</span><span>It doesn’t replace validation.</span></h2>
            <div className={styles.decisionCopy}>
              <p>Knowing the workflow helped me recognise where friction accumulates and translate those moments into product hypotheses.</p>
              <p>The PM discipline is knowing when experience stops being evidence — and when you need other users and data to challenge it.</p>
            </div>
            <nav className={styles.caseActions} aria-label="Project navigation">
              <a href="/#more-work">← Back to More Product Work</a>
              <a href="/work/product-space">Previous: Product Space →</a>
            </nav>
          </div>
        </section>
      </article>
      <footer className={styles.caseFooter}>
        <div className="shell"><span>Autodesk Revit · Domain-led product discovery</span><a href="/">Joshua Rego</a><a href="/#more-work">More Product Work ↑</a></div>
      </footer>
    </main>
  );
}
