export const metadata = { title: 'About — Jeff Vertido' }

export default function About() {
  return (
    <div className="page-enter" style={{paddingTop: '80px'}}>
      <div className="container" style={{paddingTop: '3rem', paddingBottom: '5rem'}}>

        <div className="breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">About</span>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 340px', gap: '5rem', alignItems: 'start'}}>
          {/* Left col */}
          <div>
            <p className="t-label" style={{marginBottom: '1rem'}}>About</p>
            <h1 className="t-headline" style={{marginBottom: '1.5rem'}}>
              I bridge design and engineering —<br/>so intent survives the handoff.
            </h1>
            <p className="t-body" style={{color: 'var(--text-secondary)', marginBottom: '1rem'}}>
              I'm a UX/UI Designer and Front-End Developer with 5+ years working in eCommerce, currently at VSP Global's Eyeconic platform. My work sits at the intersection of design systems, component architecture, and accessibility-compliant front-end implementation.
            </p>
            <p className="t-body" style={{color: 'var(--text-secondary)', marginBottom: '1rem'}}>
              I design in Figma and build in code — taking projects from mid-fidelity wireframes through stakeholder review and into production without losing intent at the handoff. That hybrid ownership is where I do my best work.
            </p>
            <p className="t-body" style={{color: 'var(--text-secondary)', marginBottom: '2.5rem'}}>
              I'm actively learning React and deepening my work in design systems and AI-informed UX. I've completed four IxDF masterclasses and a Designlab AI certification — applying those frameworks directly to production work at Eyeconic.
            </p>

            <div style={{display: 'flex', gap: '1rem'}}>
              <a href="mailto:jvertido@live.com" className="btn btn-primary">Get in touch</a>
              <a href="https://www.interaction-design.org/members/jeff-vertido" target="_blank" rel="noopener" className="btn btn-secondary">IxDF Profile ↗</a>
            </div>

            {/* Skills grid */}
            <div style={{marginTop: '4rem'}}>
              <p className="t-label" style={{marginBottom: '1.5rem'}}>Core Competencies</p>
              <div className="about-grid">
                <div className="about-cell">
                  <div className="about-cell-label">Design & UX</div>
                  <ul className="skills-list">
                    {['UX Design & Research', 'UI Design', 'Information Architecture', 'Wireframing & Prototyping', 'Design Systems', 'Atomic Design Principles', 'Design Tokens', 'UX Writing'].map(s => <li key={s}>{s}</li>)}
                  </ul>
                </div>
                <div className="about-cell">
                  <div className="about-cell-label">Engineering</div>
                  <ul className="skills-list">
                    {['HTML5 / CSS3', 'JavaScript', 'Responsive Web Development', 'WCAG 2.1 AA / 508 Compliance', 'Salesforce Commerce Cloud', 'Component Architecture', 'Cross-browser Compatibility', 'QA & User Testing'].map(s => <li key={s}>{s}</li>)}
                  </ul>
                </div>
                <div className="about-cell">
                  <div className="about-cell-label">Tools</div>
                  <ul className="skills-list">
                    {['Figma (Design Systems, Prototyping)', 'Visual Studio Code', 'Adobe Creative Cloud', 'Next.js (learning)', 'React (learning)', 'jQuery / AJAX', 'Version Control Systems'].map(s => <li key={s}>{s}</li>)}
                  </ul>
                </div>
                <div className="about-cell">
                  <div className="about-cell-label">Process</div>
                  <ul className="skills-list">
                    {['Cross-functional collaboration', 'Stakeholder presentation', 'Design-to-dev handoff', 'Accessibility auditing', 'Component documentation', 'AI-informed UX workflows'].map(s => <li key={s}>{s}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div style={{marginTop: '4rem'}}>
              <p className="t-label" style={{marginBottom: '1.5rem'}}>Experience</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
                {[
                  {
                    role: 'eCommerce Digital Marketing Specialist',
                    company: 'Eyeconic / VSP Global',
                    period: 'July 2019 – Present',
                    bullets: [
                      'Lead UX design and front-end development for a major eyewear eCommerce platform',
                      'Contributed to design system initiative establishing shared component library across Creative, Dev, and accessibility teams',
                      'Designed and implemented front-end changes reducing order cancellations from 10.5% to 8.3%',
                      'Led IA and implementation for three educational content pages',
                      'Maintain 100% on-time delivery record across all campaign launches',
                    ]
                  },
                  {
                    role: 'Digital Visual Designer',
                    company: 'YDesign / Lumens',
                    period: 'December 2015 – July 2019',
                    bullets: [
                      'Designed and coded responsive layouts and email campaigns for lumens.com',
                      'Created high-converting affiliate banner artwork for multi-channel marketing',
                      'Developed wireframes, interactive mockups, and functional prototypes',
                    ]
                  },
                  {
                    role: 'Web Designer / Developer / Consultant',
                    company: 'Prestwood IT Solutions',
                    period: 'June 2015 – December 2015',
                    bullets: [
                      'Provided creative direction and technical implementation for diverse client portfolio',
                      'Managed full-stack website development lifecycle from concept to production',
                    ]
                  },
                ].map(exp => (
                  <div key={exp.company} style={{padding: '1.75rem 0', borderBottom: '1px solid var(--border)'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', gap: '1rem', flexWrap: 'wrap'}}>
                      <span style={{fontWeight: 500, fontSize: '0.9375rem'}}>{exp.role}</span>
                      <span className="t-small" style={{color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', flexShrink: 0}}>{exp.period}</span>
                    </div>
                    <div className="t-small" style={{color: 'var(--text-secondary)', marginBottom: '0.75rem'}}>{exp.company}</div>
                    <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem'}}>
                      {exp.bullets.map(b => (
                        <li key={b} style={{display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 300}}>
                          <span style={{color: 'var(--text-tertiary)', flexShrink: 0}}>—</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right col */}
          <div style={{position: 'sticky', top: '80px'}}>
            {/* Contact */}
            <div className="sidebar-card" style={{marginBottom: '1.5rem'}}>
              <p className="t-label">Contact</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <a href="mailto:jvertido@live.com" style={{fontSize: '0.9rem', color: 'var(--text-primary)'}}>jvertido@live.com</a>
                <span style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Sacramento, CA</span>
              </div>
              <div className="sidebar-divider" />
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.625rem'}}>
                <a href="https://design-token-visualizer.vercel.app" target="_blank" rel="noopener" className="btn btn-secondary" style={{justifyContent: 'center', fontSize: '0.8rem'}}>Token Visualizer ↗</a>
                <a href="https://www.interaction-design.org/members/jeff-vertido" target="_blank" rel="noopener" className="btn btn-secondary" style={{justifyContent: 'center', fontSize: '0.8rem'}}>IxDF Profile ↗</a>
              </div>
            </div>

            {/* Certifications */}
            <div className="sidebar-card">
              <p className="t-label" style={{marginBottom: '0.875rem'}}>AI & UX Certifications</p>

              <div style={{marginBottom: '1rem'}}>
                <div className="cert-org" style={{marginBottom: '0.5rem'}}>Interaction Design Foundation</div>
                {[
                  'AI-Powered UX Design',
                  'Human-Centered Design for AI',
                  'Design Patterns for AI UX',
                  'Design Tokens',
                  'Become a UX Designer from Scratch',
                ].map(c => (
                  <div key={c} className="cert-item">
                    <span className="cert-name">{c}</span>
                    <span className="cert-org">Certified</span>
                  </div>
                ))}
              </div>

              <div className="sidebar-divider" />

              <div style={{marginTop: '1rem'}}>
                <div className="cert-org" style={{marginBottom: '0.5rem'}}>Designlab</div>
                <div className="cert-item">
                  <span className="cert-name">AI for UX Design</span>
                  <span className="cert-org">Certified · July 2025 · ID: ECB856</span>
                </div>
              </div>

              <div className="sidebar-divider" />

              <div style={{marginTop: '1rem'}}>
                <div className="cert-org" style={{marginBottom: '0.5rem'}}>Education</div>
                <div className="cert-item">
                  <span className="cert-name">Multimedia Arts + Web Design</span>
                  <span className="cert-org">Sessions College for Professional Design</span>
                </div>
                <div className="cert-item">
                  <span className="cert-name">A.S. Computer Science</span>
                  <span className="cert-org">Antelope Valley College</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
