export type ResumeLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  images?: ProjectImage[];
  codeLink?: ResumeLink;
  projectLink?: ResumeLink;
};

export type Job = {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  projects: Project[];
};

export type ResumeData = {
  jobs: Job[];
};

// Each project corresponds to one accomplishment from the source resume.
export const resumeData = {
  jobs: [
    {
      id: "byu-library-full-time",
      company: "BYU Library",
      role: "Full-time Backend Programmer",
      location: "Provo, UT",
      startDate: "January 2022",
      endDate: "Present",
      projects: [
        {
          id: "library-search-integration",
          name: "Library search integration",
          description:
            "Led evaluation, system design, and integration of a third-party application into the library search backend, including building a metadata loader in Django to continuously upload 4 million library records.",
          technologies: ["Python", "Django"],
        },
        {
          id: "library-search-api",
          name: "Library search API",
          description:
            "Built the main library search API in Django, serving 7000 reqs/day. Implemented JWT authentication and reduced response time for dependent API calls by 50% with asyncio.",
          technologies: ["Python", "Django", "JWT", "asyncio"],
        },
        {
          id: "library-etl-framework",
          name: "Library ETL platform",
          description:
            "Maintained applications in a custom Java ETL framework and debugged data issues across microservice architecture processing 8 million+ records.",
          technologies: ["Java", "ETL", "Microservices"],
        },
        {
          id: "kubernetes-upgrades",
          name: "Kubernetes deployment upgrades",
          description:
            "Improved GitLab CI/CD pipelines for Kubernetes deployments and designed a strategy to streamline upgrades across 100+ applications.",
          technologies: ["GitLab CI/CD", "Kubernetes"],
        },
        {
          id: "engineering-enablement",
          name: "Engineering enablement",
          description:
            "Trained 15 engineers on Git, Django auth, HTML, and GitLab CI pipelines. Mentored smaller groups on domain knowledge and technical skills.",
          technologies: ["Git", "Django", "HTML", "GitLab CI"],
        },
        {
          id: "application-modernization",
          name: "Application modernization",
          description:
            "Maintained and integrated multiple third-party application integrations and updated applications from Java/Spring Boot to Python/Django.",
          technologies: ["Java", "Spring Boot", "Python", "Django"],
        },
        {
          id: "developer-mentorship",
          name: "Developer mentorship",
          description:
            "Led multiple hiring cycles and provided three years of training and mentorship for successive student developers.",
          technologies: ["Hiring", "Mentorship"],
        },
      ],
    },
    {
      id: "byu-library-student",
      company: "BYU Library",
      role: "Student Backend Programmer",
      location: "Provo, UT",
      startDate: "January 2019",
      endDate: "December 2021",
      projects: [
        {
          id: "library-requests-api",
          name: "Library requests API",
          description:
            "Built a Java/Spring Boot REST API integrated with third-party SQL databases, automating manual work for fulfilling a user's requests.",
          technologies: ["Java", "Spring Boot", "SQL"],
        },
        {
          id: "record-matching-algorithm",
          name: "Library record matching",
          description:
            "Used Python, Java/Spring Boot, Solr, MongoDB, and Angular to create an algorithm to match 180,000 library records with 11+ million third-party records to enrich library records. Improved algorithm accuracy with machine learning using Python/scikit-learn.",
          technologies: ["Python", "Java", "Spring Boot", "Solr", "MongoDB", "Angular", "scikit-learn"],
        },
        {
          id: "account-synchronization",
          name: "Account synchronization",
          description:
            "Created Java/Spring Boot and MongoDB application to synchronize university and library accounts, improving access for users and automating 100's of hours of manual work.",
          technologies: ["Java", "Spring Boot", "MongoDB"],
        },
      ],
    },
    {
      id: "personal-aws-game-server",
      company: "Independent",
      role: "Personal AWS Game Server",
      location: "",
      startDate: "January 2019",
      endDate: "August 2025",
      projects: [
        {
          id: "aws-game-server",
          name: "Game server automation",
          description:
            "Managed a personal game server running on EC2 and used an S3 site with AWS Lambda functions to allow friends to turn on the instance and boot up the server automatically.",
          technologies: ["AWS EC2", "AWS S3", "AWS Lambda"],
        },
      ],
    },
  ],
} satisfies ResumeData;
