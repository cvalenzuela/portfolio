

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
    <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>

         <b>Sameness</b>
         <br/>
         <br/>

         <i>April 2024</i>
         <br/><br/>

I think pretty soon we will enter a post-stylistic digital aesthetic era. As AI tools become more sophisticated and accessible, allowing people to rapidly generate highly stylized and polished visuals, an aesthetic saturation point will be reached, where that perfected aesthetic starts to feel overused and generic. The overly stylistic, cinematic, and hyper-real will start to feel boring. There will be an overwhelming amount of sameness. The fact that the first thing people try to do with a new medium is to imitate the old medium also accelerates this: the first moving pictures were theater recordings, the first photographs were portraits, and the current wave of AI art is largely focused on emulating established artistic styles and techniques to a hyper-realistic degree.
<br/><br/>
As we reach peak resolution and photography-level quality of videos and images with AI, the best artists will do what they do best: subvert. They will start exploring a shift in subject matter. Different points of view and perspectives unexplored by traditional media. They may eschew the glossy perfection that AI can provide in favor of more raw, glitchy, or lo-fi aesthetics. They will use AI to generate imagery from unusual or impossible perspectives, creating spatial and perceptual distortions. The emphasis will shift from technical skills and mimicry to conceptual innovation and subversion of expectations. Undermining tradition. Being more daring and unorthodox, knowing that the technology can handle the traditional realistic rendering.


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
          © 2023 Cristobal Valenzuela.
        </p>
      </div>
      
    </main>
  )
}
