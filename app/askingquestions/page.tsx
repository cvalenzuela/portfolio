

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
    <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>

         <b>Art is about asking questions</b>
         <br/>
         <br/>

Question-answering systems and chatbots have inadvertently created a false narrative that AI can solve any problem with a simple prompt, including complex creative tasks like storytelling and filmmaking. The ability to generate video from language has been misinterpreted as the belief that you can create deep, emotionally sophisticated cinematic universes with profound stories and complex characters with just a prompt.
<br/><br/>
Art is not a discrete problem with clear right or wrong answers. It is a continuous exploration of ideas, emotions, and experiences that cannot be reduced to a mere input-output mechanism. This narrow view of AI fails to capture the true potential and complexity of the field, particularly when it comes to artistic applications. It reduces the creative process to a mechanical task, as if art were a problem to be solved rather than a novelty search. This misconception has led to the false dichotomy between AI-generated things and human-made stories, suggesting that they are equal or interchangeable. They are not equal. AI models applied to art are tools, they are not the goal. 
<br/><br/>
The goal of AI in art is not merely to generate content but to provide artists with new mediums and techniques to explore their ideas. The goal is not to generate video. The goal is to make video generation an expressive medium for people. Reducing art to a mechanistic process not only undermines the value of human creativity but also sets unrealistic expectations for what AI can achieve. Art is not a discrete problem with clear answers. It is a continuous process of questioning, experimenting, and pushing boundaries.
<br/><br/>
Art is about asking questions, not finding answers, and AI should be seen as a means to enhance that questioning process, not replace it.
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
