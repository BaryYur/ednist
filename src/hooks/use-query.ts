import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useQuery = () => {
  const location = useLocation()
  const [query, setQuery] = useState<URLSearchParams>(new URLSearchParams(location.search))

  useEffect(() => {
    setQuery(new URLSearchParams(location.search))
  }, [location.search])

  return query
}