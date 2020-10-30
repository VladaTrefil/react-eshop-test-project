import styled from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => theme.elements.wrapper}
`

export const PageTitle = styled.div`
  ${({ theme }) => theme.elements.pageTitle}
`

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Main = styled.div`
  width: calc(65% - 30px);
  margin-right 30px;
`

export const Sub = styled.div`
  width: 35%;
`
