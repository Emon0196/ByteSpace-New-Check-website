import type { Course } from './landingData'
import courseAvatarOne from '../../assets/figma/section2-course-avatar-1.png'
import courseAvatarTwo from '../../assets/figma/section2-course-avatar-2.png'
import courseAvatarThree from '../../assets/figma/section2-course-avatar-3.png'
import courseAvatarFour from '../../assets/figma/section2-course-avatar-4.png'
import courseLevelIcon from '../../assets/figma/section2-level.svg'
import courseMoreIcon from '../../assets/figma/section2-students-more.svg'
import courseStarIcon from '../../assets/figma/section2-rating-star.svg'
import { courseCategoryRows } from './landingData'

interface CoursesSectionProps {
  activeCategory: string
  courses: Course[]
  onCategoryChange: (category: string) => void
}

const courseAvatars = [courseAvatarOne, courseAvatarTwo, courseAvatarThree, courseAvatarFour]

export function CourseCard({ course, creatorHref = '/#creators'}: { course: Course; creatorHref?: string; showDetailsLink?: boolean }) {
  const detailsUrl = '/courses/build-digital-asset'

  return (
    <article className="course-card">
      <a className="course-card__image course-card__image-link" href={detailsUrl} aria-label={`View ${course.title}`}>
        <img src={course.image} alt="" />
        <div className="course-card__badges"><span>17 Lessons</span><span>2 hours 16 mins</span><span>59 Comments</span></div>
      </a>
      <div className="course-card__heading">
        <div><h3><a className="course-card__title-link" href={detailsUrl}>{course.title}</a></h3><p>by <a href={creatorHref}>purepearl studio</a></p></div>
        <span className="course-card__rating">4.5 <img src={courseStarIcon} alt="" /></span>
      </div>
      <div className="course-card__meta">
        <span className="course-level"><img src={courseLevelIcon} alt="" />Beginner</span>
        <div className="course-card__students" aria-label="26 or more enrolled students">
          {courseAvatars.map((avatar) => <img src={avatar} alt="" key={avatar} />)}
          <span><img src={courseMoreIcon} alt="" />26+</span>
        </div>
      </div>
      <p className="course-card__price"><strong>$25</strong><span>/lifetime</span></p>
    </article>
  )
}

export function CoursesSection({ activeCategory, courses, onCategoryChange }: CoursesSectionProps) {
  return (
    <section className="courses-section" id="courses" aria-labelledby="courses-title">
      <div className="section-container">
        <div className="section-intro section-intro--center">
          <h2 id="courses-title">Discover Your Passion, Build Your Skills</h2>
          <p>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
        </div>
        <div className="course-controls">
          <div className="course-tabs" role="group" aria-label="Filter courses by category">
            {courseCategoryRows.map((row, index) => (
              <div className="course-tab-row" key={index}>
                {row.map((category) => (
                  <button
                    className={`course-tab${activeCategory === category ? ' is-active' : ''}${category === '+ More' ? ' course-tab--more' : ''}`}
                    type="button"
                    aria-pressed={activeCategory === category}
                    onClick={() => onCategoryChange(category === '+ More' ? 'Featured' : category)}
                    key={category}
                  >{category}</button>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="course-grid" aria-live="polite">
          {courses.map((course) => <CourseCard course={course} key={course.title} />)}
          {courses.length === 0 && <p className="course-empty">No courses match that search.</p>}
        </div>
      </div>
    </section>
  )
}
