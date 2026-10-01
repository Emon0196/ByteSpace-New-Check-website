import { useMemo, useState, type FormEvent } from 'react'
import searchArrowNext from '../assets/figma/search-arrow-next.svg'
import searchArrowPrev from '../assets/figma/search-arrow-prev.svg'
import searchCategoryIcon from '../assets/figma/search-category.svg'
import searchChevronDown from '../assets/figma/search-chevron-down.svg'
import searchFieldIcon from '../assets/figma/search-field-icon.svg'
import searchFilterIcon from '../assets/figma/search-filter.svg'
import searchLevelIcon from '../assets/figma/search-level.svg'
import searchSortIcon from '../assets/figma/search-sort.svg'
import heroFrameBackground from '../assets/figma/hero-frame-background.svg'
import { CourseCard } from '../components/landing/CoursesSection'
import { courses } from '../components/landing/landingData'
import { SiteFooter } from '../components/landing/SiteFooter'
import { SiteHeader } from '../components/site/SiteHeader'

const searchTabs = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Cooking']
const catalog = Array.from({ length: 90 }, (_, index) => {
  const course = courses[index % courses.length]
  return { ...course, id: `${course.title}-${index}` }
})
const pageSize = 18
const filterOptions = ['All', 'Beginner']
const levelOptions = ['All levels', 'Beginner']
const categoryOptions = ['All categories', ...searchTabs.filter((tab) => tab !== 'Featured')]
const sortOptions = ['Most relevant', 'Newest', 'A to Z']
const typeOptions = ['Courses', 'Creators']

interface ChipMenuProps {
  icon: string
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

function ChipMenu({ icon, label, value, options, onChange }: ChipMenuProps) {
  const display = value.startsWith('All') ? label : value

  return (
    <details className="search-chip">
      <summary>
        <img src={icon} alt="" />
        <span>{display}</span>
      </summary>
      <div className="search-chip__menu" role="listbox" aria-label={label}>
        {options.map((option) => (
          <button
            type="button"
            role="option"
            aria-selected={option === value}
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

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('Featured')
  const [filter, setFilter] = useState('All')
  const [level, setLevel] = useState('All levels')
  const [category, setCategory] = useState('All categories')
  const [sort, setSort] = useState('Most relevant')
  const [contentType, setContentType] = useState('Courses')
  const [page, setPage] = useState(1)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const filtered = useMemo(() => {
    if (contentType !== 'Courses') return []

    const selectedCategory = category === 'All categories' ? activeTab : category
    const matches = catalog.filter((course) => {
      const matchesTab = selectedCategory === 'Featured' || course.category === selectedCategory
      const matchesQuery = course.title.toLowerCase().includes(query.trim().toLowerCase())
      const matchesLevel = level === 'All levels' || level === 'Beginner'
      const matchesFilter = filter === 'All' || filter === 'Beginner'
      return matchesTab && matchesQuery && matchesLevel && matchesFilter
    })

    if (sort === 'A to Z') return [...matches].sort((a, b) => a.title.localeCompare(b.title))
    if (sort === 'Newest') return [...matches].reverse()
    return matches
  }, [activeTab, category, contentType, filter, level, query, sort])

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pageCount)
  const visibleCourses = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  const pages = Array.from({ length: Math.min(5, pageCount) }, (_, index) => index + 1)

  const applySearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery(searchTerm)
    setPage(1)
  }

  const changeTab = (tab: string) => {
    setActiveTab(tab)
    setCategory('All categories')
    setPage(1)
  }

  return (
    <div className="search-page">
      <section className="search-hero" aria-labelledby="search-title">
        <img className="hero-grid" src={heroFrameBackground} alt="" aria-hidden="true" />
        <SiteHeader current="courses" />
        <div className="search-hero__copy">
          <h1 id="search-title">Find Your Next Course</h1>
          <form className="course-search search-hero__form" role="search" onSubmit={applySearch}>
            <label className="course-search__field">
              <img src={searchFieldIcon} alt="" aria-hidden="true" />
              <input aria-label="Search courses" type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search" />
            </label>
            <details className="search-type">
              <summary>
                <span>{contentType}</span>
                <img src={searchChevronDown} alt="" />
              </summary>
              <div className="search-chip__menu">
                {typeOptions.map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={(event) => {
                      setContentType(option)
                      setPage(1)
                      event.currentTarget.closest('details')?.removeAttribute('open')
                    }}
                  >{option}</button>
                ))}
              </div>
            </details>
          </form>
        </div>
      </section>

      <section className="search-results" aria-label="Course results">
        <div className="section-container">
          <div className="search-toolbar">
            <div className="search-toolbar__filters">
              <ChipMenu icon={searchFilterIcon} label="Filter" value={filter} options={filterOptions} onChange={(value) => { setFilter(value); setPage(1) }} />
              <ChipMenu icon={searchLevelIcon} label="Level" value={level} options={levelOptions} onChange={(value) => { setLevel(value); setPage(1) }} />
              <ChipMenu icon={searchCategoryIcon} label="Category" value={category} options={categoryOptions} onChange={(value) => { setCategory(value); setActiveTab(value === 'All categories' ? 'Featured' : value); setPage(1) }} />
            </div>
            <ChipMenu icon={searchSortIcon} label="Most relevant" value={sort} options={sortOptions} onChange={(value) => { setSort(value); setPage(1) }} />
          </div>

          <div className="search-tabs" role="group" aria-label="Filter courses by category">
            {searchTabs.map((tab) => (
              <button
                className={`course-tab${activeTab === tab ? ' is-active' : ''}`}
                type="button"
                aria-pressed={activeTab === tab}
                onClick={() => changeTab(tab)}
                key={tab}
              >{tab}</button>
            ))}
          </div>

          <div className="course-grid" aria-live="polite">
            {visibleCourses.map((course) => <CourseCard course={course} key={course.id} />)}
            {visibleCourses.length === 0 && <p className="course-empty">{contentType === 'Creators' ? 'Creator profiles will appear here soon.' : 'No courses match that search.'}</p>}
          </div>

          <nav className="search-pagination" aria-label="Course pages">
            <button type="button" aria-label="Previous page" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>
              <img src={searchArrowPrev} alt="" />
            </button>
            {pages.map((pageNumber) => (
              <button
                className={`search-pagination__page${pageNumber === currentPage ? ' is-current' : ''}`}
                type="button"
                aria-current={pageNumber === currentPage ? 'page' : undefined}
                onClick={() => setPage(pageNumber)}
                key={pageNumber}
              >{pageNumber}</button>
            ))}
            <button type="button" aria-label="Next page" disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)}>
              <img src={searchArrowNext} alt="" />
            </button>
          </nav>
        </div>
      </section>

      <SiteFooter isSubscribed={isSubscribed} onSubscribe={() => setIsSubscribed(true)} />
    </div>
  )
}
