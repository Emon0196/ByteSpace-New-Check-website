import heroBagIcon from '../../assets/figma/hero-bag-icon.svg'
import heroBrandMark from '../../assets/figma/hero-brand-mark.svg'

export type SiteNavKey = 'home' | 'courses' | 'creators'

interface SiteHeaderProps {
  current?: SiteNavKey
}

export function SiteHeader({ current = 'home' }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="ByteSpace home">
        <img src={heroBrandMark} alt="" /><span>ByteSpace</span>
      </a>
      <nav className="primary-nav" aria-label="Main navigation">
        <a className={current === 'home' ? 'is-current' : undefined} href="/" aria-current={current === 'home' ? 'page' : undefined}>Home</a>
        <a className={current === 'courses' ? 'is-current' : undefined} href="/courses" aria-current={current === 'courses' ? 'page' : undefined}>Courses</a>
        <a className={current === 'creators' ? 'is-current' : undefined} href="/creators/purepearl-studio" aria-current={current === 'creators' ? 'page' : undefined}>Creators</a>
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><span /><span /><span /></summary>
        <nav aria-label="Mobile navigation">
          <a href="/">Home</a><a href="/courses">Courses</a>
          <a href="/#creators">Creators</a><a href="/#newsletter">Newsletter</a>
        </nav>
      </details>
      <div className="account-nav">
        <a href="/#newsletter">Sign In</a><a href="/#creator-cta">Join Us</a>
        <button className="icon-button" type="button" aria-label="Open shopping bag"><img src={heroBagIcon} alt="" /></button>
      </div>
    </header>
  )
}
