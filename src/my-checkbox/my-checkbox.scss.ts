import { css } from 'lit';

export default css`
  :host {
    --bottom-fab-offset: 0rem;
    --box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    --to-do-white: #fff;
    --light-background-color: #e6f3fe;
    --primary-background-color: #0683ea;
    --deleted-background-color: #fcd9da;
    --disabled-background-color: rgb(241, 241, 241);
    --disabled-font-color: #8e8e93;
    --hover-background-color: var(--dna-primary);
    --hover-color: var(--dna-primary);
    --hue: var(--dna-primary-hue);
    --sat: var(--dna-primary-sat);
    --lum: var(--dna-primary-lum);
    --lum-step: calc(var(--dna-lum-step) * 5);
    --transition: var(--dna-transition-normal);
    --transition-properties: background, border-color, border-radius, box-shadow, color, filter, text-decoration;
    box-sizing: border-box;
  }

  :host {
    display: block;
  }
`;
