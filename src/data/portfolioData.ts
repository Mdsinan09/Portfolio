export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  desktopImage: string;
  mobileImage: string;
  altText: string;
  repoUrl?: string;
  liveUrl?: string;
  spec: {
    title: string;
    revision: string;
    description: string;
    metrics: { label: string; value: string }[];
  };
}

export interface Skill {
  name: string;
  category: string;
  color: string;
  iconType: string;
}

export const PERSONAL_INFO = {
  name: "MOHAMMED SINAN",
  shortName: "SINAN.",
  role: "Software Developer · Full-Stack Developer",
  roleMobile: "Software Developer · Full-Stack Systems Engineer",
  tagline: "Building software with purpose.",
  bio: "I'm a Computer Science Engineering student focused on software development, full-stack systems, and engineering practical technology that solves real problems.",
  bioMobile: "I'm a Computer Science Engineering student focused on resilient backends, distributed systems, and engineering practical developer tooling that solves measurable bottlenecks.",
  email: "mohammedsinan9705@gmail.com",
  status: "Available for roles",
  statusMobile: "Available for SDE Roles & High-Impact Projects",
  resumePath: "/resume.pdf",
  socials: {
    github: "https://github.com/Mdsinan09",
    linkedin: "https://www.linkedin.com/in/mdsinan09/",
    instagram: "https://www.instagram.com/mdsinan09/",
    x: "https://x.com/mdsinan09",
  },
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    period: "2022 — 2026",
    focus: "Full-stack engineering, distributed systems, developer tooling, and applied AI.",
  },
  quote: {
    text: "If you don't take risks, you can't create a future.",
    author: "Monkey D. Luffy, One Piece",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "cloud-platform",
    number: "01",
    category: "Cloud & DevOps",
    title: "Cloud-Native Multi-Region Deployment Platform",
    shortDescription:
      "Multi-region orchestration engine with sub-50ms latency telemetry, automated failover routing, and live Kubernetes cluster topology visualizer.",
    fullDescription:
      "High-availability multi-cloud orchestrator balancing cluster telemetry, automated failovers, and latency-optimized routing across global nodes. Built for minimal packet jitter and continuous cross-region sync.",
    technologies: ["Go", "Kubernetes", "Terraform", "Prometheus", "AWS", "Docker", "gRPC"],
    desktopImage: "/images/project1_cloud.jpg",
    mobileImage: "/images/project1_cloud.jpg",
    altText: "Cloud-Native Multi-Region Deployment Platform interface showing global node topology and telemetry cards",
    repoUrl: "https://github.com/Mdsinan09/Cloud-Native-Multi-Region-Deployment-Platform",
    spec: {
      title: "Architecture Blueprint",
      revision: "REV 2.1.3",
      description:
        "Integrated distributed eBPF probes with automated Prometheus scrapers, dynamically redirecting traffic to healthy pods via Envoy sidecars during regional latency anomalies.",
      metrics: [
        { label: "Telemetry", value: "<45ms P99 Latency" },
        { label: "Throughput", value: "1.4M req / min" },
      ],
    },
  },
  {
    id: "api-testing",
    number: "02",
    category: "Developer Tooling & AI",
    title: "AI-Powered API Testing & Mocking Platform",
    shortDescription:
      "Automated schema inference, dynamic synthetic payload generation, and contract validation pipeline reducing integration regression cycles by 64%.",
    fullDescription:
      "Automated synthetic test generator and contract validation engine synthesizing realistic payloads from OpenAPI specifications, pinpointing edge-case regressions prior to staging deployment.",
    technologies: ["TypeScript", "Node.js", "Next.js", "OpenAI API", "PostgreSQL", "Redis"],
    desktopImage: "/images/project2_api.jpg",
    mobileImage: "/images/project2_api.jpg",
    altText: "AI-Powered API Testing Platform console with schema inspector and test suites",
    repoUrl: "https://github.com/Mdsinan09/api-mock-platform",
    spec: {
      title: "Engine Protocol",
      revision: "REV 1.8.5",
      description:
        "Performs AST decomposition over OpenAPI v3 specifications to compile contextual test harnesses and simulate high-cardinality corner cases via zero-cold-start Redis caching.",
      metrics: [
        { label: "Efficiency", value: "-64% Regression Time" },
        { label: "Mock Synthesis", value: "<22ms per payload" },
      ],
    },
  },
  {
    id: "assistive-tutor",
    number: "03",
    category: "Accessibility & Speech AI",
    title: "AI Assistive Tutor for Visually Impaired Students",
    shortDescription:
      "High-contrast voice-first multimodal learning companion with real-time screen parsing, tactile haptic cues, and low-latency synthetic audio narration.",
    fullDescription:
      "Multi-modal audio-first learning companion with acoustic spectrum analysis, real-time semantic transcription, and tactile accessibility prompts designed to break barriers in STEM comprehension.",
    technologies: ["Python", "FastSpeech2", "PyTorch", "Web Speech API", "React", "Tailwind CSS"],
    desktopImage: "/images/project3_tutor.jpg",
    mobileImage: "/images/project3_tutor.jpg",
    altText: "AI Assistive Tutor for Visually Impaired Students accessibility interface with speech visualizer",
    repoUrl: "https://github.com/Mdsinan09/AI-Assistive-Tutor",
    spec: {
      title: "Acoustic Pipeline",
      revision: "REV 4.0.1",
      description:
        "Integrates customized non-autoregressive speech synthesis pipelines with browser accessibility trees, achieving sub-120ms conversational roundtrips on edge devices.",
      metrics: [
        { label: "Audio Latency", value: "<120ms Edge Response" },
        { label: "Compliance", value: "WCAG 2.1 AAA" },
      ],
    },
  },
];

export const SKILLS: Skill[] = [
  { name: "Python", category: "Core / AI", color: "#3776AB", iconType: "python" },
  { name: "TypeScript", category: "Type Systems", color: "#3178C6", iconType: "typescript" },
  { name: "JavaScript", category: "Modern ES6+", color: "#F7DF1E", iconType: "javascript" },
  { name: "C / C++", category: "DSA & Systems", color: "#00599C", iconType: "cpp" },
  { name: "Java", category: "OOP / JVM", color: "#ED8B00", iconType: "java" },
  { name: "Go", category: "Concurrency", color: "#00ADD8", iconType: "go" },
  { name: "React", category: "Component UI", color: "#61DAFB", iconType: "react" },
  { name: "Next.js", category: "SSR / Edge", color: "#000000", iconType: "nextjs" },
  { name: "Tailwind CSS", category: "Design Systems", color: "#06B6D4", iconType: "tailwind" },
  { name: "Node.js", category: "Runtime Engine", color: "#5FA04E", iconType: "nodejs" },
  { name: "FastAPI", category: "High Perf APIs", color: "#009688", iconType: "fastapi" },
  { name: "Django", category: "Backend Framework", color: "#092E20", iconType: "django" },
  { name: "PyTorch", category: "Deep Learning", color: "#EE4C2C", iconType: "pytorch" },
  { name: "PostgreSQL", category: "Relational SQL", color: "#4169E1", iconType: "postgresql" },
  { name: "MongoDB", category: "Document Store", color: "#47A248", iconType: "mongodb" },
  { name: "Redis", category: "Cache & Queues", color: "#DC382D", iconType: "redis" },
  { name: "Docker", category: "Containers", color: "#2496ED", iconType: "docker" },
  { name: "Kubernetes", category: "Orchestration", color: "#326CE5", iconType: "kubernetes" },
  { name: "Git & GitHub", category: "CI/CD & VCS", color: "#F05032", iconType: "git" },
];
