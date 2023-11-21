import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// styled components
import * as Elements from './elements'

// data
import { NavigationItems, IExtraProps, IRenderItemProps } from '../data'
import { useScrollBlock } from '../../../hooks/use-scroll-block'

// hooks
import { useScrollToTop } from 'hooks'

// @ts-ignore
import pdf from '../../../data/catalog.pdf'
import machines from '../../../assets/images/common/avtopark.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

interface IBurgerProps {
  open: boolean,
  setOpen: (boolean) => void
}

const Burger = ({ open, setOpen }: IBurgerProps) => {
  return (
    <Elements.Burger open={open} onClick={() => setOpen(!open)}>
      <div/>
      <div/>
      <div/>
    </Elements.Burger>
  )
}

interface IMenuProps {
  items: NavigationItems
  open: boolean
  setOpen: (boolean) => void
}

const Menu = ({ open, items, setOpen }: IMenuProps) => {
  const { t } = useTranslation()
  const { scrollToTop } = useScrollToTop()

  const onItemClick = useCallback(() => {
    setOpen(false)
  }, [])

  const renderItem = useCallback(({ path, title, isActive }: IRenderItemProps) => {
    const extraProps: IExtraProps = {}

    if (isActive) {
      extraProps.isActive = isActive
    }

    return <Elements.Item onClick={onItemClick}>
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
  }, [])

  return (
    <Elements.Menu open={open}>
      {items.map(renderItem)}
      <Elements.DownloadCatalogBtn href={pdf} target="_blank">
        <FontAwesomeIcon icon={faCloudDownloadAlt} />
        <span>{t('Catalog')}</span>
      </Elements.DownloadCatalogBtn>
      <Elements.DownloadCatalogBtn href={machines} target="_blank">
        <FontAwesomeIcon icon={faCloudDownloadAlt} />
        <span>{t('Cars')}</span>
      </Elements.DownloadCatalogBtn>
    </Elements.Menu>
  )
}

interface IProps {
  items: NavigationItems
}

export default function BurgerMenu({ items }: IProps) {
  const [open, setOpen] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()

  useEffect(() => {
    if (open) {
      blockScroll()
    } else {
      allowScroll()
    }
  }, [open])

  return <>
    <Burger open={open} setOpen={setOpen} />
    <Menu open={open} items={items} setOpen={setOpen} />
  </>
}
