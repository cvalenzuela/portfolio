import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 sm:p-16">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="flex w-full justify-center pb-8 backdrop-blur-2xl lg:static lg:w-auto">
          Cristóbal Valenzuela
        </p>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
         <p className={`m-0 text-sm opacity-50 sm:pb-5`}>
          I'm a developer and tool maker living in Brooklyn, NY. I'm the co-founder and CEO of <a href='https://runwayml.com'>Runway</a>.
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className={`m-0 text-sm opacity-50 sm:pb-5`}>
          I was a researcher at ITP NYU Tisch School of the Arts. I've worked on <a href="https://github.com/cvalenzuela">open-source projects</a>, <a href="https://arxiv.org/abs/2112.09726">AI research</a>, and also <a href="https://ars.electronica.art/aeblog/en/2018/08/29/chile-group-show/">made some art</a>. 
          I used to teach digital fabrication, statistics, and econometrics. I've also made short films, designed boardgames, and worked as a business consultant. 
          I was born and raised in Chile.
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className={`m-0 text-sm opacity-50 sm:pb-5`}>
          I'm primarily interested in building <a href="https://www.nytimes.com/2023/04/04/technology/runway-ai-videos.html"> tools to augment human creativity.</a> If you are also interested in that, join us. <a href='https://runwayml.com/careers'>We are hiring.</a>
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className={`m-0 text-sm opacity-50 sm:pb-5`}>
         c [at] runwayml.com - <a href="">Twitter</a> - <a href=''>Linkedin</a>
        </p>
        
      </div>
      
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className={`m-0 text-sm sm:pb-5`}>
          Recent projects
        </p>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <ul className={`m-0 text-sm opacity-50`}>
          <li>2018 / <a href="https://ml5js.org/">ml5.js</a> ml5.js aims to make machine learning approachable for a broad audience of artists, creative coders, and students.</li>
          <li>2017 / <a href="https://twitter.com/c_valenzuelab/status/1026453551135055873">The Alternative Late Show.</a> Experimenting with Image-to-Image translation models (pix2pix) for character animations.</li>
          <li>2017 / <a href="http://t2i.cvalenzuelab.com/">Text 2 Image.</a> Interactive real time text to image generation using Attentional Generative Adversarial Networks (AttnGAN).</li>
          <li>2017 / <a href="https://uncannyroad.com/">Uncanny Road.</a> A tool for collaboratively hallucinating a city using Generative Adversarial Neural Networks.</li>
          <li>2017 / <a href="https://github.com/cvalenzuela/scenescoop">Scenescoop.</a> A tool to find semantically simiar scenes between two videos.</li>
          <li>2017 / <a href="https://cvalenzuela.github.io/Selected_Stories/">Selected Stories.</a> A generative realtime text editor that uses a LSTM network in the browser to write with you. </li>
          <li>2016 / <a href="https://github.com/cvalenzuela/sequential-stories">Sequential Stories.</a> An iOS app that uses a Text-to-Image model to create fictional stories using only image captions.</li>
          <li>2016 / <a href="https://cvalenzuela.github.io/interactive-music/">Word2Beat.</a>A tool that maps word embeddings or a word space vector to sound beats</li>
          <li>2015 / <a href="https://cvalenzuela.github.io/interactive-music/">Word2Beat.</a>A tool that maps word embeddings or a word space vector to sound beats</li>
          <li>2012 / <a href="https://cvalenzuelab.com/static/02-b9bcfab103f8cb33becd3afcf9a5c15b-e1389.png">Regression.</a>An interactive installation that uses a typewriter to create text based generative videos, T2V.</li>
        </ul>
      </div>

      <div className="bottom-0 pb-3 pt-20 z-10 w-full max-w-5xl text-sm lg:flex">
  
        <Image 
          src="/voyyvuelvo.png"
          width={120}
          height={20}
          alt='voy & vuelvo'
          className='voyyvuelvo'
        />

      <p className={`pt-4 m-0 text-sm opacity-30`}>
          © 2023 Cristobal Valenzuela.
        </p>
      </div>
      
    </main>
  )
}
