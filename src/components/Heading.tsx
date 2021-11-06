import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { HeadingLarge } from '../assets/styles/Typography'

interface HeadingProps {
  subHeading?: string
  heading: string
}
interface Props {
  primary: boolean
}
const H2Style = styled.h2<Props>`
  ${({ primary }) =>
    primary
      ? HeadingLarge
      : css`
          font-size: var(--font-small);
          color: var(--gold);
          margin-bottom: 1rem;
        `}
`

const H3Style = styled.h3`
  ${HeadingLarge}
`
const Heading: FC<HeadingProps> = ({ subHeading, heading }): JSX.Element => {
  return (
    <>
      {subHeading ? (
        <>
          <H2Style primary={false}>{subHeading}</H2Style>
          <H3Style>{heading}</H3Style>
        </>
      ) : (
        <H2Style primary={true}>{heading}</H2Style>
      )}
    </>
  )
}

export default Heading
