import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"


export const ContactSection = () => {
    return (
        <section id="contact" className="py-10 md:py-16 lg:py-20 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get In <span className="text-primary">Touch</span>
       </h2>

       <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me.
       </p>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:wa3099286@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                           wa3099286@gmail.com 
                        </a>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Phone</h4>
                        <a href="tel:7077342429" className="text-muted-foreground hover:text-primary transition-colors">
                          7077342429
                        </a>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Location</h4>
                        <a className="text-muted-foreground hover:text-primary transition-colors">
                          Odisha,India
                        </a>
                    </div>
                </div>
            </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="space-x-4 flex justify-center">
                <a href="">
             <Linkedin />
                </a>
                <a href="">
             <Twitter />
                </a>
                <a href="">
             <Instagram />
                </a>
                <a href="">
             <Facebook />
                </a>
            </div>
          </div>
         </div>

         <div className="bg-card p-8 rounded-lg shadow-xs">
         <h3 className="text-center text-2xl font-semibold mb-6">Send a Message</h3>

         <form className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input type="text"
                 id="name"
                 name="name"
                 required
                 className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                 placeholder="Enter your name..."
                /> 
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input type="email"
                 id="email"
                 name="email"
                 required
                 className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                 placeholder="Enter your email..."
                /> 
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Email</label>
                <input type="message"
                 id="message"
                 name="message"
                 required
                 className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none "
                 placeholder="Tell me what wud u like to Talk about..."
                /> 
            </div>

           <button type="submit" className={cn("comet-button w-full flex items-center justify-center gap-2")}>
          Send Message
            <Send size={16} />
           </button>

         </form>

         </div>
         </div>
       </div>
        </section>
    )
}