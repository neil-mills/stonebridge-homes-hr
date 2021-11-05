import React, { useRef, useEffect } from 'react'
import ArrowIcon from '../assets/svg/select-arrow.svg'
import styled from 'styled-components'
import { HeadingStyle } from '../assets/styles/Typography'

const SelectStyles = styled.div`
  display: block;
  width: 100%;
  height: 44px;
  position: relative;
  p {
    display: none;
  }
  button {
    width: 100%;
    height: 44px;
    position: relative;
  }
  button {
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--keyline-grey);
    padding: 1rem;
    background-color: var(--white);
    text-align: left;
    ${HeadingStyle}
    font-size: var(--font-xsmall);
    color: var(--grey);
    span {
      display: block;
      padding-top: 3px;
    }
  }
  select {
    background-color: transparent;
    border: none;
    z-index: 4;
    width: 100%;
    display: block;
    position: absolute;
    outline: none;
    top: 0;
    left: 0;
    bottom: 0;
    height: auto;
    color: transparent;
    -webkit-appearance: none;
    option {
      color: var(--grey);
    }
  }
`
const Select = (): JSX.Element => {
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const handleClick = () => {
    if (selectRef.current) {
      console.log('click')
      selectRef.current.setAttribute('size', '2')
    }
  }
  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.size = '1'
    }
  })
  return (
    <SelectStyles>
      <p id="location">Location</p>
      <button type="button" aria-labelledby="location" onClick={handleClick}>
        <span>Select</span>
        <ArrowIcon />
      </button>
      <select ref={selectRef}>
        <option>Leeds</option>
        <option>Manchester</option>
      </select>
    </SelectStyles>
  )
}

export default Select
