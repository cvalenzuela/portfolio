import React from 'react'
import Link from 'gatsby-link'

import BlogCard from './../components/blogCard';

import banner from './../pages/work/chiletrade/banner.jpg';
import github from './../components/images/github.png';

import monet from './images/monet.jpg';
import lstm from './images/lstm.jpg';
import bororo from './images/bororo.jpg';

const BLOG_ITEMS = [
  {
    title: 'Machine Learning En Plein Air: Building accessible tools for artists',
    author: 'Cristobal Valenzuela',
    authorImg: '',
    img: monet,
    description: 'A short story in two parts.',
    link: 'https://medium.com/@cvalenzuelab/machine-learning-en-plein-air-building-accessible-tools-for-artists-87bfc7f99f6b'
  },
  {
    title: 'Training an LSTM network and sampling the resulting model in ml5.js',
    author: 'Cristobal Valenzuela',
    authorImg: '',
    img: lstm,
    description: 'Learn how to train a language model using a LSTM neural network with your own custom dataset and use the resulting model inside ml5.js,',
    link: 'https://blog.paperspace.com/training-an-lstm-and-using-the-model-in-ml5-js/'
  },
  {
    title: 'Creating your own style transfer mirror with Gradient° and ml5.js',
    author: 'Cristobal Valenzuela',
    authorImg: '',
    img: bororo,
    description: "Train a style transfer network with Paperspace's Gradient° and use the model in ml5.js to create an interactive style transfer mirror.",
    link: 'https://blog.paperspace.com/creating-your-own-style-transfer-mirror/'
  }
]

const About = () => (
  <div className='container-fluid works' id="about">
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <img src={banner} alt="banner" className="BannerAbout" />
      </div>
    </div>
    <div className='row'>
      <div className="col-xs-9 col-sm-7 col-xs-offset-1 col-sm-offset-3 AboutDescription">
        <p>
        Cristóbal Valenzuela is a technologist, artist and software developer interested in the intersection between machine learning and creative tools. He is a researcher at <a href="https://tisch.nyu.edu/itp">New York University ITP</a>, author of <a href="https://runwayml.com/">RunwayML</a>, Creative Resident at  <a href="https://www.paperspace.com/">Paperspace</a> and co-founder of <a href="https://latentstudio.com/">Latent Studio</a>, a creative studio specializing in machine learning and artificial intelligence. He also contributes to OSS and helps maintain <a href="https://ml5js.org/">ml5.js</a>. His work has been sponsored by Google and the Processing Foundation and his projects has been exhibited in Latin America and the US,including the Santiago Museum of Contemporary Art, GAM, Fundación Telefonica, Lollapalooza, NYC Media Lab, New Latin Wave, Inter-American Development Bank, Stanford University and New York University.
        </p>
        <p>cris [at] runwayml.com</p>
        <p><a href="https://twitter.com/c_valenzuelab">@c_valenzuelab</a></p>
        <p><img src={github} alt=""/> <a href="https://github.com/cvalenzuela">cvalenzuela</a></p>
      </div>
    </div>
    <div className='row'>
      <div className="col-xs-10 col-xs-offset-1 col-sm-offset-2 Blog">
        <h1>Recent Blog Posts</h1>
        {
          BLOG_ITEMS.map(i => 
            <BlogCard 
              title={i.title}
              description={i.description}
              img={i.img}
              author={i.author}
              authorImg={i.authorImg}
              link={i.link}
            />
          )
        }
      </div>
    </div>
  </div>
)

export default About
