import styled from 'styled-components'

export const Wrapper = styled.div<any>`
  background: ${({ theme }) => theme.palette.grayLightest};
  overflow: hidden;
`

export const InnerContainer = styled.div<any>`
  padding: 70px 27px;
  
  .slick-track {
    display: flex;
    align-items: center;
  }
`

export const SliderContainer = styled.div<any>`
  margin-top: 50px;
  padding: 0;
  
  & .slick-next::before,
  & .slick-prev::before {
    color: #608dfd;
    opacity: 1;
    font-size: 27px;
  }

  & .slick-next {
    margin-right: 5px;
  }
`

export const SliderItem = styled.div<any>`
  padding: 0 40px;

  @media (max-width: 800px) {
    padding: 0 5px;
  }
`

export const ItemTitle = styled.h3<any>`
  margin: 0 0 10px;
  font-size: 22px;
  text-align: center;
  color: ${({ theme }) => `${theme.text}`};
`

export const ItemDescription = styled.p<any>`
  margin: 0;
  font-size: 17px;
  text-align: center;
  color: ${({ theme }) => `${theme.textLight}`};
  
  @media (max-width: 800px) {
    font-size: 15px;
  }
`