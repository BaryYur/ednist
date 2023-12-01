import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'

// hooks
import { useScrollToTop } from 'hooks'

// styled components
import * as Elements from './elements'
import { Container } from 'theme/elements'

// images
import Images from 'assets/images/data/projects'

// types
import { IProject } from 'types'
import { useTranslation } from 'react-i18next'

interface IProps {
  data: IProject
}

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  arrows: true,
  autoplay: true,
  speed: 700,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: () => <div className="slick-custom-dot" />,
}

export default function Project (props: IProps) {
  const navigate = useNavigate()
  const { data: project } = props
  const { scrollToTop } = useScrollToTop()
  const { t } = useTranslation()

  const images = Images[project.id]

  const goToProjectsByCountry = useCallback((country) => {
    navigate(`/projects?country=${country}`)
    scrollToTop()
  }, [])

  const renderSliderItem = useCallback((item, index) => {
    return <Elements.SliderItem
      key={`project-slider-item-${index}`}
      path={item}
    />
  }, [])

  const sliderSettings = useMemo(() => ({...SLIDER_SETTINGS, dots: images.length < 5 }), [images.length])

  const renderSlider = useCallback(() => {
    return <Elements.SliderWrapper>
      <Elements.SliderContainer>
        <Slider {...sliderSettings}>
          {images.map(renderSliderItem)}
        </Slider>
      </Elements.SliderContainer>
      <Elements.Country onClick={() => goToProjectsByCountry(project.country)}>
        {t(`Value-country-${project.country}`)}
      </Elements.Country>
    </Elements.SliderWrapper>
  }, [renderSliderItem, images])

  const renderInfo = useCallback(() => {
    return <Elements.InfoContainer>
      <Elements.Title>{t(project.title)}</Elements.Title>
      <Elements.Description>{
        t(`Description-${project.title}`).split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </Elements.Description>
    </Elements.InfoContainer>
  }, [])

  return (
    <Elements.Container>
      <Container>
        <Elements.InnerContainer>
          {renderSlider()}
          {renderInfo()}
        </Elements.InnerContainer>
      </Container>
    </Elements.Container>
  )
}