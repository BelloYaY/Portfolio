import React from 'react';
import Section from './ui/Section';
import { BIO, TRAJECTORY } from '../constants';
import { Reveal } from './ui/Reveal';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-light dark:bg-dark text-primary-light dark:text-white transition-colors duration-700">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        
        {/* Title Column - Static on mobile, Sticky on Desktop */}
        <div className="md:col-span-3">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter text-primary-light dark:text-white/90 md:sticky md:top-32">
              01 / <br /> PROFILE
            </h2>
          </Reveal>
        </div>

        {/* Content Column */}
        <div className="md:col-span-9 flex flex-col gap-20 md:gap-24">
          
          {/* Manifesto / Bio Block */}
          <div>
            <Reveal delay={0.2}>
              <p className="font-display text-2xl sm:text-3xl md:text-5xl font-medium leading-[1.2] md:leading-[1.1] text-primary-light dark:text-white/90 indent-0 md:indent-24">
                {BIO}
              </p>
            </Reveal>
          </div>

          {/* Editorial Trajectory Section */}
          <div className="border-t border-gray-300 dark:border-white/10 pt-12 md:pt-16">
            <Reveal delay={0.3}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-10 md:mb-12">Trajectory</h3>
            </Reveal>
            
            <div className="grid grid-cols-1 gap-12 md:gap-16">
              {TRAJECTORY.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="group grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12 items-start md:items-baseline">
                     <div className="flex flex-col">
                        <h4 className="text-xl md:text-2xl font-display font-medium text-primary-light dark:text-white">{item.title}</h4>
                        <span className="text-sm font-mono text-secondary-light dark:text-gray-500 mt-1 md:mt-2">{item.subtitle}</span>
                     </div>
                     <div className="flex flex-col mt-2 md:mt-0">
                        <p className="text-sm md:text-base text-secondary-light dark:text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                        <span className="text-xs font-mono text-secondary-light dark:text-gray-600 mt-3 md:mt-4 block">{item.period}</span>
                     </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default About;