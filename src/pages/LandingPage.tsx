import { useState } from 'react'
import { courses } from '../components/landing/landingData'
import { CategoriesSection } from '../components/landing/CategoriesSection'
import { CreatorCtaSection } from '../components/landing/CreatorCtaSection'
import { CoursesSection } from '../components/landing/CoursesSection'
import { GrowthSection } from '../components/landing/GrowthFeatureSection'
import { HeroSection } from '../components/landing/HeroSection'
import { PartnerStrip } from '../components/landing/PartnerStrip'
import { SiteFooter } from '../components/landing/SiteFooter'
import { TestimonialsSection } from '../components/landing/TestimonialsSection'

export function LandingPage() {
  const [activeCategory, setActiveCategory] = useState('Featured')
  const [searchTerm, setSearchTerm] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const filteredCourses = courses.filter((course) => {
    const matchesCategory = activeCategory === 'Featured' || course.category === activeCategory
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    return matchesCategory && matchesSearch
  })

  const selectCategory = (category: string) => {
    const filters: Record<string, string> = {
      Design: 'Graphic Design',
      Development: 'Web Development',
      'IT & Software': 'Data Science',
    }

    setActiveCategory(filters[category] ?? category)
  }

  return (
    <>
      <HeroSection searchTerm={searchTerm} onSearchChange={setSearchTerm} onSearchSubmit={() => setActiveCategory('Featured')} />
      <PartnerStrip />
      <CoursesSection
        activeCategory={activeCategory}
        courses={filteredCourses}
        onCategoryChange={setActiveCategory}
      />
      <CategoriesSection onSelectCategory={selectCategory} />
      <GrowthSection />
      <CreatorCtaSection />
      <TestimonialsSection />
      <SiteFooter isSubscribed={isSubscribed} onSubscribe={() => setIsSubscribed(true)} />
    </>
  )
}