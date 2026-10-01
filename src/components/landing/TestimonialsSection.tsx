import testimonialGlowOne from '../../assets/figma/testimonial-glow-1.svg'
import testimonialGlowTwo from '../../assets/figma/testimonial-glow-2.svg'
import testimonialGlowThree from '../../assets/figma/testimonial-glow-3.svg'
import { testimonials } from './landingData'

export function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <img className="testimonial-glow testimonial-glow--one" src={testimonialGlowOne} alt="" aria-hidden="true" />
      <img className="testimonial-glow testimonial-glow--two" src={testimonialGlowTwo} alt="" aria-hidden="true" />
      <img className="testimonial-glow testimonial-glow--three" src={testimonialGlowThree} alt="" aria-hidden="true" />
      <div className="testimonials-container">
        <div className="testimonials-heading">
          <h2 id="testimonials-title">Discover What Our Community Is Saying</h2>
          <p>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <img className="testimonial-card__avatar" src={testimonial.image} alt={`${testimonial.name}, ${testimonial.role}`} />
              <div><h3>{testimonial.name}</h3><p>{testimonial.role}</p></div>
              <blockquote>“{testimonial.quote}”</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}