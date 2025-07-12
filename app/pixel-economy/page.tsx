

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
    <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>

         <b>It's All About The Pixel Economy (Or Why You Might Be Optimizing for the Wrong Future)</b>
         <br/>
         <br/>
         <i>July 2025</i>
         <br/><br/>    

The story of AI for media generation is really the story of two curves racing toward each other.<sup>1</sup>  Research progress follows an exponential curve, each breakthrough builds on the last, compounding capabilities at an accelerating pace. Product adoption might follow more of a step function, long periods of seeming stagnancy punctuated by sudden, dramatic leaps.

<i className="inline-footnote"><sup>1</sup> AI media generation encompasses any form of content creation where artificial intelligence systems produce consumable media experiences. This includes traditional linear formats like films, advertisements, and video content, but extends far beyond into interactive and adaptive media forms.
<br/><br/>
At its core, we're talking about models that can generate audio-visual experiences in both linear fashion, movies that unfold from beginning to end, and non-linear experiences like games, virtual worlds, and responsive environments that adapt to user input. But the definition is expanding rapidly.

</i>
<br/><br/>   
But these curves are converging. And they are converging fast. The gap between what's possible in a research environment and what's shipping in products is shrinking rapidly. Soon, product loops will be indistinguishable from research loops. This convergence changes everything about how we should think about building, investing in, and evaluating how AI changes the media we create and the media we generate (spoiler: it will be the same media)
<br/><br/>   
<img src="/graph2.png" className="inline-image"/>
<br/><br/>   
But most importantly, depending on what you believe to be true about this convergence and how long in the future it will be, you'll make radically different bets. Your optimization function, what you choose to maximize for as a creative organization, media company, game studio, ad agency or for a matter of fact anyone who makes any form of content or media for a living, will be fundamentally different. 
<br/><br/>   
A common pattern over the last decade of progress in AI research is how non-research organizations have dramatically and consistently overestimated the short term (what an image model can do in a week) and at the same time underestimated the long term progress (what seems very far from possible). A pattern we have seen in language with LLMs and now for video, images, and games with media models. We forget how quickly the impossible becomes inevitable. 

<br/><br/>   
<b>The Pixel Economy</b>
<br/><br/>   
Runway makes technology that makes pixels. And so, a big chunk of my time is spent with companies in the business of making and selling pixels. Pixels moving on a big screen or on a tiny screen. Making moving pixels that will entertain you and teach you something. I personally love pixels. Movie studios, advertising agencies, game developers, social media companies, independent creators, educational institutions and pretty much anyone who makes media is in the business of making and selling pixels should be paying attention to how pixels are made now and will be made in the future.
<br/><br/>   
The pixel economy isn't just about creating content, it's about the entire infrastructure of how pixels get made, distributed, consumed, and monetized. Today's pixel economy is built on scarcity. Expensive cameras, specialized software, teams of editors, render farms, distribution networks. Each step requires significant capital and expertise. This scarcity creates value, but it also creates barriers. In this world, creators are those who master the systems.
<br/><br/>             
AI media generation is collapsing these barriers entirely. The value of creating pixels is trending towards zero. When anyone can generate any visuals with no specialized software or equipment, the economics flip. The value shifts from technical execution to creative vision, from production capacity to distribution reach, from making pixels to making pixels that matter. For all those who are part of the pixel economy. Not just Hollywood. In this world, creators are those who can understand human + AI collaboration. 
<br/><br/>     
Eventually, this will lead to the convergence of seconds consumed and seconds generated. Right now, there's vastly more content being consumed than produced. Millions of people might watch a single YouTube video, but only one person (or small team) made it. The consumption-to-creation ratio is heavily skewed toward consumption. As AI models become more sophisticated, content generation will become real-time, meaning people will be able to create content as quickly as they consume it. Instead of spending an hour watching videos someone else made, you might spend that same hour having AI generate personalized content, stories, games or entertainment tailored specifically to you. Eventually, the seconds spent consuming content will roughly equal the seconds spent creating it.
<br/><br/>     
Your loved pixels making tools and systems will not work where we are headed. This new world might require leaving behind almost everything you have used to make and distribute pixels before. Your current software stack, your established workflows, your entire mental model of how media gets made. We are not rendering pixels, we are generating them. Abandoning the assumption that the way you've always created pixels is the way pixels will always be created. (I have spoken about the cultural, economic and social consequences of this change <a href="/the-rorschach">here</a>.)
<br/><br/>     
This is the single biggest trap I've seen those in the pixel economy fall into. Getting stuck in local maxima. Staring at the blue line for too long. Considering that the way you have created and consumed pixels will forever be the default way. It will not. Pay attention to the green line.
<br/><br/>     
Consider a non-generative task as a simple example: pixel segmentation. The first approach was manual: Photoshop's layers, masks, and specialized tools. A digital recreation of darkroom techniques. The second approach was AI plugins. Or AI augmented incremental progress. <a href="https://github.com/runwayml/RunwayML-for-Photoshop">This was Runway in 2019 offerings that augmented existing workflows,</a> making them faster but fundamentally unchanged. The approach in 2025 is one-shot language-driven editing. No UI required. Just describe what you want. No layers, no masks, no complex tool hierarchies.
<br/><br/>
<br/><br/>
<img src="/graph3.png" className="inline-image"/>
<br/><br/>
Photoshop users saw AI plugins as helpful additions, not existential threats. But from the user's perspective, each was a complete reimagining of what was possible. The distance between intention and execution collapsed. The fastest way to output wins. Always. (The same pattern holds for architecture, games, and every other creative domain.)
<br/><br/>
Products with complex interfaces requiring significant time investment to master or extensive UIs with too many buttons, toggles, menus, and options are already a big liability because they can’t adjust to the one shot approach. They are stuck in the local blue line. By definition, the product momentum will be to build more buttons. <a href="https://x.com/c_valenzuelab/status/1900540465545372102">My current bet is that roughly half of major public software companies won't survive the next five years,</a> because of this blue line trap.  <a href="https://x.com/karpathy/status/1930354382106964079">And I’m not alone in this sentiment.</a> Where we are going, you don't have to learn an interface. The interface will adapt to your needs. The pixel economy is moving from "learn our tools" to "just tell us what you want." 
<br/><br/>
There is a caveat to this argument. Of course there is. All of this is valid depending on what you believe to be true and how optimistic you are about current AI progress. Depending on what you believe to be true about the convergence of research and product and how fast you think it is accelerating, you'll make radically different bets. 
<br/><br/>
If you believe media generation will remain a specialized field, you'll optimize for the local maximum. The blue line. Better versions of what already exists. “Incremental AI”. The complex workflows will give you comfort for the time being. If you believe it will become a fundamental interface for human-computer interaction, you'll optimize for speed, naturalness, and emergent capabilities. The global maximum. New ways of making and distributing pixels. A new pixel economy. The green line.
<br/><br/>
I optimize for the green line.

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
