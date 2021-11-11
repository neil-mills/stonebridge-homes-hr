import React, { FC } from 'react'
import styled from 'styled-components'

const StyledMetaList = styled.ul`
  display: flex;
  justify-content: flex-start;
  font-size: var(--font-xsmall);
  line-height: 1;
  margin: 1rem 0 0;
  li {
    padding: 0 1rem;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      display: block;
      background-color: var(--grey);
      width: 1px;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
    }
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
      &:after {
        display: none;
      }
    }
  }
  @media screen and (min-width: 1400px) {
    font-size: var(--font-base-desktop);
  }
`

interface MetaListProps {
  meta: { [key: string]: string | number }
}
const MetaList: FC<MetaListProps> = ({ meta }): JSX.Element => {
  return (
    <StyledMetaList>
      {Object.entries(meta).map(([k, v], i) => (
        <li key={i}>
          {k}: {v}
        </li>
      ))}
    </StyledMetaList>
  )
}

export default MetaList
