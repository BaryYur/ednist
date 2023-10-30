import styled from 'styled-components'

export const Wrapper = styled.div<any>`
  background: ${({ theme }) => `${theme.palette.white}`};
  overflow: hidden;
`

export const InnerContainer = styled.div<any>`
  padding: 70px 0;
`

export const ProjectsList = styled.ul<any>`
  display: flex;
  flex-wrap: wrap;
  margin: 60px 0 0;
  padding: 0;
  list-style-type: none;
`

export const ProjectItem = styled.li<any>`
  width: 33.33333333%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    width: 100%;
  }
`

export const ProjectItemInnerContainer = styled.div<any>`
  padding: 60% 0 0;
  position: relative;
  overflow: hidden;
  background: url(${({ bg }) => bg}) no-repeat center/cover;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.white};
 
  &:hover {
    & > div {
      opacity: 1;
    }
    & h4 {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    & > div {
      opacity: 1;
    }
    & h4 {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const ProjectHoverBox = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  transition: all 0.2s ease;
  cursor: pointer;
  opacity: 0;
  background: ${({ theme }) => theme.opacityGradient};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background: ${({ theme }) => theme.lighterOpacityPrimary};
    &:hover {
      background: ${({ theme }) => theme.opacityPrimary};
    }
  }
`

export const ProjectTitle = styled.h4<any>`
  color: ${({ theme }) => theme.palette.white};
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  transform: translateY(100%);
  transition: all 0.3s;
  text-align: center;
  opacity: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`

export const ButtonContainer = styled.div<any>`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`
