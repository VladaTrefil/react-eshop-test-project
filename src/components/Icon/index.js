import React from 'react'
import styled from 'styled-components'

const IconHolder = styled.div`
  display: inline-block;
  font-size: ${({ size }) => size}rem;
  width: ${({ size }) => size}rem;
  height ${({ size }) => size}rem;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default function Icon({ size = 1, children }) {
  return <IconHolder size={size}>{children}</IconHolder>
}
