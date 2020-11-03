import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
`

export const ErrorMessage = styled.div`
  ${({ theme }) => theme.elements.errorMessage};
  position: absolute;
  top: 100%;
`

export const Button = styled.div`
  ${({ theme }) => theme.elements.button}
  width: 100%;
  text-align: center;
  margin-left: 30px;
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
