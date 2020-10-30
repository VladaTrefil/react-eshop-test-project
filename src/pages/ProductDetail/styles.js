import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  ${({ theme }) => theme.elements.wrapper};
  text-align: center;
  padding-top: 60px;
`

export const PageTitle = styled.div`
  ${({ theme }) => theme.elements.pageTitle};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

export const Button = styled(Link)`
  ${({ theme }) => theme.elements.button};
  padding-left: 40px;
  padding-right: 40px;
`

export const Inner = styled.div`
  display: flex;
`

export const Column = styled.div`
  width: 50%;
`
