import styled from 'styled-components'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${(30 / 1080) * 100}%;
`

export const Cell = styled.div`
  width: ${(320 / 1140) * 100}%;
  margin: 0 ${(30 / 1140) * 100}% 60px;
`
