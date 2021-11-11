import React, { useState, useEffect, useRef, FC } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { HeadingStyle, HeadingXLarge } from '../assets/styles/Typography'
import {
  GutterPaddingLeft,
  GutterPaddingRight,
  GutterPaddingBottom,
} from '../assets/styles/Utils'
import { SectionInner } from './Section'

const HomeBannerStyles = styled.section`
  background-color: var(--green);
  display: block;
  height: auto;
  ${GutterPaddingLeft}
  ${GutterPaddingRight}
  ${GutterPaddingBottom}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-position: right top;
  background-size: cover;
  h2 {
    ${HeadingStyle}
    ${HeadingXLarge}
    color: var(--white);
  }
  p {
    color: var(--gold);
    margin: 2rem 0 0;
    width: 90%;
    @media screen and (min-width: 500px) {
      width: 100%;
    }
  }
  height: auto;
  min-height: 350px;
  @media screen and (min-width: 500px) {
    min-height: 380px;
  }
  @media screen and (min-width: 768px) {
    height: calc(60vw - 7.6rem);
    max-height: 750px;
  }

  @media screen and (min-width: 1400px) {
    height: 78rem;
  }
`
const HomeBannerInner = styled.div`
  width: 70%;
  @media screen and (min-width: 500px) {
    width: 58%;
  }
  @media screen and (min-width: 767px) {
    width: 43%;
  }
`
interface HomeBannerProps {
  title: string
  text: string
  btnLabel?: string
  btnLink?: string
  bgSrc: string
  bgSrcLg: string
  breakpoint: number
}
const HomeBanner: FC<HomeBannerProps> = (props): JSX.Element => {
  const [loaded, setLoaded] = useState<number>(0)
  const [bgSrc, setBgSrc] = useState<string>('')
  const sectionRef = useRef<HTMLElement>(null)
  const images: string[] = [props.bgSrc, props.bgSrcLg]

  const preloadImages = () => {
    console.log('preload')
    images.forEach(src => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setLoaded(prevState => (prevState += 1))
      }
    })
  }

  const handleResize = () => {
    setBgSrc(
      window.innerWidth <= props.breakpoint ? props.bgSrc : props.bgSrcLg
    )
  }

  useEffect(() => {
    if (loaded === 0) {
      preloadImages()
    }
    if (loaded === images.length && sectionRef.current) {
      handleResize()
      window.addEventListener('resize', handleResize)
      sectionRef.current.style.opacity = '1'
    }
    if (bgSrc && sectionRef.current) {
      sectionRef.current.style.backgroundImage = `url(${bgSrc})`
    }
  }, [loaded, bgSrc])

  return (
    <HomeBannerStyles ref={sectionRef}>
      <SectionInner>
        <HomeBannerInner>
          <h2>Take your career to the next level</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button label={'Find out more'} link={'/working-with-us'} />
        </HomeBannerInner>
      </SectionInner>
    </HomeBannerStyles>
  )
}

HomeBanner.defaultProps = {
  breakpoint: 767,
}

export default HomeBanner
