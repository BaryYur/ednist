import { Link } from 'react-router-dom'

// styled components
import * as Elements from './elements'

export function NotFound () {
  return (
    <Elements.NotFoundPageWrapper>
      <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to="/">Back to home</Link>
      </div>
    </Elements.NotFoundPageWrapper>
  )
}