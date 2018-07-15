import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header';
import Footer from '../components/footer';
import favicon from './favicon.ico';
import image from './../pages/work/uncannyrd/01.jpg';
import './index.css'
import './grid.css';

const Layout = ({children, data}) => {
  const title = data.site.siteMetadata.title;
  const keywords = data.site.siteMetadata.keywords;
  const description = data.site.siteMetadata.description;
  const url = data.site.siteMetadata.url;
  const userTwitter = data.site.siteMetadata.userTwitter;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="image" content={image}/>
        <meta name="keywords" content={keywords}/>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon} />

        <meta property="og:url" content={url}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={image}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content={userTwitter}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content={image}/>
      </Helmet>
      <Header siteTitle={title} />
      <div className='MainContent'>
        {children()}
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql `
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
