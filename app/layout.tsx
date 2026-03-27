import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jeff Vertido — Design Engineer',
  description: 'UX Designer and Front-End Developer bridging design systems, component architecture, and accessibility-compliant implementation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <a href="/" className="nav-logo">Jeff Vertido <span>/ Design Engineer</span></a>
        <div className="nav-links">
          <a href="/#work">Work</a>
          <a href="/about">About</a>
          <a href="mailto:jvertido@live.com" className="btn btn-primary" style={{padding: '0.375rem 0.875rem', fontSize: '0.8125rem'}}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span className="t-label">© 2025 Jeff Vertido</span>
        <div className="footer-links">
          <a href="mailto:jvertido@live.com">jvertido@live.com</a>
          <a href="https://design-token-visualizer.vercel.app" target="_blank" rel="noopener">Token Visualizer ↗</a>
          <a href="https://www.interaction-design.org/members/jeff-vertido" target="_blank" rel="noopener">IxDF Profile ↗</a>
        </div>
      </div>
    </footer>
  )
}
