import { useCallback, useEffect, useState } from 'react'

import { useNavigate, useSearchParams } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import update from 'immutability-helper'
import InfiniteScroll from 'react-infinite-scroll-component'

import { IProject } from 'types'

// styled components
import { Container } from 'theme/elements'
import * as Elements from './elements'

// hooks
import { useProjects, useFiltersParams, IFilterResponse, IProjectsData } from 'hooks'

// constants
import { FADE_ANIMATION_DURATION } from 'constant-variables'

export function ProjectsInfiniteList() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [filters, setFilters]: IFilterResponse = useFiltersParams()

  const {
    projects,
    loadMore,
    currentPage,
    loading,
    hasMore
  }: IProjectsData = useProjects({ initialPage: 1, filters })

  const [currentProjects, setCurrentProjects] = useState<IProject[]>([])
  const [finishingFilter, setFinishingFilter] = useSearchParams({
    projectState: 'all'
  })
  let finishing = finishingFilter.get('projectState')

  const goToProject = useCallback((id) => {
    navigate(`/projects/${id}`)
  }, [])

  const onLoadMore = useCallback(() => {
    loadMore({ page: currentPage + 1 })
  }, [projects.length, currentPage])

  const toggleFilter = useCallback((index: number) => {
    setFilters(update(filters, {
      [index]: {
        active: {
          $set: !filters[index].active
        }
      }
    }))
  }, [filters])

  const getCurrentProjectByState = (state: string) => {
    setFinishingFilter(prev => {
      prev.set('projectState', state)

      return prev
    }, { replace: true })
  }

  const stateFilter = (paramProjects: any) => {
    if (finishingFilter.get('projectState') === 'all' || finishing === null) {
      setCurrentProjects(paramProjects)
    } else if (finishingFilter.get('projectState') === 'finished') {
      setCurrentProjects(paramProjects.filter(item => item.finished === true))
    } else if (finishingFilter.get('projectState') === 'unfinished') {
      setCurrentProjects(paramProjects.filter(item => item.finished === false))
    }
  }

  useEffect(() => {
    if (filters.length !== 0) {
      let filterProjects = projects.filter(item => item.country === filters[0].value)

      setCurrentProjects(filterProjects)
      stateFilter(filterProjects)
    } else {
      setCurrentProjects(projects)
      stateFilter(projects)
    }
  }, [projects, filters, finishingFilter])

  const renderItem = useCallback((item, index) => {
    return <Elements.ProjectItemAnimateContainer
      animateOnce
      duration={FADE_ANIMATION_DURATION}
      animateIn="fadeIn"
    >
      <Elements.ProjectItem
        onClick={goToProject.bind(null, item.id)}
        key={`project-item-${index}`}
        bg={item?.images?.[0]}
      >
        <Elements.ProjectHoverBox>
          <Elements.ProjectTitle>{t(item.title)}</Elements.ProjectTitle>
        </Elements.ProjectHoverBox>
      </Elements.ProjectItem>
    </Elements.ProjectItemAnimateContainer>
  }, [goToProject])

  const renderFilterItem = useCallback(({ key, active, value }, index) => {
    return <Elements.FilterItem
      onClick={() => toggleFilter(index)}
      className={active ? 'active' : ''}
      key={`filter-item-${key}`}
    >
      <Elements.FilterKey>
        {key}:
      </Elements.FilterKey>
      <Elements.FilterValue>
        {value}
      </Elements.FilterValue>
    </Elements.FilterItem>
  }, [filters])

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <Elements.FilterButtonsContainer>
          {
            filters.length > 0 && <Elements.FiltersContainer>
              {filters.map(renderFilterItem)}
            </Elements.FiltersContainer>
          }
          <Elements.FilterBtns>
            <button
              className={(finishing !== 'all' || finishing === null || finishing === undefined) ? 'active-btn' : ''}
              onClick={() => getCurrentProjectByState('all')}
            >{t('All')}</button>
            <button
              className={finishing !== 'finished' ? 'active-btn' : ''}
              onClick={() => getCurrentProjectByState('finished')}
            >{t('Finished')}</button>
            <button
              className={finishing !== 'unfinished' ? 'active-btn' : ''}
              onClick={() => getCurrentProjectByState('unfinished')}
            >{t('Unfinished')}</button>
          </Elements.FilterBtns>
        </Elements.FilterButtonsContainer>
        <InfiniteScroll
          dataLength={currentProjects?.length}
          next={onLoadMore}
          loader={<Elements.LoadingText>{t('Loading')}...</Elements.LoadingText>}
          hasMore={!loading && hasMore}
        >
          <Elements.ProjectsList>
            {currentProjects?.map(renderItem)}
          </Elements.ProjectsList>
        </InfiniteScroll>
        {currentProjects.length === 0 && loading && <Elements.NothingFoundTitle>{t('Not found projects')}</Elements.NothingFoundTitle>}
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}
