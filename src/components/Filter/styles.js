import styled from 'styled-components'

export const Container = styled.div``

export const List = styled.div`
  display: flex;
  padding: 10px;
  font-size: 0.9rem;
`

export const Label = styled.div`
  margin: 0 10px;
  font-weight: 500;
`

export const Item = styled.button`
  margin: 0 10px;
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : false)};
`
