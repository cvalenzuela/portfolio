export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="flex w-full justify-center pb-8 backdrop-blur-2xl lg:static lg:w-auto">
          Cristóbal Valenzuela Barrera
        </p>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
         <p className={`m-0 text-sm opacity-70 xs:pb-6 sm:pb-5`}>
           I'm a developer living in Brooklyn, NY. I'm the co-founder and CEO of <a href='https://runwayml.com'>Runway</a>.
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className={`m-0 text-sm opacity-70 xs:pb-6 sm:pb-5`}>
          I was a researcher at ITP NYU Tisch School of the Arts. I've worked on <a href="https://github.com/cvalenzuela">open-source projects</a>, contributed to <a href="https://arxiv.org/abs/2112.09726">AI research</a>, and also <a href="https://ars.electronica.art/aeblog/en/2018/08/29/chile-group-show/">made some art</a>. I was born and raised in Chile.  I'm primarily interested in building <a href="https://www.nytimes.com/2023/04/04/technology/runway-ai-videos.html"> tools to augment human creativity.</a> If that's interesting, join us. <a href='https://runwayml.com/careers'>We are hiring.</a>
        </p>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <ul className={`m-0 text-sm opacity-70 posts`}>
          <li><a href="/creativesoftware">Creative Software 2.0</a></li>
          <li><a href="/worldbuilding">World Building</a></li>
          <li><a href="/gymforthemind">A gym for the mind</a></li>
          <li><a href="/tamingthelatenspace">Taming the latent space</a></li>
          <li><a href="/artandresearch">We need more artists doing research</a></li>
          <li><a href="/revenge">The artist's revenge</a></li>
          <li><a href="/sameness">Sameness</a></li>
          <li><a href="/askingquestions">Art is about asking questions</a></li>
          <li><a href="/reductionism">Reductionist thinking</a></li>
          <li><a href="/thegoal">The medium is not the goal</a></li>
        </ul>
      </div>

      <br/>

      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className={`m-0 text-sm opacity-60 xs:pb-6 sm:pb-5`}>
         c [at] runwayml.com - <a href="https://twitter.com/c_valenzuelab">Twitter</a> - <a href="https://www.linkedin.com/in/cvalenzuelab/">Linkedin</a> - <a href="https://github.com/cvalenzuela">Github</a>
        </p>
      </div>
      
      <br/>

      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className={`m-0 text-sm xs:pb-6 sm:pb-5`}>
          Previous projects
        </p>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <ul className={`m-0 text-sm opacity-40`}>
          <li>2018 / <a href="https://ml5js.org/">ml5.js</a> ml5.js aims to make machine learning approachable for a broad audience of artists, creative coders, and students.</li>
          <li>2017 / <a href="https://twitter.com/c_valenzuelab/status/1026453551135055873">The Alternative Late Show.</a> Experimenting with Image-to-Image translation models (pix2pix) for character animations.</li>
          <li>2017 / <a href="http://t2i.cvalenzuelab.com/">Text 2 Image.</a> Interactive real-time Text-to-Image generation using Attentional Generative Adversarial Networks (AttnGAN).</li>
          <li>2017 / <a href="https://uncannyroad.com/">Uncanny Road.</a> A tool for collaboratively hallucinating a never-ending road using Generative Adversarial Neural Networks.</li>
          <li>2017 / <a href="https://github.com/cvalenzuela/scenescoop">Scenescoop.</a> A tool to find semantically similar scenes between any two films or videos.</li>
          <li>2017 / <a href="https://cvalenzuela.github.io/Selected_Stories/">Selected Stories.</a> A generative text editor that uses four custom LSTM networks running in the browser to generate text. </li>
          <li>2016 / <a href="https://github.com/cvalenzuela/sequential-stories">Sequential Stories.</a> An iOS app that can write fictional stories using only a Text-to-Image model that captions images.</li>
          <li>2016 / <a href="https://cvalenzuela.github.io/interactive-music/">Word2Beat.</a> A tool that maps word embeddings or a word space vector to sound beats.</li>
          <li>2012 / <a href="/regresion02.png">Regression.</a> An interactive installation that uses a typewriter to create text based generative videos, T2V.</li>
        </ul>
      </div>

      <div className="pb-4 pt-10 z-10 w-full max-w-5xl text-sm lg:flex">
        <img 
          src="/voyyvuelvo.png"
          width={120}
          height={20}
          alt='voy & vuelvo'
          className='voyyvuelvo'
        />
      </div>
      <div className="bottom-0 pb-3 z-10 w-full max-w-5xl text-sm lg:flex">
        <p className={`pl-5 m-0 text-xs opacity-30`}>
          © 2023 Cristobal Valenzuela.
        </p>
      </div>
      
    </main>
  )
}
