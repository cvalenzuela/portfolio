

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
      <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>
         <b className="name-inpost">Cristóbal Valenzuela</b>
         <br/><br/><br/>
         <b>You Have to Care</b>
         <br/>
         <br/>

         <i>September 2025</i>
         <br/><br/>

Care is invisible infrastructure. It's why some projects feel alive and others feel hollow, even when you can't articulate the difference. Care is invisible. You can't measure it on a spreadsheet. You can't hire it. You can't fake it. But it's the difference between everything that matters and everything that doesn't.
<br/><br/>
The extent to which you care predicts your ability to do hard things better than intelligence, resources, or timing. Not because caring makes things easier. It doesn't. But caring is how you persist.
<br/><br/>
The thing is, you can't really fake care. You can't decide to care about something through force of will. You discover what you care about by paying attention to what you can't stop thinking about. What you return to when you have freedom to choose. What makes you angry when it's done wrong. The kind of irrational care I find most inspiring is borderline obsession. When you can't stop thinking about something.
<br/><br/>
When you find what you care about, really care about, not what you think you should care about, protect it. The obsession is the advantage. Find what you care about. The rest is implementation details. If you don't care, genuinely, specifically, irrationally care, then it won't matter. Someone who does care will come along and make your thing irrelevant. Because they'll see what you can't: all the ways it could be better if someone just cared enough to fix them.
<br/><br/>
Find the thing you care about. Then care about it unreasonably.
<br/><br/>
You have to care.
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
