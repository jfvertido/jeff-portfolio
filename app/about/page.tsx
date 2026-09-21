export const metadata = { title: 'About — Jeff Vertido' }

export default function About() {
  return (
    <div className="page-enter" style={{paddingTop: '80px'}}>
      <div className="container" style={{paddingTop: '3rem', paddingBottom: '5rem'}}>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-sep" aria-hidden="true">›</span>
          <span className="breadcrumb-current" aria-current="page">About</span>
        </nav>

        <div className="about-layout">
          {/* Left col */}
          <div>
            <p className="t-label" style={{marginBottom: '1rem'}}>About</p>
            <h1 className="t-headline" style={{marginBottom: '1.5rem'}}>
              I bridge design and engineering —<br/>so intent survives the handoff.
            </h1>
            <p className="t-body" style={{color: 'var(--text-secondary)', marginBottom: '1rem'}}>
              I'm a UX/UI Designer and Front-End Developer with 10+ years of web experience, the last seven at VSP Vision on the Eyeconic eCommerce platform. My work sits at the intersection of design systems, component architecture, and accessibility-compliant front-end implementation.
            </p>
            <p className="t-body" style={{color: 'var(--text-secondary)', marginBottom: '1rem'}}>
              I design in Figma and build in code — taking projects from mid-fidelity wireframes through stakeholder review and into production without losing intent at the handoff. That hybrid ownership is where I do my best work.
            </p>
            <p className="t-body" style={{color: 'var(--text-secondary)', marginBottom: '2.5rem'}}>
              I'm deepening my work in design systems and AI-assisted design and engineering. I've completed 14 certifications and courses across IxDF, Anthropic, Designlab, and Udemy — including Anthropic's Claude Code in Action — and my team won 1st place at our internal hackathon (Sep 2026) with lumen-vision, a Claude-based benefits-guide assistant.
            </p>

            <div style={{display: 'flex', gap: '1rem'}}>
              <a href="mailto:jvertido@live.com" className="btn btn-primary">Get in touch</a>
              <a href="https://www.interaction-design.org/members/jeff-vertido" target="_blank" rel="noopener" className="btn btn-secondary">IxDF Profile <span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span></a>
            </div>

            {/* Skills grid */}
            <div style={{marginTop: '4rem'}}>
              <h2 className="t-label" style={{marginBottom: '1.5rem'}}>Core Competencies</h2>
              <div className="about-grid">
                {[
                  { label: 'Design & UX', items: ['UX Design & Research', 'UI & Visual Design', 'Information Architecture', 'Wireframing & Prototyping', 'Design Systems', 'Atomic Design Principles', 'Design Tokens', 'UX Writing', 'A/B Testing'] },
                  { label: 'Engineering', items: ['HTML5 / CSS3', 'JavaScript', 'Responsive Web Development', 'WCAG 2.1 AA Accessibility', 'Salesforce Commerce Cloud', 'Component Architecture', 'Cross-browser Compatibility', 'QA & UAT'] },
                  { label: 'AI & Automation', items: ['Claude & Claude Code', 'Claude Skills', 'Prompt Engineering', 'LLM Application Architecture', 'AI Output Verification', 'AI-assisted Workflows'] },
                  { label: 'Tools', items: ['Figma (Design Systems, Prototyping)', 'Visual Studio Code', 'Git & GitHub', 'Vercel', 'Adobe Creative Suite', 'Next.js (learning)', 'React (learning)', 'jQuery'] },
                  { label: 'Process', items: ['Cross-functional Collaboration', 'Stakeholder Presentation & Management', 'Design-to-dev Handoff', 'Accessibility Auditing', 'Component Documentation', 'Mentoring & Design Critique'] },
                ].map(g => (
                  <div key={g.label} className="about-cell">
                    <h3 className="about-cell-label">{g.label}</h3>
                    <ul className="skills-list" role="list">
                      {g.items.map(i => <li key={i}>{i}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div style={{marginTop: '4rem'}}>
              <h2 className="t-label" style={{marginBottom: '1.5rem'}}>Experience</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
                {[
                  {
                    role: 'eCommerce Digital Specialist',
                    company: 'VSP Vision (Eyeconic)',
                    period: 'July 2019 – Present',
                    bullets: [
                      'Design and build front-end experiences from wireframe to production on Salesforce Commerce Cloud, presenting to Merchandising, Marketing, and Creative, then running QA and UAT across viewports and WCAG 2.1 AA',
                      "Designed and built the changes behind our team's order-cancellation initiative — moving shipping, delivery, and Rx compatibility info earlier in the flow — cutting cancellations from 10.5% to 8.3% against a target of under 10%",
                      'Helped replace a basic style guide with a full design system: audited templates, rebuilt 4–5 landing pages in Figma, documented four core components, and rolled it out to three teams in March 2025',
                      'Built the design token architecture and maintain the design system documentation',
                      'Audited two buying-guide pages, identified a missing third, and led structure and IA for all three with a copywriter; launched September 2025',
                      'Contribute to the yearly Reduce Bounce Rate directive — running A/B tests on site content and curating customer feedback to surface pain points',
                      'Built internal tools for graphic designers to place artwork into my layouts, doubling as design proofs for Marketing and Merchandising approval',
                      'Prototype same-day so teams can validate ideas quickly',
                      'Mentor teammates, join design critiques, weigh in on maintainability and launch timing, and flag assets that miss WCAG requirements',
                      'Team won 1st place / grand prize at our internal hackathon (Sep 2026) with lumen-vision, a Claude-based benefits-guide assistant — I handled design, prompt architecture, and engineering',
                    ]
                  },
                  {
                    role: 'Senior Digital Visual Designer',
                    company: 'Lumens',
                    period: 'December 2015 – July 2019',
                    bullets: [
                      'Built a reusable component library and style guide with the team',
                      'Created prototypes that became production features',
                      'Shipped HTML, CSS, and JavaScript for layouts, campaigns, and marketing pages',
                      'Collaborated with UX researchers on data-informed iterations',
                    ]
                  },
                  {
                    role: 'Senior Web Developer',
                    company: 'Prestwood IT Solutions',
                    period: 'June 2015 – December 2015',
                    bullets: [
                      'Front-end and WordPress development with responsive web design',
                    ]
                  },
                  {
                    role: 'Web Support Specialist',
                    company: 'I-Tul Design & Software, Inc.',
                    period: 'July 2013 – January 2015',
                    bullets: [
                      'Web support and WordPress development, plus online customer support',
                    ]
                  },
                ].map(exp => (
                  <div key={exp.company} style={{padding: '1.75rem 0', borderBottom: '1px solid var(--border)'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', gap: '1rem', flexWrap: 'wrap'}}>
                      <h3 style={{fontWeight: 500, fontSize: '0.9375rem'}}>{exp.role}</h3>
                      <span className="t-small" style={{color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', flexShrink: 0}}>{exp.period}</span>
                    </div>
                    <div className="t-small" style={{color: 'var(--text-secondary)', marginBottom: '0.75rem'}}>{exp.company}</div>
                    <ul role="list" style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem'}}>
                      {exp.bullets.map(b => (
                        <li key={b} style={{display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 300}}>
                          <span aria-hidden="true" style={{color: 'var(--text-tertiary)', flexShrink: 0}}>—</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right col */}
          <div>
            {/* Contact */}
            <div className="sidebar-card" style={{marginBottom: '1.5rem'}}>
              <h2 className="t-label">Contact</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <a href="mailto:jvertido@live.com" className="contact-link" style={{fontSize: '0.9rem', color: 'var(--text-primary)'}}>jvertido@live.com</a>
                <span style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Sacramento, CA</span>
              </div>
              <div className="sidebar-divider" />
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.625rem'}}>
                <a href="https://design-token-visualizer.vercel.app" target="_blank" rel="noopener" className="btn btn-secondary" style={{justifyContent: 'center', fontSize: '0.8rem'}}>Token Visualizer <span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span></a>
                <a href="https://www.interaction-design.org/members/jeff-vertido" target="_blank" rel="noopener" className="btn btn-secondary" style={{justifyContent: 'center', fontSize: '0.8rem'}}>IxDF Profile <span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span></a>
              </div>
            </div>

            {/* Certifications */}
            <div className="sidebar-card">
              <h2 className="t-label" style={{marginBottom: '0.875rem'}}>Certifications & Training</h2>

              {[
                { org: 'Anthropic', items: [
                  ['Claude Academy: Claude Code in Action', 'Sep 2026'],
                  ['AI Fluency Framework & Foundations', 'Apr 2026'],
                ]},
                { org: 'Interaction Design Foundation', items: [
                  ['Bring AI Into Your Design System: Hands-On Demo', 'Mar 2026'],
                  ['Object-Oriented UI Design', 'Mar 2026'],
                  ['AI for Designers', 'Jul 2025'],
                  ['AI-Powered UX Design', 'Nov 2024'],
                  ['Design Tokens: Powering Your Design System', 'Jun 2024'],
                  ['Design Patterns for AI UX', 'Apr 2024'],
                  ['Human-Centered Design for AI', 'Dec 2023'],
                  ['Design KPIs: From Insights to Impact', 'Oct 2023'],
                  ['Become a UX Designer from Scratch', 'Jul 2022'],
                ]},
                { org: 'Designlab', items: [
                  ['AI for UX Design', 'Jul 2025 · ID: ECB856'],
                ]},
                { org: 'Udemy', items: [
                  ['Git with Visual Studio Code', 'Jun 2026'],
                  ['Complete Obsidian: Build Your Second Brain', 'Jun 2026'],
                ]},
              ].map(g => (
                <div key={g.org} style={{marginBottom: '1rem'}}>
                  <h3 className="cert-org" style={{marginBottom: '0.5rem', fontWeight: 400}}>{g.org}</h3>
                  {g.items.map(([name, meta]) => (
                    <div key={name} className="cert-item">
                      <span className="cert-name">{name}</span>
                      <span className="cert-org">{meta}</span>
                    </div>
                  ))}
                </div>
              ))}

              <div className="sidebar-divider" />

              <div style={{marginTop: '1rem'}}>
                <h3 className="cert-org" style={{marginBottom: '0.5rem', fontWeight: 400}}>Education</h3>
                <div className="cert-item">
                  <span className="cert-name">Multimedia Arts + Web Design</span>
                  <span className="cert-org">Sessions College for Professional Design · 2013</span>
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
