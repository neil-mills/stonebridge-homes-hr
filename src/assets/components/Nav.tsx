import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/working-with-us">Working with us</Link>
        </li>
        <li>
          <Link to="/vacancies">Vacancies</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
