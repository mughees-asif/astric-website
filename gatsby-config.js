module.exports = {
  siteMetadata: {
    title: 'astric* | For all your local needs',
    author: 'Mughees Asif',
    description: 'Connecting local businesses with local customers',
    pathPrefix: "/astric-website",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'astric*',
        short_name: 'astric',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
