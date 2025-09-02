

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
      <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>
         <b className="name-inpost">Cristóbal Valenzuela</b>
         <br/><br/><br/>
         <b>Value Accrues to the Extremes (or How Outliers Drive Evolution)</b>
         <br/>
         <br/>

         <i>September 2025</i>
         <br/><br/>

I think we are all slowly realizing most economic value in AI flows to silicon and research/product labs. The middle disappears.
<br/><br/>
The picks-and-shovels economy in AI trends toward zero. A big mistake was to think AI will play out similarly to how the internet's story developed. But the truth is that the internet needed thousands of companies to build infrastructure. AI needs perhaps a dozen. The internet required distributed infrastructure because value creation was distributed: millions of websites, thousands of services. AI concentrates value because only a very small number of companies globally can afford and know how to do frontier model training.
<br/><br/>
Part of this has to do with the dynamics of how AI is built and the reality of what models effectively do to the economy they sit in. Specifically: a) training models is very hard and expensive so only a handful of companies do it well b) models deprecate fast so the value lies in iterating with new capabilities and building workflows more than being first on a benchmark for a week, c) <a href="/pixel-economy">models eat the product layer as fast as they make major progress </a>, and d) research labs are product labs, because they have every incentive to be so.
<br/><br/>
With those conditions in mind, the most valuable and interesting AI companies build their own tools because value lies in the integration, not the components. When you outsource critical infrastructure, you outsource your ability to understand. You lose the compound learning from failed experiments. You lose the adjacencies. The unexpected discoveries from controlling the full stack.
<br/><br/>
I think this is playing out similarly to how it played out with SpaceX. SpaceX's advantage is not just knowing how systems connect. It's having the institutional memory of 10,000 failed experiments that no competitor can replicate. Every custom component represents hundreds of iterations that taught them something essential. When Blue Origin buys off-the-shelf components, they're buying someone else's assumptions. SpaceX's value lies in knowing why each bolt matters, how each system interlocks, and having the capability to go arbitrarily deep when needed. They make their own bolts not because they must, but because understanding requires building. Knowledge compounds through integration. You shoould only buy or integrate tools when they don't interfere with your organizational learning rate or disrupt your long-term assumptions.
<br/><br/>
The value in AI isn't headcount or compute alone. It's organizational knowledge and custom infrastructure that lets you test the right ideas in minutes, not months, and iterate furiously. IOW, organizational knowledge is the product. The speed of iteration is the moat. The gap between discovery and deployment collapses when your research directly becomes your product. Every research breakthrough can be immediately productizable and every product generates research data. When your way of doing things, your picks-and-shovels, is your product differentiation, why would you let someone else capture part of value?
<br/><br/>
We often get product demos or pitches on internal tools that could seem relevant to Runway. While at a superficial level these are interesting, if they are critical we will tend to build our own. I think most labs think very similary. Not from arrogance, but from experience: when something becomes essential, you must own it completely. The moment you depend on someone else's infrastructure for a core capability, you've capped your potential. I think there are a lot of transitional businesses today. Their margins will compress to zero as the extremes expand their scope.
<br/><br/>
This is mostly a consequence of speed of iteration and velocity of AI progress. A consequence of the value of compound learning rates. Every system you build internally becomes a platform for five other potential innovations. Every system you buy becomes a dependency that limits your solution space. The expectation of building exceeds buying when iteration speed is your primary advantage. Control the entire stack from silicon to serving. You can't optimize what you can't see.
<br/><br/>
The best strategy mirrors the market structure: bet on the extremes. Either you're investing in companies making the chips or companies making the future. Everything else is temporary. The middle doesn't just get squeezed. It disappears entirely. Organizational knowledge is the product. The speed of iteration is the moat.
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
