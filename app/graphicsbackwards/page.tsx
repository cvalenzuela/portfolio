

export default function Post() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-10 sm:p-16">
    <a href="/" className="back">←</a>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">

         <p className={`m-3 text-sm opacity-90 xs:pb-6 sm:pb-10 max-w-1 post`}>

         <b>We're Solving Graphics Backwards.</b>
         <br/>
         <br/>
         <i>November 2024</i>
         <br/><br/>    
         I often speak about control in AI. But I have realized sometimes people think I mean "better prompts." So here are my thoughts on what I mean by control: We're solving graphics backwards.
         <br/><br/>    
The history of computer graphics follows a clear progression: first came control, then quality. It took decades to establish the right abstractions - curves, triangles, polygons, meshes - that would allow us to draw exactly what we wanted on a screen. These fundamental building blocks haven't changed much because they proved to be the right ones. From Ed Catmull's hand to modern game engines, the core principles of how we control pixels have remained remarkably stable. The fundamentals emerged not just for control, but as efficient ways to describe and render complex scenes.
<br/><br/>    
Render quality was the last frontier. A cube modeled in 1987 using the first version of Renderman follows the same geometric principles as one modeled in Blender today. What's dramatically different is the rendering - the lighting, materials, shadows, and reflections that make it feel real. The industry spent decades closing the uncanny valley, building increasingly sophisticated rendering systems to approach photorealism. Of course, many graphics innovations improved both control and quality simultaneously, and the history of graphics progress is more complex than just "control then quality."
<br/><br/>    
But this order wasn't arbitrary. The graphics pipeline itself enforces it: geometry defines what we want to draw, shaders determine how it looks. Even real-time engines follow this pattern - first establishing level-of-detail controls, then improving rendering quality within those constraints.
<br/><br/>    
AI has completely inverted this progression.
<br/><br/>    
Today's generative models achieve photorealistic rendering quality that rivals or surpasses traditional pipelines, effectively learning the entire graphics stack - from geometry to global illumination - through massive-scale training. They've collapsed the traditional separation between modeling and rendering, creating an end-to-end system that can produce stunning imagery from high-level descriptions.
<br/><br/>    
What's missing is control.
<br/><br/>    
While we can generate photorealistic scenes in seconds, we lack the precise control that decades of graphics research provided. We can't easily adjust geometry, fine-tune materials, or manipulate lighting with the granularity that artists expect. The deterministic nature of traditional graphics - where every parameter has a predictable effect - has been replaced by probabilistic models.
<br/><br/>    
This is the inverse graphics problem: we've solved rendering before solving control. Our models can create stunning imagery but lack the fundamental abstractions that made computer graphics so powerful - the ability to make precise, intentional changes at any level of detail.
<br/><br/>    
This isn't a permanent limitation. Just as computer graphics eventually solved the rendering problem, AI will solve the control problem. The question isn't if, but how. We are finding the right abstractions for controlling generative models - the equivalent of the curves, triangles, and polygons that revolutionized computer graphics before. I think the solutions might look different. New primitives for control that are native to neural networks might be the right answer rather than trying to force traditional graphics concepts into this new paradigm. Although I also think there are hybrid approaches combining traditional graphics with AI that are worth exploring. 
<br/><br/>    
The goal remains to provide the same level of predictability and precision that made computer graphics a foundational tool for creative expression. That's the ultimate goal, but better: real-time, cheap, and with precise control that is as intuitive and general-purpose as possible. 
<br/><br/>    
Control comes last this time. But it's coming.
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
