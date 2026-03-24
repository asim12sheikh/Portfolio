import React from "react";
import { SkillsInfo } from "../logos";


export const SkillsSection = () => {
    return (
        <section id="skills" className="py-12 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
        </h2>
      </div>
      

      <div className="flex flex-wrap gap-1 lg:gap-5 py-6">
        {SkillsInfo.map((category) => (
        <div key={category.title}
        className="bg-gray-900 backdrop:backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white-shadow[0_0_20px_1px_rgba(130,69)]"
        >
        <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-4 text-center">
          {category.title}
        </h3>
       
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
       {category.skills.map((skill) => (
        <div
        key={skill.name}
        className="flex items-center justify-center space-x-2 border-gray-700 bg-transparent rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
        > 
        <img src={skill.logo}
        alt={`${skill.name} logo`}
        className="w-6 h-6 sm:w-8 sm:h-8"
        >
    
        </img> 
        <span className="text-xs sm:text-sm ">
          {skill.name}
        </span>
        </div>
       ))}
        </div>
        
        </div>
        ))};
      </div>

        </section>
    )
};

