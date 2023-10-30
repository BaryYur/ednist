import styled from 'styled-components'

export const Container = styled.ul<any>`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const Item = styled.div<any>`
  margin: 0 5px;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #a09c9c;
  color: ${({ theme }) => theme.textLighter};
  transition: all 0.2s ease;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  &.active {
     background-color: ${({ theme }) => theme.primary};
  }
`