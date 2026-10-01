import { useState, type FormEvent } from 'react'
import bytespaceMark from '../../assets/bytespace-mark.svg'

interface SiteFooterProps {
  isSubscribed: boolean
  onSubscribe: () => void
}

export function SiteFooter({ isSubscribed, onSubscribe }: SiteFooterProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubscribe()
  }

  return (
    <footer className="site-footer" id="newsletter">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-newsletter">
            <a className="footer-brand" href="/"><img src={bytespaceMark} alt="" /><span>ByteSpace</span></a>
            <p>Stay up to date with our latest features and releases by joining our newsletter.</p>
            <form onSubmit={handleSubmit}>
              <label><span className="visually-hidden">Email address</span><input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" /></label>
              <button className="lime-button" type="submit">{isSubscribed ? 'Subscribed' : 'Subscribe'}</button>
            </form>
            <small>{isSubscribed ? 'Thanks for subscribing. Look out for ByteSpace updates.' : 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.'}</small>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <div><h2>Browse</h2><a href="/courses">Featured Courses</a><a href="/#categories">Featured Categories</a><a href="/courses">Business</a><a href="/courses">IT</a><a href="/courses">Design</a></div>
            <div className="footer-links__continuation"><span aria-hidden="true">&nbsp;</span><a href="/courses">Development</a><a href="/courses">Marketing</a><a href="/courses">Photography</a><a href="/courses">Finance</a><a href="/courses">Sport</a></div>
            <div><h2>Platform</h2><a href="/#creator-cta">Become a Creator</a><a href="/#creator-cta">Affiliate Program</a><a href="mailto:hello@bytespace.com">Contact</a><a href="/#newsletter">Help</a><a href="/">About</a></div>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <nav aria-label="Legal"><a href="#newsletter">Privacy Policy</a><a href="#newsletter">Terms of Service</a><a href="#newsletter">Cookies Settings</a></nav>
        </div>
      </div>
    </footer>
  )
}