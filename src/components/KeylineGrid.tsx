import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  columns?: number
}
const GridStyles = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
`
const ItemStyles = styled.div`
  padding: 4rem 0;
  border: 1px solid var(--keyline-grey);
  border-width: 0 0 1px;
  &:last-child {
    border-width: 0;
  }
  @media screen and (min-width: 768px) {
    padding: 6vw 0 6vw 6vw;
    border-width: 1px 0 0 0;
    & > div {
      height: 100%;
      padding-right: 6vw;
      border-right: 1px solid var(--keyline-grey);
    }
    &:last-child {
      border-width: 1px 0 0;
    }
    [data-columns='2'] & {
      margin: 0 0 0 -6vw;
      width: calc(100% / 2 + 6vw);
      &:nth-child(-n + 2) {
        border-width: 0;
      }
      &:nth-child(2n) {
        margin: 0 -6vw 0 0;
        padding-right: 0;
        & > div {
          border: none;
        }
      }
      &:last-child {
        & > div {
          border: none;
        }
      }
    }
    [data-columns='3'] & {
      width: calc(100% / 3 + 4vw);
      &:nth-child(-n + 3) {
        border-width: 0;
      }
      &:first-child,
      &:nth-child(4n) {
        margin-left: -6vw;
      }
      &:nth-child(3n) {
        padding-right: 0;
        margin-right: -6vw;
        & > div {
          border: none;
        }
      }
      &:last-child {
        & > div {
          border: none;
        }
      }
    }
  }
`
export const KeylineGridItem: FC = ({ children }): JSX.Element => {
  return <ItemStyles>{children}</ItemStyles>
}

interface KeylineGridProps {
  columns?: number
  children: ReactNode
}

const KeylineGrid: FC = ({
  columns = 2,
  children,
}: KeylineGridProps): JSX.Element => {
  return <GridStyles data-columns={columns}>{children}</GridStyles>
}

export default KeylineGrid
