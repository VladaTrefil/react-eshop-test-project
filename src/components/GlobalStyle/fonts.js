import Regular from '~/fonts/Montserrat/Regular.ttf'
import Italic from '~/fonts/Montserrat/Italic.ttf'
import Medium from '~/fonts/Montserrat/Medium.ttf'
import MediumItalic from '~/fonts/Montserrat/MediumItalic.ttf'
import Bold from '~/fonts/Montserrat/Bold.ttf'
import Black from '~/fonts/Montserrat/Black.ttf'

const fontFace = `
  @font-face {
    src: url(${Regular}) format("truetype");
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    src: url(${Italic}) format("truetype");
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: normal;
  }
  @font-face {
    src: url(${Medium}) format("truetype");
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    src: url(${MediumItalic}) format("truetype");
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 500;
  }
  @font-face {
    src: url(${Bold}) format("truetype");
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
  }
  @font-face {
    src: url(${Black}) format("truetype");
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
  }

  body,
  html {
    font-family: 'Montserrat', helvetica, sans-serif, arial;
  }
`

export default fontFace
