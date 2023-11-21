import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

export const Wrapper = styled.div<any>`
  background: ${({ theme }) => `${theme.palette.white}`};
`

export const InnerContainer = styled.div<any>`
  padding: 70px 0;
`

export const ProjectsList = styled.div<any>`
  display: flex;
  flex-wrap: wrap;
`

export const ProjectItemAnimateContainer = styled(ScrollAnimation)<any>`
  position: relative;
  width: 33.33333333%;
  padding-top: 20%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 50%;
    padding-top: 30%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    width: 100%;
    padding-top: 66%;
  }
`

export const ProjectItem = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.grayLight} url(${({ bg }) => bg}) no-repeat center/cover;
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

export const FiltersContainer = styled.ul<any>`
  display: flex;
  margin: 0 0 20px;
  padding: 0;
  list-style-type: none;
`

export const FilterItem = styled.li<any>`
  position: relative;
  display: flex;
  padding: 5px 20px 5px 10px;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.textLight};
  font-weight: 400;
  cursor: pointer;
  transition: all 0.5s ease;
  background: ${({ theme }) => theme.palette.white};
  
  &:first-child {
    margin-left: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }
  
  &.active {
    color: ${({ theme }) => theme.textLighter};
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`

export const FilterKey = styled.span<any>`
  margin-right: 6px;
`

export const FilterValue = styled.span<any>`
  
`

export const NothingFoundTitle = styled.p<any>`
  text-align: center;
  color: grey;
`

export const FilterButtonsContainer = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  
  @media (max-width: 540px) {
    flex-direction: column;
  }
`

export const FilterBtns = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 1px;
  background-color: #a09c9c;
  border-radius: 20px;

  & button.active-btn {
    padding: 8.5px;
    width: 110px;
    border: none;
    color: white;
    font-weight: bold;
    background-color: #608dfd;
    cursor: pointer;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
  }

  & button.active-btn:hover {
    background-color: #608fdf;
  }

  & button {
    padding: 8.5px;
    width: 110px;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
    background-color: transparent;
  }

  & button:hover {
    background-color: rgba(211, 211, 211, 0.18);
  }

  @media (max-width: 540px) {
    width: 100%;

    & button {
      width: 33.3%;
    }
    
    & button.active-btn {
      width: 33.3%;
    }
  }
`

export const LoadingText = styled.p<any>`
  color: grey;
  text-align: center;
  font-size: 14px;
`