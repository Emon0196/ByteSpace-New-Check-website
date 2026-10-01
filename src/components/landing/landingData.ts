import studentOne from '../../assets/figma/hero-avatar-1.png'
import studentTwo from '../../assets/figma/hero-avatar-2.png'
import studentThree from '../../assets/figma/hero-avatar-3.png'
import studentFour from '../../assets/figma/hero-avatar-4.png'
import studentFive from '../../assets/figma/hero-avatar-5.png'
import studentSix from '../../assets/figma/hero-avatar-6.png'
import studentSeven from '../../assets/figma/hero-avatar-7.png'
import categoryDesignIcon from '../../assets/figma/section3-category-design.svg'
import categoryDevelopmentIcon from '../../assets/figma/section3-category-development.svg'
import categorySoftwareIcon from '../../assets/figma/section3-category-software.svg'
import categoryBusinessIcon from '../../assets/figma/section3-category-business.svg'
import categoryMarketingIcon from '../../assets/figma/section3-category-marketing.svg'
import categoryPhotographyIcon from '../../assets/figma/section3-category-photography.svg'
import courseImageOne from '../../assets/figma/section2-course-1.png'
import courseImageTwo from '../../assets/figma/section2-course-2.png'
import courseImageThree from '../../assets/figma/section2-course-3.png'
import courseImageFour from '../../assets/figma/section2-course-4.png'
import courseImageFive from '../../assets/figma/section2-course-5.png'
import courseImageSix from '../../assets/figma/section2-course-6.png'
import testimonialSarah from '../../assets/figma/testimonial-sarah.png'
import testimonialJames from '../../assets/figma/testimonial-james.png'
import testimonialAlex from '../../assets/figma/testimonial-alex.png'

export interface Course {
  title: string
  image: string
  category: string
}

export interface LandingCategory {
  label: string
  icon: string
}

export interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
}

export const students = [studentOne, studentTwo, studentThree, studentFour, studentFive, studentSix, studentSeven]

export const courseCategoryRows = [
  ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'],
  ['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking', '+ More'],
]

export const courses: Course[] = [
  { title: 'Learn Figma from Basic', image: courseImageOne, category: 'UI/UX Design' },
  { title: 'Build Digital Asset', image: courseImageTwo, category: 'Graphic Design' },
  { title: 'the Power of Big Data', image: courseImageThree, category: 'Data Science' },
  { title: 'Balancing Productivity and Self-Care', image: courseImageFour, category: 'Productivity' },
  { title: 'Mastering Money Management', image: courseImageFive, category: 'Business' },
  { title: 'From Idea to Startup Success', image: courseImageSix, category: 'Marketing' },
]

export const categories: LandingCategory[] = [
  { label: 'Design', icon: categoryDesignIcon },
  { label: 'Development', icon: categoryDevelopmentIcon },
  { label: 'IT & Software', icon: categorySoftwareIcon },
  { label: 'Business', icon: categoryBusinessIcon },
  { label: 'Marketing', icon: categoryMarketingIcon },
  { label: 'Photography', icon: categoryPhotographyIcon },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    image: testimonialSarah,
    quote: 'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    image: testimonialJames,
    quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    image: testimonialAlex,
    quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
]