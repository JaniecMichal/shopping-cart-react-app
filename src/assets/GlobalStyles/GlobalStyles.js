import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  ${normalize}
        html {
        box-sizing: border-box
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
    } 
      body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        background-color:${({ theme }) => theme.colors.mainBackground};
        color: ${({ theme }) => theme.colors.mainText};
        padding:20px;
    }
`;
