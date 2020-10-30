import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isActive }) => (isActive ? 0 : 100)}%;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: ${({ theme }) => theme.zindex.overlay};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 500ms, left 700ms;
`
