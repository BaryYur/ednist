import { useContext, useEffect, useState } from 'react'

import { useParams } from "react-router-dom"

import LanguageContext from '../../context/language'

// common components
import { Hero } from 'components'

// components
import Project from './project/project'

// hooks
import { useProject } from '../../hooks'

export function SingleProject () {
  const { id } = useParams()
  const { language } = useContext(LanguageContext)
  const project = useProject(id)

  const [projectLanguage, setProjectLanguage] = useState(language)

  useEffect(() => {
    setProjectLanguage(language)
  }, [language]);

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