import { createGlobalStyle } from 'styled-components';
import digital from '../../src/fonts/digital.ttf';
const GlobalStyle = createGlobalStyle`
@font-face {
        font-family: 'digital';
        src: local('digital'), local('digital');
        font-style: normal;
        src: url(${digital}) format('truetype');
  }`;
export default GlobalStyle;
