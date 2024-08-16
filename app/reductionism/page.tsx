

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
   
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>

         <b>Reductionist thinking</b>
         <br/>
         <br/>

When large AI models become proficient at narrow tasks, there's a tendency to oversimplify and reduce a discipline to a one-liner description that encapsulates the model's output. It's as if we're trying to solve for the first sentence in a Wikipedia entry: filmmaking is reduced to making pictures move, coding to writing code, and painting to creating images. We confuse being able to mimic the surface elements with deeply comprehending the underlying whole.
<br/><br/>
This reductionist thinking leads to premature and exaggerated claims, such as "AI can generate a 20-second video, so it's the end of filmmaking." However, this logic assumes that the entirety of filmmaking can be boiled down to creating sequences of frames on a screen. That's like claiming that we've solved soccer because we've created a robot that can score a goal every time it kicks the ball. While scoring goals is the objective of soccer, the true essence of the game goes far beyond that. You can't solve soccer by optimizing for a simplistic description. These narrow tasks are merely the visible outputs - the finger pointing at the moon, not the moon itself.
<br/><br/>
The problem lies in viewing things solely from the perspective of the AI model, rather than considering the human aspects of a discipline. We are obsessed with AI, but we should be obsessed with what people can do with AI.
      
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
