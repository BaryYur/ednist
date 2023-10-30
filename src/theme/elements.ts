import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Screen = styled.div<any>`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 width: 100%;
 min-height: 100vh;
`

export const Container = styled.div<any>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`

export const Button = styled.button<any>`
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textLighter};
  background-color: ${({ theme }) => theme.primary};
  background-image: ${({ theme }) => theme.gradient};
  padding: 14px 34px;
  letter-spacing: 1px;
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.5s linear;
  border: 0;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.textLighter};
    background-image: none;
    background-color: ${({ theme }) => theme.primaryDarker};
  }
`

export const SecondaryButton = styled(Button)<any>`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
`

export const LinkButton = styled(RouterLink)<any>`
  display: inline-block;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.textLighter};
  background-color: ${({ theme }) => theme.primary};
  background-image: ${({ theme }) => theme.gradient};
  padding: 14px 34px;
  letter-spacing: 1px;
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.5s linear;
  border: 0;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.textLighter};
    background-image: none;
    background-color: ${({ theme }) => theme.primaryDarker};
  }
`

export const SectionTitle = styled.h2<any>`
  position: relative;
  text-transform: uppercase;
  margin: 0 0 20px;
  font-weight: 700;
  font-size: 36px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  &:after {
    position: absolute;
    content: '';
    background: ${({ theme }) => theme.gradient};
    height: 4px;
    width: 60px;
    bottom: 0;
    margin-left: -30px;
    left: 50%;
  }
`
