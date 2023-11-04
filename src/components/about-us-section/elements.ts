import styled from 'styled-components'

export const AboutUsContainer = styled.div<any>`
  padding: 70px 0;
`

export const AboutUsDescription = styled.div<any>`
  font-size: 17px;
  text-align: center;
  color: ${({ theme }) => `${theme.textLight}`};
`