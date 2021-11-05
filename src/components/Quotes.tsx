import React from 'react'
import styled from 'styled-components'
import Avatar from '../assets/images/avatar.jpg'
import KeylineGrid, { KeylineGridItem } from './KeylineGrid'

const QuoteStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: var(--font-medium);
    margin-bottom: 3rem;
    @media screen and (min-width: 768px) {
      margin-bottom: 3vw;
    }
  }
  blockquote {
    padding: 0;
    margin: 0 0 3rem;
    @media screen and (min-width: 768px) {
      margin: 0 0 4vw 0;
    }
  }
  footer {
    justify-self: flex-end;
    font-size: var(--font-xsmall);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    div {
      border-radius: 50%;
      height: 4rem;
      width: 4rem;
      display: block;
      background-color: var(--keyline-grey);
      margin-right: 1rem;
      overflow: hidden;
    }
  }
`

interface QuoteProps {
  title: string
  quote: string
  name: string
  avatar: string
}
const Quote = ({ title, quote, name, avatar }: QuoteProps): JSX.Element => {
  return (
    <QuoteStyles>
      <div>
        <h3>{title}</h3>
        <blockquote>{quote}</blockquote>
      </div>
      <footer>
        <div>
          <img src={avatar} />
        </div>
        {name}
      </footer>
    </QuoteStyles>
  )
}

const Quotes = (): JSX.Element => {
  return (
    <section>
      <KeylineGrid columns={2}>
        <KeylineGridItem>
          <Quote
            title={'Really nice people'}
            quote={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sodales
        aliquam justo, ut molestie elit nisl risus. Dignissim turpis neque eget
        in ante pulvinar risus donec. Venenatis pulvinar dolor arcu arcu, lorem
        adipiscing sed. Volutpat, vitae fusce facilisi tempus donec alique`}
            name={'Sarah Jones, Leeds'}
            avatar={Avatar}
          />
        </KeylineGridItem>
        <KeylineGridItem>
          <Quote
            title={'Really nice people'}
            quote={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sodales
        aliquam justo, ut molestie elit nisl risus. `}
            name={'Sarah Jones, Leeds'}
            avatar={Avatar}
          />
        </KeylineGridItem>
        <KeylineGridItem>
          <Quote
            title={'Really nice people'}
            quote={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sodales
        aliquam justo, ut molestie elit nisl risus. Dignissim turpis neque eget
        in ante pulvinar risus donec. Venenatis pulvinar dolor arcu arcu, lorem
        adipiscing sed. Volutpat, vitae fusce facilisi tempus donec alique`}
            name={'Sarah Jones, Leeds'}
            avatar={Avatar}
          />
        </KeylineGridItem>
        <KeylineGridItem>
          <Quote
            title={'Really nice people'}
            quote={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sodales
        aliquam justo, ut molestie elit nisl risus. Dignissim turpis neque eget
        in ante pulvinar risus donec. Venenatis pulvinar dolor arcu arcu, lorem
        adipiscing sed. Volutpat, vitae fusce facilisi tempus donec alique`}
            name={'Sarah Jones, Leeds'}
            avatar={Avatar}
          />
        </KeylineGridItem>
        <KeylineGridItem>
          <Quote
            title={'Really nice people'}
            quote={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sodales
        aliquam justo, ut molestie elit nisl risus.`}
            name={'Sarah Jones, Leeds'}
            avatar={Avatar}
          />
        </KeylineGridItem>
        <KeylineGridItem>
          <Quote
            title={'Really nice people'}
            quote={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sodales
        aliquam justo, ut molestie elit nisl risus. Dignissim turpis neque eget
        in ante pulvinar risus donec. Venenatis pulvinar dolor arcu arcu, lorem
        adipiscing sed. Volutpat, vitae fusce facilisi tempus donec alique`}
            name={'Sarah Jones, Leeds'}
            avatar={Avatar}
          />
        </KeylineGridItem>
      </KeylineGrid>
    </section>
  )
}

export default Quotes
