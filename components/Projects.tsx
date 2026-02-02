import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from './ui/Section';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Reveal } from './ui/Reveal';

const Projects: React.FC = () => {
  return (
    <Section id="work" className="bg-light dark:bg-dark relative z-10 transition-colors duration-700">
       <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 md:mb-24 pb-8 border-b border-gray-300 dark:border-white/10 gap-4">
          <Reveal>
             <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter text-primary-light dark:text-white">
               02 / <br className="hidden md:block" /> EXPERIMENTS
             </h2>
          </Reveal>
          <Reveal delay={0.2} width="fit-content">
             <span className="text-xs md:text-sm font-mono text-secondary-light dark:text-gray-500">ACADEMIC & PERSONAL</span>
          </Reveal>
       </div>

       <div className="flex flex-col">
         {PROJECTS.map((project: Project, index: number) => (
           <Reveal key={project.id} delay={index * 0.1}>
             <a 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block py-10 md:py-12 border-b border-gray-300 dark:border-white/10 hover:border-accent dark:hover:border-accent transition-colors duration-500"
             >
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
                 
                 {/* Main Title Content */}
                 <div className="lg:col-span-8">
                   <h3 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-light dark:text-white mb-2 md:mb-0 leading-[1] md:leading-[0.9] group-hover:text-accent transition-colors duration-300">
                     {project.title}
                   </h3>
                 </div>

                 {/* Description */}
                 <div className="lg:col-span-4 flex flex-col justify-between h-full pt-0 lg:pt-2">
                    <p className="text-secondary-light dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md">
                      {project.description}
                    </p>
                    <div className="flex justify-start lg:justify-end">
                      <div className="flex items-center gap-2 group/btn">
                        <span className="text-xs uppercase tracking-widest md:hidden text-primary-light dark:text-white">View Project</span>
                        <ArrowUpRight className="text-primary-light dark:text-white group-hover:text-accent transition-all duration-300 transform group-hover:rotate-45" size={20} />
                      </div>
                    </div>
                 </div>

               </div>
             </a>
           </Reveal>
         ))}
       </div>
    </Section>
  );
};

export default Projects;