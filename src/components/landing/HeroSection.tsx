import type { CSSProperties } from 'react'
import heroCoursePhoto from '../../assets/figma/hero-frame-photo.png'
import heroFrameBackground from '../../assets/figma/hero-frame-background.svg'
import heroFrameGlow from '../../assets/figma/hero-frame-glow.svg'
import heroFrameCone188 from '../../assets/figma/hero-frame-cone-188.png'
import heroFrameCone188Mask from '../../assets/figma/hero-frame-cone-188-mask.png'
import heroFrameCone342 from '../../assets/figma/hero-frame-cone-342.png'
import heroFrameCone342Mask from '../../assets/figma/hero-frame-cone-342-mask.png'
import heroFrameCone370 from '../../assets/figma/hero-frame-cone-370.png'
import heroFrameCone370Mask from '../../assets/figma/hero-frame-cone-370-mask.png'
import heroFrameOrnament175Mask from '../../assets/figma/hero-frame-ornament-175-mask.png'
import heroFrameOrnament330 from '../../assets/figma/hero-frame-ornament-330.png'
import heroFrameOrnament330Mask from '../../assets/figma/hero-frame-ornament-330-mask.png'
import heroFrameOrnament385 from '../../assets/figma/hero-frame-ornament-385.png'
import heroFrameOrnament385Mask from '../../assets/figma/hero-frame-ornament-385-mask.png'
import heroSearchIcon from '../../assets/figma/hero-search-icon.svg'
import heroStar from '../../assets/figma/hero-star.svg'
import heroStudentCount from '../../assets/figma/hero-avatar-count.svg'
import { SiteHeader } from '../site/SiteHeader'
import { students } from './landingData'

interface HeroSectionProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  onSearchSubmit: () => void
}

const coneAssets = [heroFrameCone342, heroFrameCone370, heroFrameCone188]
const coneMasks = [heroFrameCone342Mask, heroFrameCone370Mask, heroFrameCone188Mask]

function maskedStyle(mask: string, color: string): CSSProperties {
  return {
    backgroundColor: color,
    maskImage: `url(${mask})`,
    WebkitMaskImage: `url(${mask})`,
  }
}

export function HeroSection({ searchTerm, onSearchChange, onSearchSubmit }: HeroSectionProps) {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <img className="hero-grid" src={heroFrameBackground} alt="" aria-hidden="true" />
      <img className="hero-glow" src={heroFrameGlow} alt="" aria-hidden="true" />
      <SiteHeader current="home" />
      <div className="hero-copy">
        <div className="hero-copy__intro">
          <h1 id="hero-title">Get Access to Hundreds Courses Available</h1>
          <p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        </div>
        <form className="course-search" role="search" onSubmit={(event) => {
          event.preventDefault()
          onSearchSubmit()
          document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })
        }}>
          <label className="course-search__field">
            <img src={heroSearchIcon} alt="" aria-hidden="true" />
            <input aria-label="Search courses" type="search" value={searchTerm} onChange={(event) => onSearchChange(event.target.value)} placeholder="Course, topic, creator" />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="hero-course-image"><img src={heroCoursePhoto} alt="A student learning from an online course" /></div>
      <div className="hero-ornaments" aria-hidden="true">
        <div className="hero-ornament hero-ornament--photo-one"><img src={heroFrameOrnament385} alt="" /><span style={maskedStyle(heroFrameOrnament385Mask, '#d4fb20')} /></div>
        <div className="hero-ornament hero-ornament--photo-two"><img src={heroFrameOrnament330} alt="" /><span style={maskedStyle(heroFrameOrnament330Mask, '#f5f5f6')} /></div>
        <div className="hero-ornament hero-ornament--photo-three"><img src={heroFrameOrnament385} alt="" /><span style={maskedStyle(heroFrameOrnament175Mask, '#f5f5f6')} /></div>
        {coneAssets.map((cone, index) => (
          <div className={`hero-ornament hero-ornament--cone-${index + 1}`} key={cone}>
            <img src={cone} alt="" />
            <span style={maskedStyle(coneMasks[index], index === 1 ? '#d4fb20' : '#f5f5f6')} />
          </div>
        ))}
      </div>
      <aside className="course-tag" aria-label="UI/UX Design: 200 courses, 1000 or more students">
        <strong>UI/UX Design</strong><span>200 Courses <i aria-hidden="true">•</i> 1000+ Students</span>
      </aside>
      <aside className="progress-card" aria-label="Learning progress: 55 percent">
        <span>Learning Progress</span><strong>55%</strong>
        <div className="progress-card__track" aria-hidden="true"><span /></div>
      </aside>
      <aside className="students-card" aria-label="Happy students, rated 4.5 out of 5 by 240 students">
        <div className="students-card__rating"><strong>Happy Students</strong><span>4.5 (240) <img src={heroStar} alt="" /></span></div>
        <div className="student-avatars" aria-hidden="true">
          {students.map((student) => <img src={student} alt="" key={student} />)}
          <img className="student-avatars__count" src={heroStudentCount} alt="" />
        </div>
      </aside>
    </section>
  )
}