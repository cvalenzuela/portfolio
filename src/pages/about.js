import BlogCard from './../components/blogCard';
import Link from 'gatsby-link'
import React from 'react'
import banner from './../pages/work/chiletrade/banner.jpg';
import bororo from './images/bororo.jpg';
import github from './../components/images/github.png';
import lstm from './images/lstm.jpg';
import monet from './images/monet.jpg';

const BLOG_ITEMS = [
  {
    title: 'Machine Learning En Plein Air: Building accessible tools for artists',
    author: 'Cristobal Valenzuela',
    authorImg: '',
    img: monet,
    description: 'A short story in two parts.',
    link: 'https://medium.com/@cvalenzuelab/machine-learning-en-plein-air-building-accessib' +
        'le-tools-for-artists-87bfc7f99f6b'
  }
]

const About = () => (
  <div className='container-fluid works' id="about">
    {/* <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <img src={banner} alt="banner" className="BannerAbout"/>
      </div>
    </div> */}
    <div className='row'>
      <div
        className="col-xs-9 col-sm-7 col-xs-offset-1 col-sm-offset-2 AboutDescription">
        <p>
          Cristóbal Valenzuela is a Chilean-born technologist and software developer. He is the CEO and Co-Founder of <a href="https://runwayml.com/"> Runway.</a>
          <br/> Previously, he worked as a researcher at <a href="https://tisch.nyu.edu/itp"> New York University</a>.

          <br/><br/>
          His projects have been exhibited in Latin America, Europe, and the US. Including NeurIPS, Santiago Museum of Contemporary Art, ARS Electronica, GAM, ACADIA, Fundación Telefonica, Lollapalooza, NYC Media Lab, New Latin Wave, DOCLAB, Inter-American Development Bank, Stanford, and New York University.
        </p>
        <p>cris [at] runwayml.com</p>
        <p>
          <a href="https://twitter.com/c_valenzuelab"> @c_valenzuelab</a>
        </p>
        <p><img src={github} alt="github" className="SocialIcon"/>
          <a href="https://github.com/cvalenzuela"> cvalenzuela</a>
        </p>
      </div>
    </div>
    {/* <div className='row'>
      <div className="col-xs-10 col-xs-offset-1 col-sm-offset-2 Blog">
        <h1>Recent Blog Posts</h1>
        {BLOG_ITEMS.map(i => <BlogCard
          key={i.title}
          title={i.title}
          description={i.description}
          img={i.img}
          author={i.author}
          authorImg={i.authorImg}
          link={i.link}/>)
}
      </div>
    </div> */}
  </div>
)

export default About
