/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'Quiet Grid Designs — Joshua Rego',
  description:
    'How Joshua Rego built a real digital-product business to practise product through real market feedback.',
};

const proof = [
  ['20', 'products'],
  ['11', 'orders'],
  ['₹9.8K', 'early revenue'],
  ['0', 'Etsy Ads'],
];

const primaryResults = [
  ['373', 'visits'],
  ['496', 'listing views'],
  ['11', 'orders'],
  ['₹9,817', 'revenue'],
  ['2.9%', 'conversion'],
];

const supportingResults = [
  ['35', 'item favourites'],
  ['0', 'Etsy Ads'],
];

const researchDecisions = [
  'Protect validated products before changing everything.',
  'Let real customer behaviour carry more weight than trend-chasing.',
  'Broaden Quiet Grid carefully from architecture resources toward useful presentation and handoff resources for designers.',
  'Test one direction at a time instead of launching many speculative products.',
];

const closingSignals = ['20 products shipped', 'Built end-to-end', 'Still building.'];

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
  caption,
  className = '',
  eager = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  eager?: boolean;
  width: number;
  height: number;
}) {
  return (
    <figure className={`${styles.figure} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1440px) calc(100vw - 64px), 1400px"
        priority={eager}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function QuietGridCaseStudy() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#work">← Selected Work</a>
          <div className={styles.heroLabel}>01 / Quiet Grid Designs</div>
          <div className={styles.heroGrid}>
            <h1>I Built a Real Business to Learn Product by Doing</h1>
            <dl className={styles.projectMeta}>
              <div><dt>Role</dt><dd>Founder · Product · Design · GTM</dd></div>
              <div><dt>Date</dt><dd>May 2026 — Present</dd></div>
            </dl>
          </div>
          <div className={styles.heroIntro}>
            <p>I was trying to break into product management, but there was a limit to how much I could learn from assignments and hypothetical case studies.</p>
            <p>So I created somewhere real to practise.</p>
            <p>I built Quiet Grid Designs from scratch: finding an opportunity among architecture and design professionals, deciding what to make, designing and packaging the products, pricing them, launching them, acquiring traffic organically, and using actual customer behaviour to decide what to do next.</p>
            <p>No hypothetical users. No simulated metrics. People could ignore the products, favourite them, abandon them — or pay for them.</p>
          </div>
          <dl className={styles.proofStrip} aria-label="Early business proof">
            {proof.map(([value, label]) => <div key={label}><dd>{value}</dd><dt>{label}</dt></div>)}
          </dl>
          <p className={styles.proofQualifier}>Early traction from the first month · business currently active</p>
        </header>

        <section className={`${styles.fullMedia} shell`}>
          <Figure
            src="/quiet-grid/storefront.png"
            alt="Quiet Grid Designs Etsy storefront showing its banner, product categories and featured listings"
            caption="Quiet Grid Designs after its first month — 20 live digital products across templates and architectural asset packs."
            width={2768}
            height={1706}
            eager
          />
        </section>

        <section className={`${styles.textSection} ${styles.twoColumn} shell`}>
          <div className={styles.sectionMarker}>01 / A market I knew</div>
          <div className={styles.readingColumn}>
            <h2>Creating my own opportunity</h2>
            <p>My background gave me a market I already understood.</p>
            <p>Architecture school and practice had exposed me to the repetitive work around the work: portfolios, presentation boards, site-analysis graphics and visual assets that students and designers repeatedly rebuild from scratch.</p>
            <p>Rather than turn those frustrations into another hypothetical case study, I wanted to know whether somebody would actually pay for a better solution.</p>
            <p>I chose Etsy because demand already existed there, and Pinterest for organic acquisition. I deliberately avoided Etsy Ads while I learned what people actually wanted.</p>
            <p className={styles.consequenceLine}>Now every decision had a consequence. The market was free to tell me I was wrong.</p>
          </div>
        </section>

        <section className={`${styles.textSection} ${styles.decisionSection} shell`}>
          <div className={styles.sectionMarker}>02 / Deciding what deserved to ship</div>
          <div className={styles.decisionCopy}>
            <p>I started with architecture-focused resume templates, then expanded into mood boards, presentation systems, portfolio templates and architectural assets. Competitor research suggested offering the resumes in Google Docs, so I spent roughly three hours testing the direction. Typography, layout fidelity and vector handling were not good enough, and I killed it.</p>
          </div>
          <blockquote className={styles.pullQuote}>The market suggested the feature. Product quality told me not to ship it.</blockquote>
          <div className={styles.decisionCopySecondary}>
            <p>Inside the resume templates, I also consolidated sections instead of using many independent text boxes, so buyers could add or remove content without manually repositioning a dozen elements. Research could point me somewhere; usefulness and quality determined what shipped.</p>
          </div>
        </section>

        <section className={`${styles.catalogueSection} shell`}>
          <div className={styles.catalogueCopy}>
            <div className={styles.sectionMarker}>03 / Catalogue breadth</div>
            <h2>From launch catalogue<br />to 20 live products.</h2>
            <p>The catalogue evolved from templates into reusable architectural assets as I learned what buyers noticed, explored and paid for while operating the business.</p>
          </div>
          <figure className={`${styles.figure} ${styles.catalogueFigure}`}>
            <div className={styles.catalogueFrame}>
              <Image
                src="/quiet-grid/storefront-full.png"
                alt="Full Quiet Grid Designs Etsy storefront showing the breadth of its 20-product catalogue"
                width={2768}
                height={5210}
                sizes="(max-width: 700px) calc(100vw - 36px), 64vw"
              />
            </div>
            <figcaption>Twenty live products spanning templates, presentation systems and reusable architectural assets.</figcaption>
          </figure>
        </section>

        <section className={`${styles.imageStory} shell`}>
          <div className={styles.imageStoryCopy}>
            <div className={styles.sectionMarker}>04 / Positioning the product</div>
            <h2>24 pages.<br />3 architectural scales.<br />One coherent system.</h2>
            <p className={styles.productInsight}>I realised I was selling pages when the buyer&apos;s actual problem was layout paralysis and visual inconsistency.</p>
            <p className={styles.productOutcome}>It became the shop&apos;s strongest-selling product.</p>
            <aside className={styles.evidenceNote}>Observed outcome, not claimed attribution: the positioning rewrite was one of several changes around the product.</aside>
          </div>
          <Figure
            src="/quiet-grid/portfolio-listing.png"
            alt="The Etsy listing for Quiet Grid's 24-page architecture portfolio template"
            caption="The 24-page portfolio system, repositioned around the buyer’s recurring workflow problems."
            className={styles.tallFigure}
            width={2768}
            height={3746}
          />
        </section>

        <section className={`${styles.workSection} shell`}>
          <div className={styles.workIntro}>
            <div className={styles.sectionMarker}>05 / Making the system</div>
            <h2>The work moved from templates to reusable asset systems</h2>
            <div>
              <p>As the shop evolved, I moved beyond Canva templates into reusable SVG and PNG architectural assets.</p>
              <p>The Site Analysis kit grew into a system of roughly 300 graphics spanning movement, environmental conditions, context, annotations, scale, vegetation and other common analysis needs.</p>
              <p>That required a different product workflow: defining the taxonomy, creating a consistent visual language, building the assets, testing their usability at architectural drawing scales, packaging multiple formats and making the catalogue understandable to a buyer.</p>
            </div>
          </div>
          <Figure
            src="/quiet-grid/working-environment.png"
            alt="Inkscape working environment showing the layered construction and taxonomy of the Site Analysis graphics kit"
            caption="Building the Site Analysis kit in Inkscape — roughly 300 assets organised into a coherent, usable system."
            className={styles.workspaceFigure}
            width={2880}
            height={1800}
          />
        </section>

        <section className={`${styles.peopleSection} shell`}>
          <div className={styles.peopleCopy}>
            <p>The same system thinking shaped later products. The architectural entourage pack contains 100 figures across seven practical categories including movement, waiting, sitting, work/study, social interaction, children/play and accessibility.</p>
            <p>I deliberately retained a sketch-like architectural line quality instead of reducing the figures to generic silhouettes. The goal wasn&apos;t simply “100 people”; it was a set that actually looked at home in architectural drawings.</p>
          </div>
          <Figure
            src="/quiet-grid/architectural-people.jpeg"
            alt="Overview of 100 hand-drawn architectural people organised into seven practical categories"
            caption="100 architectural figures across seven categories, designed to retain a sketch-like line quality in drawings."
            width={2566}
            height={1814}
          />
        </section>

        <section className={`${styles.signalSection} shell`}>
          <div className={styles.signalNarrative}>
            <div className={styles.sectionMarker}>06 / Letting behaviour shape the catalogue</div>
            <h2>A small signal changed what I built next</h2>
            <p>Templates were the core business until a small vegetation pack showed an interesting signal: relatively few views, but two purchases. The sample was too small to declare a winner, but the purchase intent per view was strong enough to investigate.</p>
            <p>I expanded the asset direction into north arrows, scale bars, vegetation, site-analysis graphics, vehicles, people and urban-context collections. The portfolio remained the volume leader while newer assets began generating orders from much smaller traffic bases.</p>
          </div>
          <div className={styles.signalEvidence}>
            <Figure
              src="/quiet-grid/product-performance.png"
              alt="Etsy product-level performance showing views, favourites, orders and revenue by listing"
              caption="Product-level behaviour provided directional evidence for the next catalogue bets."
              className={styles.statsFigure}
              width={2336}
              height={1725}
            />
            <aside className={styles.learningCallout}>
              <span>What I learned</span>
              <p>A low-traffic product with unusually strong purchase intent can be more strategically interesting than a high-traffic product with lots of passive attention.</p>
              <p>I treated that as a roadmap signal, not proof — and used it to justify testing a broader family of architectural assets.</p>
            </aside>
          </div>
        </section>

        <section className={`${styles.textSection} ${styles.gtmSection} shell`}>
          <div className={styles.sectionMarker}>07 / Distribution as product work</div>
          <div className={styles.readingColumn}>
            <h2>Selling was part of the product</h2>
            <p>Every launch included positioning, listing imagery, SEO and tags, pricing, bundling and promotions. I also turned an existing Pinterest account into an organic discovery channel, with a repeatable content system around each product.</p>
            <p>No Etsy Ads were used during this early period.</p>
          </div>
        </section>

        <section className={`${styles.resultsSection} shell`}>
          <div className={styles.sectionMarker}>08 / The first month</div>
          <h2 className={styles.resultsTitle}>The numbers are small.<br />That&apos;s precisely why they are useful.</h2>
          <div className={styles.resultsComposition}>
            <div className={styles.resultsInterpretation}>
              <p className={styles.resultsQualifier}>Early traction · first month</p>
              <dl className={styles.resultsStack} aria-label="Quiet Grid primary product funnel through September 11">
                {primaryResults.map(([value, label]) => <div key={label}><dd>{value}</dd><dt>{label}</dt></div>)}
              </dl>
              <dl className={styles.resultsSupporting} aria-label="Quiet Grid supporting signals through September 11">
                {supportingResults.map(([value, label]) => <div key={label}><dd>{value}</dd><dt>{label}</dt></div>)}
              </dl>
            </div>
            <figure className={`${styles.figure} ${styles.dashboardFigure}`}>
              <div className={styles.dashboardFrame}>
                <Image
                  src="/quiet-grid/shop-dashboard.png"
                  alt="Etsy Shop Manager analytics showing visits, orders, conversion, revenue and shopper behaviour"
                  width={2768}
                  height={4133}
                  sizes="(max-width: 700px) calc(100vw - 36px), 68vw"
                />
              </div>
              <figcaption>Etsy Shop Manager, August 12–September 11. Actual shop performance; 0 Etsy Ads during this period.</figcaption>
            </figure>
          </div>
          <div className={styles.resultsCopy}>
            <p>There was no scale large enough to hide behind. A sale was a person deciding that something I had researched, made, positioned and priced was worth paying for.</p>
            <p>And a product that didn&apos;t sell was information too.</p>
          </div>
        </section>

        <section className={`${styles.textSection} ${styles.twoColumn} shell`}>
          <div className={styles.sectionMarker}>09 / Evidence-led product strategy</div>
          <div className={styles.readingColumn}>
            <p className={styles.researchSequence}>Build → Sell → Observe → Research → Decide</p>
            <h2>The business became the research lab</h2>
            <p>Once real buyers started behaving differently across products, I stopped treating the catalogue as a collection of things I had made and started treating it as evidence. I combined transaction and listing-performance data with AI-assisted competitor and market research to investigate pricing, demand, positioning and adjacent opportunities at greater scale.</p>
            <p>The goal was not more AI-generated ideas, but better decisions: separate observed evidence from inference and hypotheses, protect what was already working, and prioritise the next product based on real signals rather than instinct alone.</p>
            <ol className={styles.researchDecisions}>
              {researchDecisions.map((decision, index) => (
                <li key={decision}><span>{String(index + 1).padStart(2, '0')}</span><p>{decision}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${styles.closingSection} shell`}>
          <div className={styles.sectionMarker}>10 / What changed</div>
          <div className={styles.closingCopy}>
            <h2>A real feedback loop</h2>
            <p>Building Quiet Grid made the feedback loop real. Research could suggest an opportunity, but quality determined what shipped. Small behavioural signals could shape the roadmap without pretending weak evidence was certainty.</p>
            <p>I learned that positioning, pricing, packaging, distribution and customer experience aren&apos;t adjacent to the product. They are part of it.</p>
            <p>Quiet Grid is still a small, active business. I&apos;m not presenting it as a startup success story. I&apos;m presenting it because it gave me what I wanted while learning product:</p>
          </div>
          <blockquote className={styles.finalQuote}>a real market capable of telling me no.</blockquote>
          <Figure
            src="/quiet-grid/builder-workspace.jpg"
            alt="Joshua's working desk with architectural people being drawn in Inkscape alongside a sketchbook and drawing tablet"
            caption="The builder behind the catalogue — still making, testing and operating Quiet Grid Designs."
            className={styles.builderFigure}
            width={4000}
            height={1800}
          />
          <div className={styles.closingSignals} aria-label="Quiet Grid closing summary">
            {closingSignals.map((signal) => <span key={signal}>{signal}</span>)}
          </div>
          <div className={styles.caseActions}>
            <a className={styles.primaryCta} href="https://etsy.com/shop/quietgriddesigns" target="_blank" rel="noreferrer">Quiet Grid Designs is live ↗</a>
            <a className={styles.returnLink} href="/#work">Return to Selected Work →</a>
          </div>
        </section>
      </article>

      <footer className={styles.caseFooter}>
        <div className="shell">
          <span>Quiet Grid Designs</span>
          <a href="/">Joshua Rego</a>
          <a href="/#work">Selected Work ↑</a>
        </div>
      </footer>
    </main>
  );
}
