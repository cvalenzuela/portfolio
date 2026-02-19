

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
      <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>
         <b className="name-inpost">Cristóbal Valenzuela</b>
         <br/><br/><br/>
         <b>The Age of the Discontents</b>
         <br/>
         <br/>

         <i>February 2026</i>
         <br/><br/>

I recently returned to a slightly odd hobby. I’ve been collecting op-eds, news articles, posts, reviews, and opinions about what AI is doing to culture. Here are some of my favorite sentences so far:
<br/><br/>
“It is shocking to witness human vanity pushed to such extremes of madness.”
<br/><br/>
“Wallpaper in its embryonic state is more finished than this.”
<br/><br/>
“It’s like a cat walking on the keyboard or a monkey who might have got hold of a box of paints.”
<br/><br/>
“I feel deep anguish […] [what] these so-called artists do resembles gathering pebbles on the roadside and fondly imagining they are diamonds.”
<br/><br/>
“These are scrapings from a palette spread evenly over a dirty canvas. There’s neither head nor tail, top nor bottom, back nor front.”
<br/><br/>
Before I continue, two clarifications.
<br/><br/>
First, I've had this hobby for years. I’ve been collecting reviews of art in general, mostly the kind written when something new shows up and people panic.
<br/><br/>
Second, the sentences above are not about AI. They’re critics/people/artists responding to impressionist exhibitions in the late nineteenth century.
<br/><br/>
When we imagine anarchy in art we picture paintings of revolutions, barricades, and raised fists. But rebels are rarely the people who depict rebellion. Rebels are the ones making work without permission, without caring for the institution’s structure, its rewards, its categories, its official conventions. Painting waterlilies, badly, by the standards of the time, might be one of the most rebellious and consequential moves in modern art history. Impressionists were depicting raw light and with that, breaking the terms of what counted as art and culture in the first place.
<br/><br/>
The trope of history repeating itself is a bit boring by now. But there's a reason why I keep coming back to the impressionists when people talk about AI. They staged the first truly modern art rebellion, and their rebellion helps frame the tension we're living through now. The fight is not between artists and machines. It's between rebels and the systems that convert art, media and entertainment into something safe. Something with no creative risk
<br/><br/>
[Side note: maybe a topic for another essay, but I think we're seeing a similar trend in software, which explains the meltdown we are seeing in the public market. tl;dr: markets have started to realize that making it hard to switch CRMs is not a defensible strategy. Tradition might not matter. You have to take risks]
<br/><br/>
The media we consume today is in a bad state. Sequels, reboots, remakes, "content universes" with carefully managed lore. How we got here has less to do with human creativity and more to do with structural and financial incentives that have no face. Mr. Market. Most films, TV shows, games, and content go through approvals, notes, test screenings, brand fit, stakeholder reviews. Since it’s expensive to make, the incentive is predictable risk.
<br/><br/>
We blame “the audience” for wanting comfort, but audiences don’t design production pipelines or approve budgets. Institutions do. Platforms do. Committees do.
<br/><br/>
We are rapidly approaching the era where the cost of making anything, literally anything (I can’t emphasize this enough) will be the cost of inference, and inference is becoming cheap. A Pikachu-themed fight in the clouds with dragons. Why not. A melodramatic scene of two impossible characters discussing having a family. Why not.
<br/><br/>
It is becoming cheap to make anything. Cheapness changes incentives. When it costs a lot to make something, you can sometimes justify weirdness because weirdness is bundled with scarcity. When it costs almost nothing to try ten versions, the safest institutions will try a thousand and select the least risky one. The tool that can widen your imagination can also narrow culture.
<br/><br/>
A second common trope is that AI “democratizes creativity,” and in a narrow sense it does. More people can produce work that looks competent on the surface. More people can finish the thing they used to only imagine. The ability to execute no longer belongs exclusively to the people who had time, training, money, and access.
<br/><br/>
But democratization of execution is not democratization of culture.
<br/><br/>
Culture is also distribution, legitimacy, and repetition. It is what gets surfaced, funded, promoted, and copied. A “democratic eye” in production doesn’t matter much if the gate at the end is more centralized than ever.
<br/><br/>
I like to think of that gate as the Overton window of taste. Every era has a window of acceptable style. Not just what’s allowed, but what’s intelligible. When a work sits outside the window, criticism often pretends it’s not a style at all. Call it slop, noise, laziness, a mistake.
<br/><br/>
That’s what happened to the impressionists. The early reactions weren’t just “I don’t like it.” They were: it’s not finished, it’s not real, it’s not painting, it’s wallpaper, it’s insanity.
<br/><br/>
Translate those accusations into today’s AI discourse and you can see what’s actually being defended. Not craft. Not standards. Not quality. Permission. Control over who gets to produce, and which aesthetic counts as legitimate.
<br/><br/>
If the committees get AI, too, then rebellion can’t mean “using AI.” That’s not a position. That’s a tool choice. Rebellion means refusing the average and refusing the incentives that manufacture it.
<br/><br/>
Concretely, what that looks like is i) use AI to increase variance, not converge on the cleanest option. Publish the strange branch, not the polished median; ii) make work that doesn’t summarize itself. Work that is not optimized to be instantly legible, instantly shareable, instantly agreeable; iii) Treat taste as a craft, not a vibe. Select like it matters, because it does; iv) perhaps most important: choose specificity over scale. Local references, personal obsessions, narrow worlds. The opposite of “universal.” It’s why YouTube is so successful. Pick a niche and grow an audience.
<br/><br/>
Go make waterlilies with AI. Make them wrong.

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
