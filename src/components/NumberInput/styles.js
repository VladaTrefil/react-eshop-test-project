import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100px;
  position: relative;
`

export const Input = styled.input`
  background: none;
  border: none;
  width: calc(100% - 40px);
  text-align: center;
  margin: 0 1px;
`

export const Button = styled.button`
  border: none;
  text-align: center;
  display: flex;
  padding: 5px;
  opacity: ${({ isDisabled }) => (!isDisabled ? 1 : 0.3)};
  pointer-events: ${({ isDisabled }) => (!isDisabled ? 'auto' : 'none')};
`

export const Icon = styled.div`
  ${({ theme }) => theme.elements.icon}
  width: 10px;
  height: 10px;
`
