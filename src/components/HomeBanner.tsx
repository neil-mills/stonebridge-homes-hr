import React, { FC } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { HeadingStyle, HeadingXLarge } from '../assets/styles/Typography'
import { SectionGutter } from '../assets/styles/Utils'

const HomeBannerStyles = styled.section`
  background-color: var(--green);
  display: block;
  height: auto;
  ${SectionGutter}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h2 {
    ${HeadingStyle}
    ${HeadingXLarge}
    color: var(--white);
  }
  p {
    color: var(--gold);
    margin: 2rem 0 0;
  }
  max-height: 780px;
  @media screen and (min-width: 768px) and (orientation: portrait) {
    height: 45vh;
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: calc(90vh - 7.6rem);
  }
`
const HomeBannerInner = styled.div`
  width: 70%;
  @media screen and (min-width: 1024px) {
    width: 45%;
  }
`

const HomeBanner: FC = (): JSX.Element => {
  return (
    <HomeBannerStyles>
      <HomeBannerInner>
        <h2>Take your career to the next level</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
        <Button label={'Find out more'} link={'/working-with-us'} />
      </HomeBannerInner>
    </HomeBannerStyles>
  )
}

export default HomeBanner
