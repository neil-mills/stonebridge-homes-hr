import React from 'react'
import styled from 'styled-components'
import { HeadingLarge } from '../assets/styles/Typography'
import { SectionGutter } from '../assets/styles/Utils'

interface StyleProps {
  tint?: boolean
}

interface SectionProps {
  tint?: boolean
  children: React.ReactNode
}

const SectionStyles = styled.section<StyleProps>`
  ${SectionGutter}
  h2 {
    ${HeadingLarge}
  }
  background-color: ${(props: StyleProps) =>
    props.tint ? 'var(--light-grey)' : 'var(--white)'};
`

const Section = ({ tint = false, children }: SectionProps): JSX.Element => {
  return <SectionStyles tint={tint}>{children}</SectionStyles>
}

export default Section
