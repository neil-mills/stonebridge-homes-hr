import React, { FC } from 'react'
import GlobalStyles from '../assets/styles/Global'
import Typography from '../assets/styles/Typography'
import 'normalize.css'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

const Layout: FC = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Helmet bodyAttributes={{ 'data-scroll': true }} />
    <Header />
    <main id="main">{children}</main>
    <Footer />
  </>
)

export default Layout
