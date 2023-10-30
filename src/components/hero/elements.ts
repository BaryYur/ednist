import styled from 'styled-components'

// images
import { hero1, hero2, hero3 } from 'assets/images'

const SLIDER_IMAGES = [hero1, hero2, hero3]

const FULL_SCREEN_HEIGHT = '100vh'
const NOT_FULL_SCREEN_HEIGHT = '70vh'

const getHeight = (fullScreen) => (
  fullScreen ? FULL_SCREEN_HEIGHT : NOT_FULL_SCREEN_HEIGHT
)

export const Wrapper = styled.header<any>`
  position: relative;
`

export const InnerContainer = styled.div<any>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 750px;
  height: ${({ fullScreen }) => getHeight(fullScreen)};
  margin: 0 auto;
  text-align: center;
`

export const SliderContainer = styled.div<any>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  & .slick-slider {
    height: ${({ fullScreen }) => getHeight(fullScreen)};
  }
  & .slick-dots {
    bottom: 0;
    z-index: 20;
    & .slick-custom-dot {
      width: 14px;
      height: 14px;
      background: ${({ theme }) => theme.line};
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    & .slick-active .slick-custom-dot {
      background: ${({ theme }) => theme.primary};
    }
  }
`

export const SliderItem = styled.div<any>`
  width: 100%;
  height: ${({ fullScreen }) => getHeight(fullScreen)};
  background: linear-gradient(-45deg, rgb(0, 0, 0, 0.5), rgb(96, 141, 253, 0.5)), 
  url(${({ item }) => SLIDER_IMAGES[item - 1]}) no-repeat center/cover fixed;
`

export const Title = styled.h1<any>`
  font-size: 82px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 70px 0 10px;
  color: ${({ theme }) => theme.textLighter};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
     font-size: 62px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
     font-size: 52px;
  }
  @media (max-width: 460px) {
     font-size: 42px;
  }
  @media (max-width: 400px) {
     font-size: 32px;
  }
`

export const Text = styled.p<any>`
  font-size: 22px;
  font-weight: 300;
  line-height: 30px;
  margin: 0 0 60px;
  color: ${({ theme }) => theme.textLighter};
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
     font-size: 18px;
  }
`
