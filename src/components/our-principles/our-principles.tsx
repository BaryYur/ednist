import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

// components
import Slider from 'react-slick'
import ScrollAnimation from 'react-animate-on-scroll'

// styled components
import * as Elements from './elements'
import { Container, SectionTitle } from 'theme/elements'

// constants
import { FADE_ANIMATION_DURATION } from 'constant-variables'

// data
import { OUR_PRINCIPLES } from './data'

const SLIDER_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 700,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export function OurPrinciples() {
  const { t, i18n } = useTranslation()

  const principles = OUR_PRINCIPLES[i18n.language]

  const renderItem = useCallback((item, key) => {
    return <Elements.SliderItem key={`principle-slider-item-${key}`}>
      <Elements.ItemTitle>
        {item.title}
      </Elements.ItemTitle>
      <Elements.ItemDescription>
        {item.description}
      </Elements.ItemDescription>
    </Elements.SliderItem>
  }, [])

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <ScrollAnimation animateOnce duration={FADE_ANIMATION_DURATION} animateIn="fadeInUp">
          <SectionTitle>
            {t('Our working principles')}
          </SectionTitle>
        </ScrollAnimation>
        <ScrollAnimation animateOnce duration={FADE_ANIMATION_DURATION} animateIn="fadeInUp">
          <Elements.SliderContainer>
            <Slider {...SLIDER_SETTINGS}>
              {principles.map(renderItem)}
            </Slider>
          </Elements.SliderContainer>
        </ScrollAnimation>
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}
