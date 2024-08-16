

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
    <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>

         <b>The medium is not the goal</b>
         <br/>
         <br/>

         <i>March 2024</i>
         <br/><br/>    

The medium is not the goal. Art is not finished because AI can generate images. We haven't solved cinema because we invented a system that creates videos.
<br/><br/>
Not all videos are cinema.
Not all images are art.
Not all sentences are poems.
Not all sounds are music.
Not all code is software.
<br/><br/>
Words like "video," "images," "code," "sentences," and "sounds" represent categories of media or forms of expression based on their medium or method of creation. They are the format. The vehicle through which ideas, information, or artistic visions are conveyed. They are neutral in terms of the intent or artistic value attributed to them.
<br/><br/>
On the other hand, words like "software," "art," "cinema," "poems," and "music" denote a level of intention, creativity, or artistic value applied to the basic form. They suggest a purposeful act of creation that transcends the mere utility of the medium. The goal may not be the medium itself, but the medium is often an essential vehicle for achieving the goal, for realizing the artistic vision in a particular way.
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
