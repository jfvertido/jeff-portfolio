export const metadata = { title: 'Eyewear Education Pages — Jeff Vertido' }

export default function CaseStudy3() {
  return (
    <div className="page-enter" style={{paddingTop: '80px'}}>
      <div className="container" style={{paddingTop: '3rem', paddingBottom: '5rem'}}>

        <div className="breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-sep">›</span>
          <a href="/#work">Work</a>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">Eyewear Education Pages</span>
        </div>

        {/* Header */}
        <div style={{marginBottom: '3rem'}}>
          <div style={{display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap'}}>
            {['Content Strategy', 'UX Writing', 'Information Architecture', 'Front-End', '2025'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <h1 className="t-headline" style={{marginBottom: '1rem'}}>Clarifying the Eyewear Buying Experience</h1>
          <p style={{fontSize: '1.0625rem', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '620px', lineHeight: 1.75}}>
            Leading IA and front-end implementation for three educational content pages — reducing pre-purchase confusion for a high-consideration product category where clarity directly influences purchase confidence.
          </p>
        </div>

        <div className="case-study-layout">
          {/* Main content */}
          <div className="prose">
            <h2>Overview</h2>
            <p>
              Eyeconic carries a broad range of eyewear — prescription glasses, sunglasses, and specialty lenses — but the site's educational content hadn't kept pace with the product catalog. Two key pages were outdated, and a third didn't exist at all, leaving customers without reliable guidance at a critical moment in their decision-making process.
            </p>
            <p>
              I led the UX structure, information architecture, and front-end implementation for each page, working closely with a copywriter to shape content that was both accurate and accessible to a general audience.
            </p>

            <div className="pullquote">
              "Good educational content doesn't just answer questions — it asks them in the right order."
            </div>

            <h2>The Problem</h2>
            <p>
              Eyewear is a considered purchase. Customers often arrive with questions they don't know how to articulate — they're not sure what lens coatings mean, whether their prescription is compatible with certain frames, or what distinguishes polarized from photochromic lenses. Without clear guidance, those questions become hesitation, and hesitation becomes abandonment.
            </p>
            <p>Three specific gaps existed on the site:</p>
            <ul>
              <li><strong>How to Buy Glasses</strong> — the existing page was outdated and no longer reflected the current purchase flow or product options</li>
              <li><strong>Choosing Rx Lenses</strong> — content was stale and failing to address the most common points of confusion around prescription lens compatibility</li>
              <li><strong>Sunglass Lenses</strong> — no dedicated page existed, leaving a content gap for one of Eyeconic's key product categories</li>
            </ul>

            <h2>My Role</h2>
            <p>This was a collaborative project between UX and content. My responsibilities covered structure, layout, and implementation — the copywriter owned the voice and messaging.</p>
            <ul>
              <li>Audited existing pages to identify structural and content gaps</li>
              <li>Defined the information architecture for all three pages — section sequencing, content hierarchy, and user flow</li>
              <li>Worked with the copywriter to align structure with content goals and ensure the layout supported scannability and comprehension</li>
              <li>Built all three pages in HTML, CSS, and JavaScript within Salesforce Commerce Cloud</li>
              <li>Ensured implementation met WCAG 2.1 AA accessibility standards across all viewports</li>
            </ul>

            <h2>Design Approach</h2>
            <p>
              Education pages for a general audience require a different structural logic than product or campaign pages. The goal isn't conversion — it's confidence. A customer who leaves one of these pages feeling informed is more likely to complete a purchase, return with fewer support questions, and trust the brand.
            </p>

            <h3>Information architecture as the primary design decision</h3>
            <p>
              The most consequential design work on these pages wasn't visual — it was structural. Sequencing content so that foundational concepts come before technical details, and so that each section answers the question the previous one raises, required close attention to how a non-expert customer moves through the material.
            </p>

            <h3>Scannability over density</h3>
            <p>
              Eyewear content can get technical quickly. The layout prioritized clear headings, digestible section lengths, and visual breaks over comprehensive coverage — recognizing that most users scan before they read.
            </p>

            <h3>Collaboration with content</h3>
            <p>
              Working alongside a copywriter meant structural decisions had to be legible to someone not thinking in components and layouts. That required translating UX rationale into content guidance — explaining why a section needed to come first, or why a chunk of copy needed to be broken into smaller pieces.
            </p>

            <h2>Process</h2>
            <ul>
              <li>Reviewed existing pages and identified outdated content, structural weaknesses, and missing coverage</li>
              <li>Identified the Sunglass Lenses content gap through the audit process</li>
              <li>Defined page structure and section hierarchy for each of the three pages</li>
              <li>Collaborated with the copywriter through drafts to align content with structural intent</li>
              <li>Built and deployed all three pages in Salesforce Commerce Cloud</li>
              <li>Conducted QA and UAT across device viewports and accessibility standards</li>
              <li>Pages went live September 3, 2025</li>
            </ul>

            <h2>Outcome</h2>
            <p>
              All three pages launched on schedule in September 2025. Stakeholder reception was positive across the team. The pages serve as a persistent educational resource — support for customers navigating a high-consideration category where clarity directly influences purchase confidence.
            </p>
            <div className="outcome-highlight">
              <div className="metric">3 pages</div>
              <div className="metric-label">Live September 3, 2025 — on schedule, positive stakeholder reception across Creative, Merchandising, and Marketing</div>
            </div>
            <p>
              Without post-launch analytics attached to these specific pages, a direct conversion metric isn't available. What the pages represent is a deliberate investment in the customer's ability to make an informed decision — the kind of work that shows up in fewer support contacts, fewer abandoned carts, and more confident buyers.
            </p>

            <h2>Reflections</h2>
            <p>
              The most interesting design challenge was working at the boundary between UX and content. Structure and copy aren't separable on an education page — the way content is organized is the experience. Getting that right required closer collaboration with the copywriter than a typical campaign project.
            </p>
            <p>
              If I were to revisit these pages, I'd advocate for attaching analytics at the page level — time on page, scroll depth, and exit rate — to understand whether the structure is actually working. Positive stakeholder reactions are a good signal, but customer behavior is the better one.
            </p>

            {/* Case navigation */}
            <div className="case-nav">
              <a href="/case-study/design-system" className="case-nav-item">
                <div className="case-nav-item-dir">← Previous</div>
                <div className="case-nav-item-title">Design System Foundation</div>
              </a>
              <a href="/#work" className="case-nav-item next">
                <div className="case-nav-item-dir">↑ Back</div>
                <div className="case-nav-item-title">All Work</div>
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="case-study-sidebar">
            <div className="sidebar-card">
              <div>
                <p className="t-label" style={{marginBottom: '0.75rem'}}>Scope</p>
                <div className="sidebar-stat">
                  <div className="sidebar-stat-value">3</div>
                  <div className="sidebar-stat-label">Educational pages designed and built</div>
                </div>
              </div>
              <div className="sidebar-divider" />
              <div>
                <div className="sidebar-stat">
                  <div className="sidebar-stat-value">Sept 3</div>
                  <div className="sidebar-stat-label">Live date, 2025 — on schedule</div>
                </div>
              </div>
              <div className="sidebar-divider" />
              <div>
                <p className="t-label" style={{marginBottom: '0.75rem'}}>My Role</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.375rem'}}>
                  {['Content Audit', 'Information Architecture', 'Copywriter Collaboration', 'Front-End Implementation', 'QA & Accessibility'].map(r => (
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
