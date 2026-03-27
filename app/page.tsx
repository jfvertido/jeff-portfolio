export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">
            <span className="t-label">Design Engineer · Sacramento, CA</span>
          </div>
          <h1 className="t-display hero-headline">
            Design that holds<br />
            all the way to code.
          </h1>
          <p className="hero-sub">
            I work at the boundary between design systems and front-end engineering — taking products from mid-fidelity wireframes through stakeholder review and into production, without losing intent at the handoff.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">View Work</a>
            <a href="/about" className="btn btn-secondary">About & Resume</a>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section style={{borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '2rem 0', marginBottom: '0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem'}}>
            {[
              { value: '5+', label: 'Years bridging design & engineering' },
              { value: '10.5→8.3%', label: 'Order cancellation rate reduced' },
              { value: '100%', label: 'On-time delivery record' },
              { value: '4+', label: 'AI/UX certifications (IxDF + Designlab)' },
            ].map(s => (
              <div key={s.label}>
                <div style={{fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.25rem'}}>{s.value}</div>
                <div className="t-small" style={{color: 'var(--text-tertiary)'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="section" id="work">
        <div className="container">
          <div className="section-label">
            <span className="t-label">Selected Work</span>
          </div>

          <div className="work-grid">
            <WorkCard
              href="/case-study/order-cancellations"
              number="01"
              title="Reducing Order Cancellations"
              description="Diagnosed a cluster of checkout friction points and shipped contextual UI interventions that moved the cancellation rate from 10.5% to 8.3% — surpassing the executive-set target."
              tags={['UX Design', 'Front-End', 'eCommerce']}
              year="2024–25"
            />
            <WorkCard
              href="/case-study/design-system"
              number="02"
              title="Design System Foundation"
              description="Helped establish Eyeconic's first shared component library across Creative, Dev, and accessibility teams — eliminating version conflicts and creating a single source of truth where none existed."
              tags={['Design Systems', 'Component Architecture', 'Figma']}
              year="2024–25"
              featured
            />
            <WorkCard
              href="/case-study/eyewear-education"
              number="03"
              title="Clarifying the Eyewear Buying Experience"
              description="Led IA and front-end implementation for three educational content pages, reducing pre-purchase confusion for a high-consideration product category."
              tags={['Information Architecture', 'UX Writing', 'Front-End']}
              year="2025"
            />
          </div>
        </div>
      </section>

      {/* Live project */}
      <section className="section" style={{paddingTop: 0}}>
        <div className="container">
          <div className="section-label">
            <span className="t-label">Live Project</span>
          </div>

          <a href="https://design-token-visualizer.vercel.app" target="_blank" rel="noopener" className="work-card" style={{border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', display: 'grid', gridTemplateColumns: '1fr auto', padding: '2.5rem'}}>
            <div className="work-card-meta">
              <span className="t-label">Personal Project · Next.js · Deployed on Vercel</span>
              <h3 className="t-title" style={{fontSize: '1.25rem', fontWeight: 400}}>Design Token Visualizer</h3>
              <p className="t-body" style={{color: 'var(--text-secondary)', maxWidth: '540px', fontWeight: 300, marginTop: '0.5rem'}}>
                A live, interactive tool for exploring and visualizing design token systems. Built in Next.js with React and Tailwind — demonstrating the relationship between tokens, components, and themes.
              </p>
              <div className="work-card-tags" style={{marginTop: '1rem'}}>
                {['Next.js', 'React', 'Design Tokens', 'Tailwind'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <div className="work-card-arrow">↗</div>
          </a>
        </div>
      </section>

      {/* Positioning strip */}
      <section style={{background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '4rem 0'}}>
        <div className="container-narrow" style={{textAlign: 'center'}}>
          <p className="t-label" style={{marginBottom: '1.5rem'}}>How I work</p>
          <p style={{fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.6, color: 'var(--text-primary)'}}>
            "Most handoff problems aren't communication problems — they're ownership problems. I stay in the work from first wireframe to final QA, so the intent survives."
          </p>
        </div>
      </section>
    </div>
  )
}

function WorkCard({ href, number, title, description, tags, year, featured }: {
  href: string; number: string; title: string; description: string; tags: string[]; year: string; featured?: boolean;
}) {
  return (
    <a href={href} className="work-card" style={featured ? {background: 'var(--accent-muted)'} : {}}>
      <div className="work-card-meta">
        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
          <span className="t-label">{number}</span>
          {featured && <span className="tag" style={{background: 'var(--text-primary)', color: 'white', fontFamily: 'var(--font-mono)'}}>Featured</span>}
          <span className="t-label" style={{marginLeft: 'auto'}}>{year}</span>
        </div>
        <h3 className="t-title" style={{fontSize: '1.125rem', fontWeight: 400}}>{title}</h3>
        <p className="t-small" style={{color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.65, maxWidth: '560px'}}>{description}</p>
        <div className="work-card-tags">
          {tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
      <div className="work-card-arrow">→</div>
    </a>
  )
}
