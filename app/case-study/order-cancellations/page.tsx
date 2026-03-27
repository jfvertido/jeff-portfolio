export const metadata = { title: 'Reducing Order Cancellations — Jeff Vertido' }

export default function CaseStudy1() {
  return (
    <div className="page-enter" style={{paddingTop: '80px'}}>
      <div className="container" style={{paddingTop: '3rem', paddingBottom: '5rem'}}>

        <div className="breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-sep">›</span>
          <a href="/#work">Work</a>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">Order Cancellations</span>
        </div>

        {/* Header */}
        <div style={{marginBottom: '3rem'}}>
          <div style={{display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap'}}>
            {['UX Design', 'Front-End Implementation', 'eCommerce', '2024–2025'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <h1 className="t-headline" style={{marginBottom: '1rem'}}>Reducing Order Cancellations at Eyeconic</h1>
          <p style={{fontSize: '1.0625rem', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '620px', lineHeight: 1.75}}>
            Diagnosing a cluster of checkout friction points and shipping targeted UI interventions that moved the cancellation rate from 10.5% to 8.3% — surpassing the executive-set target of below 10%.
          </p>
        </div>

        <div className="case-study-layout">
          {/* Main content */}
          <div className="prose">
            <h2>Overview</h2>
            <p>
              Eyeconic, VSP Global's direct-to-consumer eyewear platform, identified order cancellations as a top business priority. Leadership directed the Site Optimization team to diagnose the problem and reduce churn — a high-visibility initiative with measurable revenue implications.
            </p>
            <p>
              I was brought in across both design and front-end development, taking work from mid-fidelity wireframes through stakeholder approval and into production implementation.
            </p>

            <div className="pullquote">
              "Eyewear is a high-consideration purchase — customers needed more confidence at key decision points, not fewer answers."
            </div>

            <h2>The Problem</h2>
            <p>Customers were abandoning completed orders for a cluster of interconnected reasons:</p>
            <ul>
              <li>Unclear or hard-to-find cancellation and return policy information</li>
              <li>Friction and confusion during checkout and payment</li>
              <li>Surprise at shipping costs or delivery timelines surfaced too late</li>
              <li>Insufficient clarity around prescription lens options and compatibility</li>
            </ul>
            <p>
              The common thread: customers were reaching decision points without the information they needed to feel confident. Rather than seeking help, many simply cancelled.
            </p>

            <h2>My Role</h2>
            <p>This project sat at the intersection of communication design and front-end engineering — a natural fit for my hybrid skill set.</p>
            <ul>
              <li>Designed mid-fidelity wireframes in Figma to map proposed UI changes</li>
              <li>Presented designs through formal stakeholder review for approval prior to build</li>
              <li>Implemented approved designs in HTML, CSS, and JavaScript within Salesforce Commerce Cloud</li>
              <li>Ensured all implementation met WCAG 2.1 AA accessibility standards</li>
            </ul>

            <h2>Design Approach</h2>
            <p>
              Rather than redesigning entire flows, the strategy was to surface critical information earlier and more contextually — before customers reached a point of uncertainty.
            </p>

            <h3>Modals and inline alerts</h3>
            <p>
              Contextual modals and inline messaging were introduced at key friction points — particularly around shipping cost and delivery time — to surface expectations before checkout rather than after. The goal was to eliminate surprise as a cancellation driver.
            </p>

            <h3>Product detail page improvements</h3>
            <p>
              The prescription lens selection experience was refined to reduce ambiguity for customers unsure about compatibility or configuration. Clearer microcopy, better visual hierarchy, and contextual tooltips were added to guide decision-making.
            </p>
            <p>
              Mid-fidelity wireframes kept the review process focused on information architecture and interaction decisions rather than visual polish — which accelerated stakeholder approval cycles.
            </p>

            <h2>Process</h2>
            <ul>
              <li>Reviewed customer cancellation data and identified the key problem clusters</li>
              <li>Mapped intervention opportunities across the purchase funnel</li>
              <li>Designed mid-fidelity wireframes in Figma for each proposed change</li>
              <li>Presented designs to Merchandising, Marketing, and Creative stakeholders for formal review</li>
              <li>Iterated on feedback and received sign-off before moving to implementation</li>
              <li>Built and deployed all changes within Salesforce Commerce Cloud</li>
              <li>Conducted QA and UAT across device viewports and accessibility standards</li>
            </ul>

            <h2>Outcome</h2>
            <div className="outcome-highlight">
              <div className="metric">10.5% → 8.3%</div>
              <div className="metric-label">Order cancellation rate — surpassing the target of below 10%</div>
            </div>
            <p>
              This placed the initiative among the team's top contributors to Eyeconic's 2025 performance goals, which saw revenue, gross margin, and EBITDA all exceed plan.
            </p>
            <p>
              Beyond the numbers, the project demonstrated the value of a designer who can own both the design rationale and the production implementation — compressing the handoff gap and maintaining intent from wireframe to live experience.
            </p>

            <h2>Reflections</h2>
            <p>
              One of the most valuable aspects of this project was working across the full design-to-implementation arc. Having designed the wireframes myself, I could make informed front-end decisions that preserved the UX intent — without relying on another developer to interpret my specs.
            </p>
            <p>
              If I were to revisit this work, I'd advocate for post-launch qualitative research — exit surveys or session recordings — to understand whether the changes addressed root causes or surfaced new friction points. The quantitative metric tells us what changed; the qualitative would tell us why.
            </p>

            {/* Case navigation */}
            <div className="case-nav">
              <a href="/#work" className="case-nav-item">
                <div className="case-nav-item-dir">← Back</div>
                <div className="case-nav-item-title">All Work</div>
              </a>
              <a href="/case-study/design-system" className="case-nav-item next">
                <div className="case-nav-item-dir">Next →</div>
                <div className="case-nav-item-title">Design System Foundation</div>
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="case-study-sidebar">
            <div className="sidebar-card">
              <div>
                <p className="t-label" style={{marginBottom: '0.75rem'}}>Outcome</p>
                <div className="sidebar-stat">
                  <div className="sidebar-stat-value">−2.2%</div>
                  <div className="sidebar-stat-label">Cancellation rate reduction</div>
                </div>
              </div>
              <div className="sidebar-divider" />
              <div>
                <div className="sidebar-stat">
                  <div className="sidebar-stat-value">Exceeded</div>
                  <div className="sidebar-stat-label">Business target of &lt;10%</div>
                </div>
              </div>
              <div className="sidebar-divider" />
              <div>
                <p className="t-label" style={{marginBottom: '0.75rem'}}>My Role</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.375rem'}}>
                  {['UX Design', 'Wireframing', 'Stakeholder Presentation', 'Front-End Implementation', 'QA & Accessibility'].map(r => (
                    <span key={r} className="t-small" style={{color: 'var(--text-secondary)'}}>{r}</span>
                  ))}
                </div>
              </div>
              <div className="sidebar-divider" />
              <div>
                <p className="t-label" style={{marginBottom: '0.75rem'}}>Tools</p>
                <div style={{display: 'flex', gap: '0.375rem', flexWrap: 'wrap'}}>
                  {['Figma', 'HTML/CSS', 'JavaScript', 'SFCC', 'WCAG 2.1 AA'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
