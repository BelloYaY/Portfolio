import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`px-6 sm:px-8 md:px-12 lg:px-24 py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
};

export default Section;