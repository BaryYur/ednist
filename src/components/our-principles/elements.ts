import styled from 'styled-components'

export const Wrapper = styled.div<any>`
  background: ${({ theme }) => theme.palette.grayLightest};
  overflow: hidden;
`

export const InnerContainer = styled.div<any>`
  padding: 70px 0;
`

export const SliderContainer = styled.div<any>`
  margin-top: 50px;
`

export const SliderItem = styled.div<any>`
  padding: 0 40px;
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
`