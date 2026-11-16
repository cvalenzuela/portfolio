

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
      <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>
         <b className="name-inpost">Cristóbal Valenzuela</b>
         <br/><br/><br/>
         <b>Art’s Navier Stokes Moment</b>
         <br/>
         <br/>

         <i>November 2026</i>
         <br/><br/>

I keep having the same conversation with friends in creative fields like film, music and publishing. I show them something a new model made and they say it’s good. But then they say AI will never tell a good story, because it lacks a certain je ne sais quoi.
<br/><br/>
I think my friends are wrong about one word: never.
<br/><br/>
Artists are already using AI to do remarkable work. I’m talking about something else here. I mean media made with little or no human involvement, where no person made the important choices. We have models that can generate a book, a film or a song this way. Most of what they make is not yet good enough for people to take seriously. The key word is “yet.”
<br/><br/>
Mathematicians had their own je ne sais quoi. They often talk about beauty, divergence, intuition and taste. Math as an art form. Then in September OpenAI announced that a swarm of about ten thousand agents had produced a proposed solution to  Navier-Stokes, one of the seven Millennium Prize Problems, in roughly 88 hours. Nothing about the process felt like our romantic picture of human discovery. A proof doesn’t care how it was found.
<br/><br/>
An obvious reply is that math is verifiable and art is not. Our inability to explain artistic judgment is mistaken for the evidence that machines cannot learn it.
<br/><br/>
Art does have a verifier. It’s the audience. Popularity is no guarantee of artistic quality. Popular media can be terrible and important art only ever be appreciated by a few people. But we can recognize when a piece of media becomes culturally relevant: people talk about it, argue about it, review it and copy it. This verifier is slow and noisy, and it can take years to return an answer. It is also already running at an enormous scale. Art is being judged, even if it’s not being objectively “measured.”
<br/><br/>
Here is my prediction. Art’s Navier-Stokes moment will come when a substantial, fully generated work - an album or book, or feature film becomes a cultural phenomenon, with no human making the important choices. I mean something that a lot of people will love before they even know how it was made, and will still love after they know. I think it will happen by next year.
<br/><br/>
That’s the bad news, if you want to see it that way. I expect much of what we watch, read and listen to will eventually come out of models. The good news is that people will keep making art for the joy of the process and for what it means to them and other people. So much of what makes art matter is what happens between humans after it’s made: how we experience it together, talk about it, and give it shared meaning.  




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
