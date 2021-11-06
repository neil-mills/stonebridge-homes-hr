import React, { FC } from 'react'
import ImageBanner from '../components/ImageBanner'
import ParallaxImage from '../components/ParallaxImage'
import ImageAndTextBlock from '../components/ImageAndTextBlock'
import Banner from '../assets/images/working-with-us-banner.jpg'
import BannerLg from '../assets/images/working-with-us-banner-lg.jpg'
import CultureImg from '../assets/images/culture-image.jpg'
import CultureImgLg from '../assets/images/culture-image-lg.jpg'
import People from '../components/People'
import ParallaxImg from '../assets/images/working-with-us-parallax.jpg'
import ParallaxImgLg from '../assets/images/working-with-us-parallax-lg.jpg'
import Benefits, { benefitsData } from '../components/Benefits'

const WorkingWithUsPage: FC = (): JSX.Element => {
  return (
    <>
      <ImageBanner
        src={Banner}
        srcLarge={BannerLg}
        heading={'Working with us'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sodales aliquam justo, ut molestie elit Lorem ipsum dolor '
        }
        alignText={'left'}
        top={true}
      />
      <ImageAndTextBlock
        src={CultureImg}
        srcLarge={CultureImgLg}
        heading={'Stonebridge Culture'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sodales aliquam justo, ut molestie elit nisl risus. Dignissim turpis neque eget in ante pulvinar risus donec. Venenatis pulvinar dolor arcu arcu, lorem adipiscing sed. Volutpat, vitae fusce facilisi tempus donec aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sodales aliquam justo, ut molestie'
        }
      />
      <People />

      <ParallaxImage src={ParallaxImg} srcLg={ParallaxImg} />
      <Benefits benefits={benefitsData} />
    </>
  )
}

export default WorkingWithUsPage
