import React from 'react'
import Link from 'gatsby-link'

import voyYvuevlo from './images/voyyvuelvo.png';

const Footer = ({siteTitle}) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-xs-3">
          <img src={voyYvuevlo} alt="voy y vuelvo"/>
        </div>
        <div className="col-xs-7 Contact">
          <h5>Contact</h5>
          <p>Feel free to contact me at:</p>
          <p>cris [at] runwayml.com</p>
          <p><a href="https://twitter.com/c_valenzuelab">@c_valenzuelab</a></p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
