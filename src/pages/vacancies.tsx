import React, { FC } from 'react'
import ImageBanner from '../components/ImageBanner'
import Banner from '../assets/images/vacancies-banner.jpg'
import BannerLg from '../assets/images/vacancies-banner-lg.jpg'
const VacanciesPage: FC = (): JSX.Element => {
  return (
    <>
      <ImageBanner
        src={Banner}
        srcLarge={BannerLg}
        heading={'Vacancies'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sodales aliquam justo, ut molestie elit Lorem ipsum dolor '
        }
        alignText={'left'}
        top={true}
      />
    </>
  )
}

export default VacanciesPage
