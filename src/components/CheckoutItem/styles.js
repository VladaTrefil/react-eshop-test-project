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

export const QuantityHolder = styled.div`
  width: 80px;
`

export const ThumbnailCell = styled.td`
  width: 120px;
`
