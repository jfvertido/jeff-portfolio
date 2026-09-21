import type { Metadata } from 'next'
import { Faustina, Figtree } from 'next/font/google'
import './globals.css'

const faustina = Faustina({ subsets: ['latin'], style: ['normal', 'italic'], display: 'swap', variable: '--font-faustina' })
const figtree = Figtree({ subsets: ['latin'], weight: ['300', '400', '500', '600'], display: 'swap', variable: '--font-figtree' })

export const metadata: Metadata = {
  title: 'Jeff Vertido — UX/UI Designer | Design Systems | Front-End',
  description: 'UX Designer and Front-End Developer bridging design systems, component architecture, and accessibility-compliant implementation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${faustina.variable} ${figtree.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <nav className="site-nav" aria-label="Main">
      <div className="nav-inner">
        <a href="/" className="nav-logo">Jeff Vertido <span>/ UX/UI Designer</span></a>
        <div className="nav-links">
          <a href="/#work">Work</a>
          <a href="/about">About</a>
          <a href="mailto:jvertido@live.com" className="btn btn-primary" aria-label="Contact Jeff by email" style={{padding: '0.375rem 0.875rem', fontSize: '0.8125rem'}}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span className="t-label">© 2026 Jeff Vertido</span>
        <div className="footer-links">
          <a href="mailto:jvertido@live.com">jvertido@live.com</a>
          <a href="https://design-token-visualizer.vercel.app" target="_blank" rel="noopener">Token Visualizer <span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span></a>
          <a href="https://www.interaction-design.org/members/jeff-vertido" target="_blank" rel="noopener">IxDF Profile <span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span></a>
        </div>
      </div>
    </footer>
  )
}
