import {Briefcase, Code, User} from "lucide-react";


export const AboutSection = () => {
 return (
    <section id="about" className="py-12 px-4 relative">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
         About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
           <h3 className="text-2xl font-semibold">Passionate Web Developer & Lifelong Learner</h3>

           <p className="text-muted-foreground">
            I'm a passionate and motivated Full Stack Developer eager to start my professional journey in the tech industry.
           </p>

           <p className="text-muted-foreground">
            Although i'm a fresher with no work experience, i've been continuously learning and building projects to strengthen my skills in web development. I enjoy exploring new technologies, solving real-world problems through code,and learning from every challenge i take on.My gaol is to grow as a developer while contributing to meaningful and impactful projects.
           </p>

           <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
         <a href="#contact" className="comet-button">
            Get In Touch
         </a>
         <a target="_blank" rel="noopener noreferrer" href="/Sheikh Wasim Resume.pdf" className="comet-button">
            Preview CV
         </a>
           </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
           <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
           <div className="p-3 rounded-b-full bg-primary/10">
          <Code className="h-6 w-6 text-primary" />
           </div>
           <div className="text-left">
            <h4 className="font-semibold text-lg">Web Development</h4>
            <p className="text-muted-foreground">
              Creating rsponsive websites and web applications with modern frameworks.
            </p>
           </div>
            </div>
           </div>
           <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
           <div className="p-3 rounded-b-full bg-primary/10">
          <User className="h-6 w-6 text-primary" />
           </div>
           <div className="text-left">
            <h4 className="font-semibold text-lg">UI/UX Design</h4>
            <p className="text-muted-foreground">
          Designing intuitive user interfaces and seamless user experience.
            </p>
           </div>
            </div>
           </div>
           <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
           <div className="p-3 rounded-b-full bg-primary/10">
          <Briefcase className="h-6 w-6 text-primary" />
           </div>
           <div className="text-left">
            <h4 className="font-semibold text-lg">Project Management</h4>
            <p className="text-muted-foreground">
              Leading projects from conception to completion from vision to real-world-impacts.  
            </p>
           </div>
            </div>
           </div>
            </div>
        </div>
        </div>
    </section>
 )
}