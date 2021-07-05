import React, { FC } from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout: FC = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout
