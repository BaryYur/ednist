import { useContext, useEffect, useState } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

// context
import LanguageContext from '../../context/language'

// common components
import { Hero } from 'components'

// components
import Project from './project/project'

// hooks
import { useProject } from '../../hooks'

export function SingleProject () {
  const { id } = useParams()
  const navigate = useNavigate()
  const { language } = useContext(LanguageContext)
  const project = useProject(id)

  const [projectLanguage, setProjectLanguage] = useState(language)

  useEffect(() => {
    setProjectLanguage(language)

    if (!project) {
      navigate('/')
    }
  }, [language, project])

  if (!project) {
    return null
  }

  return (
    <>
      <Hero
        title={project.title}
        description={null}
      />
      <Project data={project} key={projectLanguage} />
    </>
  )
}