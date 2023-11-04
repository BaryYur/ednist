import { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'

// components
import ScrollAnimation from 'react-animate-on-scroll'

// styled components
import { Container } from 'theme/elements'
import * as Elements from './elements'

// constants
import {
  ADDRESS,
  EMAILS,
  PHONE_NUMBERS,
  FORMATTED_PHONE_NUMBERS,
  FADE_ANIMATION_DURATION,
} from 'constant-variables'

// utils
import { calcItemAnimationDuration } from 'utils'

const CONTACT_INFO_ITEMS = [
  {
    title: 'Address',
    value: ADDRESS,
    icon: faMapMarkerAlt
  },
  {
    title: 'Phone',
    value: FORMATTED_PHONE_NUMBERS,
    icon: faPhoneAlt,
  },
  {
    title: 'Email',
    value: EMAILS,
    icon: faEnvelope,
  },
]

const SOCIAL_ITEMS = [
  {
    href: 'https://facebook.com',
    icon: faFacebookF
  },
  {
    href: 'https://twitter.com',
    icon: faTwitter
  },
]

export function ContactUs() {
  const { t } = useTranslation()

  const renderContactItem = useCallback((item) => {
    return <Elements.ContactInfoItem key={`contact-item-${item.title}`}>
      <Elements.ContactInfoItemTitle>
        <Elements.ContactInfoIcon>
          <FontAwesomeIcon icon={item.icon} />
        </Elements.ContactInfoIcon>
        {t(item.title)}
      </Elements.ContactInfoItemTitle>
      {
        item.href && <Elements.ContactInfoLink href={item.href}>
          {t(item.value)}
        </Elements.ContactInfoLink>
      }
      {!item.href && item.title !== 'Email' && item.title !== 'Phone' && <Elements.ContactInfo>
          {t(item.value)}
        </Elements.ContactInfo>
      }
      {item.title === 'Email' && (
        item.value.map(item => (
          <div style={{ margin: "5px 0" }}>
            <Elements.ContactInfoLink href={`mailto:${item}`}>{item}</Elements.ContactInfoLink>
          </div>
        ))
      )}
      {item.title === 'Phone' && (
        item.value.map((item, index) => (
          <div style={{ margin: "5px 0" }}>
            <Elements.ContactInfoLink href={`tel:${PHONE_NUMBERS[index]}`}>{item}</Elements.ContactInfoLink>
          </div>
        ))
      )}
    </Elements.ContactInfoItem>
  }, [])

  const renderSocialItem = useCallback((item, index) => {
    return <Elements.SocialIconItem key={`social-item-${index}`}>
      <ScrollAnimation animateOnce duration={calcItemAnimationDuration(index)} animateIn="fadeInUp">
        <Elements.SocialItemInnerContainer>
          <Elements.SocialIconLink target="_blank" href={item.href}>
            <FontAwesomeIcon icon={item.icon} />
          </Elements.SocialIconLink>
        </Elements.SocialItemInnerContainer>
      </ScrollAnimation>
    </Elements.SocialIconItem>
  }, [])

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <Elements.ContactInfoWrapper>
          <ScrollAnimation animateOnce duration={FADE_ANIMATION_DURATION} animateIn="fadeInUp">
            <Elements.ContactInfoList>
              {CONTACT_INFO_ITEMS.map(renderContactItem)}
            </Elements.ContactInfoList>
          </ScrollAnimation>
        </Elements.ContactInfoWrapper>
        <Elements.Line />
        <Elements.SocialIconList>
          {SOCIAL_ITEMS.map(renderSocialItem)}
        </Elements.SocialIconList>
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}