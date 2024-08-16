

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
      <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>

         <b>We need more artists doing research</b>
         <br/>
         <br/>

The most significant gap in AI research and art does not lie within the models themselves but rather in the approach to art. I have noticed a tendency to oversimplify the creative act. In a research setting, the goal is to control and measure variables, which leads to the assignment of constants for things that you can't measure. This logic swiftly leads to the interpretation of a "new algorithm for image generation" as a means to "be more creative." Attempting to standardize creativity as making pretty pictures simplifies the creative process to a convenient conclusion, which is why many AI tools seem designed more for engineers than for artists. It’s formulaic art. Creativity cannot be condensed into a formula for optimization. For a new technique for generating pixels on a screen to correlate with magnifying a creative act, you need four things: wonder, discovery, control, and feedback.
<br/><br/>
A tool dedicated to creation should facilitate wonder and discovery. The journey is just as critical as the outcome. Often, the creative process begins without a clear destination. Art is more than making pretty pictures; it's about conveying insights about the world, using tools as the medium. A proficient artist is perpetually engaged in discovery and wonder. 
<br/><br/>
Effective wandering requires control over the tool and robust feedback mechanisms. You do something, you see something. That changes the direction and the interestingness of a space. 
<br/><br/>
We need more artists doing research.


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
