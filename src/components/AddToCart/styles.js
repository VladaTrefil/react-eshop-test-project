import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Button = styled.div`
  ${({ theme }) => theme.elements.button}
  width: 100%;
  text-align: center;
  margin-left: 30px;
`
