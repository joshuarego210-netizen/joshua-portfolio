/* oxlint-disable next/no-html-link-for-pages */
import Image from 'next/image';

type VisualKind = 'quiet' | 'pipeline' | 'battle' | 'buildcheck' | 'prime' | 'patent';

type Project = {
  number: string;
  discipline: string;
  title: string;
  subtitle: string;
  description: string;
  facts: Array<{ label: string; value: string }>;
  note: string;
  visual: VisualKind;
};

const focusAreas = ['Product strategy', 'Interaction design', 'Go-to-market'];

const projects: Project[] = [
  {
    number: '01',
    discipline: 'Venture building',
    title: 'Quiet Grid Designs',
    subtitle: 'I built a real digital-product business from zero.',
    description:
      'Built and launched a live product business for architecture and design professionals — owning research, product, design, pricing and organic GTM.',
    facts: [
      { label: '', value: '20 products' },
      { label: '', value: '9 orders' },
      { label: '', value: '₹6.6K early revenue' },
      { label: '', value: '0 Etsy Ads' },
    ],
    note: 'Early traction · first month · currently active',
    visual: 'quiet',
  },
  {
    number: '02',
    discipline: 'APM hiring assignment · LILA Games',
    title: 'From Production Pipeline to Player Retention',
    subtitle: 'Art Production & LiveOps Strategy',
    description:
      'Two product problems in one assignment: model the production of a content-heavy mobile game, then shape a practical LiveOps direction around player friction, monetisation and retention.',
    facts: [
      { label: 'Planned', value: '1,087 assets' },
      { label: 'Modelled', value: '15 months' },
      { label: 'Proposed', value: '6-month LiveOps' },
    ],
    note: 'Assignment scope · not shipped outcomes',
    visual: 'pipeline',
  },
  {
    number: '03',
    discipline: 'APM hiring assignment · LILA Games',
    title: 'Steal the Principle, Not the Feature',
    subtitle: 'Competitive Gaming Strategy & UA Creative Research',
    description:
      'Compared games and ad genres to understand why their decisions worked in context—then translated the strongest principles into product and creative directions for LILA’s games.',
    facts: [
      { label: 'Compared', value: '10 games' },
      { label: 'Researched', value: '3 genres' },
      { label: 'Scope', value: 'Pass + UA' },
    ],
    note: 'October 2025 · Assignment outputs',
    visual: 'battle',
  },
  {
    number: '04',
    discipline: 'Mosaic hackathon · Product Folks',
    title: 'BuildCheck AI',
    subtitle: 'Building Compliance Product',
    description:
      'Turned a real architecture workflow problem into a working compliance prototype for a hackathon. Structured project data, surfaced bylaw violations and explored how regulation checking could move closer to the BIM workflow.',
    facts: [
      { label: 'Discovery', value: '25+ architects' },
      { label: 'Source', value: '255-page bylaw' },
      { label: 'Input', value: 'CSV prototype' },
      { label: 'Scope', value: 'Hackathon build' },
    ],
    note: 'September 2025 · No live inference',
    visual: 'buildcheck',
  },
  {
    number: '05',
    discipline: 'Product management fellowship case study · Upraised',
    title: 'Personalised Discovery',
    subtitle: 'Amazon Prime Video',
    description:
      'An end-to-end PM case study spanning seven user interviews, competitive analysis, funnel and metrics thinking, opportunity prioritisation, wireframes and a PRD.',
    facts: [
      { label: 'Interviews', value: '7 users' },
      { label: 'Goal', value: '+15% watch-time*' },
      { label: 'Output', value: 'PRD + flows' },
    ],
    note: '*Target, not an achieved result',
    visual: 'prime',
  },
  {
    number: '06',
    discipline: 'APM hiring assignment · Lumenci',
    title: 'Lumenci Assistant',
    subtitle: 'Designing AI That Doesn’t Override the Expert',
    description:
      'Designed a human-in-the-loop AI workflow for refining patent claim charts without giving the model silent control over expert work.',
    facts: [
      { label: 'Scope', value: '24-hour challenge' },
      { label: 'Control', value: 'Accept / reject' },
      { label: 'Recovery', value: 'Version history' },
    ],
    note: '24-hour APM assignment · Interactive Claude Artifact',
    visual: 'patent',
  },
];

const moreWork = [
  ['FlowJar', 'Visual budgeting through spatial interaction', 'Interaction design'],
  ['RagaAI Catalyst', 'Synthetic dataset generator for testing RAG pipelines', 'Technical product design'],
  ['Monopoly GO', 'Player experience analysis', 'Gaming systems'],
  ['FarmVille 3', 'Progression and player friction', 'Gaming prioritisation'],
  ['Product Space', 'PM fellowship landing-page teardown', 'UX & competitive teardown'],
  ['Autodesk Revit', 'BIM workflow & collaboration opportunities', 'Domain-led product discovery'],
  ['Spotify', 'Classical music through a product walkthrough', 'Product storytelling'],
  ['Domestika', 'AI creative-learning assistant from strategy to prototype', '0→1 prototyping'],
];

function Arrow({ down = false }: { down?: boolean }) {
  return <span aria-hidden="true">{down ? '↓' : '↗'}</span>;
}

function ProjectVisual({ kind }: { kind: VisualKind }) {
  if (kind === 'quiet') {
    return (
      <div className="project-visual visual-quiet project-image">
        <Image
          src="/quiet-grid/etsy-banner.jpg"
          alt="Quiet Grid Designs banner with its brand identity and architecture product compositions"
          width={3750}
          height={938}
          sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1440px) calc(100vw - 64px), 1400px"
        />
      </div>
    );
  }

  if (kind === 'pipeline') {
    return (
      <div className="project-visual visual-pipeline project-image project-visual-cod-crop">
        <Image
          src="/lila-art-liveops/cod-research-board.jpeg"
          alt="Close crop of the COD Zombies research board focused on the highlighted Art Asset Categories planning area"
          width={5000}
          height={3069}
          sizes="(max-width: 700px) calc(100vw - 36px), 58vw"
        />
      </div>
    );
  }

  if (kind === 'battle') {
    return (
      <div className="project-visual visual-battle project-image project-visual-battle-crop">
        <Image
          src="/lila-battlepass-ua/collage-image.jpeg"
          alt="Comparative gaming collage centred on the question What transfers?"
          width={1672}
          height={941}
          sizes="(max-width: 700px) calc(100vw - 36px), 42vw"
        />
      </div>
    );
  }

  if (kind === 'buildcheck') {
    return (
      <div className="project-visual visual-buildcheck project-image project-visual-buildcheck-cover">
        <Image
          src="/buildcheck-ai/buildcheck-cover.jpeg"
          alt="BuildCheck AI cover showing a building with height, FAR, setback and parking compliance annotations"
          width={2760}
          height={1370}
          sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1440px) calc(100vw - 64px), 1400px"
        />
      </div>
    );
  }

  if (kind === 'prime') {
    return (
      <div className="project-visual visual-prime project-image project-visual-prime-wireframes">
        <Image
          src="/prime-video/prime-wireframes.png"
          alt="Amazon Prime Video concept wireframes covering preferences, personalised discovery, feedback and X-Ray favourites"
          width={6912}
          height={4893}
          sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 980px) 58vw, 67vw"
        />
      </div>
    );
  }

  if (kind === 'patent') {
    return (
      <div className="project-visual visual-patent project-image project-visual-lumenci-cover">
        <Image
          src="/lumenci/lumenci-cover.png"
          alt="Lumenci Assistant interface for uploading claim charts and evidence, then choosing a refinement strategy"
          width={1284}
          height={1386}
          sizes="(max-width: 700px) calc(100vw - 36px), 58vw"
        />
      </div>
    );
  }

  return null;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`featured-project project-${project.number}`}>
      <header className="project-header">
        <div className="project-index"><span>{project.number}</span><span>{project.discipline}</span></div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </header>
      <ProjectVisual kind={project.visual} />
      <p className="project-description">{project.description}</p>
      <dl className="project-facts">
        {project.facts.map((fact) => <div key={`${fact.label}-${fact.value}`}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
      </dl>
      <div className="project-note"><span>{project.note}</span><Arrow /></div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Joshua Rego, home">Joshua Rego</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-identity">
          <p className="hero-name">Joshua Rego</p>
          <p className="hero-role">Product Manager · Designer · Builder</p>
        </div>
        <h1><span>I build things.</span><span>The medium keeps changing.</span></h1>
        <div className="hero-bottom">
          <p>From AI prototypes and gaming systems to digital products with paying customers — I work from problem discovery through product, design and go-to-market.</p>
        </div>
        <div className="focus-line" aria-label="Areas of focus">
          {focusAreas.map((area) => <span key={area}>{area}</span>)}
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading"><h2>Selected work</h2><span>Six projects / Various mediums</span></div>
        <div className="project-list">
          {projects.map((project) => ['01', '02', '03', '04', '05', '06'].includes(project.number) ? (
            <a
              className={`project-case-link project-case-link-${project.number}`}
              href={project.number === '01' ? '/work/quiet-grid' : project.number === '02' ? '/work/lila-art-liveops' : project.number === '03' ? '/work/lila-battlepass-ua' : project.number === '04' ? '/work/buildcheck-ai' : project.number === '05' ? '/work/prime-video' : '/work/lumenci-assistant'}
              aria-label={project.number === '01' ? 'Read the Quiet Grid Designs case study' : project.number === '02' ? 'Read From Production Pipeline to Player Retention' : project.number === '03' ? 'Read Steal the Principle, Not the Feature' : project.number === '04' ? 'Read the BuildCheck AI case study' : project.number === '05' ? 'Read the Amazon Prime Video Personalised Discovery case study' : 'Read the Lumenci Assistant case study'}
              key={`${project.title}-${project.number}`}
            >
              <ProjectCard project={project} />
            </a>
          ) : <ProjectCard project={project} key={`${project.title}-${project.number}`} />)}
        </div>
      </section>

      <section className="more-work shell" id="more-work" aria-labelledby="more-work-title">
        <div className="section-heading"><h2 id="more-work-title">More product work</h2><span>Selected studies & concepts</span></div>
        <div className="work-index">
          {moreWork.map(([title, description, type], index) => (
            title === 'FlowJar' || title === 'RagaAI Catalyst' || title === 'Monopoly GO' || title === 'FarmVille 3' || title === 'Product Space' || title === 'Autodesk Revit' || title === 'Spotify' || title === 'Domestika' ? (
              <a className="supporting-work-link" href={title === 'FlowJar' ? '/work/flowjar' : title === 'RagaAI Catalyst' ? '/work/ragaai-catalyst' : title === 'Monopoly GO' ? '/work/monopoly-go' : title === 'FarmVille 3' ? '/work/farmville-3' : title === 'Product Space' ? '/work/product-space' : title === 'Autodesk Revit' ? '/work/autodesk-revit' : title === 'Spotify' ? '/work/spotify' : '/work/domestika'} aria-label={`Read the ${title} supporting project`} key={title}>
                <span className="work-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{type}</span>
              </a>
            ) : (
              <article key={title}>
                <span className="work-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{type}</span>
              </article>
            )
          ))}
        </div>
      </section>

      <section className="experiments shell" id="experiments" aria-labelledby="experiments-title">
        <div className="section-heading"><h2 id="experiments-title">Ideas & experiments</h2><span>Original systems & concepts</span></div>
        <p className="experiments-intro">Not everything starts with a brief.<br />Sometimes I just want to see whether an idea can become a system.</p>
        <a className="experiment-feature" href="/work/scarcity" aria-label="Explore the ScarCITY original game concept">
          <div className="experiment-feature-copy">
            <span>01 / Original game concept</span>
            <h3>SCARCITY</h3>
            <strong>Rewrite the past. Decide who endures.</strong>
            <p>Historical survival strategy built around scarcity, moral trade-offs and branching consequences.</p>
            <small>Game systems &amp; concept design</small>
          </div>
          <div className="experiment-feature-visual">
            <Image src="/scarcity/gameplay-interface.jpg" alt="ScarCITY Krakatoa gameplay and interface concept" width={2000} height={1333} sizes="(max-width: 700px) calc(100vw - 36px), 52vw" />
          </div>
        </a>
      </section>

      <section className="about shell" id="about">
        <div className="about-label"><span>About</span></div>
        <div className="about-copy">
          <h2>I’ve always been a builder. Product just gave me a different kind of material to build with.</h2>
          <div className="about-body">
            <p>I started in architecture, drawn to the overlap of systems, constraints and design. Product gave me a tighter loop: understand a problem, build something, put it in front of people, learn, and make it better.</p>
            <p>Now I work comfortably across the messy middle—from framing the opportunity to shaping the experience and figuring out how it reaches people.</p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="shell footer-inner">
          <div className="footer-intro"><span>Contact</span><p>Have a good problem?<br />Let’s build around it.</p></div>
          <div className="footer-meta">
            <p>Product · Design · Early-stage building</p>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#top">Top ↑</a>
            </nav>
            <nav className="contact-actions" aria-label="Contact Joshua Rego">
              <a href="mailto:joshuarego.pm@gmail.com">Email ↗</a>
              <a href="https://www.linkedin.com/in/regojoshua/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href="https://drive.google.com/file/d/1sU-kVYPnh49NxBU6zJEx-BR7p11pPY-n/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Résumé ↗</a>
            </nav>
          </div>
          <p className="footer-name">Joshua Rego</p>
        </div>
      </footer>
    </main>
  );
}
