import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Instagram from '../assets/svg/instagram.svg'
import Facebook from '../assets/svg/facebook.svg'
import Linkedin from '../assets/svg/linkedin.svg'
import Twitter from '../assets/svg/twitter.svg'
import { WhiteHover, SectionGutter } from '../assets/styles/Utils'
const FooterStyles = styled.footer`
  ${SectionGutter}
  display: grid;
  grid-template-rows: repeat(2, auto);
  background-color: var(--green);
  color: var(--white);
  & > div {
    display: grid;
    justify-content: start;
    align-items: start;
  }
  aside {
    display: grid;
    grid-template-rows: auto 20px;
    gap: 2.5rem;
    border-top: 1px solid var(--white);
    padding-top: var(--gutter);
    @media screen and (min-width: 768px) {
      justify-content: right;
      border: 0;
      padding: 0;
    }
  }
  address {
    font-style: normal;
    @media screen and (min-width: 768px) {
      text-align: right;
    }
  }
  a {
    ${WhiteHover}
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-content: space-between;
  }
`
const SecondaryNav = styled.nav`
  display: grid;
  position: relative;
  grid-template-rows: repeat(auto, 2);
  justify-content: start;
  padding-bottom: var(--gutter);
  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    ul {
      position: relative;
      &:first-child {
        padding-right: 4rem;
        &:before {
          content: '';
          display: block;
          width: 1px;
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          background-color: var(--white);
        }
      }
      &:last-child {
        padding-left: 4rem;
      }
    }
  }
`
const SocialNav = styled.nav`
  ul {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 19px;
    gap: 2rem;
    @media screen and (min-width: 768px) {
      justify-content: right;
    }
  }
  a {
  }
`

const Footer: FC = (): JSX.Element => {
  return (
    <FooterStyles>
      <div>
        <SecondaryNav>
          <ul>
            <li>
              <Link to={'/'}>Working with us</Link>
            </li>
            <li>
              <Link to={'/'}>Vacancies</Link>
            </li>
            <li>
              <Link to={'/'}>Our community</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={'/'}>Terms and conditions</Link>
            </li>
            <li>
              <Link to={'/'}>Privacy policy</Link>
            </li>
          </ul>
        </SecondaryNav>
      </div>
      <aside>
        <address>
          Stonebridge Homes
          <br />
          Featherback Court, Horsforth,
          <br />
          LS18 4QF, United Kingdom
        </address>
        <SocialNav>
          <ul>
            <li>
              <a href="">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="">
                <Twitter />
              </a>
            </li>
          </ul>
        </SocialNav>
      </aside>
    </FooterStyles>
  )
}

export default Footer
