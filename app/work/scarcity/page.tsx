/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './case-study.module.css';

const conceptPdfUrl = 'https://drive.google.com/file/d/1MvzgKxPw9OZ9TGwV_HkhAIFwSe_U3woI/view?usp=drivesdk';

export const metadata: Metadata = {
  title: 'ScarCITY — Joshua Rego',
  description: 'An original historical survival-strategy concept about scarcity, moral trade-offs and branching consequences.',
};

function SiteHeader() {
  return (
    <header className="site-header shell">
      <a className="wordmark" href="/" aria-label="Joshua Rego, home">Joshua Rego</a>
      <nav aria-label="Primary navigation"><a href="/#work">Work</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav>
    </header>
  );
}

export default function ScarcityProject() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <article>
        <header className={styles.hero}>
          <div className="shell">
            <a className={styles.backLink} href="/#experiments">← Ideas &amp; Experiments</a>
            <div className={styles.categoryLine}><span>Ideas &amp; Experiments</span><span>Original Game Concept</span></div>
            <div className={styles.heroGrid}>
              <div><h1>SCARCITY</h1><h2>Rewrite the past.<br /><span>Decide who endures.</span></h2></div>
              <div className={styles.heroCopy}>
                <p>You know the disaster is coming.</p>
                <p>The people living through it don’t.</p>
                <p>ScarCITY is a historical survival-strategy concept about entering real disasters before they happen — then working with limited time, resources and trust to save as many lives as possible.</p>
              </div>
            </div>
            <div className={styles.heroMeta}><span>Narrative-driven historical survival strategy</span><span>PC concept · 2025</span><strong>Concept only · Not developed or shipped</strong></div>
          </div>
        </header>

        <section className={`${styles.fantasySection} shell`}>
          <div className={styles.sectionMarker}>01 / Player fantasy</div>
          <div className={styles.textGrid}>
            <h2>You have one unfair advantage:<br />you know what happens next.</h2>
            <div><p>As a time-travelling strategist, the player enters historical disasters before they unfold — Krakatoa, Pompeii, the Lisbon earthquake and others.</p><p>Knowing the future does not mean controlling it.</p><p>Local leaders may not believe you. Resources are limited. Infrastructure takes time. Every intervention creates consequences.</p></div>
          </div>
          <div className={styles.tensionStrip}><span><strong>Time</strong> ↓</span><span><strong>Resources</strong> ↓</span><span><strong>Trust</strong> ?</span><span><strong>Morality</strong> ↔</span></div>
        </section>

        <section className={styles.systemSection}>
          <div className={`${styles.systemGrid} shell`}>
            <div className={styles.systemCopy}>
              <div className={styles.sectionMarker}>02 / The system</div>
              <h2>Scarcity is the mechanic.</h2>
              <p>The challenge is not simply identifying the correct solution. It is deciding what to do when there is not enough time, trust or material to do everything.</p>
              <p className={styles.gameLoop}>Explore <span>→</span> Persuade <span>→</span> Allocate <span>→</span> Prepare <span>→</span> Disaster <span>→</span> Consequences</p>
              <small>Every decision reshapes what resources, trust and possibilities remain for the next one.</small>
            </div>
            <figure className={styles.systemFigure}><Image src="/scarcity/core-gameplay-loop.jpg" alt="ScarCITY core gameplay loop from exploration and persuasion through preparation, disaster and consequences" width={2000} height={1328} sizes="(max-width: 760px) calc(100vw - 36px), 58vw" /></figure>
          </div>
        </section>

        <section className={`${styles.missionSection} shell`}>
          <div className={styles.sectionMarker}>03 / One mission: Krakatoa, 1883</div>
          <div className={styles.missionIntro}><h2>The volcano will erupt.<br /><span>The question is what survives it.</span></h2><p>The Krakatoa scenario turns the system into a playable sequence: arrive before the eruption, understand the settlement, persuade people who have no reason to believe you, allocate scarce resources, prepare evacuation infrastructure — and eventually decide who or what gets prioritised.</p></div>
          <figure className={styles.missionFigure}><Image src="/scarcity/krakatoa-mission.jpg" alt="ScarCITY Krakatoa 1883 mission walkthrough from briefing and scouting through moral choice, disaster and debrief" width={2000} height={1341} sizes="(max-width: 700px) calc(100vw - 36px), 92vw" /></figure>
          <p className={styles.missionSequence}>Brief <span>→</span> Scout <span>→</span> Persuade <span>→</span> Plan <span>→</span> Build <span>→</span> Choose <span>→</span> Disaster <span>→</span> Debrief</p>
        </section>

        <section className={styles.playSection}>
          <div className={`${styles.playGrid} shell`}>
            <div className={styles.playCopy}><div className={styles.sectionMarker}>04 / From system to play</div><h2>What would the decisions actually feel like?</h2><p>The concept then moves from system diagrams into imagined play: persuading communities, assigning resources, constructing evacuation options, deploying scouts and watching the countdown close in.</p><div className={styles.conceptNote}><span>Interface concept</span><p>Exploratory visualisation — not a functioning prototype.</p></div></div>
            <figure><Image src="/scarcity/gameplay-interface.jpg" alt="Exploratory ScarCITY interface concept showing a Krakatoa settlement, resource actions and an approaching eruption" width={2000} height={1333} sizes="(max-width: 760px) calc(100vw - 36px), 57vw" /></figure>
          </div>
        </section>

        <section className={styles.choiceSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>05 / The impossible choice</div>
            <div className={styles.choiceIntro}><h2>You have 2 boats.<br />6 hours.<br /><span>40 people.</span><br /><em>Who goes first?</em></h2><div><p>The game is designed around situations where optimisation becomes a values decision.</p><p>Do you prioritise children? The injured? People with skills the settlement will need afterward? Supplies that improve everyone’s chance of surviving?</p><p>There may be no clean answer — and the consequences persist.</p></div></div>
            <figure className={styles.choiceFigure}><Image src="/scarcity/moral-choice.jpg" alt="Exploratory ScarCITY moral-choice concept showing limited boats and competing evacuation priorities" width={2000} height={1333} sizes="(max-width: 700px) calc(100vw - 36px), 92vw" /></figure>
          </div>
        </section>

        <section className={`${styles.replaySection} shell`}>
          <div className={styles.sectionMarker}>06 / Why it replays</div>
          <div className={styles.replayGrid}><h2>The disaster repeats.<br /><span>Your history doesn’t.</span></h2><p>ScarCITY was designed around replayability through changing constraints, objectives and consequences. The same historical starting point can produce different surviving communities — and different moral legacies — depending on what the player chooses to preserve.</p></div>
          <div className={styles.branching}><div><span>Different persuasion</span><b>+</b><span>Different resource allocation</span><b>+</b><span>Different people saved</span><b>+</b><span>Different preparation</span></div><strong>↓</strong><p>Different timeline</p></div>
        </section>

        <section className={styles.ideaSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>07 / The idea</div>
            <h2>A strategy game where every decision<br />tests not just your tactics,<br /><span>but your values.</span></h2>
            <div className={styles.ideaCopy}><p>ScarCITY began with a question I wanted to turn into a system:</p><p>If you knew a disaster was coming but could not save everything, what would you choose to preserve?</p></div>
            <div className={styles.statusRow}><span>Concept status</span><p>Original game concept · Systems exploration · Not developed or shipped</p><a href={conceptPdfUrl} target="_blank" rel="noopener noreferrer">View full 15-page game concept ↗</a></div>
            <nav className={styles.caseActions} aria-label="Project navigation"><a href="/#experiments">← Back to Ideas &amp; Experiments</a><a href="/#work">Selected Work ↑</a></nav>
          </div>
        </section>
      </article>
      <footer className={styles.caseFooter}><div className="shell"><span>ScarCITY · Original game concept</span><a href="/">Joshua Rego</a><a href="/#experiments">Ideas &amp; Experiments ↑</a></div></footer>
    </main>
  );
}
