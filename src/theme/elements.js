import { css } from 'styled-components'
import theme from './config'

const wrapper = css`
  box-sizing: content-box;
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 60px 60px;
`

const pageTitle = css`
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  font-weight: bold;
  font-size: 3rem;
`

const button = css`
  display: inline-block;
  background: ${theme.colors.dark};
  color: ${theme.colors.light};
  padding: 20px;
  font-size: 1rem;
  text-transform: uppercase;
  transition: background 300ms, color 300ms;

  &:hover {
    background: ${theme.colors.highlight};
    color: ${theme.colors.light};
  }
`

export default {
  wrapper,
  pageTitle,
  button,
}
