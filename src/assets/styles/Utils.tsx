import { css } from 'styled-components'

export const MarginBottomNone = css`
  margin-bottom: 0;
`

export const WhiteHover = css`
  color: var(--white);
  transition: color 500ms ease;
  svg path {
    color: var(--white);
    transition: fill 500ms ease;
  }
  &:link,
  &:visited {
    color: var(--white);
  }
  &:hover,
  &:active,
  &:focus {
    color: var(--white-hover);
    svg path {
      fill: var(--white-hover);
    }
  }
`

export const SectionGutter = css`
  padding: 4rem 2rem;
  @media screen and (min-width: 768px) {
    padding: var(--gutter-v) var(--gutter-h);
  }
  @media screen and (min-width: 1300px) {
    padding: calc(var(--gutter-v) * 2) calc(var(--gutter-h) * 2);
  }
`
export const GutterPaddingTop = css`
  padding-top: 4rem;
  @media screen and (min-width: 768px) {
    padding-top: var(--gutter-v);
  }
  @media screen and (min-width: 1300px) {
    padding-top: calc(var(--gutter-v) * 2);
  }
`
export const GutterPaddingRight = css`
  padding-right: 2rem;
  @media screen and (min-width: 768px) {
    padding-right: var(--gutter-h);
  }
  @media screen and (min-width: 1300px) {
    padding-right: calc(var(--gutter-h) * 2);
  }
`
export const GutterPaddingBottom = css`
  padding-bottom: 4rem;
  @media screen and (min-width: 768px) {
    padding-bottom: var(--gutter-v);
  }
  @media screen and (min-width: 1300px) {
    padding-bottom: calc(var(--gutter-v) * 2);
  }
`
export const GutterPaddingLeft = css`
  padding-left: 2rem;
  @media screen and (min-width: 768px) {
    padding-left: var(--gutter-h);
  }
  @media screen and (min-width: 1300px) {
    padding-left: calc(var(--gutter-h) * 2);
  }
`
export const GutterMarginBottom = css`
  margin-bottom: 4rem;
  @media screen and (min-width: 768px) {
    margin-bottom: var(--gutter-v);
  }
  @media screen and (min-width: 1300px) {
    margin-bottom: calc(var(--gutter-v) * 2);
  }
`
