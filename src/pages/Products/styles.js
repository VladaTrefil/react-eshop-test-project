import styled from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => theme.elements.wrapper}
`

export const PageTitle = styled.div`
  ${({ theme }) => theme.elements.pageTitle}
`

export const FilterHolder = styled.div`
  margin-bottom: 20px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.subtleLight};
  padding: 10px;
`
