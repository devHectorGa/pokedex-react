import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color1: #BF0413;
    --color2: #BF2441;
    --color3: #011140;
    --color4: #72A1A6;
    --color5: #F2F2F2;

    --font-size: 2vmin + 1vmax;
    --font-sise-laptop: 1vmin + 1vmax;
  }

  html, body {
    font-family: 'Fjalla One', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--color1);
    color: var(--color5);
    font-size: var(--font-size);
    
    @media screen and (min-width: 768px) {
      font-size: var(--font-size-laptop);
    }
  }
`;
