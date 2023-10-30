import { useParams } from "react-router-dom"

// common components
import { Hero } from 'components'

// components
import Project from './project/project'

// hooks
import { useProject } from '../../hooks'

export function SingleProject () {
  const { id } = useParams()
  const project = useProject(id)

  return (
    <>
      <Hero
        title={project.title}
        description={null}
      />
      <Project data={project} />
    </>
  )
}