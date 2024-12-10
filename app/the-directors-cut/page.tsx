

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
    <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>

         <b>The Director's Cut</b>
         <br/>
         <br/>

         <i>December 2024</i>
         <br/><br/>         
         Over the past two years, I've spent time with directors, producers, agents, writers, actors, managers, editors, guilds, and many other people and organizations working in media and Hollywood. The constant question in these conversations has been about what disruption AI will bring to the entertainment industry. Everyone wants to know what media can learn from this technology's trajectory.
         <br/><br/>
But after hundreds of these discussions, I've realized we've been asking the wrong question. The film industry has spent over a century perfecting the balance between technical capability and creative vision. As AI becomes more powerful and accessible, this is exactly the kind of wisdom we need to build systems that don't just work well, but work beautifully.
<br/><br/>
Consider filmmaking. Every director has access to the same basic tools: cameras, lights, sound equipment, and editing software. The fundamental principles of cinematography, pacing, and narrative structure are well-documented and widely known. Scorsese doesn't use proprietary lighting techniques that others can't learn.
<br/><br/>
Yet we instantly recognize the difference between a mediocre film and a masterpiece. That difference isn't in the camera's technical specifications or the studio's size. It's in the thousands of small decisions that reflect taste, sensibility, and vision. It's what's in the frame and what's out. It's knowing when to cut, when to hold, when to move, and when to stay still. These choices aren't technical problems—they're creative ones.
<br/><br/>
The parallel to AI development is striking. Today's AI landscape is filled with powerful tools and frameworks available to anyone. The architecture of successful models is public knowledge. Training techniques are widely shared. The difference between exceptional AI applications and mediocre ones no longer lies in model architecture or training data—it's in the nuanced decisions about how these capabilities are shaped into meaningful experiences.
<br/><br/>
You need strong creative vision. Technical excellence is necessary but not sufficient. The magic happens in the creative decisions that shape how AI capabilities are expressed in the world. This is both terrifying and liberating: terrifying because you can't hide behind technical superiority anymore; liberating because it means the future belongs to those with the clearest vision and the best taste, not just those with the biggest compute budgets. Like great films, great AI applications will come from teams that understand both the technical and creative dimensions of their craft.
      
       
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
