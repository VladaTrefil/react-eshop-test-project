import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CloseButton = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
`

export const Container = styled.div`
  max-width: 600px;
  height: 100%;
  background: ${({ theme }) => theme.colors.light};
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zindex.sidebar};
  transform: translate(${({ isOpen }) => (isOpen ? 0 : 100)}%);
  transition: transform 500ms;
`

export const Inner = styled.div`
  padding: 64px 30px 80px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Top = styled.div``
export const Bottom = styled.div``

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.secondary};
  font-weight: 500;
  margin-bottom: 40px;
`

export const GoToCheckout = styled(Link)`
  ${({ theme }) => theme.elements.button};
  display: block;
  text-align: center;
`
