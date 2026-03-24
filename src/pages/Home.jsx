import {ThemeToggle} from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";;
import {Navbar} from "@/components/Navbar";
import { HeroSection } from "../components/HeroSection";
import {AboutSection} from "../components/AboutSection";
import {SkillsSection} from "@/components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

function Home (){

    return (
    <div className="min-h-dvh">
    
    <ThemeToggle />
    <StarBackground />
     <Navbar />
     <HeroSection />
     <AboutSection /> 
     <SkillsSection />
     <ProjectSection />
     <ContactSection />

     <Footer />
    </div>


    );
};

export default Home;