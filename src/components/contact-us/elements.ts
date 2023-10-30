import styled from 'styled-components'

export const Wrapper = styled.div<any>`
  background: ${({ theme }) => `${theme.gradient}`};
  padding: 50px 0;
  color: rgba(255, 255, 255, 0.75);
  overflow: hidden;
`

export const InnerContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div<any>`
  position: relative;
  padding-bottom: 15px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 36px;
  color: ${({ theme }) => `${theme.textLighter}`};
  &:after {
    position: absolute;
    content: '';
    background: rgba(255, 255, 255, 0.3);
    height: 4px;
    width: 60px;
    bottom: 0;
    left: 0;
  }
`

export const SubTitle = styled.p<any>`
  font-size: 16px;
`

export const InputContainer = styled.div<any>`
  width: 50%;
  &:first-child {
    padding-right: 10px;
  }
  &:last-child {
    padding-left: 10px;
  }
`

export const Input = styled.input<any>`
  display: block;
  width: 100%;
  padding: 6px 12px;
  font-size: 16px;
  color: ${({ theme }) => `${theme.textLight}`};
  background-color: ${({ theme }) => `${theme.background}`};
  background-image: none;
  border: 1px solid ${({ theme }) => `${theme.line}`};
  border-radius: 0;
  box-shadow: none;
  transition: none;
  outline: none;
`

export const ContactInfoWrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-left: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-left: 0;
  }
`

export const ContactInfoList = styled.ul<any>`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`

export const ContactInfoTitle = styled.h3<any>`
  margin: 0 0 20px;
  font-weight: 400;
  color: ${({ theme }) => `${theme.textLighter}`};
`

export const ContactInfoItem = styled.li<any>`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  margin: 0 10px 25px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
    margin: 10px 0;
    text-align: center;
  }
`

export const ContactInfoItemTitle = styled.p<any>`
  margin: 0 0 10px;
  color: ${({ theme }) => `${theme.textLighter}`};
`

export const ContactInfoIcon = styled.span<any>`
  margin-right: 12px;
`

export const ContactInfo = styled.span<any>``

export const ContactInfoLink = styled.a<any>`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
`

export const Line = styled.div<any>`
  width: 100%;
  height: 1px;
  margin: 30px 0 50px;
  background: ${({ theme }) => theme.line};
  opacity: 0.15;
`

export const SocialIconList = styled.ul<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const SocialIconItem = styled.li<any>`
  margin: 0 5px;
  padding: 0;
  list-style-type: none;
`

export const SocialItemInnerContainer = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SocialIconLink = styled.a<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.white};
  transition: all 0.3s;
  color: ${({ theme }) => theme.palette.white};
  font-size: 22px;
  &:hover {
    background: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.primary};
  }
`