import ttCommons400Woff2 from '../../public/static/fonts/tt-commons-400.woff2';
import ttCommons400Woff from '../../public/static/fonts/tt-commons-400.woff';
import ttCommons500Woff2 from '../../public/static/fonts/tt-commons-500.woff2';
import ttCommons500Woff from '../../public/static/fonts/tt-commons-500.woff';
import ttCommons600Woff2 from '../../public/static/fonts/tt-commons-600.woff2';
import ttCommons600Woff from '../../public/static/fonts/tt-commons-600.woff';
import ttCommons700Woff2 from '../../public/static/fonts/tt-commons-700.woff2';
import ttCommons700Woff from '../../public/static/fonts/tt-commons-700.woff';
import { COLORS } from '../consts/styles';

export const globalStyles = `
  @font-face {
    font-family: 'TT Commons';
    src: url(${ttCommons400Woff2 as string}) format('woff2'),
      url(${ttCommons400Woff as string}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'TT Commons';
    src: url(${ttCommons500Woff2 as string}) format('woff2'),
      url(${ttCommons500Woff as string}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'TT Commons';
    src: url(${ttCommons600Woff2 as string}) format('woff2'),
      url(${ttCommons600Woff as string}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'TT Commons';
    src: url(${ttCommons700Woff2 as string}) format('woff2'),
      url(${ttCommons700Woff as string}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
       
  html {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    scroll-behavior: smooth;
  }
  
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: ${COLORS.dark};
    box-sizing: border-box;
    color: ${COLORS.white};
    font-family: 'TT Commons';
    font-size: 16px;
    flex-direction: column;
    flex: 1;
    margin: 0;
    padding: 0;
    position: relative;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
  }
  
  button, input, optgroup, select, textarea {
    font-family: 'TT Commons';
    font-size: 100%;
    line-height: 110%;
    margin: 0;
  }
        
  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
        
  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 2px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #5E5E5E;
    border-radius: 5px;
  }

  ::selection {
    color: ${COLORS.black};
    background: ${COLORS.yellow};
  }

  a {
    text-decoration: none;
  }
`;
