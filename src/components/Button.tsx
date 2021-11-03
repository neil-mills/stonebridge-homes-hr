import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { FontBold } from '../assets/styles/Typography'

const ButtonStyles = styled.button`
  ${FontBold}
  display: block;
  margin-top: 4rem;
  @media screen and (min-width: 768px) {
    margin-top: 4.3vw;
  }
  background-color: var(--gold);
  color: var(--white);
  font-size: var(--font-xsmall);
  text-transform: uppercase;
  padding: 1.6rem;
  text-align: center;
  transition: background-color 200ms ease;
  will-change: background-color;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background-color: var(--gold-hover);
  }
`

interface ButtonProps {
  label: string
  link: string
}

const Button = ({ label, link }: ButtonProps): JSX.Element => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(link)
  }

  return <ButtonStyles onClick={handleClick}>{label}</ButtonStyles>
}

export default Button
