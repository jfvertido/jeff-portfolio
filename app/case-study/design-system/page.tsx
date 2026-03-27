export const metadata = { title: 'Design System Foundation — Jeff Vertido' }

export default function CaseStudy2() {
  return (
    <div className="page-enter" style={{paddingTop: '80px'}}>
      <div className="container" style={{paddingTop: '3rem', paddingBottom: '5rem'}}>

        <div className="breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-sep">›</span>
          <a href="/#work">Work</a>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">Design System Foundation</span>
        </div>

        {/* Header */}
        <div style={{marginBottom: '3rem'}}>
          <div style={{display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap'}}>
            {['Design Systems', 'Component Architecture', 'eCommerce', '2024–2025'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
            <span className="tag" style={{background: 'var(--text-primary)', color: 'white'}}>Featured</span>
          </div>
          <h1 className="t-headline" style={{marginBottom: '1rem'}}>Building a Design System Foundation at Eyeconic</h1>
          <p style={{fontSize: '1.0625rem', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '620px', lineHeight: 1.75}}>
            Helping establish Eyeconic's first shared component library across Creative, Development, and accessibility teams — eliminating version conflicts and creating a single source of truth where none existed.
          </p>
        </div>

        <div className="case-study-layout">
          {/* Main content */}
          <div className="prose">
            <h2>Overview</h2>
            <p>
              Eyeconic's Site Optimization team operated without a shared design language. Designers worked in one tool, developers built in another, and the gap between them showed up in every project — mismatched components, duplicated work, and no reliable reference point for either side.
            </p>
            <p>
              Addressing that gap became a team priority. I contributed heavily to the design and front-end implementation side — rebuilding templates in Figma, creating coded component counterparts in Salesforce Commerce Cloud, and helping shape the Design System documentation shared across Creative, Development, and accessibility teams.
            </p>

            <div className="pullquote">
              "The best systems work is invisible in the end product — you see it in everything that stops going wrong."
            </div>

            <h2>The Problem</h2>
            <p>Without a shared source of truth, the team experienced compounding inefficiencies across every project cycle:</p>
            <ul>
              <li>Frontend output frequently mismatched design specs, requiring rework on both sides</li>
              <li>Multiple versions of the same component existed simultaneously — in some cases three or more conflicting variants</li>
              <li>Landing page templates lived outside Figma, making them invisible to designers and inaccessible for systematic updates</li>
              <li>Each new campaign effectively started from scratch, with no reusable foundation to build from</li>
            </ul>
            <p>
              The cost wasn't just time — it was consistency. Every mismatch eroded trust between Creative and Development, and every duplicated component made the divergence harder to resolve.
            </p>

            <h2>My Role</h2>
            <p>This was a team initiative with shared ownership. My contributions were concentrated in design architecture and front-end implementation.</p>
            <ul>
              <li>Audited existing templates and components to identify redundancy and inconsistency</li>
              <li>Rebuilt 4–5 core landing page templates in Figma using the team's new component architecture</li>
              <li>Created coded HTML/CSS component counterparts within Salesforce Commerce Cloud</li>
              <li>Contributed documentation for 4 core components — modal, pagination, icons, and tooltip</li>
              <li>Updated 2-slot and single-slot card/tile layout specifications</li>
              <li>Participated in distributing the completed system to Creative, Development, and accessibility teams in March 2025</li>
            </ul>

            <h2>Design Approach</h2>
            <p>The team's strategy was consolidation before expansion — establish a reliable foundation rather than adding new components on top of an inconsistent base.</p>

            <h3>Component-first rebuilds</h3>
            <p>
              Existing templates were rebuilt from components up, not patched in place. This meant Figma templates and their coded counterparts were structurally aligned from the start — reducing the translation gap that had caused downstream mismatches.
            </p>

            <h3>Figma as the single source of truth</h3>
            <p>
              Moving templates into Figma gave designers visibility they didn't previously have, and gave developers a stable reference to build against. The goal wasn't to constrain Creative — it was to give everyone the same starting point.
            </p>

            <h3>Documentation as a handoff tool</h3>
            <p>
              The Design System documentation was written to serve three distinct audiences: designers, frontend developers, and accessibility reviewers. That required clear component specs, usage guidance, and accessibility annotations — not just visual references.
            </p>

            <h2>Process</h2>
            <ul>
              <li>Audited the existing template and component landscape as a team</li>
              <li>Identified redundant and conflicting component variants</li>
              <li>Established component architecture and naming conventions collaboratively</li>
              <li>Rebuilt core landing page templates using the new component structure</li>
              <li>Built coded HTML/CSS counterparts in Salesforce Commerce Cloud</li>
              <li>Contributed component documentation to the shared Design System</li>
              <li>Presented and distributed the system to Creative, Dev, and accessibility teams</li>
              <li>Worked through stakeholder concerns from Creative — focusing on transparency: to create consistency, not reduce creative agency</li>
              <li>Continued iterating on the system monthly alongside active campaign work</li>
            </ul>

            <h2>Outcome</h2>
            <p>
              The Design System was completed and distributed in March 2025, with the team continuing to iterate monthly. It established a shared reference across Creative, Development, and accessibility teams — where none had existed before.
            </p>
            <p>
              The impact compounded over the year. Campaigns including Follow Your Heart, Top Nav Optimization, and multiple seasonal refreshes were executed against a more consistent component foundation. The broader effort was cited by our manager as one of the team's top UX/UI accomplishments of 2025.
            </p>
            <div className="outcome-highlight">
              <div className="metric">March 2025</div>
              <div className="metric-label">System distributed across Creative, Dev, and accessibility teams — cited as a top UX/UI accomplishment of 2025</div>
            </div>

            <h2>Reflections</h2>
            <p>
              The most challenging aspect wasn't technical — it was organizational. Introducing a design system into a team where designers had previously operated with full autonomy required careful framing. The goal was never to reduce creative agency; it was to ensure that creative decisions could actually be built as intended.
            </p>
            <p>
              If I were to revisit this work, I'd advocate for formalizing a contribution process earlier — a clear path for Creative to propose new components or variations, rather than having the system feel like a closed document. Shared ownership would have accelerated adoption.
            </p>
            <p>
              Alongside this project, I completed two AI-focused certifications through IxDF and Designlab — covering design tokens, AI-powered UX workflows, and design patterns for AI products. That coursework directly informed how I think about systematic design and scalable component logic.
            </p>

            {/* Case navigation */}
            <div className="case-nav">
              <a href="/case-study/order-cancellations" className="case-nav-item">
                <div className="case-nav-item-dir">← Previous</div>
                <div className="case-nav-item-title">Order Cancellations</div>
              </a>
              <a href="/case-study/eyewear-education" className="case-nav-item next">
                <div className="case-nav-item-dir">Next →</div>
                <div className="case-nav-item-title">Eyewear Education Pages</div>
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="case-study-sidebar">
            <div className="sidebar-card">
              <div>
                <p className="t-label" style={{marginBottom: '0.75rem'}}>Scale</p>
                <div className="sidebar-stat">
                  <div className="sidebar-stat-value">4–5</div>
                  <div className="sidebar-stat-label">Core landing page templates rebuilt</div>
                </div>
              </div>
              <div className="sidebar-divider" />
              <div>
                <div className="sidebar-stat">
                  <div className="sidebar-stat-value">4</div>
                  <div className="sidebar-stat-label">Components documented (modal, pagination, icons, tooltip)</div>
                </div>
              </div>
              <div className="sidebar-divider" />
              <div>
                <div className="sidebar-stat">
                  <div className="sidebar-stat-value">3</div>
                  <div className="sidebar-stat-label">Teams aligned: Creative, Dev, Accessibility</div>
                </div>
              </div>
              <div className="sidebar-divider" />
              <div>
                <p className="t-label" style={{marginBottom: '0.75rem'}}>My Role</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.375rem'}}>
                  {['Component Audit', 'Figma Template Rebuilds', 'HTML/CSS Components', 'System Documentation', 'Cross-team Distribution'].map(r => (
                    <span key={r} className="t-small" style={{color: 'var(--text-secondary)'}}>{r}</span>
                  ))}
                </div>
              </div>
              <div className="sidebar-divider" />
              <div>
                <p className="t-label" style={{marginBottom: '0.75rem'}}>Tools</p>
                <div style={{display: 'flex', gap: '0.375rem', flexWrap: 'wrap'}}>
                  {['Figma', 'HTML/CSS', 'SFCC', 'Atomic Design', 'Design Tokens'].map(t => (
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
