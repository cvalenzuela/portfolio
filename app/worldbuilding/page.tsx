

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
   
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>

         <b>World Building</b>
         <br/>
         <br/>

          Someone recently asked me what most people get wrong about AI media. Here is my answer:
          <br/><br/>
          What most people get wrong about AI media is that it represents an incremental improvement to how we currently make things. It won't simply be "AI-generated movies" or "AI-generated novels", but rather novel forms of dynamic, interactive, generative media that we can't fully picture today. Rather than simply enhancing or automating existing forms like film or gaming, the ability of AI systems to conjure up infinite permutations of imaginary worlds and narratives will lead to the emergence of something qualitatively different.
          <br/><br/>
          Think about it as a form of "generative storytelling", interactive experiences that are unique each time, tailored to the viewer. A story-world that adapts and unfolds in real-time based on your actions and choices. The "story" is generated on the fly by the AI, constrained by parameters set by the human author but playing out differently in every instance. Procedurally-generated stories and environments that blur the lines between games, cinema, and virtual reality.
          <br/><br/>
          This will require a new kind of artist - the "world architect" who creates the rules, assets, characters, and dramatic potential of a story-world but then allows the AI to create myriad variations and permutations, remixing those ingredients into a fresh experience every time. The human author becomes a "gardener" (a term inspired by 
          <a href="https://www.youtube.com/watch?v=9K-cuTWv8Is&embeds_referring_euri=https%3A%2F%2Frunwayml.com%2F&source_ve_path=MjM4NTE"> Anna Ridler's Creative Dialogues episode</a>) tending to a narrative ecosystem, while the AI acts as a "storytelling engine" generating real-time story events.
          <br/><br/>
          I'm calling this Worldforging.
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
