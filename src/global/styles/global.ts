import { createGlobalStyle } from "styled-components";

import { colors } from '../themes';

export default createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    fontFamily: 'Montserrat, sans-serif';
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  body {
    background: ${colors.primary};
    color: ${colors.primary};
  }
  text { 
  }
  button {
    color: ${colors.primary};
  }
`;