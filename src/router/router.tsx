import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

// pages
import { Home, SingleProject, Projects } from 'pages'

// components
import { ContactUs, Footer, Navigation } from 'components'

// styled components
import { Screen } from 'theme/elements'

export function Router() {
  return (
    <BrowserRouter>
      <Screen>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projects/:id">
            <SingleProject />
          </Route>
        </Switch>
        <ContactUs />
        <Footer />
      </Screen>
    </BrowserRouter>
  );
}
