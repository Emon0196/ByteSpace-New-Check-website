import { useMemo, useState } from 'react'
import creatorAvatar from '../assets/figma/course-raw-03.png'
import heroFrameBackground from '../assets/figma/hero-frame-background.svg'
import searchCategoryIcon from '../assets/figma/search-category.svg'
import searchFilterIcon from '../assets/figma/search-filter.svg'
import searchLevelIcon from '../assets/figma/search-level.svg'
import searchSortIcon from '../assets/figma/search-sort.svg'
import { CourseCard } from '../components/landing/CoursesSection'
import { courses } from '../components/landing/landingData'
import { SiteFooter } from '../components/landing/SiteFooter'
import { SiteHeader } from '../components/site/SiteHeader'

const filterOptions = ['All courses', 'Featured']
const levelOptions = ['All levels', 'Beginner']
const categoryOptions = ['All categories', ...Array.from(new Set(courses.map((course) => course.category)))]
const sortOptions = ['Most relevant', 'Newest', 'A to Z']

interface ProfileFilterProps {
  icon: string
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

function ProfileFilter({ icon, label, value, options, onChange }: ProfileFilterProps) {
  return (
    <details className="creator-profile-filter">
      <summary>
        <img src={icon} alt="" />
        <span>{value.startsWith('All') ? label : value}</span>
      </summary>
      <div className="creator-profile-filter__menu" role="listbox" aria-label={label}>
        {options.map((option) => (
          <button
            type="button"
            role="option"
            aria-selected={value === option}
            key={option}
            onClick={(event) => {
              onChange(option)
              event.currentTarget.closest('details')?.removeAttribute('open')
            }}
          >{option}</button>
        ))}
      </div>
    </details>
  )
}

export function CreatorProfilePage() {
  const [filter, setFilter] = useState(filterOptions[0])
  const [level, setLevel] = useState(levelOptions[0])
  const [category, setCategory] = useState(categoryOptions[0])
  const [sort, setSort] = useState(sortOptions[0])
  const [isFollowing, setIsFollowing] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const visibleCourses = useMemo(() => {
    let result = courses.filter((course, index) => {
      const matchesFilter = filter !== 'Featured' || index < 3
      const matchesLevel = level === 'All levels' || level === 'Beginner'
      const matchesCategory = category === 'All categories' || course.category === category
      return matchesFilter && matchesLevel && matchesCategory
    })

    if (sort === 'A to Z') result = [...result].sort((first, second) => first.title.localeCompare(second.title))
    if (sort === 'Newest') result = [...result].reverse()
    return result
  }, [category, filter, level, sort])

  return (
    <div className="creator-profile-page">
      <section className="creator-profile-hero" aria-labelledby="creator-profile-title">
        <img className="creator-profile-hero__grid" src={heroFrameBackground} alt="" aria-hidden="true" />
        <SiteHeader current="creators" />
        <div className="creator-profile-hero__content">
          <div className="creator-profile__identity">
            <img className="creator-profile__avatar" src={creatorAvatar} alt="PurePearl Studio" />
            <div className="creator-profile__heading">
              <div className="creator-profile__title-row">
                <h1 id="creator-profile-title">PurePearl Studio</h1>
                <span className="creator-profile__badge">Creator</span>
              </div>
              <p>Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <div className="creator-profile__bio">
            <p>Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!</p>
            <p>Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
          </div>
          <div className="creator-profile__footer">
            <div className="creator-profile__stats" aria-label="Creator stats">
              <div><strong>3</strong><span>Products</span></div>
              <div><strong>{isFollowing ? 13 : 12}</strong><span>Followers</span></div>
            </div>
            <button className="creator-profile__follow" type="button" aria-pressed={isFollowing} onClick={() => setIsFollowing(!isFollowing)}>
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </section>

      <main className="creator-profile-results" aria-label="Creator courses">
        <div className="creator-profile-results__inner">
          <div className="creator-profile-toolbar">
            <div className="creator-profile-toolbar__filters">
              <ProfileFilter icon={searchFilterIcon} label="Filter" value={filter} options={filterOptions} onChange={setFilter} />
              <ProfileFilter icon={searchLevelIcon} label="Level" value={level} options={levelOptions} onChange={setLevel} />
              <ProfileFilter icon={searchCategoryIcon} label="Category" value={category} options={categoryOptions} onChange={setCategory} />
            </div>
            <ProfileFilter icon={searchSortIcon} label="Most relevant" value={sort} options={sortOptions} onChange={setSort} />
          </div>
          <div className="creator-profile-course-grid" aria-live="polite">
            {visibleCourses.map((course) => <CourseCard course={course} key={course.title} showDetailsLink={false} creatorHref="/creators/purepearl-studio" />)}
            {visibleCourses.length === 0 && <p className="creator-profile-course-grid__empty">No courses match these filters.</p>}
          </div>
        </div>
      </main>

      <SiteFooter isSubscribed={isSubscribed} onSubscribe={() => setIsSubscribed(true)} />
    </div>
  )
}