import styled from 'styled-components'

export const NotFoundPageWrapper = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & h1 {
    text-align: center;
    color: dimgrey;
    font-size: 100px;
    margin: 0;
  }
  
  & h2 {
    color: dimgrey;
    margin: 0;
    font-size: 30px;
    font-weight: 200;
  }
  
  & a {
    display: block;
    margin: 10px 15px;
    text-align: center;
    background: transparent;
    padding: 10px 15px;
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    transition: all 0.5s linear;
    text-transform: uppercase;
    font-size: 14px;
    &:hover {
      color: ${({ theme }) => theme.textLighter};
      background-color: ${({ theme }) => theme.primaryDarker};
    }
  }
`