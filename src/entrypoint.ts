import type { Alpine } from "alpinejs";
import intersect from "@alpinejs/intersect";

type ResumePageState = {
  selectedTechnologies: string[];
  activeJob: string;
  visibleJobs: string[];
  matchesProject(technologies: string | undefined): boolean;
  hasMatchingProject(jobId: string): boolean;
  setJobVisibility(jobId: string, isVisible: boolean): void;
  setActiveJob(jobId: string): void;
  handleJobNavigation(jobId: string): void;
  scrollToJob(jobId: string): void;
  clearFilter(): void;
  filterLabel(): string;
};

const resumePage = (): ResumePageState => ({
  selectedTechnologies: [],
  activeJob: "byu-library-full-time",
  visibleJobs: [],

  matchesProject(technologies) {
    const projectTechnologies = technologies?.split("|") ?? [];
    return this.selectedTechnologies.length === 0
      || this.selectedTechnologies.some((technology) => projectTechnologies.includes(technology));
  },

  hasMatchingProject(jobId) {
    const job = document.getElementById(jobId);
    const projects = job?.querySelectorAll<HTMLElement>("[data-project]") ?? [];
    return Array.from(projects).some((project) => this.matchesProject(project.dataset.technologies));
  },

  setJobVisibility(jobId, isVisible) {
    this.visibleJobs = isVisible
      ? [...new Set([...this.visibleJobs, jobId])]
      : this.visibleJobs.filter((visibleJobId) => visibleJobId !== jobId);

    const visibleJobIds = new Set(this.visibleJobs);
    const jobsInDocumentOrder = Array.from(document.querySelectorAll<HTMLElement>("[data-job-section]"))
      .map((job) => job.dataset.jobSection)
      .filter((id): id is string => Boolean(id));
    const bottomMostVisibleJob = jobsInDocumentOrder.findLast((id) => visibleJobIds.has(id));

    if (bottomMostVisibleJob) {
      this.activeJob = bottomMostVisibleJob;
    }
  },

  setActiveJob(jobId) {
    this.activeJob = jobId;
  },

  handleJobNavigation(jobId) {
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    this.setActiveJob(jobId);
    this.scrollToJob(jobId);
  },

  scrollToJob(jobId) {
    document.getElementById(jobId)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  },

  clearFilter() {
    this.selectedTechnologies = [];
  },

  filterLabel() {
    return this.selectedTechnologies.length > 0
      ? `${this.selectedTechnologies.length} selected`
      : "Filter by technology";
  },
});

export default (Alpine: Alpine) => {
  Alpine.plugin(intersect);
  Alpine.data("resumePage", resumePage);

  // Astro normally starts Alpine on DOMContentLoaded. Keep a guarded fallback
  // for pages where the module is evaluated after that event has fired.
  let started = false;
  const start = Alpine.start.bind(Alpine);
  Alpine.start = () => {
    if (started) return;
    started = true;
    start();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => Alpine.start(), { once: true });
  } else {
    Alpine.start();
  }
};
