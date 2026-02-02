import { Project, TrajectoryItem } from './types';

export const NAV_ITEMS = [
  { label: 'Index', href: '#work' },
  { label: 'Profile', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "MARGINALIA",
    description: "Transforms dense policy documents into readable, structured formats. An exercise in information architecture and cognitive clarity—making institutional text legible to humans.",
    link: "https://github.com/devanshvadgama",
  },
  {
    id: 2,
    title: "AFTER",
    description: "A structural map of paths following academic milestones. Models constraints, dependencies, and decisions without false optimism. Understanding systems, not offering advice.",
    link: "https://github.com/devanshvadgama",
  },
  {
    id: 3,
    title: "ENVISION",
    description: "Policy simulation navigating trade-offs between ecology, economy, and sentiment. Focuses on state transitions and consequences over visual spectacle.",
    link: "https://github.com/devanshvadgama",
  },
  {
    id: 4,
    title: "VASUNDARA",
    description: "Production interface for the student environmental committee. Built for content constraints and stakeholder requirements. A study in utility for a live audience.",
    link: "https://github.com/devanshvadgama",
  }
];

export const TRAJECTORY: TrajectoryItem[] = [
  {
    title: "Engineering Intern",
    subtitle: "DBA Consultants",
    period: "Jun 2025 — Sept 2025",
    description: "Applied React development in a production environment. Explored integration with AI models and security protocols."
  },
  {
    title: "Diploma in Computer Engineering",
    subtitle: "Thakur Polytechnic",
    period: "Present",
    description: "Third Year. Focusing on core computing fundamentals, algorithms, and system design."
  }
];

export const BIO = "Third Year Computer Engineering student at Thakur Polytechnic. I treat my education as a design process—deconstructing systems to rebuild them with intent.";