import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { HeadingLarge } from '../assets/styles/Typography'
import {
  SectionGutter,
  GutterPaddingLeft,
  GutterPaddingRight,
  GutterMarginBottom,
} from '../assets/styles/Utils'
interface ImageBannerProps {
  top?: boolean
  src: string
  srcLarge: string
  srcAlt?: string
  heading: string
  text: string
  buttonLabel?: string
  buttonLink?: string
  alignText?: string
}

const ImageBannerStyles = styled.section`
  width: 100%;
  display: grid;
  position: relative;
  align-items: start;
  height: auto;
  @media screen and (min-width: 768px) {
    ${GutterPaddingRight}
    ${GutterPaddingLeft}
    ${GutterMarginBottom}
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 29vw;
      max-height: 406px;
    }
    &[data-position='top'] {
      margin-bottom: 2vw;
      @media screen and (min-width: 1024px) {
        margin-bottom: 0;
      }
      &:before {
        height: 16vw;
        max-height: 430px;
      }
    }
  }
  @media screen and (min-width: 1300px) {
    margin-bottom: 10vw;
  }
`

const InsetBox = styled.div`
  display: block;
  background-color: var(--green);
  width: 100%;
  ${SectionGutter}
  justify-self: end;
  [data-text-align='left'] & {
    justify-self: start;
  }
  z-index: 1;
  h3 {
    ${HeadingLarge}
    color: var(--gold);
  }
  p {
    color: var(--white);
    &:last-child {
      margin-bottom: 0;
    }
  }
  button {
    margin-top: 4.3vw;
  }
  @media screen and (min-width: 768px) {
    width: 46vw;
    padding: 5.7vw;
  }
  @media screen and (min-width: 1300px) {
    width: 42vw;
  }
`
const BgImage = styled.picture`
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  position: relative;
  height: 320px;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 5vw;
    left: 0;
    height: auto;
  }
  @media screen and (min-width: 1300px) {
    bottom: 10vw;
  }
`

const ImageBanner = ({
  top = false,
  src,
  srcLarge,
  srcAlt = '',
  heading,
  text,
  buttonLink,
  buttonLabel,
  alignText = 'right',
}: ImageBannerProps): JSX.Element => {
  return (
    <ImageBannerStyles
      data-position={top ? 'top' : 'page'}
      data-text-align={alignText}
    >
      <BgImage>
        <source media="(min-width: 768px)" srcSet={srcLarge} />
        <img src={src} alt={srcAlt} />
      </BgImage>
      <InsetBox>
        <h3>{heading}</h3>
        <p>{text}</p>
        {buttonLabel && buttonLink && (
          <Button label={buttonLabel} link={buttonLink} />
        )}
      </InsetBox>
    </ImageBannerStyles>
  )
}

export default ImageBanner
