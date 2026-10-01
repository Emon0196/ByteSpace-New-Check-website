import heroFrameBackground from '../assets/figma/hero-frame-background.svg'
import { SiteFooter } from '../components/landing/SiteFooter'
import { SiteHeader } from '../components/site/SiteHeader'

export function NotFoundPage() {
  return (
    <div className="not-found-page">
      <section className="not-found-hero" aria-labelledby="not-found-title">
        <img className="not-found-hero__grid" src={heroFrameBackground} alt="" aria-hidden="true" />
        <SiteHeader current="home" />
        <div className="not-found-hero__content">
          <div className="not-found-hero__badge">404 Error</div>
          <div className="not-found-hero__code" aria-hidden="true">404</div>
          <h1 id="not-found-title">This page doesn’t exist</h1>
          <p>
            The page you are looking for may have been moved, removed, or the URL might be invalid.
          </p>
          <div className="not-found-hero__actions">
            <a className="lime-button" href="/">Back to homepage</a>
            <a className="not-found-page__secondary" href="/courses">Browse courses</a>
          </div>
        </div>
      </section>

      <SiteFooter isSubscribed={false} onSubscribe={() => undefined} />
    </div>
  )
}
