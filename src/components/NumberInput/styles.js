import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
`

export const Input = styled.input`
  border: none;
  width: 50px;
  text-align: center;
  margin: 0 1px;
`

export const Button = styled.button`
  border: none;
  text-align: center;
  display: flex;
  padding: 5px;
`

export const Icon = styled.div`
  ${({ theme }) => theme.elements.icon}
  width: 10px;
  height: 10px;
`
