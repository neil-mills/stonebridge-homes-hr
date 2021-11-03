import { createGlobalStyle, css } from 'styled-components'

import EffraRegular from '../fonts/effra_std_rg-webfont.woff'
import EffraMedium from '../fonts/effra_medium-webfont.woff'
import EffraBold from '../fonts/effra_std_bd-webfont.woff'

export const HeadingStyle = css`
  font-family: efframedium;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.2;
`
export const HeadingXLarge = css`
  font-size: var(--font-xlarge);
  line-height: 1;
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    margin-bottom: 3rem;
    font-size: var(--font-xlarge-desktop);
    font-size: clamp(var(--font-xlarge), 5.5vw, var(--font-xlarge-desktop));
  }
`
export const HeadingLarge = css`
  font-size: var(--font-large);
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    margin-bottom: 2.1vw;
    font-size: var(--font-large-desktop);
    font-size: clamp(var(--font-large), 2.5vw, var(--font-large-desktop));
  }
`
export const FontRegular = css`
  font-family: effraregular;
  font-weight: 400;
`
export const FontMedium = css`
  font-family: efframedium;
  font-weight: 400;
`
export const FontBold = css`
  font-family: effrabold;
  font-weight: 400;
`

const Typography = createGlobalStyle`
  @font-face {
    font-family: effraregular;
    src: url(${EffraRegular});
  }
  @font-face {
    font-family: efframedium;
    src: url(${EffraMedium});
  }
  @font-face {
    font-family: effrabold;
    src: url(${EffraBold});
  }
  html {
    font-family: effraregular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h1,h2,h3,h4 {
    ${HeadingStyle}
  }
`

export default Typography