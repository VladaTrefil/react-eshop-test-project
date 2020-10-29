import styled from 'styled-components'

export const Cell = styled.td`
  padding: 10px;

  &:nth-child(1) {
    width: 120px;
  }

  &:nth-child(2) {
    width: 150px;
    text-align: left;
    padding-left: 20px;
    font-weight: 500;
  }
`

export const ThumbnailCell = styled.td`
  width: 120px;
`

export const RemoveButton = styled.button`
  display: flex;
  padding: 5px;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  transition: background 300ms, color 300ms;

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.light};
  }
`
