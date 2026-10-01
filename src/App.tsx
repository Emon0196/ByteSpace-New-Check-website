import { SiteLayout } from './layouts/SiteLayout'
import { LandingPage } from './pages/LandingPage'
import { SearchPage } from './pages/SearchPage'
import { CourseDetailsPage } from './pages/CourseDetailsPage'
import { CreatorProfilePage } from './pages/CreatorProfilePage'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  return (
    <SiteLayout>
      {path === '/courses' ? <SearchPage /> : path === '/courses/build-digital-asset/lessons' ? <CourseDetailsPage initialTab="Lesson" /> : path === '/courses/build-digital-asset' ? <CourseDetailsPage /> : path === '/creators/purepearl-studio' ? <CreatorProfilePage /> : <LandingPage />}
    </SiteLayout>
  )
}

export default App
