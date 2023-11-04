import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div<any>`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background: ${({ theme }) => `${theme.palette.white}`};
  border-bottom: 1px solid rgba(231, 231, 231, 0);
  box-shadow: 0 0 10px rgb(0 0 0 / 15%);
  padding: 8px 0;
`

export const InnerContainer = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.ul<any>`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const Item = styled.li<any>`
  display: flex;
  align-items: center;
`

export const Link = styled(NavLink)<any>`
  position: relative;
  padding: 10px 4px;
  text-decoration: none;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  margin: 0 10px;
  color: ${({ theme }) => theme.textLight};
  &:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.gradient};
    content: '';
    transition: width 0.2s;
  }
  &:hover:after, &.active:after {
    width: 100%;
  }
`

export const LogoContainer = styled.div<any>`
  display: flex;
  align-items: center;
`

export const Logo = styled.img<any>`
  max-width: 500px;
  width: 40px;
  //margin-right: 35px;
  margin-right: 5px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 50px;
    margin: 0 20px;
  }
`

export const DownloadCatalogBtn = styled.a<any>`
  display: flex;
  gap: 5px;
  margin-left: 10px;
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
`

export const LogoBoxIcon = styled.div<any>`
  display: flex; 
  align-items: center; 
  cursor: pointer;
`

export const LogoText = styled.div<any>`
  font-size: 30px; 
  font-weight: 600; 
  margin-right: 10px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`