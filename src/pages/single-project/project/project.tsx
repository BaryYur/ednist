import { useCallback, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import Slider from 'react-slick'

// styled components
import * as Elements from './elements'
import { Container } from 'theme/elements'

// images
import Images from 'assets/images/data/projects'

// types
import { IProject } from 'types'

interface IProps {
  data: IProject
}

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 700,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: () => <div className="slick-custom-dot" />,
}

export default function Project (props: IProps) {
  const history = useHistory()
  const { data: project } = props

  const images = Images[project.id]

  const goToProjectsByCountry = useCallback((country) => {
    history.push(`/projects?country=${country}`)
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
        {project.country}
      </Elements.Country>
    </Elements.SliderWrapper>
  }, [renderSliderItem, images])

  const renderInfo = useCallback(() => {
    return <Elements.InfoContainer>
      <Elements.Title>{project.title}</Elements.Title>
      <Elements.Description>{project.description}</Elements.Description>
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