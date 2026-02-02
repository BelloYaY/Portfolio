import React from "react";
import Section from "./ui/Section";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      className="bg-light dark:bg-dark pb-12 pt-0 transition-colors duration-700"
    >
      <div className="border-t border-gray-300 dark:border-white/10 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16">
          <div className="flex flex-col justify-between h-full gap-12 md:gap-0">
            <div>
              <Reveal>
                <h2 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-primary-light dark:text-white mb-6 md:mb-8">
                  LET'S
                  <br />
                  TALK
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <a
                  href="mailto:devanshvadgama3@gmail.com"
                  className="text-xl sm:text-2xl md:text-3xl text-secondary-light dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors border-b border-gray-300 dark:border-gray-700 pb-2 hover:border-accent inline-block break-all"
                >
                  devanshvadgama3@gmail.com
                </a>
              </Reveal>
            </div>

            <div className="mt-0 md:mt-16">
              <Reveal delay={0.4}>
                <p className="text-secondary-light dark:text-gray-500 text-sm max-w-xs">
                  Open for collaboration and technical inquiry.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:gap-8 md:items-end justify-between">
            <div className="flex flex-col gap-6 md:gap-4">
              {[
                {
                  label: "LinkedIn",
                  icon: Linkedin,
                  href: "www.linkedin.com/in/devansh-vadgama-79865a2a8",
                },
                {
                  label: "GitHub",
                  icon: Github,
                  href: "https://github.com/Devansh-Vadgama",
                },
                {
                  label: "Instagram",
                  icon: ArrowUpRight,
                  href: "https://www.instagram.com/ddevansh_03?igsh=MTl1YXVpNGFrNHc5Mw==",
                },
              ].map((social, idx) => (
                <Reveal
                  key={social.label}
                  delay={0.4 + idx * 0.1}
                  width="fit-content"
                >
                  <a
                    href={social.href}
                    className="flex items-center gap-4 text-primary-light dark:text-white hover:text-accent dark:hover:text-accent transition-colors group"
                  >
                    <span className="text-lg md:text-xl font-display uppercase tracking-wider">
                      {social.label}
                    </span>
                    <social.icon
                      size={18}
                      className="text-secondary-light dark:text-gray-500 group-hover:text-accent transition-colors"
                    />
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.8}>
              <div className="text-secondary-light dark:text-gray-600 text-[10px] md:text-xs uppercase tracking-widest md:text-right">
                &copy; 2024 Devansh Vadgama.
                <br />
                Mumbai, India.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
