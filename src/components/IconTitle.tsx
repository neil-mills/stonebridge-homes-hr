import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingMedium } from '../assets/styles/Typography'

interface Props {
  icon: React.ReactNode
  title: string
  align?: string
}

interface StyleProps {
  align?: string
}
const IconTitleStyles = styled.div<StyleProps>`
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start; */
  text-align: ${props => props.align};
  h3 {
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
    ${HeadingMedium}
  }
  svg {
    height: 40px;
    width: auto;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 768px) {
    max-width: 200px;
    text-align: center;
    /* text-align: center; */
    /* grid-area: 1 / 1 / 1 / 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 6vw 5vw;
    div {
      max-width: 200px;
    } */
  }
`

const IconTitle: FC<Props> = ({ icon, title, align = 'center' }) => {
  return (
    <IconTitleStyles align={align}>
      {icon}
      <h3>{title}</h3>
    </IconTitleStyles>
  )
}

export default IconTitle
