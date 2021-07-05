import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

export default {
  siteMetadata: {
    title: 'Stonebridge Homes HR',
    siteUrl: 'http://careers.stonebridgehomes.co.uk',
    description: 'Careers',
    author: 'Neil Mills',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    //'gatsby-plugin-ts-config',
    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: '9t3oheam',
    //     dataset: 'production',
    //     watchMode: true,
    //     token: process.env.SANITY_TOKEN,
    //   },
    // },
  ],
}
