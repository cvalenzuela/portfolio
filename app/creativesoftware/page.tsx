

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
   
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>

         <b>Creative software 2.0</b>
         <br/>
         <br/>

        I’m calling it. Creative software is dead. It’s the end of an era.
        <br/><br/>
        Creative software 1.0 was about separating specific tasks into domains. Vector graphics, NLE, motion graphics, image editing, 3D, audio editing, compositing, etc. are highly specialized fields.
        <br/><br/>
        Fields that when combined correctly, can bring a great idea to life. In 1.0, you were pushing pixels, drawing squares on a screen, moving tracks in a timeline, and recreating how light bounces on surfaces to predict a beam's reflection.
        <br/><br/>
        It was brute force creativity. There is a name for each of those disciplines, and you are limited by the knowledge and experience of mastering a tool.
        <br/><br/>
        In Creative Software 2.0, machines push the pixels. Machines draw. We direct. We create with machines that can create anything. Constraints come from a lack of imagination, not from a lack of specialized knowledge. The most successful creators will be the most imaginative.
        <br/><br/>
        2.0 is about executing great ideas with models that understand the world. Models are responsible for simulating the world, generating what we ask for. We are curators. We are all directors.
        <br/><br/>
        A generation of software is dead. It's the end of an era but the beginning of a much more exciting one.
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
          © 2023 Cristobal Valenzuela.
        </p>
      </div>
      
    </main>
  )
}
