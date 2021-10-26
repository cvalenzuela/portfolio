import Link from 'gatsby-link'
import React from 'react'
import voyYvuevlo from './images/voyyvuelvo.png';

const Footer = ({siteTitle}) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-xs-3">
          <img src={voyYvuevlo} alt="voy y vuelvo"/>
        </div>
        <div className="col-xs-7 Contact">          
          <p><a href="https://twitter.com/c_valenzuelab">@c_valenzuelab</a></p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
