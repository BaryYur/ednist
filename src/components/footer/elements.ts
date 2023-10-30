import styled from 'styled-components'

export const Wrapper = styled.div<any>`
  background: ${({ theme }) => `${theme.palette.grayLightest}`};
  padding: 10px 0;
`

export const InnerContainer = styled.div<any>`
  display: flex;
  justify-content: center;
`

export const CopyrightText = styled.p<any>`
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => `${theme.textLight}`};
`