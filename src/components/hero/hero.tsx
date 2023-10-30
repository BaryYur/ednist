import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

// styled components
import { Container, LinkButton } from 'theme/elements'
import * as Elements from './elements'

const SLIDER_SETTINGS = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  fade: true,
  speed: 750,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: () => <div className="slick-custom-dot" />,
}

interface IProps {
  title?: string
  description?: string|null
  showLearnMore?: boolean
  fullScreen?: boolean,
}

export const Hero = (props: IProps) => {
  const { t } = useTranslation()

  const {
    fullScreen,
    title,
    description,
    showLearnMore
  } = props

  return <Elements.Wrapper>
    <Elements.SliderContainer fullScreen={fullScreen}>
      <Slider {...SLIDER_SETTINGS}>
        <Elements.SliderItem fullScreen={fullScreen} item={1} />
        <Elements.SliderItem fullScreen={fullScreen} item={2} />
        <Elements.SliderItem fullScreen={fullScreen} item={3} />
      </Slider>
    </Elements.SliderContainer>
    <Elements.InnerContainer fullScreen={fullScreen}>
      <Container>
        {
          title && <Elements.Title>
            {t(title)}
          </Elements.Title>
        }
        {
          description && <Elements.Text>
            {t('description')}
          </Elements.Text>
        }
        {
          showLearnMore && <LinkButton to="/about-us">
            {t('Learn more')}
          </LinkButton>
        }
      </Container>
    </Elements.InnerContainer>
  </Elements.Wrapper>
}

Hero.defaultProps = {
  title: 'Global construction',
  description: `As one of the area’s highest-rated general contractors,
    we take immense pride in our work and that pride shines
    through in all of our projects. In each project we undertake,
    our primary goal is to maximize customer
    satisfaction through the quality of our work.`,
  showLearnMore: false,
  fullScreen: false,
}
