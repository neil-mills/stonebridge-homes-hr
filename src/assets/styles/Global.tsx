import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #00443F;
    --gold: #BC9F5F;
    --gold-hover: #a38646;
    --grey: #666666;
    --light-grey: #FAFAFA;
    --keyline-grey: #E8E8E8;
    --white: #FFFFFF;
    --black: #000000;       
    --white-hover: #cccccc;
    --font-xlarge: 3rem;
    --font-xlarge-desktop: 6.5rem;
    --font-large: 2.4rem;
    --font-large-desktop: 3.5rem;
    --font-base: 1.6rem;
    --font-base-desktop: 2rem;
    --font-medium: 2.4rem;
    --font-small: 1.6rem;
    --font-xsmall: 1.4rem;
    --gutter-v: 5vw;
    --gutter-h: 4vw;
  }
  html,
  body {
    overflow-x: hidden;
  }
  html {
    font-size: 10px;
    height: 100%;
    box-sizing: border-box;
  }
  body {
    font-size: var(--font-base);
    @media screen and (min-width: 1300px) {
      font-size: var(--font-base-desktop);
    }
    line-height: 1.4;
    color: var(--grey);
    &[data-scroll="false"] {
      overflow-y: hidden;
      position: fixed;
    }
  }
  ul,
  li,
  img,
  h1,
  h2,
  h3,
  h4,
  figure {
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none;
  }
  img {
    display: block;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  } 
  a {
    text-decoration: none;
    outline: 3px solid transparent;
    display: block;
  }
  a, button {
    &:focus {
      outline: 3px solid var(--black);
    }
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  main {
    margin-top: 7.6rem;
  }
`
export default GlobalStyles
