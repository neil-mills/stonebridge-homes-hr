import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingLarge } from '../assets/styles/Typography'
import {
  GutterPaddingTop,
  GutterPaddingRight,
  GutterPaddingBottom,
  GutterPaddingLeft,
} from '../assets/styles/Utils'

interface StyleProps {
  tint?: boolean
  marginTop?: boolean
  marginBottom?: boolean
}

interface SectionProps {
  tint?: boolean
  marginTop?: boolean
  marginBottom?: boolean
  children: React.ReactNode
}

export const SectionInner = styled.div`
  display: block;
  position: relative;
  width: 100%;
  @media screen and (min-width: 1400px) {
    max-width: 1180px;
  }
  margin: 0 auto;
`

const SectionStyles = styled.section<StyleProps>`
  ${({ marginTop }) => marginTop && GutterPaddingTop}
  ${GutterPaddingRight}
  ${({ marginBottom }) => marginBottom && GutterPaddingBottom}
  ${GutterPaddingLeft}
  background-color: ${({ tint }) =>
    tint ? 'var(--light-grey)' : 'var(--white)'};
`

const Section: FC<SectionProps> = ({
  tint = false,
  marginTop = true,
  marginBottom = true,
  children,
}): JSX.Element => {
  return (
    <SectionStyles
      marginTop={marginTop}
      marginBottom={marginBottom}
      tint={tint}
    >
      <SectionInner>{children}</SectionInner>
    </SectionStyles>
  )
}

export default Section
