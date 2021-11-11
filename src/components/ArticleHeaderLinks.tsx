import React, { FC } from 'react'
import styled from 'styled-components'
import SocialNav from '../components/SocialNav'
import ArrowLink from '../components/ArrowLink'

const ArticleHeaderLinksStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid var(--keyline-grey);
`
interface Props {
  backLink: string
}
const ArticleHeaderLinks: FC<Props> = ({ backLink }): JSX.Element => {
  return (
    <ArticleHeaderLinksStyles>
      <ArrowLink label={'Back'} link={backLink} direction={'left'} />
      <SocialNav color="black" />
    </ArticleHeaderLinksStyles>
  )
}

export default ArticleHeaderLinks
