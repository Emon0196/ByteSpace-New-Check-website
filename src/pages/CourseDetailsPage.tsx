import { useState } from 'react'
import heroFrameBackground from '../assets/figma/hero-frame-background.svg'
import courseVideoBg from '../assets/figma/course-details-presenter.png'
import sneakOne from '../assets/figma/course-raw-10.png'
import sneakTwo from '../assets/figma/course-raw-09.jpeg'
import sneakThree from '../assets/figma/course-raw-07.jpeg'
import sneakFour from '../assets/figma/course-raw-08.jpeg'
import creatorAvatar from '../assets/figma/course-details-creator.png'
import courseLessonVideoIcon from '../assets/figma/course-lesson-video.svg'
import courseKeyPointIcon from '../assets/figma/course-keypoint-check.svg'
import includedResourceIcon from '../assets/figma/course-included-resource.svg'
import includedVideoIcon from '../assets/figma/course-included-video.svg'
import includedCertificateIcon from '../assets/figma/course-included-certificate.svg'
import includedConsultationIcon from '../assets/figma/course-included-consultation.svg'
import reviewAvatarOne from '../assets/figma/course-review-avatar-1.png'
import reviewAvatarTwo from '../assets/figma/course-review-avatar-2.png'
import reviewAvatarThree from '../assets/figma/course-review-avatar-3.png'
import reviewAvatarFour from '../assets/figma/course-review-avatar-4.png'
import reviewStar from '../assets/figma/course-review-star.svg'
import { SiteFooter } from '../components/landing/SiteFooter'
import { SiteHeader } from '../components/site/SiteHeader'

const lessons = [
  ['01', 'Introduction to Digital Assets', '12 mins'],
  ['02', 'Design Principles for Impacts', '21 mins'],
  ['03', 'Advanced Techniques in Digital Creation', '16 mins'],
]

const keyPoints = [
  'Foundational Concepts', 'Design Principles Mastery', 'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique', 'Optimizing for Various Platforms', 'Digital Asset Management Best Practices',
  'Monetization Strategies', 'Capstone Project: Building Your Portfolio',
]

const included = [
  { label: 'Learning Resources', icon: includedResourceIcon },
  { label: 'Quality Lesson Videos', icon: includedVideoIcon },
  { label: 'Certificate of Completion', icon: includedCertificateIcon },
  { label: 'Private Consultation', icon: includedConsultationIcon },
]

const reviewDistribution = [
  { rating: 5, count: 720, percentage: 92.28 },
  { rating: 4, count: 120, percentage: 36.49 },
  { rating: 3, count: 21, percentage: 9.47 },
  { rating: 2, count: 12, percentage: 3.51 },
  { rating: 1, count: 16, percentage: 5.26 },
]

const reviews = [
  {
    name: 'PurePearl Studio',
    role: 'UI/UX Designer',
    avatar: reviewAvatarOne,
    date: 'a year ago',
    rating: 5,
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    name: 'Albert Flores',
    role: 'UI/UX Designer',
    avatar: reviewAvatarTwo,
    date: 'a year ago',
    rating: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: 'Cody Fisher',
    role: 'UI/UX Designer',
    avatar: reviewAvatarThree,
    date: 'a year ago',
    rating: 5,
    text: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
  },
  {
    name: 'Brooklyn Simmons',
    role: 'UI/UX Designer',
    avatar: reviewAvatarFour,
    date: 'a year ago',
    rating: 5,
    text: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
  },
]

const modules = [
  {
    number: '01',
    title: 'Module 1: Introduction to Digital Assets',
    description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    icon: '🎨'
  },
  {
    number: '02',
    title: 'Module 2: Design Principles for Impact',
    description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    icon: '🎯'
  },
  {
    number: '03',
    title: 'Module 3: Advanced Digital Creation',
    description: "Explore advanced techniques in digital creation including '3D Modeling Basics' and 'Animation Fundamentals.' Push the boundaries of your creative capabilities.",
    icon: '⚡'
  },
  {
    number: '04',
    title: 'Module 4: User-Centric Design Strategies',
    description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    icon: '👥'
  },
  {
    number: '05',
    title: 'Module 5: Interactive Media and Engagement',
    description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    icon: '🎮'
  },
  {
    number: '06',
    title: 'Module 6: Project Showcase and Critique',
    description: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    icon: '📊'
  },
  {
    number: '07',
    title: 'Module 7: Optimizing Digital Assets for Various Platforms',
    description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    icon: '📱'
  },
]

export function CourseDetailsPage({ initialTab = 'About' }: { initialTab?: 'About' | 'Lesson' | 'Reviews' }) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const [reviewFilter, setReviewFilter] = useState<number | 'all'>('all')
  const [enrolled, setEnrolled] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <div className="course-details-page">
      <section className="course-details-hero" aria-labelledby="course-title">
        <img className="course-details-hero__grid" src={heroFrameBackground} alt="" aria-hidden="true" />
        <SiteHeader current="courses" />
        <div className="course-details-hero__inner">
          <div className="course-details-hero__topline">
            <div>
              <h1 id="course-title">Build Digital Asset: A Comprehensive Guide</h1>
              <p>Unlock the Power of Digital Creation with Expert Guidance</p>
              <span>by <b>purepearl studio</b></span>
            </div>
            <button className="course-share" type="button">↗ <span>Share</span></button>
          </div>
          <div className="course-details-hero__badges">
            <span>▥&nbsp; Intermediate</span><span>★&nbsp; 4.7 (889 reviews)</span><span>♟&nbsp; 319 Students</span>
          </div>
          <div className="course-details-hero__grid-content">
            <button className="course-video" type="button" aria-label="Play course preview">
              <img src={courseVideoBg} alt="Course preview video background" /><i>▶</i>
            </button>
            <CoursePurchaseCard enrolled={enrolled} onEnroll={() => setEnrolled(true)} />
          </div>
        </div>
      </section>

      <section className="course-lessons-section" aria-label="Course details content">
        <div className="course-lessons-section__inner">
          <div className="course-lessons-tabs" role="tablist" aria-label="Course sections">
            {(['About', 'Lesson', 'Reviews'] as const).map((tab) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`course-panel-${tab.toLowerCase()}`}
                className={activeTab === tab ? 'is-active' : ''}
                onClick={() => setActiveTab(tab)}
                key={tab}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {activeTab === 'About' && <div id="course-panel-about" role="tabpanel"><AboutCourse /></div>}
          {activeTab === 'Lesson' && <div id="course-panel-lesson" role="tabpanel"><LessonContent modules={modules} /></div>}
          {activeTab === 'Reviews' && (
            <div id="course-panel-reviews" role="tabpanel">
              <CourseReviews filter={reviewFilter} onFilterChange={setReviewFilter} />
            </div>
          )}
        </div>
      </section>
      
      <SiteFooter isSubscribed={isSubscribed} onSubscribe={() => setIsSubscribed(true)} />
    </div>
  )
}

function CoursePurchaseCard({ enrolled, onEnroll }: { enrolled: boolean; onEnroll: () => void }) {
  return (
    <aside className="course-purchase-card">
      <div className="course-purchase-card__lessons">
        <strong>112 Lessons (24 hours)</strong>
        <div className="course-purchase-card__lesson-list">
          {lessons.map(([number, title, time]) => (
            <div className="course-purchase-card__lesson" key={number}>
              <div><span>{number}</span><b>{title}</b></div>
              <em>{time}</em>
            </div>
          ))}
          <p>99 more videos</p>
        </div>
      </div>
      <div className="course-purchase-card__checkout">
        <p className="course-purchase-card__prompt">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
        <p className="course-purchase-card__price"><strong>$25</strong><span>/lifetime</span></p>
        <button type="button" onClick={onEnroll}>{enrolled ? 'Enrolled' : 'Enroll Now'}</button>
      </div>
      <h2>This course include</h2>
      <div className="course-purchase-card__included">
        {included.map(({ label, icon }) => (
          <div key={label}><img src={icon} alt="" /><p>{label}</p></div>
        ))}
      </div>
      <div className="course-purchase-card__divider" />
      <section className="course-creator">
        <div className="course-creator__identity">
          <img src={creatorAvatar} alt="" />
          <p><b>PurePearl Studio</b><span>Professional Creator</span></p>
        </div>
        <p className="course-creator__prompt">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
        <a href="/creators/purepearl-studio">See Full Profile</a>
      </section>
    </aside>
  )
}

function CourseReviews({ filter, onFilterChange }: { filter: number | 'all'; onFilterChange: (rating: number | 'all') => void }) {
  const filteredReviews = filter === 'all' ? reviews : reviews.filter((review) => review.rating === filter)

  return (
    <section className="course-reviews" aria-labelledby="course-reviews-title">
      <h2 id="course-reviews-title">What Learners Are Saying</h2>
      <p className="course-reviews__intro">
        Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
      </p>

      <div className="course-reviews__summary" aria-label="Course ratings summary">
        <div className="course-reviews__score">
          <span>Ratings</span>
          <strong>4.7</strong>
        </div>
        <div className="course-reviews__distribution">
          {reviewDistribution.map(({ rating, count, percentage }) => (
            <div className="course-reviews__distribution-row" key={rating}>
              <div className="course-reviews__bar" aria-label={`${percentage}% of ratings are ${rating} stars`}>
                <span style={{ width: `${percentage}%` }} />
              </div>
              <RatingStars rating={5} />
              <span className="course-reviews__count">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="course-reviews__list-title">Individual Reviews:</h3>
      <div className="course-reviews__filters" role="group" aria-label="Filter reviews by rating">
        <button type="button" aria-pressed={filter === 'all'} className={filter === 'all' ? 'is-active' : ''} onClick={() => onFilterChange('all')}>All rating</button>
        {[5, 4, 3, 2, 1].map((rating) => (
          <button type="button" aria-pressed={filter === rating} className={filter === rating ? 'is-active' : ''} onClick={() => onFilterChange(rating)} key={rating}>
            <img src={reviewStar} alt="" />{rating}
          </button>
        ))}
      </div>

      <div className="course-reviews__list" aria-live="polite">
        {filteredReviews.length > 0 ? filteredReviews.map((review) => (
          <article className="course-review-card" key={review.name}>
            <div className="course-review-card__header">
              <div className="course-review-card__reviewer">
                <div className="course-review-card__identity">
                  <img className="course-review-card__avatar" src={review.avatar} alt="" />
                  <div>
                    <h4>{review.name}</h4>
                    <p>{review.role}</p>
                  </div>
                </div>
                <RatingStars rating={review.rating} />
              </div>
              <time>{review.date}</time>
            </div>
            <p className="course-review-card__text">{review.text}</p>
          </article>
        )) : <p className="course-reviews__empty">There are no reviews for this rating yet.</p>}
      </div>
    </section>
  )
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="course-review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => <img src={reviewStar} alt="" key={index} />)}
    </div>
  )
}

function AboutCourse() {
  return <div className="course-copy">
    <h2>Description</h2>
    <p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.</p>
    <p>In the initial modules, you’ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p>
    <p>As you progress through the course, you’ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights.</p>
    <h2>Sneak Peak</h2><div className="course-sneak-peek">{[sneakOne, sneakTwo, sneakThree, sneakFour].map((image) => <img src={image} alt="Course material preview" key={image} />)}</div>
    <h2>Key Points</h2><ul className="course-key-points">{keyPoints.map((point) => <li key={point}><img src={courseKeyPointIcon} alt="" /><span>{point}</span></li>)}</ul>
  </div>
}

function LessonContent({ modules }: { modules: Array<{ number: string; title: string; description: string; icon: string }> }) {
  return (
    <div className="course-lessons-content">
      <div className="course-lessons-content__header">
        <div>
          <p className="course-lessons-content__eyebrow">Explore the Modules</p>
          <h2 className="course-lessons-content__title">Lesson List</h2>
        </div>
      </div>
      <div className="course-lessons-content__modules">
        {modules.map((module) => (
          <div key={module.number} className="course-lessons-content__module">
            <div className="course-lessons-content__module-icon">
                <img src={courseLessonVideoIcon} alt="" />
            </div>
            <div className="course-lessons-content__module-info">
              <h3 className="course-lessons-content__module-title">{module.title}</h3>
              <p className="course-lessons-content__module-description">{module.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="course-lessons-content__progress">
        <h3 className="course-lessons-content__progress-title">Lesson Content</h3>
        <p className="course-lessons-content__progress-description">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
        <h3 className="course-lessons-content__progress-title">Lesson Progress Tracking</h3>
        <p className="course-lessons-content__progress-description">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>
        <div className="course-lessons-content__progress-bar">
          <div className="course-lessons-content__progress-header">
            <span className="course-lessons-content__progress-label">Learning Progress</span>
            <span className="course-lessons-content__progress-value">55%</span>
          </div>
          <div className="course-lessons-content__progress-track">
            <div className="course-lessons-content__progress-fill" style={{ width: '55%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

