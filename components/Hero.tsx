import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import Section from './ui/Section';
import { Reveal } from './ui/Reveal';

const Hero: React.FC = () => {
  return (
    <Section className="min-h-screen flex flex-col justify-center pt-32 pb-12 relative overflow-hidden">
      <div className="flex flex-col z-10 w-full">
        
        {/* Intro Label */}
        <Reveal delay={0.2} width="fit-content">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-8 md:w-12 h-[1px] bg-accent"></div>
            <span className="text-accent uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold">TY Diploma Student</span>
          </div>
        </Reveal>

        {/* Main Title */}
        <div className="font-display font-bold leading-[0.85] tracking-tighter text-primary-light dark:text-primary-dark mix-blend-hard-light dark:mix-blend-overlay opacity-90">
          <div className="overflow-hidden">
             <Reveal delay={0.3} duration={1.2}>
                <span className="block text-[14vw] md:text-[9rem] lg:text-[11rem]">DEVANSH</span>
             </Reveal>
          </div>
          <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
            <Reveal delay={0.5} duration={1.2}>
              <span className="block text-[14vw] md:text-[9rem] lg:text-[11rem] text-primary-light dark:text-white">VADGAMA</span>
            </Reveal>
          </div>
        </div>

        {/* Subtitle / Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 md:mt-24 border-t border-gray-300 dark:border-white/10 pt-8">
          <div className="max-w-md">
            <Reveal delay={0.8}>
              <p className="text-secondary-light dark:text-gray-400 text-base md:text-lg leading-relaxed">
                Computer Engineering. Developing a practice in systems thinking and minimal interfaces.
              </p>
            </Reveal>
          </div>

          <Reveal delay={1.0} width="fit-content">
            <a 
              href="#work"
              className="flex items-center gap-3 text-primary-light dark:text-white group cursor-pointer mt-10 md:mt-0"
            >
              <div className="w-12 h-12 md:w-10 md:h-10 border border-gray-300 dark:border-white/20 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                 <ArrowDownRight size={20} className="group-hover:-rotate-45 group-hover:text-white transition-transform duration-300" />
              </div>
              <span className="text-xs uppercase tracking-widest">Index</span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Background Abstract Element - adjusted for both modes */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] bg-accent/10 dark:bg-accent/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -z-10 transition-colors duration-700"></div>
    </Section>
  );
};

export default Hero;