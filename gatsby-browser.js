import React from 'react'
import Layout from './src/assets/components/Layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
