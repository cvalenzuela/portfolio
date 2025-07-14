

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
    <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>
         <b className="name-inpost">Cristóbal Valenzuela</b>
         <br/><br/><br/>
         <b>Creative Meritocracy</b>
         <br/>
         <br/>
         <i>November 2024</i>
         <br/><br/>    
         If you want to understand where media is going, you need to understand how media is made.
         <br/><br/>    
I'm focusing only on high-quality visual media - whether movies, shows, live action, animated, or non-fiction - which has always followed the same pattern: incredibly long processes, massive budgets, and armies of talent working under harsh conditions and impossible timelines. It's a system built on scarcity, an industry that never recovered from the COVID and strike pauses.
<br/><br/>    
But the system is crumbling under its own weight. Demand for content is higher than ever. We all want more, but budgets are skyrocketing while projects dwindle. Creatives spend years of their lives on projects that might never get the funding they need or see the light of day. Even when they do, theatrical releases or distribution are no longer guaranteed.
<br/><br/>    
Distribution was the first to change. Streaming services shattered the predictable cadence of weekly television. Social media fragmented attention into infinite streams. YouTube eliminated gatekeepers entirely, enabling single creators to amass billions of views with minimal budgets and simple, low-quality yet compelling stories. The demand patterns changed dramatically, but the supply of high-quality content remained chained to the old system.
<br/><br/>    
Now we're crossing the last bridge: high-quality content for mass distribution. What once required hundred-million-dollar budgets is becoming accessible to anyone with a story to tell. I see this in what I call "The rise of AI-first studios": small groups of creative talent - filmmakers, cinematographers, DPs, artists, actors, editors - accomplishing in weeks what used to take years. They're emerging everywhere - New York, Miami, LA, Paris, Brazil, New Zealand. You know you who are ;) These aren't legacy studios adapting to new tools; they're new entities built on different assumptions. They're borrowing workflows and adapting them, experimenting left and right. They have no attachment to how things used to be made, only to good ideas and taste.
<br/><br/>    
The dawn of indie storytelling at scale. Relatively unknown creative minds becoming billion-dollar media companies. Small teams achieving what once required years to make. The media companies of tomorrow won't be defined by their size or their history, but by their ability to adapt to this new reality. Creating content on their own terms, owning their rights, sharing directly with audiences everywhere. The best ideas rising to the top because they're the best ideas, not because they had the biggest budgets or the strongest industry connections. We're approaching true creative meritocracy. There will be no excuses.

          
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
