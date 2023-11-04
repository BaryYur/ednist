import { useTranslation } from 'react-i18next'

//styled components
import { Container, SectionTitle } from 'theme/elements'
import * as Elements from './elements'

import ScrollAnimation from 'react-animate-on-scroll'
import { FADE_ANIMATION_DURATION } from '../../constant-variables'

export function AboutUsSection() {
  const { t } = useTranslation()

  return (
    <Container>
      <Elements.AboutUsContainer>
        <ScrollAnimation animateOnce duration={FADE_ANIMATION_DURATION} animateIn="fadeInUp">
          <SectionTitle>{t('About us')}</SectionTitle>
        </ScrollAnimation>
        <ScrollAnimation animateOnce duration={FADE_ANIMATION_DURATION} animateIn="fadeInUp">
          <Elements.AboutUsDescription>{t('Description')}</Elements.AboutUsDescription>
        </ScrollAnimation>
      </Elements.AboutUsContainer>
    </Container>
  )
}