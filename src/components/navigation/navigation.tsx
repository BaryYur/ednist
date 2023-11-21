import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// styled components
import { breakpoints } from 'theme'
import { Container } from 'theme/elements'
import * as Elements from './elements'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

// components
import { SwitchLanguage } from 'components'
import BurgerMenu from './burger-menu/burger-menu'

// hooks
import { useBreakpoint, useScrollToTop } from 'hooks'

// images
import { logo } from 'assets/images'

// data
import { NAVIGATION_ITEMS, IRenderItemProps, IExtraProps } from './data'

// @ts-ignore
import pdf from '../../data/catalog.pdf'
import machines from '../../assets/images/common/avtopark.jpg'

export function Navigation() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const breakpoint = useBreakpoint()
  const { scrollToTop } = useScrollToTop()

  const onLogoClick = useCallback(() => {
    if (location?.pathname === '/') {
      window.location.reload()
    } else {
      navigate('/')
    }

    scrollToTop()
  }, [location])

  const renderItem = ({ path, title, isActive }: IRenderItemProps) => {
    const extraProps: IExtraProps = {}

    if (isActive) {
      extraProps.isActive = isActive
    }

    return <Elements.Item>
      <Elements.Link
        exact
        to={path}
        activeClassName="active"
        onClick={scrollToTop}
        {...extraProps}
      >
        {t(title)}
      </Elements.Link>
    </Elements.Item>
  }

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <Elements.LogoContainer>
          <Elements.LogoBoxIcon onClick={onLogoClick}>
            <Elements.Logo src={logo} alt="Yednist" />
            {breakpoint > breakpoints.phone && <Elements.LogoText>Єдність</Elements.LogoText>}
          </Elements.LogoBoxIcon>
          <SwitchLanguage />
        </Elements.LogoContainer>
        {
          breakpoint > breakpoints.phone ?
            <Elements.Nav>
              {NAVIGATION_ITEMS.map(renderItem)}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Elements.DownloadCatalogBtn href={pdf} target="_blank">
                  <FontAwesomeIcon icon={faCloudDownloadAlt} />
                  <span>{t('Catalog')}</span>
                </Elements.DownloadCatalogBtn>
                <Elements.DownloadCatalogBtn href={machines} target="_blank">
                  <FontAwesomeIcon icon={faCloudDownloadAlt} />
                  <span>{t('Cars')}</span>
                </Elements.DownloadCatalogBtn>
              </div>
            </Elements.Nav>
            : <BurgerMenu items={NAVIGATION_ITEMS} />
        }
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}