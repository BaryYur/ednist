import { useTranslation } from 'react-i18next'

// components
import { Hero, OurPrinciples } from 'components'

export function AboutUs() {
  const { t } = useTranslation()

  return (
    <>
      <Hero title={t('About us')} description={null} />
      <OurPrinciples />
    </>
  )
}