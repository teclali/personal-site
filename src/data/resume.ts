export type ResumeLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  links?: ResumeLink[];
};

export type Job = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  projects?: Project[];
};

export type ResumeData = {
  profile: {
    name: string;
    title: string;
    summary: string;
    links: ResumeLink[];
  };
  jobs: Job[];
  projects: Project[];
};

// Keep resume content here so the page and its presentation components stay data-driven.
// `satisfies` validates every field while preserving useful literal types for consumers.
export const resumeData = {
  profile: {
    name: "Casey Strong",
    title: "Software Engineer",
    summary:
      "I build thoughtful software for organizations with missions that matter, seeking to understand the domain deeply and turn that understanding into systems that reflect reality.",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/casey-strong-2ba95b193/",
        external: true,
      },
    ],
  },
  jobs: [
    {
      company: "Mission-driven organizations",
      role: "Software Engineer",
      location: "Remote",
      startDate: "Present",
      endDate: "Present",
      summary:
        "Writing great software for teams whose work helps make the world better for everyone.",
      highlights: [
        "Partner with domain experts to understand the people, processes, and constraints behind a problem.",
        "Design and build maintainable systems that give teams a dependable foundation to build on.",
      ],
    },
  ],
  projects: [
    {
      name: "Personal site",
      description:
        "A small, content-focused site for sharing writing, hobbies, and professional experience.",
      technologies: ["Astro", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Home server",
      description:
        "A hands-on homelab for learning, self-hosting, and exploring reliable systems in practice.",
      technologies: ["NixOS", "Linux", "Self-hosting"],
    },
  ],
} satisfies ResumeData;
