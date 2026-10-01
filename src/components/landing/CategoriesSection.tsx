import { categories, type LandingCategory } from './landingData'

interface CategoriesSectionProps {
  onSelectCategory: (category: string) => void
}

export function CategoriesSection({ onSelectCategory }: CategoriesSectionProps) {
  return (
    <section className="categories-section" id="categories" aria-labelledby="categories-title">
      <div className="section-container">
        <div className="section-intro section-intro--center categories-followup">
          <h2 id="categories-title">Explore Diverse Learning Paths at Bytespace</h2>
          <p>At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.</p>
        </div>
        <div className="category-grid category-grid--compact" aria-label="Popular course categories">
          {categories.map((category: LandingCategory) => (
            <button className="category-tile" type="button" onClick={() => {
              onSelectCategory(category.label)
              document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })
            }} key={category.label}>
              <span className="category-tile__icon"><img src={category.icon} alt="" /></span>
              <span className="category-tile__label">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}