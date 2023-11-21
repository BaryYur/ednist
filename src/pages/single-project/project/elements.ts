import styled from 'styled-components'

export const Container = styled.div<any>``

export const InnerContainer = styled.div<any>`
  display: flex;
  flex-wrap: wrap;
  padding: 70px 0;
`

export const SliderWrapper = styled.div<any>`
  width: 60%;
  padding-right: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallLaptop}px) {
    width: 100%;
    padding-right: 0;
  }
`

export const SliderContainer = styled.div<any>`
  position: relative;
  width: 100%;
  padding-top: 66%;
  margin-bottom: 20px;
  
  .slick-slider {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    & .slick-list, .slick-track, .slick-slide, .slick-slide div {
      height: 100%;
    }
    
    & .slick-prev {
    //  //left: 8px;
      z-index: 10;
      width: 25px;
      height: 26px;
      border-radius: 50%;
      background-color: white;
      left: 8px;
    }
    
    & .slick-next {
      //right: 12px;
      width: 25px;
      height: 26px;
      border-radius: 50%;
      background-color: white;
      right: 8px;
    }
    
    & .slick-prev::before,
    & .slick-next::before {
      color: #608dfd;
      font-size: 37px;
      opacity: 1;
      
      left: -5px;
      top: -4px;
      position: absolute;
    }
  }

  .slick-dots {
    bottom: 10px;
  }
  
  .slick-custom-dot {
    width: 20px;
    height: 4px;
    margin: 0 2px;
    background: ${({ theme }) => theme.line};
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  & .slick-active .slick-custom-dot {
    background: ${({ theme }) => theme.primary};
  }
`

export const SliderItem = styled.div<any>`
  width: 100%;
  height: 500px;
  background: url(${({ path }) => path}) no-repeat center/cover;
`

export const InfoContainer = styled.div<any>`
  width: 40%;
  padding-left: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallLaptop}px) {
    width: 100%;
    padding-left: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    //text-align: center;
  }
`

export const Title = styled.h2<any>`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`

export const Description = styled.p<any>`
  font-size: 18px;
  color: ${({ theme }) => theme.textLight};
  font-weight: 400;
  
  & p {
    margin: 5px 0;
    line-height: 19px;
  }
`

export const Country = styled.div<any>`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.textLight};
  font-weight: 400;
  cursor: pointer;
  transition: all 0.5s ease;
  background: ${({ theme }) => theme.palette.white};
  
  &:hover {
    color: ${({ theme }) => theme.textLighter};
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`
