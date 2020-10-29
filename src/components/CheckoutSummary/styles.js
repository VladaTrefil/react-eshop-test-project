import styled from 'styled-components'

export const Button = styled.div`
  ${({ theme }) => theme.elements.button}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerLegend = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 10px 20px;
`
