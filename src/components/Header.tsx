import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Nav from './Nav'
import Logo from '../assets/images/stonebridge.png'
import { GutterPaddingLeft, GutterPaddingRight } from '../assets/styles/Utils'

const HeaderStyles = styled.header`
  display: flex;
  height: 7.6rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--green);
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  ${GutterPaddingRight}
  ${GutterPaddingLeft}
`
const LogoStyles = styled(Link)`
  width: 170px;
  transition: width 200ms ease;
  height: auto;
  display: block;
  @media screen and (min-width: 1024px) {
    width: 203px;
  }
  img {
    width: 100%;
  }
`

const Header: FC = () => {
  return (
    <HeaderStyles>
      <LogoStyles to="/">
        <img src={Logo} alt="Stonebridge" />
      </LogoStyles>
      <Nav />
    </HeaderStyles>
  )
}

export default Header
