import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color1: #BF0413;
    --color2: #BF2441;
    --color3: #011140;
    --color4: #72A1A6;
    --color5: #F2F2F2;

    --font-size: calc(2vmin + 1vmax);
    --font-sise-laptop: calc(1vmin + 1vmax);
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

  .bug {
    background-color: #ab2;
  }
  .dark {
    background-color: #754;
  }
  .dragon {
    background-color: #76e;
  }
  .electric {
    background-color: #fc3;
  }
  .fairy {
    background-color: #e9e;
  }
  .fighting {
    background-color: #b54;
  }
  .fire {
    background-color: #f42;
  }
  .flying {
    background-color: #89f;
  }
  .ghost {
    background-color: #66b;
  }
  .grass {
    background-color: #7c5;
  }
  .ground {
    background-color: #db5;
  }
  .ice {
    background-color: #6cf;
  }
  .normal {
    background-color: #aa9;
  }
  .psychic {
    background-color: #f59;
  }
  .poison {
    background-color: #a59;
  }
  .rock {
    background-color: #ba6;
  }
  .steel {
    background-color: #aab;
  }
  .water {
    background-color: #39f;
  }
`;
