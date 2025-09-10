

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
      <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>
         <b className="name-inpost">Cristóbal Valenzuela</b>
         <br/><br/><br/>
         <b>On Encoding and Decoding</b>
         <br/>
         <br/>

         <i>September 2025</i>
         <br/><br/>

I have been thinking about art, or any form of expression, as an encode decode process.
<br/><br/>
The artist’s job is reduction. Take the multi dimensional mess of time and space and collapse it into a form: a canvas, a film, a poem. That reduction is encoding. The audience’s job is to expand it back, to decode and recover something about the world.
<br/><br/>
Encoding is hard. You are compressing a fractal into a line. Some information will be lost. The viewer has to reconstruct the signal from the noise. That is where meaning lives, in what survives compression.
<br/><br/>
The message can be vast or minimal. <a href="https://www.youtube.com/watch?v=rDgHUj8sJaQ&ab_channel=KyleShaw">It can be silence.</a> It can be <a href="https://en.wikipedia.org/wiki/A_Line_Made_by_Walking">a line in sand.</a> A three hour <a href="https://en.wikipedia.org/wiki/Megalopolis_(film)">epic science fiction drama.</a> Each encodes some fragment of truth, stitched with cultural and social context. What matters is how many people can decode it, how many can feel the thing you buried inside.
<br/><br/>
<img src="/walking.webp" style={{width: "200px"}}/>
<i style={{fontSize: "10px"}}>A Line Made by Walking by Richard Long, 1967.</i>
<br/><br/>
If we ever work together on a creative project, one thing you will hear me say again and again is Hannah Arendt’s line: “Storytelling reveals meaning without committing the error of defining it.” If you are too explicit, the piece is boring. If the movie leaves no room for interpretation, it will not work as intended.
<br/><br/>
The hardest part of art is not revealing meaning but encoding it into the piece. A good artist knows how to encode in a way that is simple and genuinely new. Something that feels surprising.
<br/><br/>
And this is where technology enters. Each new tool is a different kind of encoder. Oil paint, the printing press, photography, film, the computer, AI. Technology keeps giving us new ways to compress the world, new ways to hide meaning inside form. The artist’s task remains the same. Learn the tool well enough to weave something human through it.
<br/><br/>
       
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
