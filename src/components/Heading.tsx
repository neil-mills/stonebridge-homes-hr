import React from 'react'
import styled from 'styled-components'

interface HeadingProps {
  subHeading?: string
  heading: string
}

const Heading = ({ subHeading, heading }: HeadingProps): JSX.Element => {
  return (
    <>
      {subHeading ? (
        <>
          <h2>{subHeading}</h2>
          <h3>{heading}</h3>
        </>
      ) : (
        <h2>{heading}</h2>
      )}
    </>
  )
}

export default Heading
