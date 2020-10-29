import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";
import fontFace from "./fonts";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`

  ${fontFace}
  ${reset}
`;

export default GlobalStyle;
