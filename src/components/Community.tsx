import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { HeadingLarge } from '../assets/styles/Typography'
import { SectionGutter } from '../assets/styles/Utils'
import Tn1 from '../assets/images/community-tn-1.jpg'
import Tn2 from '../assets/images/community-tn-2.jpg'
import Tn3 from '../assets/images/community-tn-3.jpg'
import Articles from './Articles'
import { ArticleItemType } from './ArticleItem'

const CommunityStyles = styled.section`
  ${SectionGutter}
  background-color: var(--light-grey);
  h2 {
    ${HeadingLarge}
  }
`

const articles: ArticleItemType[] = [
  {
    subTitle: 'Date',
    subTitleDate: true,
    title: 'News title',
    link: '/',
    src: Tn1,
    srcLarge: Tn1,
  },
  {
    subTitle: 'Date',
    subTitleDate: true,
    title: 'News title',
    link: '/',
    src: Tn2,
    srcLarge: Tn2,
  },
  {
    subTitle: 'Date',
    subTitleDate: true,
    title: 'News title',
    link: '/',
    src: Tn3,
    srcLarge: Tn3,
  },
  {
    subTitle: 'Date',
    subTitleDate: true,
    title: 'News title',
    link: '/',
    src: Tn1,
    srcLarge: Tn1,
  },
  {
    subTitle: 'Date',
    subTitleDate: true,
    title: 'News title',
    link: '/',
    src: Tn2,
    srcLarge: Tn2,
  },
  {
    subTitle: 'Date',
    subTitleDate: true,
    title: 'News title',
    link: '/',
    src: Tn3,
    srcLarge: Tn3,
  },
]

const Community = (): JSX.Element => {
  return (
    <CommunityStyles>
      <h2>Our Community</h2>
      <Articles carousel={true} articles={articles} />
      <Button label={'View all news'} link={'/community'} />
    </CommunityStyles>
  )
}

export default Community
