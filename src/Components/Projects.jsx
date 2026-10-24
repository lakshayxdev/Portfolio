import ProjectCard from "./ProjectCard";
import Blink from "../assets/Blink.png";
import CodePilot from "../assets/CodePilot.png";
import Synapse from "../assets/Synapse.png";
import QuickCart from "../assets/QuickCart.png";
import Reveal from "./Reveal";
const projects = [
  {
    title: "CodePilot",
    description:
    [ "Built a full-stack AI-powered code assistant that automates debugging, optimization, code review, and code analysis through a unified interface.",
      "Developed RESTful API endpoints to integrate LLM services with the frontend, handling code submissions and action-specific analysis requests.",
      "Implemented JWT-based authentication and protected routes to secure user-specific resources and prevent unauthorized access.",
      "Integrated 7 AI-assisted workflows including code explanation, debugging, optimization, review, complexity analysis, quality assessment, and automated test-case generation",

    ],
    image: CodePilot,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "LLM APIs"
    ],
    status: "Completed",
    liveUrl: "https://codepilot-18.vercel.app/",
    githubUrl: "https://github.com/lakshayxdev/CodePilot",
  },

   {
    title: "Blink",
    description:
    [
      "Designed URL shortening service with Redis cache-aside caching, indexed MongoDB lookups, and distributed API rate limiting to optimize redirect performance and protect critical endpoints.", 
      "Benchmarked indexed versus non-indexed lookups on a 100K+ record dataset using k6, achieving approximately 46% higher throughput.",
      "Optimized redirect delivery through Redis caching, reducing average response latency by approximately 49% and doubling application throughput under load testing.",
    ],
    image: Blink,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
    ],
    status: "Completed",
    liveUrl: "https://blink-olive.vercel.app",
    githubUrl: "https://github.com/lakshayxdev/Blink",
  },

   {
    title: "Synapse",
    description:
    [
      "Built a full-stack notes management platform that streamlines knowledge capture and retrieval through secure authentication, persistent note storage, and AI-powered summarization.",
      "Implemented RESTful APIs for note creation, retrieval, updating, and deletion, integrated MongoDB for persistent data management, and secured protected operations using JWT-based authentication.",
      "Developed a responsive React interface with Tailwind CSS to deliver an accessible, streamlined workflow for organizing and revisiting information.",
    ],
    image: Synapse,
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    status: "Completed",
    liveUrl: "https://synapse-one-lyart.vercel.app",
    githubUrl: "https://github.com/lakshayxdev/Synapse",
  },

   {
    title: "QuickCart",
    description:
    [
      "Build and deployed a Grocery e-commerce frontend using React, Tailwind, React Router, and Zustand, featuring category-based navigation, persistent cart state, and a multi-step checkout experience.", 
      "Improved frontend performance through route-based code splitting, lazy-loaded images, and optimized component rendering, achieving a Lighthouse Performance score of 93%.",
      "Enhanced user experience and rendering stability by reducing layout shifts and optimizing interactions,resulting in 0 CLS (Cumulative Layout Shift) and approximately 80 ms INP (Interaction to Next Paint).",
      "Implemented responsive and resilient UI patterns, including loading states, empty states, disabled validation, and error handling to ensure smooth behavior across mobile and desktop devices.",
    ],
    image: QuickCart,
    technologies: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Zustand",
    ],
    status: "Completed",
    liveUrl: "https://quick-cart-plum-rho.vercel.app",
    githubUrl: "https://github.com/lakshayxdev/QuickCart",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
      <div className="mb-10">
        <p className="text-sm text-orange-400">Selected work</p>
        <h2 className="mt-2 text-3xl font-semibold  sm:text-4xl">
          Projects I've built.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project,index) => (
          <Reveal key={project.title} delay={index*0.12}>
          <ProjectCard key={project.title} {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}