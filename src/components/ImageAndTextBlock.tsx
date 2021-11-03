import React from 'react'
import styled from 'styled-components'
import PlayIcon from '../assets/svg/play.svg'
import { SectionGutter, MarginBottomNone } from '../assets/styles/Utils'
import Button from './Button'
import { HeadingLarge } from '../assets/styles/Typography'

const SectionStyles = styled.section`
  display: grid;
  gap: 2rem;
  @media screen and (min-width: 550px) {
    gap: 4vw;
  }
  @media screen and (min-width: 1300px) {
    gap: 8vw;
  }
  grid-template-rows: repeat(auto, 2);
  align-items: center;
  ${SectionGutter}
  h3 {
    ${HeadingLarge}
    color: var(--green);
    margin-bottom: 2rem;
  }
  p {
    @media screen and (min-width: 768px) {
      padding-right: 2rem;
    }
    &:last-child {
      ${MarginBottomNone}
    }
  }
  @media screen and (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    &[data-text-align='left'] {
      aside {
        order: 1;
      }
    }
  }
`
const Picture = styled.picture`
  display: grid;
  align-items: center;
  width: 100%;
  img {
    grid-area: 1 / 1 / 1 / 1;
    object-fit: cover;
    width: 100%;
  }
  svg {
    grid-area: 1 / 1 / 1 / 1;
    z-index: 1;
    justify-self: center;
  }
  @media screen and (min-width: 768px) {
    [data-text-align='left'] & {
      order: 2;
    }
  }
`

interface ImageAndTextBlockProps {
  alignText?: string
  video?: boolean
  src?: string
  srcLarge?: string
  srcAlt?: string
  buttonLabel?: string
  buttonLink?: string
  heading: string
  text: string
}
const ImageAndTextBlock = ({
  alignText = 'left',
  heading,
  text,
  video = false,
  src = '',
  srcLarge = '',
  srcAlt = '',
  buttonLabel = '',
  buttonLink = '',
}: ImageAndTextBlockProps): JSX.Element => {
  return (
    <SectionStyles data-text-align={alignText}>
      {src && video && (
        <Picture>
          <source media="(min-width: 768px)" srcSet={srcLarge} />
          <PlayIcon />
          <img src={src} alt={srcAlt} />
        </Picture>
      )}
      {src && !video && (
        <Picture>
          <source media="(min-width: 768px)" srcSet={srcLarge} />
          <img src={src} />
        </Picture>
      )}
      <aside>
        <h3>{heading}</h3>
        <p>{text}</p>
        {buttonLabel && buttonLink && (
          <Button label={buttonLabel} link={buttonLink} />
        )}
      </aside>
    </SectionStyles>
  )
}

export default ImageAndTextBlock
