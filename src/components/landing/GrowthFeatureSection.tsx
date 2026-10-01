import type { CSSProperties } from 'react'
import growthBenefitCheck from '../../assets/figma/growth-benefit-check.svg'
import growthPhotoMaskOne from '../../assets/figma/growth-photo-mask-one.png'
import growthPhotoMaskTwo from '../../assets/figma/growth-photo-mask-two.png'
import growthPhotoOrbOne from '../../assets/figma/growth-photo-orb-one.png'
import growthPhotoOrbTwo from '../../assets/figma/growth-photo-orb-two.png'
import growthPrimaryPhoto from '../../assets/figma/growth-primary-photo.png'
import growthRatingStar from '../../assets/figma/growth-rating-star.svg'
import growthRevenuePhoto from '../../assets/figma/growth-revenue-photo.png'
import growthSectionGlow from '../../assets/figma/growth-section-glow.svg'
import growthLowerGlow from '../../assets/figma/growth-lower-glow.svg'
import growthStudentsMore from '../../assets/figma/growth-students-more.svg'
import growthStudentAvatarOne from '../../assets/figma/growth-student-avatar-1.png'
import growthStudentAvatarTwo from '../../assets/figma/growth-student-avatar-2.png'
import growthStudentAvatarThree from '../../assets/figma/growth-student-avatar-3.png'
import growthStudentAvatarFour from '../../assets/figma/growth-student-avatar-4.png'
import growthStudentAvatarFive from '../../assets/figma/growth-student-avatar-5.png'
import growthStudentAvatarSix from '../../assets/figma/growth-student-avatar-6.png'
import growthStudentAvatarSeven from '../../assets/figma/growth-student-avatar-7.png'
import { courses } from './landingData'
import { CourseCard } from './CoursesSection'

const growthStudentAvatars = [
  growthStudentAvatarOne,
  growthStudentAvatarTwo,
  growthStudentAvatarThree,
  growthStudentAvatarFour,
  growthStudentAvatarFive,
  growthStudentAvatarSix,
  growthStudentAvatarSeven,
]

function photoMaskStyle(mask: string): CSSProperties {
  return {
    maskImage: `url(${mask})`,
    WebkitMaskImage: `url(${mask})`,
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
  }
}

export function GrowthSection() {
  return (
    <section className="growth-section" id="creators" aria-label="Grow your career and create courses">
      <img className="growth-background growth-background--cluster" src={growthSectionGlow} alt="" aria-hidden="true" />
      <img className="growth-background growth-background--lower" src={growthLowerGlow} alt="" aria-hidden="true" />
      <div className="growth-container">
        <div className="growth-row growth-row--career">
          <div className="growth-copy">
            <h2>Your Path to Professional Growth Starts Here!</h2>
            <p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
            <div className="growth-stats">
              <div><strong>12K</strong><span>Students</span></div>
              <div><strong>70+</strong><span>Courses</span></div>
              <div><strong>16</strong><span>Creators</span></div>
            </div>
          </div>
          <div className="growth-visual growth-visual--career">
            <div className="growth-career-card"><CourseCard course={courses[0]} /></div>
            <img className="growth-visual__photo growth-visual__photo--career" src={growthPrimaryPhoto} alt="A learner following an online course" />
            <aside className="growth-progress"><span>Learning Progress</span><strong>55%</strong><i><b /></i></aside>
            <div className="growth-visual__orb growth-visual__orb--career" style={photoMaskStyle(growthPhotoMaskOne)} aria-hidden="true">
              <img src={growthPhotoOrbOne} alt="" />
              <span />
            </div>
          </div>
        </div>
        <div className="growth-row growth-row--creator">
          <div className="growth-visual growth-visual--creator">
            <div className="growth-visual__photo-frame growth-visual__photo-frame--creator">
              <img className="growth-visual__photo--creator" src={growthRevenuePhoto} alt="A course creator working at a computer" />
            </div>
            <aside className="revenue-card"><span>Total Revenue</span><small>July 1-28</small><strong>$120.29</strong><i>+12$</i></aside>
            <aside className="revenue-card revenue-card--year"><span>Year to Date</span><small>2023</small><strong>$1,200.38</strong><i>+12$</i></aside>
            <aside className="growth-rating">
              <div className="growth-rating__summary">
                <strong>Happy Students</strong>
                <span>4.5 (240) <img src={growthRatingStar} alt="" /></span>
              </div>
              <div className="growth-rating__avatars">
                {growthStudentAvatars.map((student) => <img src={student} alt="" key={student} />)}
                <span className="growth-rating__count"><img src={growthStudentsMore} alt="" /><b>2K+</b></span>
              </div>
            </aside>
            <div className="growth-visual__orb growth-visual__orb--creator" style={photoMaskStyle(growthPhotoMaskTwo)} aria-hidden="true">
              <img src={growthPhotoOrbTwo} alt="" />
              <span />
            </div>
          </div>
          <div className="growth-copy growth-copy--creator">
            <h2>Create &amp; Manage Courses Easily.</h2>
            <p><strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul>
              {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map((benefit) => <li key={benefit}><img src={growthBenefitCheck} alt="" />{benefit}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}