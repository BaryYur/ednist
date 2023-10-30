import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Menu = styled.ul<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  background: ${({ theme }) => theme.palette.white};
  padding: 5px;
  margin: 0;
  list-style-type: none;
  text-align: left;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      width: 100%;
  }
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
  font-size: 20px;
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

export const Burger = styled.button<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  
  &:hover {
    opacity: 0.8;
  }

  div {
    width: 100%;
    height: 4px;
    background: ${({ open, theme }) => open ? theme.primaryDarker : theme.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const DownloadCatalogBtn = styled.a<any>`
  display: flex;
  gap: 5px;
  margin-left: 10px;
  background: transparent;
  margin-top: 15px;
  padding: 10px 15px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  transition: all 0.5s linear;
  &:hover {
    color: ${({ theme }) => theme.textLighter};
    background-color: ${({ theme }) => theme.primaryDarker};
  }
`