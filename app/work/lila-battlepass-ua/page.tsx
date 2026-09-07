/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

export const metadata: Metadata = {
  title: 'Steal the Principle, Not the Feature — Joshua Rego',
  description:
    'An APM hiring assignment using comparative gaming strategy and cross-genre UA research to find principles worth transferring.',
};

const games = [
  ['Arena Breakout', 'Realism', 'Authentic tactical identity', 'Restrained cosmetics support immersion'],
  ['Farlight 84', 'Full stylisation', 'Character personality + expressive cosmetics', 'Deep weapon customisation can coexist with stylised art'],
  ['Fortnite', 'Flexible visual universe', 'Broad IP collaborations', 'Variety can fit without destroying cohesion'],
  ['COD Mobile', 'Mastery + identity', 'Weapon and character cosmetics', 'Players can embody skill, status and familiar IP'],
  ['Brawl Stars', 'Character attachment', 'Identification with specific brawlers', 'Cosmetics strengthen that bond'],
  ['Clash of Clans', 'Persistent environment', 'Players repeatedly inhabit the space', 'Scenery becomes personally meaningful'],
] as const;

const principleMappings = [
  ['Arena Breakout', 'Hardcore identity is immediately legible', 'Commit to positioning', 'Make LILA Black’s stylisation obvious rather than sitting awkwardly between realism and fantasy'],
  ['Farlight 84', 'Stylised art + granular weapon customisation', 'Depth and style are not opposites', 'Preserve extraction-level customisation while using a more expressive visual language'],
  ['Fortnite / CODM / Delta Force', 'Different IP strategies fit their host game', 'Collaboration needs thematic fit', 'Choose partnerships that reinforce the product identity rather than merely adding recognisable IP'],
  ['Supercell games', 'Cosmetic focus follows what players repeatedly see and value', 'Monetise player attention', 'Prioritise the objects, characters and spaces players actually form attachment to'],
] as const;

const genres = [
  ['Dating sims', 'Sell the fantasy.', 'Emotional desire · character attraction · agency'],
  ['Tactical / shooters', 'Sell mastery and tension.', 'Skill · progression · risk / reward'],
  ['Casual / puzzle', 'Sell instant comprehension.', 'Low friction · obvious stakes · immediate satisfaction'],
] as const;

const validation = [
  '3 story concepts',
  'Lightweight interactive prototypes',
  'Compare interest + completion + choice behaviour',
  'Qualitative follow-up',
  'Invest in the strongest direction',
] as const;

const deliverables = [
  ['Detailed Rationale', 'Methods · observations · recommendations · validation thinking', 'https://docs.google.com/document/d/12RTP3n72oSxZQXYQKU4cLqH7wE1tDAkTJl2DB3jmeRQ/edit'],
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

function BoardFigure({
  src,
  alt,
  caption,
  width,
  height,
  portrait = false,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  portrait?: boolean;
}) {
  return (
    <figure className={`${styles.boardFigure} ${portrait ? styles.portraitBoard : ''}`}>
      <div className={styles.boardImage}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1440px) calc(100vw - 64px), 1400px"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function LilaBattlePassUACaseStudy() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#work">← Selected Work</a>
          <div className={styles.heroContext}>
            <span>03 / APM hiring assignment · LILA Games</span>
            <span>October 2025</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>Steal the Principle,<br />Not the Feature</h1>
              <p className={styles.heroSubtitle}>Competitive Gaming Strategy &amp; UA Creative Research</p>
            </div>
            <div className={styles.heroCopy}>
              <p>I compared games that look nothing alike for one reason: to understand why their product and creative decisions work in context.</p>
              <p>The assignment moved from battle-pass strategy across 10 mobile games to user-acquisition research across three very different genres — then asked what was actually transferable to LILA’s products.</p>
              <p>The goal wasn’t to copy competitors.<br /><strong>It was to separate the feature from the principle behind it.</strong></p>
            </div>
          </div>
          <dl className={styles.proofStrip}>
            <div><dt>10</dt><dd>games compared</dd></div>
            <div><dt>3</dt><dd>gaming genres</dd></div>
            <div><dt>Battle pass</dt><dd>+ cosmetics</dd></div>
            <div><dt>UA</dt><dd>creative strategy</dd></div>
          </dl>
          <p className={styles.qualifier}>Assignment outputs, not shipped outcomes.</p>
        </header>

        <section className={`${styles.comparisonSection} shell`}>
          <div className={styles.sectionIntro}>
            <div className={styles.sectionMarker}>01 / Compare broadly</div>
            <h2>Same monetisation mechanic.<br />Very different reasons to buy.</h2>
            <div>
              <p>I compared battle-pass and cosmetic systems across extraction shooters, battle royales and competitive multiplayer games.</p>
              <p>The useful question wasn’t “what cosmetics do they sell?” It was <strong>“why does that cosmetic make sense in this game?”</strong></p>
            </div>
          </div>
          <div className={styles.gameComparison}>
            {games.map(([game, identity, reason, implication], index) => (
              <article key={game}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{game}</h3>
                <p>{identity}</p>
                <strong>{reason}</strong>
                <p>{implication}</p>
              </article>
            ))}
          </div>
          <aside className={styles.counterexample}>
            <span>Counterexample / Lost Light</span>
            <h3>Variety without identity.</h3>
            <p>Conflicting cosmetic themes showed the risk of adding variety without a coherent product or aesthetic position.</p>
          </aside>
        </section>

        <section className={`${styles.boardSection} shell`}>
          <BoardFigure
            src="/lila-battlepass-ua/battle-pass-comparison-board.jpg"
            alt="Battle-pass comparison board covering ten games with screenshots and handwritten strategic notes"
            width={5000}
            height={6072}
            portrait
            caption="Working comparison board — looking across genres for patterns, contradictions and transferable ideas."
          />
        </section>

        <section className={`${styles.mappingSection} shell`}>
          <div className={styles.sectionMarker}>02 / Transfer the principle</div>
          <h2>Stylised doesn’t have to mean shallow.</h2>
          <p className={styles.mappingIntro}>The analysis led to a proposed direction for LILA Black’s casual, stylised extraction positioning.</p>
          <div className={styles.mappingHead} aria-hidden="true">
            <span>Observation</span><span>Principle</span><span>Application</span>
          </div>
          <div className={styles.mappingRows}>
            {principleMappings.map(([source, observation, principle, application]) => (
              <article key={source}>
                <div><span>{source}</span><p>{observation}</p></div>
                <strong>{principle}</strong>
                <p>{application}</p>
              </article>
            ))}
          </div>
          <p className={styles.qualifier}>Proposed recommendations — not implemented outcomes.</p>
        </section>

        <section className={styles.uaTransition}>
          <div className="shell">
            <div className={styles.sectionMarker}>03 / Look outside the category</div>
            <h2>Then I took the same approach outside the product.</h2>
            <p className={styles.transitionQuestion}>If comparison could improve the battle pass, could cross-genre comparison improve how the game was marketed?</p>
            <div className={styles.genreGrid}>
              {genres.map(([genre, promise, triggers]) => (
                <article key={genre}>
                  <span>{genre}</span>
                  <h3>{promise}</h3>
                  <p>{triggers}</p>
                </article>
              ))}
            </div>
            <p className={styles.genreNote}>The genres were intentionally different. The point was to find transferable creative principles, not visually similar ads.</p>
          </div>
        </section>

        <section className={`${styles.boardSection} shell`}>
          <BoardFigure
            src="/lila-battlepass-ua/ua-creative-research-board.jpg"
            alt="Wide creative research catalogue comparing dating sim, tactical shooter and casual puzzle advertising"
            width={5000}
            height={3275}
            caption="Creative research catalogue — active campaigns grouped to compare hooks, formats and psychological triggers."
          />
        </section>

        <section className={`${styles.transferSection} shell`}>
          <div className={styles.sectionMarker}>04 / Rewrite the execution</div>
          <h2>Borrow the psychology.<br />Rewrite the execution.</h2>
          <div className={styles.transferExamples}>
            <article>
              <span>Casual games / underdog progression</span>
              <p className={styles.observation}>Vulnerability · progression · payoff</p>
              <div className={styles.miniStory}><b>Started with nothing</b><b>Built an arsenal</b></div>
              <p>Transfer visible progression, not the casual-game execution.</p>
            </article>
            <article>
              <span>COD Mobile / interactive decision</span>
              <p className={styles.observation}>Make the viewer mentally participate</p>
              <div className={styles.choicePair}><b>Extract now<br /><small>Keep your loot</small></b><em>vs.</em><b>Push for the Cube<br /><small>Risk everything</small></b></div>
              <p>The extraction game’s tension becomes understandable before installation.</p>
            </article>
            <article>
              <span>Casual advertising / instant comprehension</span>
              <p className={styles.observation}>Communicate the stakes immediately</p>
              <div className={styles.miniStory}><b>Find intel</b><b>Survive ambush</b><b>Extract with loot</b></div>
              <p>Turn a complex extraction loop into one clear mini-story.</p>
            </article>
          </div>
        </section>

        <section className={`${styles.compactSection} shell`}>
          <article className={styles.heartsDesire}>
            <div className={styles.sectionMarker}>05 / Apply elsewhere</div>
            <h2>The same lens,<br />a different game.</h2>
            <dl>
              <div><dt>Cultural relatability</dt><dd>Use recognisably Indian contexts and relationship situations.</dd></div>
              <div><dt>Choice consequences</dt><dd>Show both the decision and what changes because of it.</dd></div>
            </dl>
            <div className={styles.decisionExample}>
              <span><b>Trust him</b><small>one outcome</small></span>
              <span><b>Confront him</b><small>another outcome</small></span>
            </div>
            <blockquote>“Don’t just tell players their choices matter.<br />Show the consequence.”</blockquote>
          </article>
          <article className={styles.validation}>
            <div className={styles.sectionMarker}>06 / Validate first</div>
            <h2>Before producing three stories, test which story deserves production.</h2>
            <ol>
              {validation.map((step) => <li key={step}>{step}</li>)}
            </ol>
            <p>Use lightweight Twine or Typeform-style prototypes, then survey or focus-group follow-up—before spending weeks producing full FMV chapters.</p>
            <span>Proposed validation methodology · no achieved sample sizes</span>
          </article>
        </section>

        <section className={`${styles.deliverablesSection} shell`}>
          <div className={styles.sectionMarker}>Original deliverables</div>
          <h2>Open the actual work.</h2>
          <div className={styles.deliverableRows}>
            {deliverables.map(([title, description, href]) => (
              <a className={styles.deliverableRow} href={href} target="_blank" rel="noopener noreferrer" key={title}>
                <strong>{title}</strong>
                <span>{description}</span>
                <small>Open ↗</small>
              </a>
            ))}
          </div>
        </section>

        <section className={`${styles.closingSection} shell`}>
          <div className={styles.closingCopy}>
            <p>Looking at competitors was the easy part.</p>
            <p>The useful part was figuring out why their decisions made sense for their game — and what, if anything, was worth adapting for another one.</p>
          </div>
          <div className={styles.caseActions}>
            <a href="/#work">← Back to Selected Work</a>
            <a href="/work/buildcheck-ai">Next: BuildCheck AI →</a>
          </div>
        </section>
      </article>

      <footer className={styles.caseFooter}>
        <div className="shell">
          <span>Steal the Principle, Not the Feature</span>
          <a href="/">Joshua Rego</a>
          <a href="/#work">Selected Work ↑</a>
        </div>
      </footer>
    </main>
  );
}
