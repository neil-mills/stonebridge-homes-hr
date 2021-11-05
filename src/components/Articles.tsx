import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ArticleItem from './ArticleItem'
import PageMenu from './PageMenu'

const Track = styled.div`
  [data-carousel='false'] & {
    display: grid;
    gap: 2rem;
    row-gap: 2rem;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    width: 100%;
  }
  [data-carousel='true'] & {
    display: block;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
    --ms-overflow-style: none;
    scrollbar-width: none;
  }
`
interface Article {
  subTitle?: string
  subTitleDate?: boolean
  title: string
  link?: string
  video?: boolean
  src: string
  srcLarge: string
}

export interface Categories {
  slug: string
  title: string
}
interface ArticlesProps {
  carousel?: boolean
  articles: Article[]
  categories?: Categories[]
}

const Articles = ({
  carousel = false,
  articles = [],
}: ArticlesProps): JSX.Element => {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const articleRefs = useRef<HTMLElement[]>([])
  const [articleWidth, setArticleWidth] = useState(0)

  const handleResize = () => {
    const width = window.innerWidth
    let visibleArticles = 1
    if (width > 499) {
      visibleArticles = 2
    }
    if (width > 767) {
      visibleArticles = 3
    }

    if (trackRef.current) {
      const trackWidth: number = trackRef.current.clientWidth
      const articleMargin: number = parseFloat(
        getComputedStyle(articleRefs.current[0]).getPropertyValue(
          'margin-right'
        )
      )
      setArticleWidth(
        (trackWidth - articleMargin * (visibleArticles - 1)) / visibleArticles
      )
    }
  }

  useEffect(() => {
    if (carousel) {
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <>
      <div data-carousel={carousel}>
        <Track ref={trackRef}>
          {articles.map((article, i) => (
            <ArticleItem
              key={i}
              ref={(element: HTMLElement) => (articleRefs.current[i] = element)}
              {...article}
              width={carousel ? `${articleWidth}px` : 'auto'}
            />
          ))}
        </Track>
      </div>
    </>
  )
}

export default Articles
