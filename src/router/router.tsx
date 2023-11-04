import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

// pages
import { Home, SingleProject, Projects, NotFound } from 'pages'

// components
import { ContactUs, Footer, Navigation } from 'components'

// styled components
import { Screen } from 'theme/elements'

export function Router() {
  return (
    <BrowserRouter>
      <Screen>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route path="*"  element={<NotFound />} />
        </Routes>
        <ContactUs />
        <Footer />
      </Screen>
    </BrowserRouter>
  );
}
