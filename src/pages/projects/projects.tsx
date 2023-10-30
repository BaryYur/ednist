import { useTranslation } from 'react-i18next'

// components
import { Hero } from 'components'
import { ProjectsInfiniteList } from './projects-infinite-list/projects-infinite-list'

export function Projects () {
  const { t } = useTranslation()

  return (
    <>
      <Hero title={t('Our Projects')} description={null} />
      <ProjectsInfiniteList />
    </>
  )
}