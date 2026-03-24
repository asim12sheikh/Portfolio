import {ArrowDown} from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero"
         className="relative min-h-dvh flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in ">Sheikh</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">Wasim</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            A fresher Full Stack Developer learning to build complete web applications using MERN stack.
            I'm passionate about clean code, creative design and continuous growth and still learning from every challenge. 
          </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="comet-button">
                View My Work
              </a>
            </div>

            </div>
        </div>

          <div className="absolute bottom-4 right-1/2 transform translate-x-1/2 flex flex-col items-center animate-bounce">
         <span className="text--sm text-muted-foreground mb-2"> Scroll </span>
         <ArrowDown className="h-5 w-5 text-primary" />
          </div>

         </section>
    )
}