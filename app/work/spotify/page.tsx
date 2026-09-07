/* oxlint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import styles from './case-study.module.css';

const gammaUrl = 'https://spotify-a-classical-musi-43m2tjd.gamma.site/';

export const metadata: Metadata = {
  title: 'Spotify — A Classical Music Lover’s Guide — Joshua Rego',
  description: 'An early product exercise turning Spotify interface annotations into a personal classical-music journey.',
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

export default function SpotifyProject() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <article>
        <header className={`${styles.hero} shell`}>
          <a className={styles.backLink} href="/#more-work">← More Product Work</a>
          <div className={styles.heroMeta}>
            <span>Spotify</span>
            <span>Early product exercise · Upraised</span>
            <span>2024</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>Spotify</h1>
              <p className={styles.heroSubtitle}>A Classical Music Lover’s Guide</p>
            </div>
            <div className={styles.heroCopy}>
              <p>One of my first product exercises was simple: choose a product I used frequently and explain what its interface was doing.</p>
              <p>I chose Spotify — but instead of annotating disconnected screens, I built the walkthrough around something I actually cared about: discovering and organising classical music.</p>
            </div>
          </div>
        </header>

        <section className={`${styles.storySection} shell`}>
          <div className={styles.sectionMarker}>01 / The story</div>
          <div className={styles.storyGrid}>
            <h2>My first product walkthrough started with Mendelssohn.</h2>
            <div>
              <p>The scenario was personal: I hear a piece by Felix Mendelssohn, want to explore more of his work, and build a playlist around the composer.</p>
              <p>That gave the UI annotations a journey — moving through discovery, library management, playback and exploration rather than treating each screen independently.</p>
            </div>
          </div>
        </section>

        <section className={styles.workSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>02 / Original work</div>
            <h2>The presentation is the project.</h2>
            <div className={styles.embedWrap}>
              <iframe
                src={gammaUrl}
                title="Spotify — A Classical Music Lover’s Guide interactive Gamma presentation"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <a className={styles.gammaLink} href={gammaUrl} target="_blank" rel="noopener noreferrer">Open original in Gamma ↗</a>
          </div>
        </section>

        <section className={styles.lookingBackSection}>
          <div className="shell">
            <div className={styles.sectionMarker}>03 / Looking back</div>
            <div className={styles.closingGrid}>
              <h2>Before I knew much product, I already wanted to tell the story.</h2>
              <div>
                <p>This was an early exercise, not a rigorous product teardown.</p>
                <p>What I like about it now is simpler: even when the assignment asked for UI annotations, my instinct was to give those screens a user, a goal and a narrative.</p>
              </div>
            </div>
            <nav className={styles.caseActions} aria-label="Project navigation">
              <a href="/#more-work">← Back to More Product Work</a>
              <a href="/work/autodesk-revit">Previous: Autodesk Revit →</a>
            </nav>
          </div>
        </section>
      </article>
      <footer className={styles.caseFooter}>
        <div className="shell"><span>Spotify · Early product exercise</span><a href="/">Joshua Rego</a><a href="/#more-work">More Product Work ↑</a></div>
      </footer>
    </main>
  );
}
