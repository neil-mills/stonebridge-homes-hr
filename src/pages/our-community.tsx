import React, { FC } from 'react'
import ImageBanner from '../components/ImageBanner'
import Banner from '../assets/images/community-banner.jpg'
import BannerLg from '../assets/images/community-banner-lg.jpg'
import Tn1 from '../assets/images/community-tn-1.jpg'
import Tn2 from '../assets/images/community-tn-2.jpg'
import Tn3 from '../assets/images/community-tn-3.jpg'
import Articles from '../components/Articles'
import { ArticleItemType } from '../components/ArticleItem'

const articles: ArticleItemType[] = [
  {
    subTitle: 'Title of role',
    title: 'Name fo person',
    src: Tn1,
    srcLarge: Tn1,
    srcAlt: 'Person 1',
  },
  {
    subTitle: 'Title of role',
    title: 'Name fo person',
    src: Tn2,
    srcLarge: Tn2,
    srcAlt: 'Person 2',
  },
  {
    subTitle: 'Title of role',
    title: 'Name fo person',
    src: Tn3,
    srcLarge: Tn3,
    srcAlt: 'Person 3',
  },
  {
    subTitle: 'Title of role',
    title: 'Name fo person',
    src: Tn1,
    srcLarge: Tn1,
    srcAlt: 'Person 4',
  },
  {
    subTitle: 'Title of role',
    title: 'Name fo person',
    src: Tn2,
    srcLarge: Tn2,
    srcAlt: 'Person 5',
  },
  {
    subTitle: 'Title of role',
    title: 'Name fo person',
    src: Tn3,
    srcLarge: Tn3,
    srcAlt: 'Person 6',
  },
  {
    subTitle: 'Title of role',
    title: 'Name fo person',
    src: Tn1,
    srcLarge: Tn1,
    srcAlt: 'Person 7',
  },
  {
    subTitle: 'Title of role',
    title: 'Name fo person',
    src: Tn2,
    srcLarge: Tn2,
    srcAlt: 'Person 8',
  },
]

const CommunityPage: FC = (): JSX.Element => {
  return (
    <>
      <ImageBanner
        src={Banner}
        srcLarge={BannerLg}
        heading={'Our Community'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sodales aliquam justo, ut molestie elit Lorem ipsum dolor '
        }
        alignText={'left'}
        top={true}
      />
      <Articles carousel={false} articles={articles} />
    </>
  )
}

export default CommunityPage
