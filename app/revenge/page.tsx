

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
    <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>

         <b>The artist's revenge</b>
         <br/>
         <br/>

         <i>May 2024</i>
         <br/><br/>         
I've been having a version of this same conversation with different people for the last couple of weeks: the tables have turned for artists. 
<br/><br/>
Being a creative or an artist working in software usually meant being confined to visualizations, marketing or creative work, and some experimental projects—often as freelancers. It was a niche, challenging role, and only a handful of very successful artists had the opportunity to make a living from creative work, exploring how frontier software could create new products, experiences, and art forms. Resources were scarce because what artists produced was seen as nice-to-have, not a must-have.
<br/><br/>
Now, the tables have turned. General model capabilities are so advanced that it is becoming clear that those who can imagine new futures have an advantage on where to take the next generation of frontier models. Artists and creatives who can envision new applications and approaches are a highly scarce group with unique skills. Their ability to combine technical understanding with artistic sensibility is rare. Working with artists has shifted from being good-to-have to a must-have. Companies are desperate to hire artists and creatives and investors are desperate to fund those they never took seriously before. It's the artist's revenge.
<br/><br/>
As an artist, i) know that you are worth far more than you might think. You have more leverage in negotiations and ii) work with people who genuinely care, not those who just appear to care. That will make all the difference in the long term.
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
