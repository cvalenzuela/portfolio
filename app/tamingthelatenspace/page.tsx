

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
    <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>
         <b className="name-inpost">Cristóbal Valenzuela</b>
         <br/><br/><br/>
         <b>Taming the latent space</b>
         <br/>
         <br/>

         <i>June 2024</i>
         <br/><br/>

None of the things you will be able to make with the next generation of video/image/3d/media models are things that you can't technically do already without those models, from hyper-realism to surreal imagery and animations of all kinds. Weta, ILM, etc., have the capabilities to create and visualize any world and idea imaginable. They have had these abilities for years.
<br/><br/>
The limitations of today's CGI pipelines are constrained by budget and timelines, not by the ability of the tools to go where you want to take them. For example, complex fluid simulations, physics dynamics, realistic character movements, etc., are things anyone can technically learn and do today given a) enough time and b) enough resources. Traditional 3D software, game engines, NLEs, compositing, etc, are sophisticated software abstractions that have found clever ways to work around the limitations of traditional graphics principles: how fast can you design/visualize things, and how fast can you render things given how much graphics power you can afford.
<br/><br/>
The biggest unlock of what new frontier models will do is less tied to things we weren't able to do before and much more related to the dramatic expansion of the number of creative minds that will not be constrained by tool rendering time and resources. Hyper-realism, animations, 3D, and all forms of graphics imagery you can imagine will be at everyone's fingertips. Weta and ILM capabilities for everyone. Under this new set of rules, limitations will be a) ideas and taste: give someone who hasn't exercised their creativity in a while the most powerful model imaginable, and they will stare in silence for minutes and come up with the most unimaginative and obvious thing. Give the same model to an artist with good taste, and they will make things you can't stop looking at, and b) control: the tradeoff models will be giving in the short term will be pixel-level control, which traditional CGI tools do really well. Taming the latent space to pixel precision the way the current graphics pipeline can do it will take time since we are dealing with a completely new set of technologies and software abstractions.


        </p>
      </div>
      

      <div className="pb-3 pt-20 z-10 w-full max-w-5xl text-sm lg:flex">
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
          © 2024 Cristobal Valenzuela.
        </p>
      </div>
      
    </main>
  )
}
